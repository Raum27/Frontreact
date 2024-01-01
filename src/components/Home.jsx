import { Link } from "react-router-dom"



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
      <div className="flex flex-col  container px-4 mt-3  border-4">
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">

          <div className="flex w-full">
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
            <div className="divider divider-horizontal">OR</div>
            <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">content</div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
      </div>
    </>
  )
}

export default Home
