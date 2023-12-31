import { Link } from "react-router-dom"



function Home() {
  return (
    <>
      <div className="navbar bg-base-100 border-b-2 flex justify-between">
        <h1 className="btn  btn-ghost text-rose-500 text-xl">Automated Face Selection and Censoring </h1>
        <label className="flex cursor-pointer gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
          <input type="checkbox" value="synthwave" className="toggle theme-controller" />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        </label>
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
