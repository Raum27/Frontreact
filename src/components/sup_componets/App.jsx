import React, { useState, useEffect } from 'react';
import axios from 'axios'


function App() {
  const [Images, setImages] = useState([])
  const [FACE_LOCK, setFACE_LOCK] = useState([])
  const [selectedFilefilter, setselectedFilefilter] = useState(null);

  // useEffect(() => {
  //   axios.post('http://127.0.0.1:5000/All-Face').then((res) => {
  //     if (res.status == 200) {
  //       setImages([...res.data])
  //       setFACE_LOCK(Array(0).fill(0))
  //       if (res.data.length == 0) {
  //         location.href = '/UPLOADVIDEO';
  //       }
  //     }

  //   }).catch((error) => {
  //     console.log(error)
  //   })

  // }, [])

  return (
    <>
      <div className="flex justify-center items-center ">
        <ul className="steps m-7">
          <li className="step step-error text-sm">UPLOAD</li>
          <li className="step step-error text-lg font-bold">PROCESS</li>
          <li className="step"></li>
        </ul>
      </div>

      <div className="flex justify-center ">
        <div className="flex justify-start  mt-2 border-2 w-2/3 h-32 gap-2 p-1.5 m-0.5 border-slate-200 overflow-auto drop-shadow-2xl bg-gray-100">
          <h3 className="text-justify font-bold text-lg mt-8 mr-3 text-gray-500 ">Image 1</h3>
          {/* show image and button */}
          <div className="avatar flex flex-col">
            <div className="w-20 rounded ">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
            </div>
            <input type="checkbox" className="checkbox mt-2 ml-6" />
          </div>
        </div>
      </div>
      {/* file filter */}
      <div className='flex justify-center  my-2'>
        <span className='mr-6 mt-2'><h1 className='font-mono text-lg font-semibold'>Filter &gt;</h1></span>
        <input type="file" accept='image/png' className="file-input file-input-bordered file-input-error w-full max-w-xs mr-4" />
      </div>


      <div className="flex justify-center items-center mt-auto">
        <button className="btn btn-error w-500 text-lg text-zinc-100">PROCESS</button>
      </div>
    </>

  );
}

export default App;
