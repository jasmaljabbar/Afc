import React from "react";

const TermsAndConditionsBox = () => {
  return (
    <div className="relative p-8 overflow-hidden">
      {/* Blurred background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 opacity-75 blur-xl"
        style={{ backdropFilter: "blur(8px)" }}
      ></div>

      {/* Content */}
      <div className="relative  text-white">
        <h2 className="text-2xl font-bold mb-4 text-[#fdd166]">
          Terms and Conditions
        </h2>
        <ul className="space-y-4 list-disc list-inside">
          <li>
            <strong>Clear participation and program rules guidelines:</strong>{" "}
            Results following nutritionist advice and shared diet chart.
          </li>
          <li>
            <strong>Payment and refund policies:</strong> No refunds will be
            provided as your participation means we have reserved a spot
            specifically for you, potentially excluding other participants.
            Refunds are only available if the program is halted due to an error
            on our part.
          </li>
          <li>
            <strong>Cancellation and rescheduling procedures</strong>
          </li>
          <li>
            <strong>Liability and disclaimer information</strong>
          </li>
          <li>
            <strong>Rights and responsibilities of both parties</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditionsBox;
