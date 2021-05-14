import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Checkbox, FormControlLabel} from '@material-ui/core'



const Contact = () => {

const [cForm, setcForm] = useState({
name: '',
email: '',
phone: '',
message: ''
})

const [accept, setAccept] = useState(false)

const changeCForm = e => {
const {name, value} = e.target
setcForm({...cForm, [name]: value})
}


const sendForm = e => {
e.preventDefault();

axios.post('https://bakedbyartapi.herokuapp.com/henrymessages/add', cForm)
.then( () => {
alert('Your message has been sent');
window.location.reload();
})
.catch(err => console.log(err))

}

return(
<div className="contact-page">

    <div className="about-header">
        <Link className="ben-link"
        to="/"><i className="fas fa-chevron-left"></i> Back</Link>

        <div>
        </div>
    </div>

    <form className="contact-form" onSubmit={sendForm}>
        <h2 className="cont-h2">CONTACT FORM</h2>

        <div className="cform-inpbx">
            <div className="cform-name">Full Name</div>
            <input type="text" value={cForm.name}
            onChange={changeCForm} name="name"
            className="cform-inp inp-name" />
        </div>

        <div className="cform-inpbx">
            <div className="cform-name">Email</div>
            <input type="email" value={cForm.email}
            onChange={changeCForm} name="email"
            className="cform-inp" />
        </div>

        <div className="cform-inpbx inpnumdatecreated">
            <div className="cform-name">Phone</div>
            <input type="number" onwheel="this.blur()" value={cForm.phone}
            onChange={changeCForm} name="phone"
            className="cform-inp" />
        </div>

        <div className="cform-inpbx-m">
            <div className="cform-name-m">Your Message</div>
            <textarea cols="30" rows="5" value={cForm.message}
            onChange={changeCForm} name="message"
            className="cform-inp-m" />
        </div>

        <FormControlLabel checked={accept}
        control={<Checkbox>I have read and accept <Link to="/termscon">Terms</Link> and <Link to="/privacy">Privacy Policy</Link> </Checkbox>}
        onChange={() => setAccept(!accept)} />

        <button className="cform-btn">SEND</button>
    </form>


</div>
)
}
export default Contact