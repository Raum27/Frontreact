import React, { useState, useEffect } from 'react';
// import zom from '../assets/zom.gif'
import axios from 'axios'
import Loading from './Loading';

function UPLOADVIDEO() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [VideoFILE, setVideoFILE] = useState(null);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setVideoFILE(newFile)
    
    setSelectedFile(<video width={720} height={250} controls className="border-solid border-red-500 border-4 shadow-3xl ">
      <source src={URL.createObjectURL(newFile)} key={newFile.name} type={newFile.type} />
    </video>)
  };

  const handleUpload = async () => {
    // window.scrollTo(0, 0)
    document.getElementById('my_modal_1').showModal()
    const formData = new FormData();
    formData.append('Ve_file', VideoFILE);
    try {
      await axios.post('http://127.0.0.1:5000/UpFilesVideo', formData).then((res) => {
        if (res.status == 200) {
          location.href = '/ProcessVideo';
        }
      }).catch((error) => {
        console.log(error)
      })

    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <>{
      // <div className="h-screen bg-gray-600 relative fixed flex justify-center">
      //   <img src={zom} width={750} height={200} />
      // </div>
      <Loading />
      }
      <div className="flex justify-center items-center ">
        <ul className="steps m-7">
          <li className="step step-error text-lg font-bold">UPLOAD</li>
          <li className="step"></li>
          <li className="step"></li>
        </ul>
      </div>
      <div className="flex justify-center items-center mt-auto">
        <input type="file" accept="video/*" className="file-input file-input-bordered w-full max-w-xs" onChange={handleFileChange} />
      </div>
      {selectedFile && (<div className="flex justify-center mt-2 ">{selectedFile}</div>)}
      {selectedFile &&
        <div className="flex justify-center items-center mt-10 ">
          <button className="btn btn-error w-500 text-lg text-zinc-100" onClick={handleUpload}>UPLOAD</button>
        </div>
      }
    </>
  );
}

export default UPLOADVIDEO;
