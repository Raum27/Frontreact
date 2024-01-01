import React, { useState, useEffect } from 'react';
import Zom from '../assets/zom.gif'


function Loading() {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box relative">
          <h3 className="font-bold text-lg">&#128187; message </h3>
          <p className="py-4 font-medium">!This process may take long time, please wait</p>
          <span className="loading loading-dots loading-lg absolute left-56 mt-20"></span>
          <div>
            <img src={Zom} alt="" className='ml-4' />
          </div>
        </div>
      </dialog>

    </>
  )
}

export default Loading
