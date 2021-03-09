import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class FormTwo extends Component{

state = {
    qone: '',
    qtwo: '',
    qthree: '',
    qfour: '',
    qfive: '',
    qsix: '',
    qseven: '',
    qeight: '',
    qnine: '',
    qten: '',
    qeleven: '',
    qtwelve: '',
}

changeValue = e => {
const {name, value} = e.target

this.setState({[name]: value})

}

onMoveSaveToLocal = () => {
localStorage.setItem('form-two', JSON.stringify(this.state))
}

submitToLocal = () => {
 
axios.post(`https://bakedbyartapi.herokuapp.com/customer/add`, {
formone: JSON.parse(localStorage.getItem('form-one')),
formtwo: JSON.parse(localStorage.getItem('form-two'))
})
.then( () => {
console.log('successfully saved in front app')
setTimeout(() => {
window.location.replace('/finish')
}, 1000);
})
.catch(err => console.log(err.message))

}

render(){
return(
<div className="formtwo-page">

<div className="about-header">
        <Link className="ben-link"
        to="/form/1"><i className="fas fa-chevron-left"></i> Back</Link>

        <div>

        </div>
    </div>

    <p className="ftwo-prec">
    <span className="span-ftwo">Sun Life - CLIENT SUITABILITY ASSESSMENT</span> <br />
    This form aims to help you come up with a customized financial plan by determining your financial need (s) and risk appetite.
    </p>

    <p className="ftwo-inst">
    <span className="span-ftwo">Instructions: </span>
    Answer ALL applicable questions in this form. Sign ONLY when ALL applicable questions have been answered.
    </p>

    <p className="frm-question">
        <span className="q-span">I. </span>
        What is your present life stage? (Choose one)
    </p>

    <div className="q-choicebx">
        <div className="radiobx">
            <input className="inp" id="qone-one" type="radio" name="qone"
            value="GETTING STARTED (Building independence and confidence)"
            onChange={this.changeValue} />
            <label htmlFor="qone-one" 
            className="q-lbl"> GETTING STARTED (Building independence and confidence</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qone-two" type="radio" name="qone"
            value="MOVING UP (Prioritizing family above all)"
            onChange={this.changeValue} />
            <label htmlFor="qone-two" 
            className="q-lbl"> MOVING UP (Prioritizing family above all)</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qone-three" type="radio" name="qone"
            value="PREPARING AHEAD (Nurturing my health and wealth)"
            onChange={this.changeValue} />
            <label htmlFor="qone-three" 
            className="q-lbl"> PREPARING AHEAD (Nurturing my health and wealth)</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qone-four" type="radio" name="qone"
            value="LEAVING A LEGACY (Ensuring lasting golden years)"
            onChange={this.changeValue} />
            <label htmlFor="qone-four" 
            className="q-lbl"> LEAVING A LEGACY (Ensuring lasting golden years)</label>
        </div>
    </div>

    <p className="frm-question">
        <span className="q-span">II. </span>
        What is/are your objective(s) for purchasing our product? (Choose all that apply)
    </p>

    <div className="q-choicebx">
        <div className="radiobx">
            <input className="inp" id="qtwo-one" type="radio" name="qtwo"
            value="INCOME PROTECTION (Money to protect against financial setbacks (e.g. death, accident, disability, etc.)"
            onChange={this.changeValue} />
            <label htmlFor="qtwo-one" 
            className="q-lbl"> INCOME PROTECTION (Money to protect against financial setbacks (e.g. death, accident, disability, etc.)</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qtwo-two" type="radio" name="qtwo"
            value="HEALTH PROTECTION (Money to cover medical expenses (e.g. critical illness, hospitalization, etc.)"
            onChange={this.changeValue} />
            <label htmlFor="qtwo-two" 
            className="q-lbl"> HEALTH PROTECTION (Money to cover medical expenses (e.g. critical illness, hospitalization, etc.)</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qtwo-three" type="radio" name="qtwo"
            value="EDUCATION (Money for your child’s college education)"
            onChange={this.changeValue} />
            <label htmlFor="qtwo-three" 
            className="q-lbl"> EDUCATION (Money for your child’s college education)</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qtwo-four" type="radio" name="qtwo"
            value="RETIREMENT (Money for a comfortable retirement)"
            onChange={this.changeValue} />
            <label htmlFor="qtwo-four" 
            className="q-lbl"> RETIREMENT (Money for a comfortable retirement)</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qtwo-five" type="radio" name="qtwo"
            value="LIFE MILESTONES (Money for your life milestones and other needs)"
            onChange={this.changeValue} />
            <label htmlFor="qtwo-five" 
            className="q-lbl"> LIFE MILESTONES (Money for your life milestones and other needs)</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qtwo-six" type="radio" name="qtwo"
            value="ESTATE TRANSFER (Money to efficiently transfer wealth to loved ones)"
            onChange={this.changeValue} />
            <label htmlFor="qtwo-six" 
            className="q-lbl"> ESTATE TRANSFER (Money to efficiently transfer wealth to loved ones)</label>
        </div>
    </div>

    <p className="frm-question">
        <span className="q-span">III. </span>
        What type(s) of products are you looking for to meet your objective(s) above? (Choose all that apply)

    </p>

    <div className="q-choicebx">
        <div className="radiobx">
            <input className="inp" id="qthree-one" type="radio" name="qthree"
            value="INSURANCE (e.g. term insurance) – Insurance product without any savings or investment element."
            onChange={this.changeValue} />
            <label htmlFor="qthree-one" 
            className="q-lbl"> INSURANCE (e.g. term insurance) – Insurance product without any savings or investment element.</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qthree-two" type="radio" name="qthree"
            value="INSURANCE WITH SAVINGS (e.g. traditional participating policy) – Insurance product with savings but without investment element. "
            onChange={this.changeValue} />
            <label htmlFor="qthree-two" 
            className="q-lbl"> INSURANCE WITH SAVINGS (e.g. traditional participating policy) – Insurance product with savings but without investment element. </label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qthree-three" type="radio" name="qthree"
            value="INSURANCE WITH INVESTMENT (e.g. variable unit-linked) – Insurance product with investment risks borne by you."
            onChange={this.changeValue} />
            <label htmlFor="qthree-three" 
            className="q-lbl"> INSURANCE WITH INVESTMENT (e.g. variable unit-linked) – Insurance product with investment risks borne by you.</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qthree-four" type="radio" name="qthree"
            value="INVESTMENT (e.g. mutual funds) – Investment product with no insurance protection; risks borne by you."
            onChange={this.changeValue} />
            <label htmlFor="qthree-four" 
            className="q-lbl"> INVESTMENT (e.g. mutual funds) – Investment product with no insurance protection; risks borne by you.</label>
        </div>
        
    </div>

<p className="formtwo-answer-prec">
Answer up to question V ONLY (if applying for a traditional plan)<br/>
Answer ALL questions, up to XI (if applying for a variable life insurance plan or investing in a mutual fund)
</p>

    <p className="frm-question">
        <span className="q-span">IV. </span>
        For how long are you able and willing to contribute and keep THIS application? (Choose one)
    </p>

    <div className="q-choicebx">
        <div className="radiobx">
            <input className="inp" id="qfour-one" type="radio" name="qfour"
            value="1 year"
            onChange={this.changeValue} />
            <label htmlFor="qfour-one" 
            className="q-lbl"> 1 year </label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qfour-two" type="radio" name="qfour"
            value="5 years"
            onChange={this.changeValue} />
            <label htmlFor="qfour-two" 
            className="q-lbl"> 5 years </label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qfour-three" type="radio" name="qfour"
            value="10 years"
            onChange={this.changeValue} />
            <label htmlFor="qfour-three" 
            className="q-lbl">10 years</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qfour-four" type="radio" name="qfour"
            value="over 20 years"
            onChange={this.changeValue} />
            <label htmlFor="qfour-four" 
            className="q-lbl">over 20 years</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qfour-five" type="radio" name="qfour"
            value="Whole Life"
            onChange={this.changeValue} />
            <label htmlFor="qfour-five" 
            className="q-lbl">Whole Life</label>
        </div>    
    </div>

    <p className="frm-question">
        <span className="q-span">V. </span>
        What percent of your investible/financial assets cash, deposits, mutual fund/UITFs, stocks, or any asset easily converted to cash  will be set aside for THIS application?
    </p>

    <div className="q-choicebx">
        <div className="radiobx">
            <input className="inp" id="qfive-one" type="radio" name="qfive"
            value="Less than 5%"
            onChange={this.changeValue} />
            <label htmlFor="qfive-one" 
            className="q-lbl">Less than 5%</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qfive-two" type="radio" name="qfive"
            value="5 to 15%"
            onChange={this.changeValue} />
            <label htmlFor="qfive-two" 
            className="q-lbl">5 to 15%</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qfive-three" type="radio" name="qfive"
            value="16 to 25%"
            onChange={this.changeValue} />
            <label htmlFor="qfive-three" 
            className="q-lbl">16 to 25%</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qfive-four" type="radio" name="qfive"
            value="26 to 35%"
            onChange={this.changeValue} />
            <label htmlFor="qfive-four" 
            className="q-lbl">26 to 35%</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qfive-five" type="radio" name="qfive"
            value="Over 35%"
            onChange={this.changeValue} />
            <label htmlFor="qfive-five" 
            className="q-lbl">Over 35%</label>
        </div>
        
    </div>

<p className="theben-p">
<span className="theben-span">NOTE: </span>
Sun Life of Canada (Philippines), Inc. does not recommend exposure to a single product to exceed 20% of your investible/financial assets. In order to manage risks, it is recommended that you diversify your assets.
</p>
<br /><br  />
    <p className="frm-question">
        <span className="q-span">VI. </span>
        Approximate Net Worth    </p>

    <div className="q-choicebx">
        <div className="radiobx">
            <input className="inp" id="qsix-one" type="radio" name="qsix"
            value="Under PhP 1Million"
            onChange={this.changeValue} />
            <label htmlFor="qsix-one" 
            className="q-lbl">Under PhP 1Million</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qsix-two" type="radio" name="qsix"
            value="1 Million to 15 Million	"
            onChange={this.changeValue} />
            <label htmlFor="qsix-two" 
            className="q-lbl">1 Million to 15 Million	</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qsix-three" type="radio" name="qsix"
            value="Over PhP 15 Million"
            onChange={this.changeValue} />
            <label htmlFor="qsix-three" 
            className="q-lbl">Over PhP 15 Million</label>
        </div>
        
    </div>

    <p className="frm-question">
        <span className="q-span">VII. </span>
        How much is your knowledge of investments? (Choose one)</p>

    <div className="q-choicebx">
        <div className="radiobx">
            <input className="inp" id="qseven-one" type="radio" name="qseven"
            value="No knowledge"
            onChange={this.changeValue} />
            <label htmlFor="qseven-one" 
            className="q-lbl">No knowledge</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qseven-two" type="radio" name="qseven"
            value="Limited (I have limited knowledge of investments outside of bank deposits)"
            onChange={this.changeValue} />
            <label htmlFor="qseven-two" 
            className="q-lbl">Limited (I have limited knowledge of investments outside of bank deposits)</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qseven-three" type="radio" name="qseven"
            value="Moderate (I have some knowledge of investments like bonds, stocks and pooled funds)"
            onChange={this.changeValue} />
            <label htmlFor="qseven-three" 
            className="q-lbl">Moderate (I have some knowledge of investments like bonds, stocks and pooled funds)</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qseven-four" type="radio" name="qseven"
            value="Good (I have general knowledge of investments like bonds, stocks, mutual funds and derivatives)"
            onChange={this.changeValue} />
            <label htmlFor="qseven-four" 
            className="q-lbl">Good (I have general knowledge of investments like bonds, stocks, mutual funds and derivatives)</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qseven-five" type="radio" name="qseven"
            value="Extensive (I have extensive knowledge of investments like bonds, stocks, mutual funds, derivatives and structured products)"
            onChange={this.changeValue} />
            <label htmlFor="qseven-five" 
            className="q-lbl">Extensive (I have extensive knowledge of investments like bonds, stocks, mutual funds, derivatives and structured products)</label>
        </div>
    </div>

    <p className="frm-question">
        <span className="q-span">VIII. </span>
        How many years have you been investing in stocks, bonds and mutual funds/UITFs? (Choose one)</p>

    <div className="q-choicebx">
        <div className="radiobx">
            <input className="inp" id="qeight-one" type="radio" name="qeight"
            value="No experience"
            onChange={this.changeValue} />
            <label htmlFor="qeight-one" 
            className="q-lbl">No experience</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qeight-two" type="radio" name="qeight"
            value="Less than one (1) year"
            onChange={this.changeValue} />
            <label htmlFor="qeight-two" 
            className="q-lbl">Less than one (1) year</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qeight-three" type="radio" name="qeight"
            value="One (1) year to Five (5) years"
            onChange={this.changeValue} />
            <label htmlFor="qeight-three" 
            className="q-lbl">One (1) year to Five (5) years</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qeight-four" type="radio" name="qeight"
            value="Six (6) years to Ten (10) years"
            onChange={this.changeValue} />
            <label htmlFor="qeight-four" 
            className="q-lbl">Six (6) years to Ten (10) years</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qeight-five" type="radio" name="qeight"
            value="Over ten (10) years"
            onChange={this.changeValue} />
            <label htmlFor="qeight-five" 
            className="q-lbl">Over ten (10) years</label>
        </div>
        
    </div>

    <p className="frm-question">
        <span className="q-span">IX. </span>
        How would you best describe your investment objective, and the level of risk you can take? (Choose one)
    </p>
    <div className="q-choicebx">
        <div className="radiobx">
            <input className="inp" id="qnine-one" type="radio" name="qnine"
            value="Capital preservation:  I want my capital secured even if the investments provide low returns."
            onChange={this.changeValue} />
            <label htmlFor="qnine-one" 
            className="q-lbl">Capital preservation:  I want my capital secured even if the investments provide low returns.</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qnine-two" type="radio" name="qnine"
            value="Regular Income: I prefer investments that provide a predictable flow of income, as opposed to funds that widely fluctuate."
            onChange={this.changeValue} />
            <label htmlFor="qnine-two" 
            className="q-lbl">Regular Income: I prefer investments that provide a predictable flow of income, as opposed to funds that widely fluctuate.</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qnine-three" type="radio" name="qnine"
            value="Income and growth: I seek a regular flow of income but will accept some volatility for capital growth. I prefer investments that provide both opportunities to earn income and to grow over time."
            onChange={this.changeValue} />
            <label htmlFor="qnine-three" 
            className="q-lbl">Income and growth: I seek a regular flow of income but will accept some volatility for capital growth. I prefer investments that provide both opportunities to earn income and to grow over time.</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qnine-four" type="radio" name="qnine"
            value="Capital growth: I seek long term growth with some income. I am comfortable with volatility in order to achieve capital growth."
            onChange={this.changeValue} />
            <label htmlFor="qnine-four" 
            className="q-lbl">Capital growth: I seek long term growth with some income. I am comfortable with volatility in order to achieve capital growth.</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qnine-five" type="radio" name="qnine"
            value="Capital appreciation: I seek capital appreciation and fully accept volatility. I prefer high-risk investments with high potential returns."
            onChange={this.changeValue} />
            <label htmlFor="qnine-five" 
            className="q-lbl">Capital appreciation: I seek capital appreciation and fully accept volatility. I prefer high-risk investments with high potential returns.</label>
        </div>
    </div>

    <p className="frm-question">
        <span className="q-span">X. </span>
        How much are you willing to invest in higher-risk investments? (Choose one)
    </p>
    <div className="q-choicebx">
        <div className="radiobx">
            <input className="inp" id="qten-one" type="radio" name="qten"
            value="Less than 20%"
            onChange={this.changeValue} />
            <label htmlFor="qten-one" 
            className="q-lbl">Less than 20%</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qten-two" type="radio" name="qten"
            value="21% to 40%"
            onChange={this.changeValue} />
            <label htmlFor="qten-two" 
            className="q-lbl">21% to 40%</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qten-three" type="radio" name="qten"
            value="41% to 60%"
            onChange={this.changeValue} />
            <label htmlFor="qten-three" 
            className="q-lbl">41% to 60%</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qten-four" type="radio" name="qten"
            value="61% to 80%"
            onChange={this.changeValue} />
            <label htmlFor="qten-four" 
            className="q-lbl">61% to 80%</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qten-five" type="radio" name="qten"
            value="Over 80%"
            onChange={this.changeValue} />
            <label htmlFor="qten-five" 
            className="q-lbl">Over 80%</label>
        </div>
        
    </div>

    <p className="frm-question">
        <span className="q-span">XI. </span>
        How long can your money invested to achieve your financial goals? (Choose one)
    </p>
    <div className="q-choicebx">
        <div className="radiobx">
            <input className="inp" id="qeleven-one" type="radio" name="qeleven"
            value="Less than one (1) year"
            onChange={this.changeValue} />
            <label htmlFor="qeleven-one" 
            className="q-lbl">Less than one (1) year</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qeleven-two" type="radio" name="qeleven"
            value="One (1) year to Two (2) years"
            onChange={this.changeValue} />
            <label htmlFor="qeleven-two" 
            className="q-lbl">One (1) year to Two (2) years</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qeleven-three" type="radio" name="qeleven"
            value="Three (3) years to Five (5) years"
            onChange={this.changeValue} />
            <label htmlFor="qeleven-three" 
            className="q-lbl">Three (3) years to Five (5) years</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qeleven-four" type="radio" name="qeleven"
            value="Six (6) years to Ten (10) years"
            onChange={this.changeValue} />
            <label htmlFor="qeleven-four" 
            className="q-lbl">Six (6) years to Ten (10) years</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="qeleven-five" type="radio" name="qeleven"
            value="Over Ten (10) years"
            onChange={this.changeValue} />
            <label htmlFor="qeleven-five" 
            className="q-lbl">Over Ten (10) years</label>
        </div>
        
    </div>

    <p className="frm-question">
        <span className="q-span">XII. </span>
        Which statement best describes your current financial situation? Please consider your regular expenses, your ability to repay outstanding loans, and your savings for emergencies and retirement. Which of the following statements best describes your financial situation? (Choose one)
    </p>
    <div className="q-choicebx">
        <div className="radiobx">
            <input className="inp" id="twelve-one" type="radio" name="qtwelve"
            value="I need this investment to supplement my current income."
            onChange={this.changeValue} />
            <label htmlFor="twelve-one" 
            className="q-lbl">I need this investment to supplement my current income.</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="twelve-two" type="radio" name="qtwelve"
            value="I do not need this investment to supplement my current income; however, this could change in the next months."
            onChange={this.changeValue} />
            <label htmlFor="twelve-two" 
            className="q-lbl">I do not need this investment to supplement my current income; however, this could change in the next months.</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="twelve-three" type="radio" name="qtwelve"
            value="I do not expect to use this investment to meet current requirements, but I would need to access these funds in an emergency."
            onChange={this.changeValue} />
            <label htmlFor="twelve-three" 
            className="q-lbl">I do not expect to use this investment to meet current requirements, but I would need to access these funds in an emergency.</label>
        </div>
        <div className="radiobx">
            <input className="inp" id="twelve-four" type="radio" name="qtwelve"
            value="My financial situation is stable, and I have sufficient cash flow to me"
            onChange={this.changeValue} />
            <label htmlFor="twelve-four" 
            className="q-lbl">My financial situation is stable, and I have sufficient cash flow to me</label>
        </div>
    </div>

    <button onMouseMove={this.onMoveSaveToLocal} onClick={this.submitToLocal}
            className="frmone-btn">SUBMIT</button>

</div>
)
}
}
export default FormTwo;