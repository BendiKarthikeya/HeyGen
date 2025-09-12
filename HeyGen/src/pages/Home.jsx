import { Link } from "react-router";

function Home() {
  return (
    <div className="container-fluid">
      <div className="p-4 bg-white rounded shadow-sm">
        <h2 className="mb-3">Welcome to the Heygen App</h2>
        <p className="text-muted mb-4">
          Generate AI-powered avatar videos by choosing your preferred avatar and voice, then writing a prompt.
        </p>
        <div className="d-flex gap-2">
          <Link to="/create" className="btn btn-primary">
            <i className="bi bi-play-circle me-2"></i>
            Create a Video
          </Link>
          <Link to="/avatars" className="btn btn-outline-secondary">
            <i className="bi bi-person me-2"></i>
            Browse Avatars
          </Link>
          <Link to="/voices" className="btn btn-outline-secondary">
            <i className="bi bi-mic me-2"></i>
            Explore Voices
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home; 