import React, { useState } from 'react';
import './LinkSubmissionForm.css';

const LinkSubmissionForm = () => {
    const [links, setLinks] = useState([
        { websiteName: '', description: '', url: '', image: null }
    ]);

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedLinks = [...links];
        updatedLinks[index][name] = value;
        setLinks(updatedLinks);
    };

    const addLink = () => {
        setLinks([...links, { websiteName: '', description: '', url: '', image: null }]);
    };

    const removeLink = (index) => {
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
            <button type = "button" onClick={addLink} className = 'add-link-button'>Add Link</button>
            {links.map((link, index) => (
                <div key={index}>
                    <button type="button" onClick={() => removeLink(index)} className = "remove-link-button"> Remove </button>
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
            <button type="submit" className = "generate-portfolio-button"> Generate Portfolio </button>
        </form>
    );
};

export default LinkSubmissionForm;
