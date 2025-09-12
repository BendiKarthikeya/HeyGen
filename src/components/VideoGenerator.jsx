import { useState } from "react";
import Loader from "./Loader";
import AvatarSelector from "./AvatarSelector";
import VoiceSelector from "./VoiceSelector";

function VideoGenerator() {
  const [script, setScript] = useState("");
  const [avatarId, setAvatarId] = useState("");
  const [voiceId, setVoiceId] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const webhookUrl = "http://localhost:5680/webhook-test/ab52cfc2-34b4-41f4-9062-6d7dc54d9f4f";

  const generateVideo = async () => {
    if (!script || !avatarId || !voiceId) {
      alert("Please select avatar, voice, and enter a script.");
      return; 
    }

    setLoading(true);
    setVideoUrl("");
    setError("");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "video_inputs": [
            {
              "character": {
                "type": "avatar",
                "avatar_id": avatarId,
                "avatar_style": "normal"
              },
              "voice": {
                "type": "text",
                "input_text": script,
                "voice_id": voiceId,
                "speed": 1.1
              }
            }
          ],
          "dimension": {
            "width": 1280,
            "height": 720
          }
        }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || `Request failed with status ${response.status}`);
      }

      const contentType = response.headers.get("content-type") || "";
      let url = "";

      if (contentType.includes("application/json")) {
        const data = await response.json();
        url = data.videoUrl || data.url || data.video || data.file || data.link || "";
        if (!url) {
          throw new Error("No video URL found in JSON response.");
        }
      } else {
        const blob = await response.blob();
        if (blob && (blob.type.startsWith("video/") || blob.size > 0)) {
          url = URL.createObjectURL(blob);
        } else {
          throw new Error("Unexpected response format from server.");
        }
      }

      setVideoUrl(url);

      const savedVideos = JSON.parse(localStorage.getItem("myVideos")) || [];
      savedVideos.push({
        url,
        script,
        avatar: avatarId,
        voice: voiceId,
        date: new Date().toLocaleString(),
      });
      localStorage.setItem("myVideos", JSON.stringify(savedVideos));
    } catch (err) {
      console.error("Error generating video:", err);
      setError(err.message || "Something went wrong while generating the video.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 text-center">Dashboard</h2>
      <div className="row g-4">
        {/* Sidebar */}
        <div className="col-12 col-md-4">
          <div className="card shadow-sm h-100">
            <div className="card-body">
              <h5 className="card-title mb-3">Selections</h5>
              <div className="mb-3">
                <span className="badge text-bg-light me-2">Avatar: {avatarId || "None"}</span>
                <span className="badge text-bg-light">Voice: {voiceId || "None"}</span>
              </div>
              <div style={{ maxHeight: "55vh", overflowY: "auto" }}>
                <AvatarSelector onSelect={setAvatarId} />
                <VoiceSelector onSelect={setVoiceId} />
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="col-12 col-md-8">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-3">Create Video</h5>
              <div className="mb-3">
                <label className="form-label">Prompt</label>
                <textarea
                  className="form-control"
                  rows="6"
                  value={script}
                  onChange={(e) => setScript(e.target.value)}
                  placeholder="Type what your avatar should say..."
                ></textarea>
              </div>
              <button
                className="btn btn-primary w-100"
                onClick={generateVideo}
                disabled={loading}
              >
                {loading ? "Creating..." : "Create Video"}
              </button>

              <div className="mt-4">
                {loading && <Loader />}
                {error && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {error}
                  </div>
                )}
                {!loading && !error && videoUrl && (
                  <div className="card p-3 shadow-sm">
                    <h6 className="mb-2">Your Video</h6>
                    <video
                      src={videoUrl}
                      controls
                      className="w-100 mt-2 rounded"
                      style={{ maxHeight: "400px" }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoGenerator;
