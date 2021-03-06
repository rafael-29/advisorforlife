import React from 'react'
import { Link } from 'react-router-dom'

export default function Introduction() {
return (
<div className="intro-page">

    <div className="about-header">
        <Link className="ben-link"
        to="/"><i className="fas fa-chevron-left"></i> Back</Link>

        <div>

        </div>
    </div>

    <h1 className="about-sun-ttle intro-h">Getting Started</h1>

    <div className="intro-imgbx">
    <img src="/images/intro-img.jpg" alt="sun advisor"
    className="intro-img" />
    </div>

    <p className="abt-sun-para">
        <span className="abt-sun-span">MAY INSURANCE KA NA...MAY IPON KA PA... SAAN KA PA? 👨‍👩‍👧‍👦</span>
        <br /><br />

        Sa Sun Maxilink Prime at Sun Maxilink 100 (Insurance na may kasamang Investment) ang hangad na ipon ay kaya ng abutin.🙋‍♂️🙋‍♀️

        <br /><br />
        Bukod sa paglago ng pera mo (na mas malaki kumpara sa savings sa bangko) ang Sun Maxilink Prime at Sun Maxilink 100 ay nagbibigay ng pinansiyal na proteksion sa mga di inaasahang pangyayari gaya ng sakit, aksidente, kamatayan, at disability. 🤕

        <br /> <br />
        Ang living benefit mula sa investment ay maaring pondohan ang pag-aaral (Education Fund), pagbiyahe (Travel Fund) at pag-reretiro (Retirement Fund), atbp...👵👴

        <br /><br />

        Sa iba pang kaalaman maaring sumulat sa website na ito.👨‍💻Para sa inyong free quote
        <br /><br/>
        Request a free quote at:<a className="intro-link" href="http://www.tiny.cc/brightergen">tiny.cc/brightergen</a>
        <br /><br /><br />


        <div className="b-lefttwo">
        <p className="b-captwo"> <span className="cap-one">Henry D. Tupas</span><br />
        Sun Life Advisor, King Melchizidek Unit<br />
        Crimson Queen Branch <br/>
        <a className="cap-a"
        href="mailto:henry.d.tupas@sunlife.com.ph">henry.d.tupas@sunlife.com.ph</a><br/>
        0917-187-8443
        </p>
        </div>
    </p>
</div>
)
}
