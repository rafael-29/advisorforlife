import React from 'react'
import { Link } from 'react-router-dom'

export default function Thankyou() {
return (
<div className="finish-fill">
<img src="/images/finish.svg" className="finishimg" 
alt="sun advisor" />

    <p className="we-rec">we received your application form</p>
    <h1 className="f-h1">Thank you for trusting sun advisor of Sun Life Financial</h1>

    <ul className="theben-iconz">
    <a href="https://www.facebook.com/henry.vt" className="theben-iconli"><i class="fab fa-facebook-f"></i></a>
    <a href="#" className="theben-iconli"><i class="fab fa-linkedin-in"></i></a>
    <a href="mailto:henry.d.tupas@sunlife.com.ph"className="theben-iconli"><i class="fas fa-envelope"></i></a>
</ul>

<div onClick={() => {
window.document.getElementById('trilink').click()
}} className="back-triangle">
    <Link to="/" 
    className="tri-link" id="trilink">BACK</Link>
</div>

</div>
)
}
