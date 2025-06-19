
import { useState } from "react";
import { fetchArticlesWithTopic } from "../../photoSearch-api";
import { SearchBar } from "./SearchBar/SearchBar";
import { ImageGallery } from "./ImageGallery/Imagegallery";
import { Loader } from "./Loader/Loader";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";
import Modal from 'react-modal';
import { ImageModal } from "./ImageModal/ImageModal";

Modal.setAppElement('#root');

export const AppPhotoSearch = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // const [selectedImage, setSelectedImage] = useState(null);
    
    const handleSearch = async (topic) => {
        try {
            setImages([]);
            setLoading(true);
            
            const data = await fetchArticlesWithTopic(topic);
            console.log(data);            
            setImages(data);
        } catch (error) {
            console.log(error); 
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const openModal = (image) => {
        // selectedImage(image);
        setModalIsOpen(true);
    }
 
    const closeModal = () => {
        setModalIsOpen(false);
        // setSelectedImage(null);
    }
    

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {loading && <Loader loading={loading} />}
            {error && <ErrorMessage error={error} />}
            <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} selectedImage={images} />
            {images.length > 0 && <ImageGallery items={images} onImageClick={openModal}/>}
            
        </div>
    );
}



// Access Key  9EAxAt8Mvp0PI6gU1Y7LgJXP1cV1dF8Yl_68FbbpRUQ

// Secret key rzlqtADLYs6uw7EuVt0_nI3bfNQOXMKTsGMk-WJdcz4

// Application ID 764935