import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
export default function Contactus() {
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
        duration: 2,
        ease: "power1.inOut",
        stagger: 1.8, 
      }
    );
  }, []);
  return (
   <div className="form bg-secondary-subtle pt-5 pb-5 overflow-hidden" ref={scrollRef}>
  <div id="Contact" className="container">
    <div className="row shadow bg-white  p-5">
      <div className="col-md-6 col-12  border-botoomMe sec2">
        <h3>Get in Touch</h3>
        <p className="lead  fw-light lh-base  mt-5 ">Feel free to Contact me by submitting the form  and I will get back to you as soon as possible</p>
        <ul className="d-flex list-unstyled flex-column gap-2 fw-light ">
          <li><i className="fas fa-mobile-alt me-2  text-dark" />01019835847</li>
          <li><i className="far fa-envelope me-2  text-dark" /> mazin.safwat66@gmail.com</li>
        </ul>
      </div>
      <div className="col-md-6 col-12  border-botoomMe sec2">
        <h3 className="pt-md-0 pt-2 m-0 pb-0">Send Message</h3>
        <div className="pt-5 pb-3 ">
          <form action="mailto:mazin.safwat66@gmail.com" method="post" encType="text/plain">
            <div className="form-group pb-3"> 
              <input type="text" className="form-control col-form-label " name="Name" aria-describedby="NameHelp" placeholder="Your Name" />
            </div>
            <div className="form-group pb-3"> 
              <input type="email" className="form-control col-form-label " name="Email" aria-describedby="emailHelp" placeholder="Your Email" />
            </div>
            <div className="form-group pb-3 ">
              <input type="text" className="form-control col-form-label " name="Subject" placeholder="Subject" />
            </div>
            <div className="form-group pb-3">
              <textarea className="form-control" placeholder="Message" name="Message" rows={5} defaultValue={""} />
            </div>
            <div className="d-flex align-items-center justify-content-center pt-5">
              <button type="submit" className="btn btn-dark btn-lg text-center rounded-end-5 rounded-start-5 ">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
