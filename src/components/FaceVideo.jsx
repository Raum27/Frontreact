import axios from 'axios'
import React, { useState } from 'react';
import Loading from './Loading'

function FaceVideo({ Filter, FACE_LOCK, ip }) {

  const handleDowload = async () => {
    // window.scrollTo(0, 0)
    document.getElementById('my_modal_1').showModal()
    const formData = new FormData();
    if (Filter != null) {
      formData.append('filterImage', Filter);
    }
    formData.append('who',FACE_LOCK);
    try {
      await axios.post(`${ip}/Facelocks`, formData).then((res) => {
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
    {<Loading/>}
      <div className="flex justify-center items-center mt-auto">
        <button className="btn btn-error w-500 text-lg text-zinc-100" onClick={handleDowload}>PROCESS</button>
      </div>
    </>

  );
}

export default FaceVideo;
