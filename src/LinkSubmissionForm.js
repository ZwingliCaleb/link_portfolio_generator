import React, { useState } from 'react';

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
            {links.map((link, index) => (
                <div key={index}>
                    <button type="button" onClick={() => removeLink(index)} style={{ marginRight: '5px'}}>
                        Remove
                    </button>
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
            <button type="button" onClick={addLink}>
                Add Link
            </button>
            <button type="submit">Generate Portfolio</button>
        </form>
    );
};

export default LinkSubmissionForm;
