import React from "react";

function Experience({ formData, setFormData }) {
  return (
    <div className="personal-info-container">
      <input
        type="text"
        placeholder="Total Task Completed"
        value={formData.total_task_completed}
        onChange={(e) => {
          setFormData({ ...formData, total_task_completed: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="How was your experience"
        value={formData.experience}
        onChange={(e) => {
          setFormData({ ...formData, experience: e.target.value });
        }}
      />
    </div>
  );
}

export default Experience;
