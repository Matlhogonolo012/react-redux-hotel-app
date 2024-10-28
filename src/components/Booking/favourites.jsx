import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites } from "/src/redux/slices/favoriteSlice.jsx";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favoriteRooms, loading } = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {favoriteRooms.map((room) => (
        <div key={room.id}></div>
      ))}
    </div>
  );
};

export default Favorites;
