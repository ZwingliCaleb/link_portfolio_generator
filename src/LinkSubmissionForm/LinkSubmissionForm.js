import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // For generating unique keys for each link
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './LinkSubmissionForm.css';

const LinkSubmissionForm = () => {
    const navigate = useNavigate();
    const [links, setLinks] = useState([
        { websiteName: '', description: '', url: '', images: [] },
    ]);

    const maxLinks = 3;

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedLinks = [...links];
        updatedLinks[index][name] = value;
        setLinks(updatedLinks);
    };

    const HandleImageDrop = (files, index) => {
        const updatedLinks = [...links];
        updatedLinks[index].images = files;
        setLinks(updatedLinks);
    }

    const addLink = () => {
        setLinks([...links, { websiteName: '', description: '', url: '', images: [] }]);
    };

    const removeLink = (index) => {
        if (links.length === 1) {
            // Don't allow removal of last link
            return;
        }
        const updatedLinks = [...links];
        updatedLinks.splice(index, 1);
        setLinks(updatedLinks);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const allFieldsFilled = links.every((link) => link.websiteName && link.url);
        if (allFieldsFilled) {
            const consolidatedLinks = links.filter((link) => link.websiteName && link.url);
            const uniqueIdentifier = uuidv4();
            navigate('/profile', { 
                state: { links: consolidatedLinks, uniqueIdentifier }
            });
        } else {
            alert('Please fill out all fields.');
        }
    };

    return (
        <div className="link-submission-form">
            <form onSubmit={handleSubmit}>
            {links.map((link, index) => (
                <div key={index} className = "form-group">
                    {index > 0 && (
                    <button type="button" onClick={() => removeLink(index)} className = {`remove-link-button ${links.length === 1 ? 'hidden' : ''}`}>
                        <FontAwesomeIcon icon = {faMinus} style = {{marginRight: '5px'}}/>
                        Remove
                    </button>
                    )}
                    <input
                        type="text"
                        name="websiteName"
                        value={link.websiteName}
                        onChange={(e) => handleInputChange(e, index)}
                        placeholder="Website Name"
                    />
                    <input
                        type="text"
                        name="description"
                        value={link.description}
                        onChange={(e) => handleInputChange(e, index)}
                        placeholder="Description"
                    />
                    <input
                        type="text"
                        name="url"
                        value={link.url}
                        onChange={(e) => handleInputChange(e, index)}
                        placeholder="URL"
                    />
                    <div className = "dropzone">
                        <Dropzone onDrop = {(files) => HandleImageDrop(files, index)} />
                    </div>
                </div>
            ))}
                <button type="button" onClick={addLink} className = "add-link-button" disabled = {links.length >= maxLinks}>
                    <FontAwesomeIcon icon = {faPlus} style = {{marginRight: '5px'}}/>
                    Add Link
                </button>
                <button type="submit" className = "generate-portfolio-button">
                    Generate Portfolio
                </button>
            </form>
        </div>
    );
};

/// Dropzone component for handling image uploads

const Dropzone = ({ onDrop}) => {
    const { getRootProps, getInputProps } = useDropzone ({ onDrop });
    return (
        <div { ...getRootProps()} className = "dropzone">
            <input { ...getInputProps()} />
            <div className  = "dropzone-content">
                <p className = "dropzone placeholder"> add potrait here </p>
                <FontAwesomeIcon icon = {faPlus} className = "dropzone-icon" />
            </div>
        </div>
    );
};

export default LinkSubmissionForm;
