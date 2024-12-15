/* eslint-disable react/no-unescaped-entities */
import AboutmeSkills from "./CopmComponents/AboutmeSkills";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Button from "./CopmComponents/Button";

gsap.registerPlugin(ScrollTrigger);

export default function Aboutme() {
  const scrollRef = useRef();
  useGSAP(function () {
    const boxs = gsap.utils.toArray(scrollRef.current.children);
    boxs.forEach((box) => {
      gsap.fromTo(
        box,
        {
          opacity: 0,
          x: 50,
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
        }
      );
    });

    
    gsap.fromTo(
      ".sec2",
      {
        opacity: 0,
        x: 20,
      },
      {
        scrollTrigger: {
          trigger: ".sec2",
          start: "top 90%",
          end: "top 70%",
          scrub: true,
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.3, 
      }
    );
  }, []);

  const arr = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "jQuery",
    "React",
    "Angular-17",
  ];

  return (
    <section id="about" ref={scrollRef} className="bg-light py-5 section overflow-hidden">
      <div className="container">
        <div className="row">
          <h2 className="text-center text-uppercase fw-bold fs-2">About me</h2>
          <p className="text-center fs-4 py-3">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
          <div className="col-md-6 col-12 py-3 sec2">
            <p className="fs-5 lh-lg">
              I'm a Frontend Focused Web Developer building and managing the
              Front-end of Websites. Check out some of my work in the{" "}
              <a href="#Projects">Projects</a> section.
              <br />
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <Button>
            <a
                href="#Contact"
                className="text-black text-decoration-none"
              >
                Contact Me
              </a>
          </Button>
          <Button>
            <a
                href="https://drive.google.com/file/d/1RGBH30SjqhB5V1N5JLJg0lt0_d5EeTQs/view?usp=sharing"
                className="text-black text-decoration-none"
                target="_blank"
              >
                View CV <i className="far fa-eye" />
              </a>
          </Button>
           
            
          
          </div>
          <div className="col-md-6 col-12 py-4 py-md-3 sec2">
            <p className="fs-5 lh-lg">SKILLS</p>
            <div className="gap-2">
              {arr.map(function (skill, i) {
                return (
                  <AboutmeSkills key={i}>
                    {skill}
                  </AboutmeSkills>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
