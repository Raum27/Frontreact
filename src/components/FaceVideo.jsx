import axios from 'axios'
import React, { useState } from 'react';
import zom from '../assets/zom.gif'

function FaceVideo({ Filter, FACE_LOCK }) {
  // const [loading, setLoading] = useState(false);

  const handleDowload = async () => {
    // setLoading(true);
    window.scrollTo(0, 0)
    alert("This Process may spend time , please wait!")
    const formData = new FormData();
    if (Filter != null) {
      formData.append('filterImage', Filter);
    }
    formData.append('who',FACE_LOCK);
    try {
      await axios.post('http://127.0.0.1:5000/Facelocks', formData).then((res) => {
        if (res.status == 200) {
          location.href = '/DOWLOADVIDEO';
        }
      }).catch((error) => {
        console.log(error)
      })
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  }
  return (
    <>
      <div className="flex justify-center items-center mt-auto">
        <button className="btn btn-error w-500 text-lg text-zinc-100" onClick={handleDowload}>PROCESS</button>
      </div>
    </>

  );
}

export default FaceVideo;
