import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFavorites, removeFavoriteRoom } from "/src/redux/slices/favoriteSlice.jsx";

const Favorites = () => {
  const dispatch = useDispatch();
  const { favoriteRooms, loading, error } = useSelector((state) => state.favorites);
  const { user } = useSelector((state) => state.auth);
  
  const [removalError, setRemovalError] = useState(null);
  const [removalLoading, setRemovalLoading] = useState(false);

  useEffect(() => {
    if (user) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, user]);

  const handleRemoveFavorite = async (roomId) => {
    setRemovalLoading(true);
    setRemovalError(null);
    
    try {
      const result = await dispatch(removeFavoriteRoom(roomId));
      if (removeFavoriteRoom.fulfilled.match(result)) {
        console.log(`Successfully removed room with ID: ${roomId}`);
        

      } else {
        setRemovalError(result.payload);
        console.error(`Failed to remove room with ID: ${roomId}`, result.payload);
      }
    } catch (error) {
      setRemovalError(error);
      console.error("Error removing favorite room:", error);
    } finally {
      setRemovalLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>; 

  return (
    <div>
      <h2>Your Favorite Rooms</h2>
      {favoriteRooms.length === 0 ? (
        <p>No favorite rooms yet.</p>
      ) : (
        favoriteRooms.map((room) => (
          <div key={room.id}>
            <p>Room Name: {room.name}</p>
            <button onClick={() => handleRemoveFavorite(room.id)}>
              {removalLoading ? "Removing..." : "Remove from Favorites"}
            </button>
            {removalError && <p style={{ color: 'red' }}>Error: {removalError}</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default Favorites;
