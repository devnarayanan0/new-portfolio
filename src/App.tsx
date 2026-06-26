import { useState } from "react";
import { UserProfile } from "./types";
import { PRESETS } from "./data";
import MinimalTemplate from "./components/MinimalTemplate";

export default function App() {
  // Global Profile State, initialized with Aiden's Creative Developer Preset
  const [profile] = useState<UserProfile>(PRESETS.developer);

  return (
    <div className="min-h-screen bg-white">
      <MinimalTemplate profile={profile} />
    </div>
  );
}

