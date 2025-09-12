import { useEffect, useState } from "react";

function MyVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myVideos")) || [];
    setVideos(saved);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">📂 My Generated Videos</h2>

      {videos.length === 0 ? (
        <p className="text-center text-muted">No videos saved yet.</p>
      ) : (
        <div className="row">
          {videos.map((video, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm h-100">
                <video
                  src={video.url}
                  controls
                  className="card-img-top"
                  style={{ borderRadius: "5px 5px 0 0" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    <strong>Script:</strong>{" "}
                    {video.script.length > 60
                      ? video.script.substring(0, 60) + "..."
                      : video.script}
                  </p>
                  <small className="text-muted">
                    Generated on {video.date}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MyVideos;
