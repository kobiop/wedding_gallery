import React from 'react';
import './GalleryModal.css';
import 'font-awesome/css/font-awesome.min.css';

function GalleryModal({ photo, closeModal, navigateLeft, navigateRight }) {
    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button className="modal-close" onClick={closeModal}>X</button>

                {/* Photo Display */}
                <img className="modal-photo" src={photo.url} alt="Enlarged" />

                {/* Navigation Arrows */}
                <div className="modal-nav left" onClick={navigateLeft}>
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div className="modal-nav right" onClick={navigateRight}>
                    <i className="fa fa-arrow-right"></i>
                </div>
            </div>
        </div>
    );
}

export default GalleryModal;
