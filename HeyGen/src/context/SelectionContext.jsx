import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SelectionContext = createContext(null);

export function SelectionProvider({ children }) {
  const [avatarId, setAvatarId] = useState("");
  const [voiceId, setVoiceId] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("heygenSelection")) || {};
      if (saved.avatarId) setAvatarId(saved.avatarId);
      if (saved.voiceId) setVoiceId(saved.voiceId);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("heygenSelection", JSON.stringify({ avatarId, voiceId }));
    } catch {}
  }, [avatarId, voiceId]);

  const value = useMemo(() => ({ avatarId, setAvatarId, voiceId, setVoiceId }), [avatarId, voiceId]);

  return <SelectionContext.Provider value={value}>{children}</SelectionContext.Provider>;
}

export function useSelection() {
  const ctx = useContext(SelectionContext);
  if (!ctx) throw new Error("useSelection must be used within SelectionProvider");
  return ctx;
} 