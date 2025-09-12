import AvatarSelector from "../components/AvatarSelector";
import { useSelection } from "../context/SelectionContext";

function Avatars() {
  const { avatarId, setAvatarId } = useSelection();

  return (
    <div className="container-fluid">
      <div className="p-4 bg-white rounded shadow-sm">
        <h2 className="mb-3">Select Avatar</h2>
        <div className="mb-3">
          <span className="badge text-bg-light">Current: {avatarId || "None"}</span>
        </div>
        <AvatarSelector onSelect={setAvatarId} />
      </div>
    </div>
  );
}

export default Avatars; 