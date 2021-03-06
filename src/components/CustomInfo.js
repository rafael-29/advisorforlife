import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const CustomInfo = (props) => {

const id = props.theprops.match.params.id

const [info, setInfo] = useState()

const renderInfo = () => {
axios.get(`/customer/${id}`)
.then( results => setInfo(results.data))
.catch(err => console.log(err))
}

useEffect( () => {
if(info === undefined){ console.log('no data')}else{
console.log(info.formone)
}

}, [info])

useEffect( () => {
renderInfo()
}, [])

const renderPersonDetails = () => (
<React.Fragment>

<h3 className="cp-ttle">Person details</h3>
<div className="cp-pdet">
    <div>
    <div className="cp-name">Full Name: <span className="cp-span">{info.formone.fullname}</span></div>
    <div className="cp-name">Gender: <span className="cp-span">{info.formone.sex}</span> Age: <span className="cp-span">{info.formone.age}</span></div>
    <div className="cp-name">Birthday: <span className="cp-span">{info.formone.birthday}</span></div>
    <div className="cp-name">Birthplace: <span className="cp-span">{info.formone.birthplace}</span></div>
    <div className="cp-name">Civil Status: <span className="cp-span">{info.formone.civilstat}</span> </div>
    <div className="cp-name">Citizenship: <span className="cp-span">{info.formone.citizenship}</span></div>
    <div className="cp-name">Country of legal residence: <br /><span className="cp-span">{info.formone.clr}</span></div>
    <div className="cp-name">PhilippineTinNo: <span className="cp-span">{info.formone.ptin}</span></div>
    <div className="cp-name">sss: <span className="cp-span">{info.formone.sss}</span></div>
    <div className="cp-name">Home Phone:<span className="cp-span">{info.formone.homephone}</span> </div>
    <div className="cp-name">Work Phone: <span className="cp-span">{info.formone.workphone}</span></div>
    <div className="cp-name">Mobile Phone: <span className="cp-span">{info.formone.mobilephone}</span></div>
    <div className="cp-name">Permanent Residence Add: <br /> <span className="cp-span">{info.formone.pra}</span></div>
    <div className="cp-name">Present Residence Add: <br /> <span className="cp-span">{info.formone.presentra}</span></div>
    <div className="cp-name">Occupaton/Position: <span className="cp-span">{info.formone.po}</span></div>
    <div className="cp-name">Nature of work: <span className="cp-span">{info.formone.nofw}</span></div>
    <div className="cp-name">Total Years in Employment/Business: <span className="cp-span">{info.formone.tye}</span></div>
    </div>
    <div>
    <div className="cp-name">Annual Income: <span className="cp-span">{info.formone.annuali}</span></div>
    <div className="cp-name">Employer/Nameof Business: <span className="cp-span">{info.formone.nob}</span></div>
    <div className="cp-name">Business Address: <br /> <span className="cp-span">{info.formone.ba}</span></div>
    <div className="cp-name">Other Occupation: <span className="cp-span">{info.formone.otheroccup}</span></div>
    <div className="cp-name">Previous Occupation: <span className="cp-span">{info.formone.prevoccup}</span></div>
    <div className="cp-name">Email Address: <span className="cp-span">{info.formone.emailad}</span></div>
    <div className="cp-name">Beneficiary & birthdates: <span className="cp-span">{info.formone.benebirthdate}</span></div>
    <div className="cp-name">Height: <span className="cp-span">{info.formone.height}</span> Weight: <span className="cp-span">{info.formone.weight}</span></div>
    <div className="cp-name">Mother Age: <span className="cp-span"></span>{info.formone.motherage} Father Age: <span className="cp-span">{info.formone.fatherage}</span></div>
    <div className="cp-name">Brother Age: <span className="cp-span"></span>{info.formone.broage} Sister Age: <span className="cp-span">{info.formone.sisage}</span></div>
    <div className="cp-name">GovID: <span className="cp-span"></span>{info.formone.govid} IDno. <span className="cp-span">{info.formone.idnum}</span> ExpID. <span className="cp-span">{info.formone.expid}</span></div>
    </div>

</div>

<div className="client-ass-form">
    <div className="c-a-tle">Sun Life - CLIENT ASSESSMENT FORM</div>

    <div className="c-a-bx">
        <div className="c-a-que">I. What is your present life stage? (Choose one)</div>
        <div className="c-a-answ">Answer: {info.formtwo.qone}</div>
    </div>
    <div className="c-a-bx">
        <div className="c-a-que">II. What is/are your objective(s) for purchasing our product? (Choose all that apply)(Choose one)</div>
        <div className="c-a-answ">Answer: {info.formtwo.qtwo}</div>
    </div>
    <div className="c-a-bx">
        <div className="c-a-que">III. What type(s) of products are you looking for to meet your objective(s) above? (Choose all that apply)</div>
        <div className="c-a-answ">Answer: {info.formtwo.qthree}</div>
    </div>
    
    <div className="c-a-bx">
        <div className="c-a-que">IV. For how long are you able and willing to contribute and keep THIS application? (Choose one)</div>
        <div className="c-a-answ">Answer: {info.formtwo.qfour}</div>
    </div>
    
    <div className="c-a-bx">
        <div className="c-a-que">V. What percent of your investible/financial assets cash, deposits, mutual fund/UITFs, stocks, or any asset easily converted to cash will be set aside for THIS application?</div>
        <div className="c-a-answ">Answer: {info.formtwo.qfive}</div>
    </div>
    
    <div className="c-a-bx">
        <div className="c-a-que">VI. Approximate Net Worth</div>
        <div className="c-a-answ">Answer: {info.formtwo.qsix}</div>
    </div>
    
    <div className="c-a-bx">
        <div className="c-a-que">VII. How much is your knowledge of investments? (Choose one)</div>
        <div className="c-a-answ">Answer: {info.formtwo.qseven}</div>
    </div>
    
    <div className="c-a-bx">
        <div className="c-a-que">VIII. How many years have you been investing in stocks, bonds and mutual funds/UITFs? (Choose one)</div>
        <div className="c-a-answ">Answer: {info.formtwo.qeight}</div>
    </div>

    <div className="c-a-bx">
        <div className="c-a-que">IX. How would you best describe your investment objective, and the level of risk you can take? (Choose one)</div>
        <div className="c-a-answ">Answer: {info.formtwo.qnine}</div>
    </div>
    <div className="c-a-bx">
        <div className="c-a-que">X. How much are you willing to invest in higher-risk investments? (Choose one)</div>
        <div className="c-a-answ">Answer: {info.formtwo.qten}</div>
    </div>
    <div className="c-a-bx">
        <div className="c-a-que">XI. How long can your money invested to achieve your financial goals? (Choose one)</div>
        <div className="c-a-answ">Answer: {info.formtwo.qeleven}</div>
    </div>
    <div className="c-a-bx">
        <div className="c-a-que">XII. Which statement best describes your current financial situation? Please consider your regular expenses, your ability to repay outstanding loans, and your savings for emergencies and retirement. Which of the following statements best describes your financial situation? (Choose one)</div>
        <div className="c-a-answ">Answer: {info.formtwo.qtwelve}</div>
    </div>

</div>
</React.Fragment>
)

return(
<div className="customer-page">

    <div className="about-header">
        <Link className="ben-link"
        to="/adminpage"><i className="fas fa-chevron-left"></i> Back</Link>

        <div>

        </div>
    </div>
    <div className="persondetbx">
        
        {info === undefined ? <h2>Loading</h2> : renderPersonDetails()}
        
    </div>

</div>
)
}
export default CustomInfo;