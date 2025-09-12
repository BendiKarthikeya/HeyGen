import VoiceSelector from "../components/VoiceSelector";
import { useSelection } from "../context/SelectionContext";

function Voices() {
  const { voiceId, setVoiceId } = useSelection();

  return (
    <div className="container-fluid">
      <div className="p-4 bg-white rounded shadow-sm">
        <h2 className="mb-3">Select Voice</h2>
        <div className="mb-3">
          <span className="badge text-bg-light">Current: {voiceId || "None"}</span>
        </div>
        <VoiceSelector onSelect={setVoiceId} />
      </div>
    </div>
  );
}

export default Voices; 