import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
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
import Contact from './components/Contact';
import AddArticles from './components/AddArticles';
import Articles from './components/Articles';
import Privacy from './components/Privacy';
import Terms from './components/Terms'


const App = () => {
useEffect( () => {
ReactGA.initialize('UA-192961444-1');
ReactGA.pageview(window.location.pathname + window.location.search);

}, [ReactGA])


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

const renderContact = () => (
<Contact />
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
<Route path="/contact" render={renderContact} />
<Route path="/addarticles" component={AddArticles} />
<Route path="/articles" component={Articles} />
<Route path="/privacy" component={Privacy} />
<Route path="/termscon" component={Terms} />

</Router>
)
}
export default App;