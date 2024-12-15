import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {

    useGSAP(function(){
        gsap.fromTo('#nav',{
            opacity:0,
            y:0
        },{
            opacity:1,
            delay:1.5,
            stagger:1
        })
        gsap.fromTo('.nav-link',{
            opacity:0,
            y:0
        },{
            opacity:1,
            delay:1,
            ease:'power1.inOut',
            duration:2,
            stagger:1
        })
    },[])

  return (
   <div id="nav" className="parent-bg bg-dark fixed-top">
  <nav className="navbar navbar-expand-lg navbar-dark py-3">
    <div className="container">
      <a className="navbar-brand text-white text-uppercase fw-bolder" href="#Home">MAZIN SAFWAT</a>
      <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon text-white" />
      </button>
      <div className="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item d-lg-flex">
            <a className="nav-link active  text-uppercase fw-bold" aria-current="page" href="#Home">HOME</a>
            <a className="nav-link  text-uppercase fw-bold" href="#about">ABOUT</a>
            <a className="nav-link  text-uppercase fw-bold" href="#Projects">PROJECTS</a>
            <a className="nav-link  text-uppercase fw-bold" href="#Contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}

