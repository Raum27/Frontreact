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
      <img src="https://plus.unsplash.com/premium_photo-1674718013659-6930c469e641?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="NOne" />
    </>
  )
}

export default Home
