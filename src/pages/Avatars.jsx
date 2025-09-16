import AvatarSelector from "../components/AvatarSelector";
import { useSelection } from "../context/SelectionContext";
import { useState } from "react";

function Avatars() {
  const { avatarId, setAvatarId } = useSelection();
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");

  const handleAvatarSelect = async (selectedAvatarId) => {
    try {
      setIsSending(true);
      setSendStatus("Sending avatar ID to n8n...");
      
      const response = await fetch("http://localhost:5680/webhook/avatar-selection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          avatarId: selectedAvatarId,
          timestamp: new Date().toISOString(),
          event: "avatar_selected"
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to send avatar ID to n8n: ${response.status}`);
      }

      const result = await response.json();
      console.log("Avatar ID sent to n8n successfully:", result);
      
      setAvatarId(selectedAvatarId);
      setSendStatus("Avatar ID successfully sent to n8n!");
      
      setTimeout(() => setSendStatus(""), 3000);
    } catch (error) {
      console.error("Failed to send avatar ID to n8n:", error);
      setSendStatus("Failed to send avatar ID to n8n. Check console for details.");
      
      setAvatarId(selectedAvatarId);
      
      setTimeout(() => setSendStatus(""), 5000);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container-fluid">
      <div className="p-4 bg-white rounded shadow-sm">
        <h2 className="mb-3">Select Avatar</h2>
        <div className="mb-3">
          <span className="badge text-bg-light">Current Avatar ID: {avatarId || "None"}</span>
          {sendStatus && (
            <div className={`alert ${sendStatus.includes("successfully") ? "alert-success" : "alert-warning"} mt-2`}>
              {sendStatus}
            </div>
          )}
        </div>
        <AvatarSelector onSelect={handleAvatarSelect} />
        {isSending && (
          <div className="text-center mt-3">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Sending avatar ID to n8n...</span>
            </div>
          </div>
        )}
        <div className="text-center mt-4">
          <button className="btn btn-outline-primary">Load More</button>
        </div>
      </div>
    </div>
  );
}

export default Avatars;
