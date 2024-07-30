// components/DownloadButton.js
"use client"
import React from 'react';
import { Michroma } from "next/font/google";

const michroma = Michroma({
  weight: "400",
  subsets: ["latin"],
});

const ResumeDownloadButton = () => {
  const handleDownload = () => {
    // Define the URL of the PDF file in the public folder
    const fileUrl = '/resume_2024.pdf';
    window.open(fileUrl, "_blank");

    // Create an anchor element
    // const link = document.createElement('a');
    // link.href = fileUrl;

    // Set the download attribute with the desired file name
    // link.download = 'example.pdf';

    // Append the anchor to the body
    // document.body.appendChild(link);

    // Trigger a click event on the anchor
    // link.click();

    // Remove the anchor from the body
    // document.body.removeChild(link);
  };

  return (
    <div>
      <button
        
    onClick={handleDownload}
    className={`p-3 px-4  m-3 max-md:hidden rounded-lg text-info ${michroma.className} custom-shadow`}
    style={{
      boxShadow: "0 4px 6px -1px rgba(0, 123, 255, 0.5)",
    }}
  >
    Resume
    </button>
    <button
    onClick={handleDownload}
    className={`p-3 px-4  m-3    md:hidden text-xs rounded-lg text-info ${michroma.className} custom-shadow`}
    style={{
      boxShadow: "0 4px 6px -1px rgba(0, 123, 255, 0.5)",
    }}
  >
    Resume
    </button>
    
    </div>
  
  );
};

export default ResumeDownloadButton;
