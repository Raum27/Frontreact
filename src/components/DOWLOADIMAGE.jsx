import React, { useState } from "react";
function DOWLOADIMAGE({ip}) {
  const [oncetime, setoncetime] = useState(true)
  return (
    <>
      <div className="flex justify-center items-center ">
        <ul className="steps my-7">
          <li className="step step-error text-sm">UPLOAD</li>
          <li className="step step-error text-sm">PROCESS</li>
          <li className="step step-error text-lg font-bold">DOWLOAD</li>
        </ul>
      </div>
      {oncetime ?
        <div className="flex justify-center items-center mt-60">
          <button className="btn btn-success w-500 text-lg text-zinc-100" onClick={() => document.getElementById('my_modal_1').showModal()}>DOWLOAD</button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Warning!</h3>
              <p className="py-4">if you download files, you can not edit files and all your data is deleted.</p>
              <div className="modal-action p-1.5 ">
                <form method="dialog">
                  <button className="btn m-2 btn-error" >DENY</button>
                  <button className="btn btn-success" onClick={() => {
                    setoncetime(false)
                    window.location.href = `${ip}/DownloadImages`

                  }}>ACCEPT</button>
                </form>
              </div>
            </div>
          </dialog>
        </div> : <div className="flex justify-center items-center mt-60">
          <a href={`${ip}/DownloadImages`}><button className="btn btn-success w-500 text-lg text-zinc-100">DOWLOAD</button></a>
        </div>
      }
    </>
  );
}

export default DOWLOADIMAGE;
