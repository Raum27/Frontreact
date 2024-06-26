import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FaceVideo from './FaceVideo';

function ProcessVideo({ip}) {
  const [Images, setImages] = useState([])
  const [FACE_LOCK, setFACE_LOCK] = useState([])
  const [selectedFilefilter, setselectedFilefilter] = useState(null);

  useEffect(() => {
    axios.post(`${ip}/All-Face`).then((res) => {
      if (res.status == 200) {
        setImages([...res.data])
        setFACE_LOCK(Array(0).fill(0))
        if (res.data.length == 0) {
          location.href = '/UPLOADVIDEO';
        }
      }

    }).catch((error) => {
      console.log(error)
    })

  }, [])

  const upfiles = (e) => {
    const file_filter = e.target.files[0]
    setselectedFilefilter(file_filter)
  }
  // console.log(Images)

  return (
    <>
      <div className="flex justify-center items-center ">
        <ul className="steps m-7">
          <li className="step step-error text-sm">UPLOAD</li>
          <li className="step step-error text-lg font-bold">PROCESS</li>
          <li className="step"></li>
        </ul>
      </div>
      <div className="flex justify-center mt-2 mb-2 ">
        <div className="overflow-x-auto bg-slate-300 border-slate-100 w-6/12 border-4 border-neutral-600 shadow-3xl">
          <table className="table border-collapse">
            {/* head */}
            <thead>
              <tr>
                <th className='text-black font-bold'>
                  FACE-LOCK
                </th>
                <th className='text-black font-bold'>IMAGE</th>
              </tr>
            </thead>
            <tbody>
              {Images.map((item, index) => {
                return <tr key={index}>
                  <th>
                    <label className='tooltip tooltip-right' data-tip="LOCK">
                      {<input type="checkbox" key={index} className="checkbox" value={index} onClick={(e) => {
                        if (e.target.checked == true) {
                          FACE_LOCK.push(e.target.value)
                        } else {
                          const index = FACE_LOCK.indexOf(e.target.value);
                          if (index > -1) {
                            FACE_LOCK.splice(index, 1);
                          }
                        }
                      }} />
                      }
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-16 h-16">
                          <img src={`data:image/jpeg;base64,${item}`} key={index} />
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              })}
            </tbody>
            <tfoot>
              <tr>
              </tr>
            </tfoot>

          </table>
        </div>
      </div>
      <div className='flex justify-center  my-2 mt-4'>
        <span className='mr-6 mt-2'><h1 className='font-mono text-lg font-semibold' >Filter-file --&gt;</h1></span>
        <div className='tooltip'  data-tip="Select the filter that you want to replace the video instead of censoring by default.">
          <input type="file" accept='image/png' className="file-input file-input-bordered file-input-error w-full max-w-xs mr-4 " onChange={upfiles} />
        </div>
        <FaceVideo Filter={selectedFilefilter} FACE_LOCK={FACE_LOCK} ip={ip}/>

      </div>

    </>
  )
}

export default ProcessVideo
