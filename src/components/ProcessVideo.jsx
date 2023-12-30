import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FaceVideo from './FaceVideo';

function ProcessVideo() {
  const [Images, setImages] = useState([])
  const [FACE_LOCK, setFACE_LOCK] = useState([])
  const [selectedFilefilter, setselectedFilefilter] = useState(null);

  useEffect(() => {
    axios.post('http://127.0.0.1:5000/All-Face').then((res) => {
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
        <div className="overflow-x-auto bg-indigo-400 w-6/12 border-4 border-neutral-600 shadow-3xl">
          <table className="table border-collapse">
            {/* head */}
            <thead>
              <tr>
                <th className='text-white'>
                  FACE-LOCK
                </th>
                <th className='text-white'>IMAGE</th>
              </tr>
            </thead>
            <tbody>
              {Images.map((item, index) => {
                return <tr key={index}>
                  <th>
                    <label>
                      {<input type="checkbox" key={index} className="checkbox checkbox-warning [--chkfg:white]" value={index} onClick={(e) => {
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
      <div className='flex justify-center  my-2'>
        <span className='mr-6 mt-2'><h1 className='font-mono text-lg font-semibold'>Filter-file --&gt;</h1></span>
        <input type="file" className="file-input file-input-bordered file-input-error w-full max-w-xs mr-4" onChange={upfiles} />
        <FaceVideo Filter={selectedFilefilter} FACE_LOCK={FACE_LOCK} />
      </div>

    </>
  )
}

export default ProcessVideo
