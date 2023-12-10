import React, { useState } from "react";


export default function ReadExternalFiles() {
 const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  
  };



  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      // Send formData to the server for saving
      // Example: Use fetch or an HTTP library like Axios
      // fetch('/upload', {
      //   method: 'POST',
      //   body: formData
      // })
      //   .then(response => {
      //     // Handle response
      //   })
      //   .catch(error => {
      //     // Handle error
      //   });
    }
  };

  return (
    <div>
    <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
};

