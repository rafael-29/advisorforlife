import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './styles/styles.css';

import Home from './components/Home'
import Benefits from './components/Benefits';
import AboutSun from './components/AboutSun';
import Introduction from './components/Introduction';
import FormOne from './components/FormOne';
import FormTwo from './components/FormTwo';
import Thankyou from './components/Thankyou';
import SignIn from './components/SignIn';
import AdminPage from './components/AdminPage';
import CustomInfo from './components/CustomInfo';


const App = () => {


const renderHomePage = () => (
<Home />
)

const renderBenefits = () => (
<Benefits />
)

const renderAboutPage = () => (
<AboutSun />
)

const renderCustomInfo = (props) => (
<CustomInfo theprops={props}/>
)
return(
<Router>

<Route exact path="/" render={renderHomePage} />
<Route path="/benefits" render={renderBenefits} />
<Route path="/about" render={renderAboutPage} />
<Route path="/intro" component={Introduction}/>
<Route path="/form/1" component={FormOne} />
<Route path="/form/2" component={FormTwo} />
<Route path="/finish" component={Thankyou} />
<Route path="/signin" component={SignIn} />
<Route exact path="/adminpage" component={AdminPage} />
<Route path="/adminpage/:id" render={renderCustomInfo} />

</Router>
)
}
export default App;