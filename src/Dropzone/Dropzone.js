// Dropzone.js
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const Dropzone = ({ onImageDrop }) => {
    const onDrop = useCallback((acceptedFiles) => {
        onImageDrop(acceptedFiles);
    }, [onImageDrop]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className={`dropzone ${isDragActive ? 'drag-active' : ''}`}>
            <input {...getInputProps()} />
            <div className="dropzone-content">
                <p className="dropzone-placeholder">Add portrait here</p>
            </div>
        </div>
    );
};

export default Dropzone;
