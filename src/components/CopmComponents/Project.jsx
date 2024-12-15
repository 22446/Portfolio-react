/* eslint-disable react/prop-types */

import { useGSAP } from "@gsap/react";
import IconAngReac from "./IconAngReac"
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function Project({arr , text,linkvercal,linkgit ,img,kind='',color=''} ) {
  const scrollRef = useRef();
  useGSAP(function () {
    const boxs = gsap.utils.toArray(scrollRef.current.children);
    boxs.forEach((box) => {
      gsap.fromTo(
        box,
        {
          opacity: 0,
          x:20,
       
        },
        {
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power1.out",
          stagger: 0.3
        }
      );
    });
  }, []);
  return (
      <div ref={scrollRef} className="col-lg-4 col-md-6 col-12 position-relative  mt-3 myHover2 overflow-hidden">
       {kind.length>1&&<IconAngReac kind={kind} color={color}/>}
              <div className=" bg-white shadow rounded-3">
                <div className="focusout position-relative overflow-hidden  rounded-2">
                  <div className=" d-flex flex-wrap flex-column  align-items-center justify-content-center  layer rounded-2">
                    <div className="d-flex flex-wrap align-items-center justify-content-center gap-1 pt-2">
                    {arr.map(function(skill){
                        return <p key={skill} className="bg-secondary text-white p-2 rounded-2 text-capitalize  shadow">{skill}</p>   
                    })}
                      
                    </div>
                    <p className="fw-bold text-uppercase">{text}</p>
                    <div>
                      <a href={linkvercal} target="_blank"> <i className="fas fa-unlink rounded-circle p-2 " /></a>
                      <a href={linkgit} target="_blank">   <i className="fab fa-github rounded-circle   p-2  " /></a>
                    </div>
                  </div>
                  <img src={img} className="card-img-top " alt='project' />
                </div>
              </div>
            </div>
  )
}
