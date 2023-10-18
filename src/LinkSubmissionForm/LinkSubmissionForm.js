import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './LinkSubmissionForm.css';

const LinkSubmissionForm = () => {
    const [links, setLinks] = useState([
        { websiteName: '', description: '', url: '' }
    ]);

    const maxLinks = 5;

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedLinks = [...links];
        updatedLinks[index][name] = value;
        setLinks(updatedLinks);
    };

    const addLink = () => {
        setLinks([...links, { websiteName: '', description: '', url: '' }]);
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
        // Process links arrays here
        console.log('Form submitted:', links);
    };

    return (
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
    );
};

export default LinkSubmissionForm;
