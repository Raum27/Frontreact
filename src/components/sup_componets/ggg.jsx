// import React, { useState, useEffect } from 'react';
// import axios from 'axios'


// function App() {
//   const [Images, setImages] = useState([])
//   const [FACE_LOCK, setFACE_LOCK] = useState([])
//   useEffect(() => {
//     axios.post('http://127.0.0.1:5000/All-Face').then((res) => {
//       setImages([...res.data])
//       setFACE_LOCK(Array(0).fill(0))
//     }).catch((error) => {
//       console.log(error)
//     })

//   }, [])



//   return (
//     <>
//       <div className="flex justify-center mt-10 ">
//         <div className="overflow-x-auto bg-indigo-400 w-6/12 border-4 border-neutral-600 shadow-3xl">
//           <table className="table border-collapse">
//             {/* head */}
//             <thead>
//               <tr>
//                 <th className='text-white'>
//                   FACE-LOCK
//                 </th>
//                 <th className='text-white'>IMAGE</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Images.map((item, index) => {
//                 return <tr key={index}>
//                   <th>
//                     <label>
//                       {<input type="checkbox" key={index} className="checkbox checkbox-warning [--chkfg:white]" value={index} onClick={(e) => {
//                         if (e.target.checked == true) {

//                           FACE_LOCK.push(e.target.value)
//                         } else {
//                           const index = FACE_LOCK.indexOf(e.target.value);
//                           if (index > -1) {
//                             FACE_LOCK.splice(index, 1);
//                           }
//                         }

//                         console.log(FACE_LOCK, "length is :", FACE_LOCK.length)
//                       }} />
//                       }
//                     </label>
//                   </th>
//                   <td>
//                     <div className="flex items-center gap-3">
//                       <div className="avatar">
//                         <div className="mask mask-squircle w-12 h-12">
//                           <img src={`data:image/jpeg;base64,${item}`} key={index} />
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               })}

//             </tbody>
//             <tfoot>
//               <tr>

//               </tr>
//             </tfoot>

//           </table>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App
