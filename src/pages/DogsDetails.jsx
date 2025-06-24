import { useParams } from "react-router-dom";

const DogsDetails = () => {
    const { dogId } = useParams();
        // useEffect(() => {
    //     //---HTTP запрос, если нужно
    // }, [])
    
    return (
        <div>DogsDetails: {dogId}</div>
    );
}
export default DogsDetails;