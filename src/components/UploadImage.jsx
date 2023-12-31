import React, { useState } from 'react';
import axios from 'axios'
import Loading from './Loading';

function UPLOADIMAGE() {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [IMAGES, setImages] = useState([]);

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files);
    const files = Array.from(e.target.files);
    setImages(files)

  };
  const handleUpload = async () => {
    document.getElementById('my_modal_1').showModal()
    const formData = new FormData();
    for (const file of selectedFiles) {
      formData.append('files', file);
    }
    try {
      await axios.post('http://127.0.0.1:5000/UpFilesImages', formData).then((res) => {
        if (res.status == 200) {
          location.href = '/ProcessImage';
        }
      }).catch((error) => {
        console.log(error)
      })
      // const res = await axios.post('http://127.0.0.1:5000/UpFilesImages', formData)
      // if (res.status == 200){
      //   setLoading(false)
      //   location.href = '/ProcessImage';
      // }

    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <>
      {<Loading/>}
      <div className="flex justify-center items-center ">
        <ul className="steps m-7">
          <li className="step step-error text-lg font-bold ">UPLOAD</li>
          <li className="step "></li>
          <li className="step"></li>
        </ul>
      </div>
      <div className="flex justify-center items-center mt-auto">
        <input type="file" accept="image/*" multiple className="file-input file-input-bordered w-full max-w-xs" onChange={handleFileChange} />
      </div>
      {/*  images */}
      {selectedFiles &&
        <div className="flex justify-center mt-2 ">
          <div className="border-4 border-rose-500 h-1/4 carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box ">
            <div className="carousel-item ">
              {IMAGES.map((file, index) => {
                return <img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`selected-img-${index}`}
                  className="rounded-box object-cover"
                  width={500} height={150}

                />
              })}
            </div>
          </div>
        </div>
      }
      {/*  images */}
      {selectedFiles &&
        <div className="flex justify-center items-center mt-10">
          <button className="btn btn-error w-500 text-lg text-zinc-100" onClick={handleUpload}>UPLOAD</button>
        </div>
      }
    </>
  );
}

export default UPLOADIMAGE;
