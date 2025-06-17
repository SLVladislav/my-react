export const ImageCard = ({item}) => {
    return (
        <div className="overflow-hidden rounded shadow">
        <img
          src={item.urls.small}
          alt={item.alt_description || "Image"}
          className="w-full h-auto object-cover"
        />
      </div>
    );
}