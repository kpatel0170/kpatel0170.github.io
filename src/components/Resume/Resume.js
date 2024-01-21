import React, { useEffect } from "react";

const Resume = () => {
  useEffect(() => {
    const openResume = () => {
      window.location.href = "/resume.pdf";
    };

    openResume();
  }, []);

  return <div>Redirecting to resume...</div>;
};

export default Resume;
