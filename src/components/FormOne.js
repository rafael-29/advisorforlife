import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const FormOne = () => {

const [state, setState] = useState({
fullname: '',
sex: '', age: '',
birthday: '',
birthplace: '',
civilstat: '', clr: '',
citizenship: '', ptin: '',
sss: '', homephone: '', workphone: '',
mobilephone: '', pra: '',
presentra: '', po: '', nofw: '',
tye: '', annuali: '', nob: '',
ba: '', otheroccup: '',
prevoccup: '', emailad: '',
benef: '', benebirthdate: '',
height: '', weight: '', motherage: '',
fatherage: '', broage: '', sisage: '',
govid: '', idnum: '', expid: ''
})

const handleChange = e => {
const {name, value} = e.target;
setState({...state, [name]: value})
}

const submitToLocal = e => {
e.preventDefault();

if(state.fullname === '') return alert('Please Enter Your Name')


localStorage.setItem('form-one', JSON.stringify(state))


window.location.replace('/form/2')
}

return(
<div className="form-page">
    <div className="about-header">
        <Link className="ben-link"
        to="/"><i className="fas fa-chevron-left"></i> Back</Link>

        <div>

        </div>
    </div>

    <div className="formone-cnt">
        <p className="fone-prec">
            General Info Sheet to complete
            remote application form
        </p>

        <form className="form-main">
            <div className="form-div">
                <label className="frm-lbl">FullName: </label> <input type="text"
                className="normal-inp"
                value={state.fullname}
                onChange={handleChange} name="fullname" required /><br />
            </div>

            <div className="form-diff">
                <label className="frm-lbl">Gender: </label>
                
                <input type="text"
                className="diff-inp"
                value={state.sex} 
                onChange={handleChange} name="sex"  required/>

                <label className="frm-lbl">Age: </label>
                <input type="number"
                className="diff-inp"
                value={state.age} 
                onChange={handleChange} name="age"  required/>

            </div>

            <div className="form-diff">
                <label className="frm-lbl">Birthday: </label>
                
                <input type="text"
                className="normal-inp"
                value={state.birthday} 
                onChange={handleChange} name="birthday" required />

            </div>
            <div className="form-div">
                <label className="frm-lbl">BirthPlace: </label>
                
                <input type="text"
                className="normal-inp"
                value={state.birthplace} 
                onChange={handleChange} name="birthplace" required />

            </div>

            <div className="form-diff">
                <label className="frm-lbl">Civil Status: </label>
                
                <input type="text"
                className="diff-inp"
                value={state.civilstat} 
                onChange={handleChange} name="civilstat" required />

                <label className="frm-lbl">Citizenship: </label>
                <input type="text"
                className="diff-inp"
                value={state.citizenship} 
                onChange={handleChange} name="citizenship" required />

            </div>

            <div className="form-long">
                <label className="frm-lbl">Country of Legal Residence: </label>
                
                <input type="text"
                className="normal-inp"
                value={state.clr} 
                onChange={handleChange} name="clr" required />

            </div>

            <div className="form-div">
                <label className="frm-lbl">PhilippineTinNo: </label>
                
                <input type="number"
                className="normal-inp"
                value={state.ptin} 
                onChange={handleChange} name="ptin" required />

            </div>

            <div className="form-div">
                <label className="frm-lbl">SSS/orGSIS: </label>
                
                <input type="text"
                className="normal-inp"
                value={state.sss} 
                onChange={handleChange} name="sss" required />

            </div>
            <div className="form-div">
                <label className="frm-lbl">HomePhone: </label>
                
                <input type="number"
                className="normal-inp"
                value={state.homephone} 
                onChange={handleChange} name="homephone" />

            </div>
            <div className="form-div">
                <label className="frm-lbl">WorkPhone: </label>
                
                <input type="number"
                className="normal-inp"
                value={state.workphone} 
                onChange={handleChange} name="workphone" />

            </div>
            <div className="form-div">
                <label className="frm-lbl">MobilePhone: </label>
                
                <input type="number"
                className="normal-inp"
                value={state.mobilephone} 
                onChange={handleChange} name="mobilephone" required />

            </div>
            <div className="form-long">
                <label className="frm-lbl">Permanent Residence Add: </label>
                
                <input type="text"
                className="normal-inp"
                value={state.pra} 
                onChange={handleChange} name="pra" required />

            </div>

            <div className="form-long">
                <label className="frm-lbl">Present Residence Add: </label>
                
                <input type="text"
                className="normal-inp"
                value={state.presentra} 
                onChange={handleChange} name="presentra" required />

            </div>

            <div className="form-div">
                <label className="frm-lbl">Occupation/Position: </label>
                
                <input type="text"
                className="normal-inp"
                value={state.po} 
                onChange={handleChange} name="po" required />

            </div>

            <div className="form-div">
                <label className="frm-lbl">NatureOfwork: </label>
                
                <input type="text"
                className="normal-inp"
                value={state.nofw} 
                onChange={handleChange} name="nofw" required />

            </div>

            
            <div className="form-diff">
                <div className="frm-lbl">Total Years in Employment/Business: </div>
                <input type="number"
                className="diff-inp"
                value={state.tye} 
                onChange={handleChange} name="tye" required />

            </div>

            <div className="form-diff">
                <div className="frm-lbl">Annual Income: </div>
                <input type="text"
                className="diff-inp"
                value={state.annuali} 
                onChange={handleChange} name="annuali" required />

            </div>
            <div className="form-long">
                <div className="frm-lbl">Employer/Name of Business: </div>
                <input type="text"
                className="normal-inp"
                value={state.nob} 
                onChange={handleChange} name="nob" required />

            </div>
            <div className="form-long">
                <label className="frm-lbl">Business Address: </label>
                
                <input type="text"
                className="normal-inp"
                value={state.ba} 
                onChange={handleChange} name="ba" required />

            </div>
            <div className="form-div">
                <div className="frm-lbl">OtherOccupation: </div>
                
                <input type="text"
                className="normal-inp"
                value={state.otheroccup} 
                onChange={handleChange} name="otheroccup" />

            </div>

            <div className="form-long">
                <label className="frm-lbl">
                    Previous Occupation and Name of the Previous Employee
                    (<span className="if-span">if presently unemployed or retired</span>)
                </label>

                <input type="text"
                className="normal-inp"
                value={state.prevoccup} 
                onChange={handleChange} name="prevoccup" />

            </div>

            <div className="form-div">
                <div className="frm-lbl">EmailAddress: </div>
                
                <input type="text"
                className="normal-inp"
                value={state.emailad} 
                onChange={handleChange} name="emailad" />

            </div>

            <div className="form-long">
                <div className="frm-lbl">Beneficiaries and their Birthdates</div>

                <textarea name="benebirthdate" rows="10" cols="30"
                value={state.benebirthdate}
                onChange={handleChange} className="normal-inp" />

            </div>

            <div className="form-diff">
                <label className="frm-lbl">Height: </label>
                
                <input type="text" placeHolder="ex: 5'2ft/164cm"
                className="diff-inp"
                value={state.height} 
                onChange={handleChange} name="height"  required/>

                <label className="frm-lbl">Weight: </label>
                <input type="text"
                className="diff-inp"
                value={state.weight} 
                onChange={handleChange} name="weight"  required/>

            </div>

            <div className="form-diff">
                <div className="frm-lbl">Age of Father: </div>
                
                <input type="number"
                className="diff-inp"
                value={state.fatherage} 
                onChange={handleChange} name="fatherage" />

            </div>

            <div className="form-diff">
                <div className="frm-lbl">Age of Mother: </div>
                
                <input type="number"
                className="diff-inp"
                value={state.motherage} 
                onChange={handleChange} name="motherage" />

            </div>

            <div className="form-diff">
                <div className="frm-lbl">Age of Brother: </div>
                
                <input type="number"
                className="diff-inp"
                value={state.broage} 
                onChange={handleChange} name="broage" />

            </div>

            
            <div className="form-diff">
                <div className="frm-lbl">Age of Sister: </div>
                
                <input type="number"
                className="diff-inp"
                value={state.sisage} 
                onChange={handleChange} name="sisage" />

            </div>

            <p className="form-prec">if any of them is deceased, advise age of death. if any of them has illness or health issues on the side of their Age.            </p>

            <div className="form-diff">
                <div className="frm-lbl">Gov id: </div>
                
                <input type="number"
                className="diff-inp"
                value={state.govid} 
                onChange={handleChange} name="govid" />

                <div className="frm-lbl">id no: </div>
                
                <input type="number"
                className="diff-inp"
                value={state.idnum} 
                onChange={handleChange} name="idnum" />

            </div>

            <div className="form-diff">
                <div className="frm-lbl">Expiry Date: </div>
                
                <input type="text"
                className="diff-inp"
                value={state.expid} 
                onChange={handleChange} name="expid" />
            </div>

            <button onClick={submitToLocal}
            className="frmone-btn">NEXT</button>


        </form>
    </div>

</div>
)
}
export default FormOne;