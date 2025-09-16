import { useMemo, useState } from "react";
import Loader from "../components/Loader";
import { useSelection } from "../context/SelectionContext";
import { Link } from "react-router";

function VideoGenerator() {
  const [prompt, setPrompt] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { avatarId, voiceId } = useSelection();

  const webhookUrl = "http://localhost:5680/webhook-test/3cbe6321-10d6-42ff-adca-5e7c7ea21a81";
  const MAX_WORDS = 160;

  const wordCount = useMemo(() => {
    const words = prompt.trim().split(/\s+/).filter(Boolean);
    return prompt.trim().length === 0 ? 0 : words.length;
  }, [prompt]);

  const handlePromptChange = (e) => {
    const value = e.target.value;
    const words = value.trim().split(/\s+/).filter(Boolean);
    if (words.length <= MAX_WORDS) {
      setPrompt(value);
    } else {
      const limited = words.slice(0, MAX_WORDS).join(" ");
      setPrompt(limited);
    }
  };

  const handleCreate = async () => {
    if (!prompt || !avatarId || !voiceId) {
      alert("Please select avatar, voice, and enter a prompt (max 160 words).");
      return;
    }
    if (wordCount > MAX_WORDS) {
      alert(`Prompt must be ${MAX_WORDS} words or fewer.`);
      return;
    }

    setLoading(true);
    setError("");
    setVideoUrl("");

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ avatarId, voiceId, prompt }),
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
        if (!url) throw new Error("No video URL found in JSON response.");
      } else {
        const blob = await response.blob();
        if (blob && (blob.type.startsWith("video/") || blob.size > 0)) {
          url = URL.createObjectURL(blob);
        } else {
          throw new Error("Unexpected response format from server.");
        }
      }

      setVideoUrl(url);
    } catch (err) {
      console.error("Error creating video:", err);
      setError(err.message || "Something went wrong while creating the video.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="p-4 bg-white rounded shadow-sm">
        <h2 className="mb-3">Create Your Video</h2>
        
        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6">
            <h5>Selected Avatar</h5>
            <div className="card">
              <div className="card-body text-center">
                <div className="mb-2">
                  <span className="badge text-bg-primary">{avatarId || "None Selected"}</span>
                </div>
                <Link to="/avatars" className="btn btn-outline-secondary btn-sm">
                  Choose Avatar
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-12 col-md-6">
            <h5>Selected Voice</h5>
            <div className="card">
              <div className="card-body text-center">
                <div className="mb-2">
                  <span className="badge text-bg-primary">{voiceId || "None Selected"}</span>
                </div>
                <Link to="/voices" className="btn btn-outline-secondary btn-sm">
                  Choose Voice
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Script</label>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="text-muted">Enter what your avatar should say</small>
            <small className={wordCount > MAX_WORDS ? "text-danger" : "text-muted"}>
              {wordCount}/{MAX_WORDS} words
            </small>
          </div>
          <textarea
            className="form-control"
            rows="6"
            value={prompt}
            onChange={handlePromptChange}
            placeholder="Type your script here... (max 160 words)"
          ></textarea>
        </div>

        <button
          type="button"
          className="btn btn-primary btn-lg w-100"
          onClick={handleCreate}
          disabled={loading || !prompt || !avatarId || !voiceId || wordCount === 0 || wordCount > MAX_WORDS}
        >
          {loading ? "Generating Video..." : "Generate Video"}
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
                style={{ maxHeight: "420px" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoGenerator;
