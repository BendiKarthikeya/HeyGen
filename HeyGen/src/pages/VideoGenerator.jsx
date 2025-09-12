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

  const webhookUrl = "http://localhost:5680/webhook/ab52cfc2-34b4-41f4-9062-6d7dc54d9f4f";
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
        <h2 className="mb-3">Create Video</h2>
        <div className="row g-4">
          <div className="col-12 col-lg-5">
            <div className="mb-2">
              <span className="badge text-bg-light me-2">Avatar: {avatarId || "None"}</span>
              <span className="badge text-bg-light">Voice: {voiceId || "None"}</span>
            </div>
            <div className="d-flex gap-2">
              <Link to="/avatars" className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-person me-1"></i> Choose Avatar
              </Link>
              <Link to="/voices" className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-mic me-1"></i> Choose Voice
              </Link>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="mb-2 d-flex align-items-center justify-content-between">
              <label className="form-label mb-0">Prompt</label>
              <small className={wordCount > MAX_WORDS ? "text-danger" : "text-muted"}>
                {wordCount}/{MAX_WORDS} words
              </small>
            </div>
            <textarea
              className="form-control"
              rows="8"
              value={prompt}
              onChange={handlePromptChange}
              placeholder="Type what your avatar should say... (max 160 words)"
            ></textarea>

            <button
              type="button"
              className="btn btn-primary mt-3 w-100"
              onClick={handleCreate}
              disabled={loading || !prompt || !avatarId || !voiceId || wordCount === 0 || wordCount > MAX_WORDS}
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
                    style={{ maxHeight: "420px" }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoGenerator; 