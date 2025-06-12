import { useState } from "react";

const dummyKRAs = [
  {
    id: 1,
    title: "Increase Client Retention",
    progress: "75%",
    proof: null
  },
  {
    id: 2,
    title: "Improve Team Communication",
    progress: "60%",
    proof: null
  }
];

export default function KRA() {
  const [kras, setKras] = useState(dummyKRAs);

  const handleFileUpload = (e, id) => {
    const updatedKras = kras.map(kra =>
      kra.id === id ? { ...kra, proof: e.target.files[0].name } : kra
    );
    setKras(updatedKras);
  };

  return (
    <div className="space-y-4 h-screen my-5 max-w-4xl mx-auto">
      {kras.map(kra => (
        <div key={kra.id} className="border p-4 rounded shadow">
          <h3 className="font-semibold text-lg">{kra.title}</h3>
          <p>Progress: {kra.progress}</p>
          <input
            type="file"
            onChange={(e) => handleFileUpload(e, kra.id)}
            className="mt-2"
          />
          {kra.proof && <p className="text-sm mt-1 text-green-600">Uploaded: {kra.proof}</p>}
        </div>
      ))}
    </div>
  );
}