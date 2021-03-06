import React from 'react'
import {Link}from 'react-router-dom'

export default function AboutSun() {
return (
<div className="about-sun">
    <div className="about-header">
        <Link className="ben-link"
        to="/"><i className="fas fa-chevron-left"></i> Back</Link>

        <div>

        </div>
    </div>

    <h1 className="about-sun-ttle">About</h1>
    
    <div className="about-sun-contentbx">
        <p className="abt-sun-para">
        <span className="abt-sun-span">Sun Advisor </span>
        would like to serve and give you free financial advise and quotes which would be beneficial to you and your loved ones for life. If you are considering to avail of the following financial products we would be glad to guide and assist you on your online application process. 
        We have different plans for insurance with investment, comprehensive life and health insurance/critical illness benefit, whole life insurance, and term life and health insurance, and many more.
        </p>

        <img src="/images/father.svg" alt="sunadvisor"
        className="abt-sun-img" />


    </div>

</div>
)
}
