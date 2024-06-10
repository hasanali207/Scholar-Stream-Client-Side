
import React, { useState } from "react";

const FeedbackModal = ({ handleFeedback, itemId }) => {
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    handleFeedback(feedback, itemId); 
    setFeedback("");
  };

  return (
    <>
      <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Add Feedback</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Feedback Form</h3>
          <p className="py-4">Please provide your feedback:</p>
          <textarea
            value={feedback}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full"
            rows={4}
          ></textarea>
          <button className="btn" onClick={handleSubmit}>Submit Feedback</button>
          <button className="btn" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>
        </div>
      </dialog>
    </>
  );
};

export default FeedbackModal;
