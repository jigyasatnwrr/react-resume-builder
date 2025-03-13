import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import { DownloadButton } from "./components/ResumePDF";

const App = () => {
  const [resumeData, setResumeData] = useState(null);

  return (
    <div>
      <ResumeForm onSave={setResumeData} />
      {resumeData && <DownloadButton data={resumeData} />}
    </div>
  );
};

export default App;
