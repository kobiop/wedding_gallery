import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import GalleryModal from './GalleryModal';
import './Gallery.css';
import HeaderGallery from './HeaderGallery';

function Gallery() {
    const [photos, setPhotos] = useState([]);
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
    const currentUserId = localStorage.getItem('userId'); // Get the current user's ID
    const navigate = useNavigate(); // Initialize navigate for routing
    // 

    const fetchPhotos = async () => {
        try {
            const response = await fetch('https://wedding-photos-server-cwcqhjbxdbeud0hh.westeurope-01.azurewebsites.net/Photos');
            if (response.ok) {
                const data = await response.json();
                const transformedData = data.map(photo => ({
                    id: photo.autoIncrementId,
                    url: `data:image/jpeg;base64,${photo.photoData}`, // Transform base64
                    userId: photo.userId, // Include userId for comparison
                }));
                console.log("sucsses")

                setPhotos(transformedData);
            } else {
                console.error('Failed to fetch photos:', response.statusText);
            }
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`https://wedding-photos-server-cwcqhjbxdbeud0hh.westeurope-01.azurewebsites.net/Photos/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                await fetchPhotos(); // Re-fetch photos after successful delete
            } else {
                console.error('Failed to delete photo:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting photo:', error);
        }
    };

    // Navigation Handlers
    const navigateLeft = () => {
        setSelectedPhotoIndex((prevIndex) => (prevIndex === 0 ? photos.length - 1 : prevIndex - 1));
    };

    const navigateRight = () => {
        setSelectedPhotoIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <>
            <div className="back-button-div">
                <i className="fa-solid fa-angle-left" onClick={() => navigate('/')}></i> 
                
            </div>
            <div className="homeGallery">
                <HeaderGallery/>
                
            </div>
            <div className="gallery">
                <div className="gallery-grid">
                    {photos.map((photo, index) => (
                        <div className="photo-card" key={photo.id}>
                            <img
                                src={photo.url}
                                alt="Wedding"
                                onClick={() => setSelectedPhotoIndex(index)}
                            />
                            {photo.userId === currentUserId && (
                                <button onClick={() => handleDelete(photo.id)}>
                                    <i className="fas fa-trash-alt"></i> {/* Font Awesome trash can icon */}
                                </button>
                            )}
                        </div>
                    ))}
                </div>
                {selectedPhotoIndex !== null && (
                    <GalleryModal
                        photo={photos[selectedPhotoIndex]}
                        closeModal={() => setSelectedPhotoIndex(null)}
                        navigateLeft={navigateLeft}
                        navigateRight={navigateRight}
                    />
                )}
            </div>
        </>
    );
}

export default Gallery;
