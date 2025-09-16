import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import "./AvatarSelector.css";


function AvatarSelector({ onSelect }) {
  const [avatars, setAvatars] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const response = await fetch("https://api.heygen.com/v2/avatars", {
          headers: {
            "accept": "application/json",
            "x-api-key": import.meta.env.VITE_HEYGEN_API_KEY,
          },
        });
        const data = await response.json();
        setAvatars(data.data.avatars || []);
      } catch (error) {
        console.error("Error fetching avatars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAvatars();
  }, []);

  if (loading) return <Shimmer count={6} />;

  return (
    <div className="mb-4">
      <h5>Select Avatar</h5>
      <div className="row">
        {avatars.slice(0, visibleCount).map((avatar) => (
          <div
            key={avatar.avatar_id}
            className="col-md-4 mb-3"
            onClick={() => onSelect(avatar.avatar_id)}
          >
            <div className="card h-100 shadow-sm text-center avatar-card">
              <img
                src={avatar.preview_image_url}
                alt={avatar.avatar_name}
                className="card-img-top avatar-img"
              />
              <div className="card-body">
                <p className="card-text fw-bold">{avatar.avatar_name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < avatars.length && (
        <div className="text-center">
          <button
            className="btn btn-outline-primary"
            onClick={() => setVisibleCount((prev) => prev + 6)}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}

export default AvatarSelector;
