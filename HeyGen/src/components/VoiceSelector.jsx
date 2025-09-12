import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function VoiceSelector({ onSelect }) {
  const [voices, setVoices] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const response = await fetch("https://api.heygen.com/v2/voices", {
          headers: {
            "accept": "application/json",
            "x-api-key": "ZGNkODExYTg5ZDAxNDgzMmIzOWZlMjliMTUzNWU4NDktMTc1NTQ5MTc3NQ==", // ⚠️ replace
          },
        });
        const data = await response.json();
        setVoices(data.data.voices || []);
      } catch (error) {
        console.error("Error fetching voices:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVoices();
  }, []);

  if (loading) return <Shimmer count={6} />;

  return (
    <div className="mb-4">
      <h5>Select Voice</h5>
      <div className="row">
        {voices.slice(0, visibleCount).map((voice) => (
          <div
            key={voice.voice_id}
            className="col-md-4 mb-3"
            onClick={() => onSelect(voice.voice_id)}
          >
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h6 className="fw-bold">{voice.name}</h6>
                <p className="text-muted mb-1">{voice.language}</p>
                <p className="text-muted small">{voice.gender}</p>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    new Audio(voice.preview_audio).play();
                  }}
                >
                  ▶ Preview
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < voices.length && (
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

export default VoiceSelector;
