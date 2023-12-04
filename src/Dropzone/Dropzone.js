// Dropzone.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus} from '@fortawesome/free-solid-svg-icons';
import './Dropzone.css';

// Dropzone component for handling image uploads
const Dropzone = ({ onDrop, previewImage }) => {
    const handleDrop = useCallback(
        (acceptedFiles) => {
            onDrop(acceptedFiles);
        },
        [onDrop]
    );
    const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

    return (
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <div className="dropzone-content">
                {previewImage && (
                    <img
                        src={URL.createObjectURL(previewImage)}
                        alt="Preview"
                        className="dropzone-preview"
                    />
                )}
                {!previewImage && (
                    <>
                        <p className="dropzone-placeholder">Add portrait here</p>
                        <FontAwesomeIcon icon={faPlus} className="dropzone-icon" />
                    </>
                )}
            </div>
        </div>
    );
};


export default Dropzone;
