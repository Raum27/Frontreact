import React, { useState } from 'react';
import axios from 'axios'
import Loading from './Loading';
import PapgNoFace from './PapgNoFace';
import { Carousel } from 'flowbite-react';

function UPLOADIMAGE({ ip }) {
  const [selectedFiles, setSelectedFiles] = useState(null);
  const [IMAGES, setImages] = useState([]);

  const [checkpage, setcheckpage] = useState(false);
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
      await axios.post(`${ip}/UpFilesImages`, formData).then((res) => {
        if (res.status == 200) {

          if (res.data['status'] === "No faces or human on images") {
            setcheckpage(true)
            document.getElementById('my_modal_1').close()

          } else {
            location.href = '/ProcessImage';
          }

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
      {checkpage && <PapgNoFace />}
      {<Loading />}
      <div className="flex justify-center items-center ">
        <ul className="steps m-7">
          <li className="step step-error text-lg font-bold ">UPLOAD</li>
          <li className="step "></li>
          <li className="step"></li>
        </ul>
      </div>
      <div className="flex justify-center items-center mt-auto">
        <input type="file" accept=".png, .jpg, .jpeg" multiple className="file-input file-input-bordered w-full max-w-xs" onChange={handleFileChange} />
      </div>


      <div className='flex justify-center '>
        <div className="bg-slate-200 border-slate-100 bg-gray-800 h-96 mt-5 size-6/12 w-6/12 shadow-3xl rounded-2xl">
          <Carousel slideInterval={1000}>
            {selectedFiles &&
              IMAGES.map((file, index) => {
                return (<img
                  key={index}
                  src={URL.createObjectURL(file)}
                  alt={`selected-img-${index}`}
                  width={250} height={400}
                />
                )
              })}
          </Carousel>
        </div>
      </div>






      {/*  upload image */}
      {selectedFiles &&
        <div className="flex justify-center items-center mt-10 tooltip" data-tip="upload image files to server">
          <button className="btn btn-error w-500 text-lg text-zinc-100" onClick={handleUpload}>UPLOAD</button>
        </div>
      }
    </>
  );
}

export default UPLOADIMAGE;
