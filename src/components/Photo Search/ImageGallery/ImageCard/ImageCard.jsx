import { ImageModal } from "../../ImageModal/ImageModal";

export const ImageCard = ({item}) => {
  return (
    <div className="overflow-hidden rounded shadow" >
       <img
        src={item.urls.small}
        alt={item.alt_description || "Image"}
        className="w-full h-60 object-cover rounded-md shadow transition-transform duration-300 hover:scale-105"
      />
     
    </div>
  );
}