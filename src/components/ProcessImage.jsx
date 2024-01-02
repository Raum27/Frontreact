import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Loading from './Loading'

function FaceImage({ip}) {
  const [Images, setImages] = useState([])
  const [BOXS, setbox] = useState([])
  const [FIlter, setFIlter] = useState([])
  const [FACE_LOCK, setFACE_LOCK] = useState([])

  useEffect(() => {
    axios.get(`${ip}/FacesAllonImages`).then((res) => {
      if (res.status == 200) {
        const info = res.data
        
        if (Object.keys(info).length === 0) {

          location.href = '/UPLOADIMAGE';
        }
        setImages(info)
        let size = Object.keys(info).length;
        let arr = []

        for (let i = 0; i < size; ++i) {
          arr.push(i)
        }
        setbox(arr)
        setFIlter(Array(size).fill(null))

        const newArray = [];
        for (let i = 0; i < size; i++) {
          const newRow = [];
          newArray.push(newRow);
        }
        setFACE_LOCK(newArray)
        // console.log(newArray)

      }

    }).catch((error) => {
      console.log(error)
    })

  }, [])

  return (
    <>
      {<Loading />}
      {/* bar */}
      <div className="flex justify-center items-center ">
        <ul className="steps m-7">
          <li className="step step-error text-sm">UPLOAD</li>
          <li className="step step-error text-lg font-bold">PROCESS</li>
          <li className="step"></li>
        </ul>
      </div>
      {/* end - bar */}

      {BOXS.map((index) => {
        return <div key={`parent-${index}`}>
          <div className="flex justify-center " key={`a${index}`}>
            <div key={`b${index}`} className="flex justify-start  mt-2 border-2 w-2/3 h-32 gap-2 p-1.5 m-0.5 border-slate-200 overflow-auto drop-shadow-2xl bg-gray-100">
              <h3 key={`c${index}`} className="text-justify font-bold text-sm mt-8 mr-3 text-gray-500 ">Image {index + 1}</h3>
              {Images[index].map((item, index_in) => {
                return <div key={`in${index_in}`} className="avatar flex flex-col">
                  <div key={`in1${index_in}`} className="w-20 rounded ">
                    <img key={`in2${index_in}`} src={`data:image/jpeg;base64,${item}`} alt="Tailwind-CSS-Avatar-component" />
                  </div>
                  <input key={`in3${index_in}`} type="checkbox" className="checkbox mt-2 ml-6 tooltip "  data-tip="LOCK" 
                  value={index_in} onClick={(e) => {

                    // console.log('index ',index,' value', e.target.value)
                    // console.log(FACE_LOCK)
                    if (e.target.checked == true) {
                      FACE_LOCK[index].push(e.target.value)
                    } else {
                      const indexToRemove = FACE_LOCK[index].indexOf(e.target.value);
                      if (indexToRemove >= 0 && indexToRemove < FACE_LOCK[index].length) {
                        FACE_LOCK[index].splice(indexToRemove, 1);
                      }

                    }
                    // console.log(FACE_LOCK)
                  }} />
                </div>
              })}

            </div>
          </div>
          <div key={`h${index}`} className='flex justify-center  my-2 tooltip' data-tip="Select the filter that you want to replace the video instead of censoring by default.">
            <span className='mr-6 mt-2' key={`x${index}`}><h1 className='font-mono text-lg font-semibold'>Filter {index + 1} &gt;</h1></span>
            <input type="file" id={`fi${index}`} key={`s${index}`} accept='image/png' onChange={(e) => {
              const file_filter = e.target.files[0]
              FIlter[index] = file_filter
              // console.log(FIlter[index], FIlter)
            }} className="file-input file-input-bordered file-input-error w-full max-w-xs mr-4" />
          </div>
        </div>
      })}





      <div className="flex justify-center items-center mt-auto">
        <button className="btn btn-error w-500 text-lg text-zinc-100" onClick={() => {
          document.getElementById('my_modal_1').showModal()
          const formData = new FormData();
          for (const file of FIlter) {
            formData.append('files', file);
          }

          const want_fill = []
          for (let k = 0; k < FIlter.length; ++k) {
            if (FIlter[k] != null) {
              want_fill.push(k)
            }
          }

          formData.append('who', JSON.stringify(FACE_LOCK))
          formData.append('want_lock', JSON.stringify(want_fill))
          console.log(want_fill,JSON.stringify(FACE_LOCK),JSON.stringify(want_fill))
          // formData.append('who', FACE_LOCK)

          try {
            axios.post(`${ip}/LockFacesImages`, formData).then((res) => {
              if (res.status == 200) {
                location.href = '/DOWLOADIMAGE';
              }
            }).catch((error) => {
              console.log(error)
            })
          } catch (error) {
            console.error('Error uploading files:', error);
          }
        }}>PROCESS</button>
      </div >
    </>

  );
}

export default FaceImage;
