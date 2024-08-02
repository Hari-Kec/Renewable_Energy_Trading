// import React, { useState } from 'react';
// import axios from 'axios';

// const DocumentUpload = () => {
//   const [file, setFile] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) return;

//     const formData = new FormData();
//     formData.append('document', file);

//     try {
//       // Replace with your API endpoint
//       const response = await axios.post('https://api.attestr.com/api/{version}/public/corpx/business/master', formData);
//       setMessage(response.data.message); // Handle response message
//     } catch (error) {
//       console.error(error);
//       setMessage('Upload failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Document</h2>
//       <input type="file" onChange={handleFileChange} />
//       <button onClick={handleUpload}>Upload</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default DocumentUpload;