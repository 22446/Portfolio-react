import { useState } from "react";
import Project from "./CopmComponents/Project";
import HappyCart from "/images/HappyCart.PNG";
import ReactEcommerce from "/images/ReactEcommerce.PNG";
import LinkUpReact from "/images/LinkUpReact.PNG";
import FitFuel from "/images/fifuel.png";
import LinkUp from "/images/LinkUp.PNG";
import Meals from "/images/meals.PNG";
import GameOver from "/images/GameOver.PNG";
import EgyptianParty from "/images/egyptionParty.PNG";
import DevFolio from "/images/DevFolio.PNG";
import CSSGrid from "/images/CSSGrid.PNG";
import Mailfy from "/images/mailfy.PNG";
import DanialsPortfolio from "/images/DanialsPortfolio.PNG";
import signIn from "/images/SignInSystem.PNG";
export default function ProtfolioProjects() {
    const[show,setShow]=useState(false)
    function handleSHow(){
        setShow(!show)
    }
  return (

   <div className="Portofolio  bg-white  pt-5 pb-4">
  <div className="container">
    <div id="Projects" className="row">
      <h2 className="text-center py-2 text-uppercase fw-bold fs-2">Projects</h2>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
          <div className="d-flex row py-4">
            <Project arr={['HTML','CSS','Bootstrap','Typescript','Angular-17']} kind={'Angular'} color={'danger'} text={'Happy-Cart-Ecommerce'} img={HappyCart} linkgit={'https://github.com/22446/HappyCart-Ecommerce-'} linkvercal={'https://happy-cart-ecommerce.vercel.app/'} />
            <Project arr={['HTML','CSS','Bootstrap','js','React']} kind={'React'} color={'info'} text={'FreashCart-Ecommerce'} img={ReactEcommerce} linkgit={'https://github.com/22446/E-commerce-react'} linkvercal={'https://freshcart-khaki.vercel.app/'} />
            <Project arr={['HTML','CSS','Bootstrap','Typescript','Next']} text={'LinkUp'} kind={'Next'} color={'info'} img={LinkUpReact} linkgit={'https://github.com/22446/social-app-nextjs'} linkvercal={'https://social-app-nextjs-delta.vercel.app/'} />
            <Project arr={['HTML','CSS','Bootstrap','Typescript','Angular-17']} text={'FitFuel'} kind={'Angular-17'} color={'danger'} img={FitFuel} linkgit={'https://github.com/22446/FitFuel'} linkvercal={'https://fit-fuel-xi.vercel.app'} />
            <Project arr={['HTML','CSS','Bootstrap','Typescript','Angular-17']} text={'Link-up Social-app'} kind={'Angular-17'} color={'danger'} img={LinkUp} linkgit={'https://github.com/22446/link-up'} linkvercal={'https://link-up-ashen-ten.vercel.app/'} />
            <Project arr={['HTML','CSS','Bootstrap','Typescript','Angular-17']} text={'Recipe Roost'} kind={'Angular-17'} color={'danger'} img={Meals} linkgit={'https://github.com/22446/Recipe-Roost'} linkvercal={'https://recipe-roost-sandy.vercel.app/'} />
        
            <button className="btn btn-dark clickToShow my-2" onClick={handleSHow}>{show?'Show Less':'Show More'} </button>
            {show?
          <>
            <Project arr={['HTML','CSS','Bootstrap','JS']} text={'Sign In System'}   img={signIn} linkgit={'https://github.com/22446/validated-login-search-recipe-api'} linkvercal={'https://22446.github.io/validated-login-search-recipe-api/'} />
            <Project arr={['HTML','CSS','Bootstrap','JS']} text={'Game Over'}   img={GameOver} linkgit={'https://github.com/22446/FreePlay-Explorer-Login-Validate-Discover'} linkvercal={'https://22446.github.io/FreePlay-Explorer-Login-Validate-Discover/'} />
            <Project arr={['HTML','CSS','Bootstrap','JS','jQuery']} text={' ُEgyption Party'}   img={EgyptianParty} linkgit={'https://github.com/22446/jQueryStart'} linkvercal={'https://22446.github.io/jQueryStart'} />
            <Project arr={['HTML','CSS','Bootstrap']} text={'DevFolio'}   img={DevFolio} linkgit={'https://github.com/22446/third-html-css-bootstrap'} linkvercal={'https://22446.github.io/third-html-css-bootstrap/'} />
            <Project arr={['HTML','CSS']} text={'Grid Project'}   img={CSSGrid} linkgit={'https://github.com/22446/HTML-CSS-grid-project'} linkvercal={'https://22446.github.io/HTML-CSS-grid-project/'} />
            <Project arr={['HTML','CSS']} text={'Mailfy'}   img={Mailfy} linkgit={'https://github.com/22446/HTML-CSS-first-project'} linkvercal={'https://22446.github.io/HTML-CSS-first-project/'} />
            <Project arr={['HTML','CSS','Bootstrap']} text={'DanialsPortfolio'}   img={DanialsPortfolio} linkgit={'https://github.com/22446/HTML-CSS-Bootstrap-4-project'} linkvercal={'https://22446.github.io/HTML-CSS-Bootstrap-4-project'} />
          </>  
        :''}
            
          </div>
        </div>
        
      </div>
    </div>
  </div>
</div>

  )
}
