import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer'

export default function Home() {

const [isOpen, setIsOpen] = useState(false)

useEffect( () => {

if(!isOpen){
window.document.querySelector('.the-menus').style.transform="scaleX(0)"
}else{
 window.document.querySelector('.the-menus').style.transform="scaleX(1)"
}

}, [isOpen])

const renderMenu = () => (
<div className="the-menus">
  <ul className="themenu-ul">
    <li className="menu-li">
    <Link 
    className="menu-link" 
    to="/about">ABOUT</Link>
    </li>

    <li className="menu-li">
    <Link 
    className="menu-link" 
    to="/benefits">SUN BENEFITS</Link>
    </li>

    <li className="menu-li">
    <Link 
    className="menu-link" 
    to="/intro">INTRODUCTION</Link>
    </li>

    <li className="menu-li">
    <Link 
    className="menu-link" 
    to="/intro">ARTICLES</Link>
    </li>

    <li className="menu-li">
    <Link 
    className="menu-link" 
    to="/contact">HAVE QUESTIONS ?</Link>
    </li>
  </ul>
</div>
)
return (
<div className="home-page">
{renderMenu()}
<header>
  <div className={isOpen ? 'men-close' : 'men-bx'} onClick={() => {
  setIsOpen(!isOpen)
  }}>
    <div className="men-line"></div>
  </div>
  
  <div className="logo-name">ADVISOR FOR LIFE</div>

  <div>
  <Link to="/signin">
  <i className="fas fa-user-lock admin-con">
  </i>
  </Link>
  </div>
</header>


<div className="rectangle"></div>
<div className="circle"></div>


<div className="front">
  <div className="banner-Left">

    <div className="b-leftone">
      <p className="b-capone "><span className="cap-one letus">Let us start your</span><br />
      financial plan today.
      </p>
    </div>

    <div className="b-lefttwo">
      <p className="b-captwo"> <span className="cap-one">Henry D. Tupas</span><br />
      Sun Life Advisor, King Melchizedek Unit<br />
      Crimson Queen Branch <br/>
      <a className="cap-a"
      href="mailto:henry.d.tupas@sunlife.com.ph">henry.d.tupas@sunlife.com.ph</a><br/>
      0917-187-8443
      </p>
    </div>

    <Link to="/form/1" className="email-a"
    id="gotomail">AVAIL NOW</Link>

    </div>

    <div className="banner-right">

      <img className="banner-img"
      src="/images/frontpic.jpg" alt="sunlife advisor" />

    </div>
</div>

<div className="how">
  <h1 className="ask-name">FREQUENTLY ASKED QUESTIONS ?</h1>

    <div className="ask-cont">

      <div className="askbx">
        <Link to="/contact">
        <img src="/images/askmehowone.png"
        alt="advisory" className="askimg" />
        </Link>
      </div>

      <div className="askbx">
      <Link to="/contact">
        <img src="/images/askmehowtwo.png"
        alt="advisory" className="askimg" />
        </Link>
      </div>

      <div className="askbx">
      <Link to="/contact">
        <img src="/images/askmehowthree.jpg"
        alt="advisory" className="askimg" />
        </Link>
      </div>
      
    </div>
</div>

<div className="sun-life">
  <h1 className="sl-headone">Brighter Life</h1>
  <h2 className="sl-headtwo"><i>begins at home</i> </h2>

  <div className="sl-container">

      <ul className="sl-ul">

        <li className="sl-li">
          <div className="sl-iconbx">
            <img src="/images/video-call.svg"
            alt="henry tupas" className="sl-img" />
          </div>
          
          <div className="sl-right">
            <h2 className="sl-hone">E-Meeting</h2>
            <p className="sl-para">Meet remotely for comfort</p>
          </div>
        </li>


        <li className="sl-li">
          <div className="sl-iconbx">
            <img src="/images/website.svg"
            alt="henry tupas" className="sl-img" />
          </div>
          <div className="sl-right">
            <h2 className="sl-hone">E-Application</h2>
            <p className="sl-para">Download and sign application online</p>
          </div>
        </li>

        <li className="sl-li">
          <div className="sl-iconbx">
            <img src="/images/purse.svg"
            alt="henry tupas" className="sl-img" />
          </div>
          <div className="sl-right">
            <h2 className="sl-hone">E-Payment</h2>
            <p className="sl-para">Pay the premium via online channels</p>
          </div>
        </li>

        <li className="sl-li">
          <div className="sl-iconbx">
            <img src="/images/insurance.svg"
            alt="henry tupas" className="sl-img" />
          </div>
          <div className="sl-right">
            <h2 className="sl-hone">E-Policy</h2>
            <p className="sl-para">Receive the policy contract through email</p>
          </div>
        </li>

      </ul>

      <div className="sl-rightimgbx">
        <img src="/images/pitching.svg"
        alt="henry tupas"
        className="sl-right-img" />
      </div>
  </div>

  <Link to="/contact" className="askme-btn">HOW TO START ?</Link>
</div>




<Footer />
</div>
)
}
