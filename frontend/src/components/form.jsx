import React, { useState } from "react";
import Intro from "./Intro";
import Experience from "./Experience";
import Feedback from "./Feedback";
import axios from "axios";

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    // email: "",
    // password: "",
    // confirmPassword: "",
    // firstName: "",
    // lastName: "",
    // username: "",
    // nationality: "",
    // other: "",
    username: "",
    email: "",
    total_task_completed: "",
    experience: "",
    problem: "",
    suggestion: "",
  });

  const submitData = async () => {
    const response = await axios.post("http://localhost:3000/form", {
      formData,
    });
    console.log("Success", response);
  };

  const FormTitles = ["Intro", "Experience", "Feedback"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Intro formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Experience formData={formData} setFormData={setFormData} />;
    } else {
      return <Feedback formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
                submitData();
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
