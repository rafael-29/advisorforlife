import React, {useState} from 'react'
import { Link } from 'react-router-dom'

import MaxiPrime from './MaxiPrime';
import Maxihundred from './Maxihundred';
import FitandWell from './FitandWell';
import Assure from './Assure';
import Elite from './Elite';

const maxiprime = 'Sun MaxiLink Prime';
const maxi100 = 'Sun MaxiLink 100';
const maxiwell = 'Sun Fit and Well';
const lifeassure = 'Sun LifeAssure'
const sunelite = 'Sun Smarter Life Elite'


export default function Benefits() {

const [benVal, setBenVal] = useState(maxiprime)

const [benefits] = useState([maxiprime, maxi100, maxiwell, lifeassure, sunelite])
return (
<div className="about-page">


    <div className="about-header">
    <Link className="ben-link"
    to="/"><i className="fas fa-chevron-left"></i> Back</Link>

    <div className='sel-cont'>
        <label htmlFor="ben-type">BENEFITS </label>
        <select value={benVal}
        onChange={e => setBenVal(e.target.value)}
        id="ben-type">

        {benefits.map(ben => (
            <option key={ben} value={ben}>
                {ben}
            </option>
        ))}
        
        </select>
    </div>
</div>

    <div className="whatben-cont">
    {benVal === maxiprime && <MaxiPrime />}
    {benVal === maxi100 && <Maxihundred />}
    {benVal === maxiwell && <FitandWell />}
    {benVal === lifeassure && <Assure />}
    {benVal === sunelite && <Elite />}
    </div>
</div>
)
}
