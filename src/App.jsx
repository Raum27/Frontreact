import React, { useState, useEffect } from 'react';
import Zom from './assets/zom.gif'


function App() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box relative">
          <h3 className="font-bold text-lg">&#128187; message </h3>
          <p className="py-4">This process may spend time , please wait</p>
          <span className="loading loading-dots loading-lg absolute left-56 mt-20"></span>
          <div>
            <img src={Zom} alt="" className='ml-6'/>
          </div>
        </div>
      </dialog>
    </>
  )
}

export default App
