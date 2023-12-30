function DOWLOADVIDEO() {
  return (
    <> 
    <div className="flex justify-center items-center ">
      <ul className="steps my-7">
        <li className="step step-error text-sm">UPLOAD</li>
        <li className="step step-error text-sm">PROCESS</li>
        <li className="step step-error text-lg font-bold">DOWLOAD</li>
      </ul>
    </div>
    <div className="flex justify-center items-center mt-60">
      <a href="http://127.0.0.1:5000/download/Cyberpunk.mp4"><button className="btn btn-success w-500 text-lg text-zinc-100">DOWLOAD</button></a>
    </div>
    </>
  );
}

export default DOWLOADVIDEO;
