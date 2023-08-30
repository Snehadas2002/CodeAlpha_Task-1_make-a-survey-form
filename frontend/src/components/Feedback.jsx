import React from "react";

function Feedback({ formData, setFormData }) {
  return (
    <div className="other-info-container">
      <input
        type="text"
        placeholder="Any problem faced?"
        value={formData.problem}
        onChange={(e) => {
          setFormData({ ...formData, problem: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Any suggestions"
        value={formData.suggestion}
        onChange={(e) => {
          setFormData({ ...formData, suggestion: e.target.value });
        }}
      />
    </div>
  );
}

export default Feedback;
