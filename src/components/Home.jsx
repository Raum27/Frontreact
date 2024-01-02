import { Link } from "react-router-dom"
import hero from '../assets/he1.jpg'
import momo from '../assets/ezgif.com-resize.gif'


function Home() {
  return (
    <>
      <div className="navbar bg-base-100 border-b-2 flex justify-between">
        <h1 className="btn  btn-ghost text-rose-500 text-xl">Automated Face Selection and Censoring </h1>
        <div >
          <Link to="/UPLOADIMAGE"><button className="btn btn-error btn-lg mx-3 text-zinc-100">TRY IMAGES</button></Link>
          <Link to="/UPLOADVIDEO"><button className="btn btn-error btn-lg mx-2 text-zinc-100" >TRY VIDEO</button></Link>
        </div>
      </div>
      <div className="hero min-h-dvh bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={hero} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Images!</h1>
            <p className="py-6">information is important in this age. The world has changed, and many people emphasize privacy even Images. This website can help you to conceal Other Person's Information in your images.</p>
            <Link to="/UPLOADIMAGE">  <button className="btn btn-error">Start image</button></Link>
          </div>
        </div>
      </div>

      <div className="hero min-h-lvh" style={{ backgroundImage: `url(${momo})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Video :)</h1>
            <p className="mb-5">Don't! waste your time. Try your video with Automated Face Selection and Censoring</p>
            <Link to="/UPLOADVIDEO"><button className="btn btn-error">Start video</button></Link>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home