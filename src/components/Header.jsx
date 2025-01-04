/* eslint-disable react/no-unescaped-entities */

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Header() {
    useGSAP(function(){
        gsap.fromTo('#Home',{
            opacity:0,
            y:0,
           
        },{
            opacity:1,
            delay:1.5,
            stagger:1
        })
        gsap.fromTo('.text',{
            opacity:0,
            
            x:50
        },{
            opacity:1,
            delay:1,
            x:0,
         
            ease:'power1.inOut',
            duration:1,
            stagger:1
        })
       
    },[])
  return (

  <header id="Home"  className="d-flex  align-items-center text-center overflow-hidden">
  <div className="container">
    <h1  className=" text text-uppercase text-white fw-bolder">Hey, I'm Mazin Safwat</h1>
    <p  className="text text-white fs-4 py-3">
      Front-End Developer with a strong foundation in <span className="text-info fw-bold">React</span> , <span className="text-danger fw-bold">Angular</span> , <span className="text-success fw-bold">Vue.js</span> , HTML, Typescript, CSS, and JavaScript. Focused on building responsive and user-friendly web applications. Passionate about learning new technologies and creating dynamic user interfaces. Eager to contribute to projects and grow as a developer
    </p>
    <div className="text text-center pb-3 fs-4 ">
      <a href="mailto:mazin.safwat66@gmail.com.com" className="text-decoration-none" target="_blank"> <i className="fas fa-envelope text-white" /></a>
      <a href="https://github.com/22446" className="text-decoration-none" target="_blank">  <i className="fab fa-github text-white" /></a>
      <a href="https://www.linkedin.com/in/mazin-safwat-3246491ba/" className="text-decoration-none" target="_blank"> <i className="fa-brands fa-linkedin text-white" /></a>
    </div>
    <button  type="button" className=" text btn btn-outline-light px-3 text-center"><a href="#Projects" className="text-white text-decoration-none">PROJECTS</a> <i className="fas fa-arrow-down fs-6" /></button>
  </div>
</header>

  )
}
