import { ImageCard } from "./ImageCard/ImageCard";

export const ImageGallery = ({ items, onImageClick }) => {    
    return (        
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
            {items.map((item) => (
                <li key={item.id} onClick={()=>onImageClick(item)} className="cursor-pointer">
                    <ImageCard item={item}  />
                </li>
            ))}
       
            </ul>       

    );
}