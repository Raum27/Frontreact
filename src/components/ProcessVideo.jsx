import { Link } from "react-router-dom";

function ProcessVideo() {
  return (
    <>
      <div className="flex justify-center items-center ">
        <ul className="steps m-7">
          <li className="step step-error text-sm">UPLOAD</li>
          <li className="step step-error text-lg font-bold">PROCESS</li>
          <li className="step"></li>
        </ul>
      </div>
      <div className="flex justify-center items-center mt-auto">
      
      </div>
      <div className="flex justify-center items-center mt-auto">
        <Link to="/DOWLOADVIDEO"><button className="btn btn-error w-500 text-lg text-zinc-100">PROCESS</button></Link>
      </div>
    </>

  );
}

export default ProcessVideo;
