import { useDispatch } from "react-redux";
import { addFavoriteRoom } from "/src/redux/slices/favoriteSlice.jsx";

const AddToFavoritesButton = ({ room }) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addFavoriteRoom(room));
  };

  return <button onClick={handleAddToFavorites}>Add to Favorites</button>;
};

export default AddToFavoritesButton;
