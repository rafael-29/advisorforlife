import React, {useState} from 'react'
import { CircularProgress } from "@material-ui/core"
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SignIn() {
    
const [adminUser, setAdminUser] = useState()
const [adminPass, setAdminPass] = useState()

const [wrong, setWrong] = useState()
    
const loginValid = async () => {

    setWrong('load')

    const logenData = {
        username: adminUser,
        password: adminPass
    }

    const result = await axios.post("https://sunfinancial.herokuapp.com/auth/login", logenData);
    if(!result.data) return setWrong('Invalid User')

   console.log(result)

    // window.location.replace('/adminpage')

    
    
}

return (
<div className="admin-signbx">
<div className="admin-form">
        <div className="admin-imgbx">
            <img src="/images/management.svg" alt="baked.by.art"
            className="adminimg" />
        </div>
        <p style={{color: 'red', marginBottom: '10px'}}>{wrong}</p>
        <div className="admin-input-dev">
            <input placeholder="username" type="text" value={adminUser}
            onChange={e => setAdminUser(e.target.value)}
            className="admin-input" />
        </div>

        <div className="admin-input-dev">
            <input placeholder="password" type="password" value={adminPass}
            onChange={e => setAdminPass(e.target.value)}
            className="admin-input" />
        </div>

        <div className="admin-btnz">
        {wrong === undefined ? <button onClick={loginValid} className="admin-subcan">SUBMIT</button> : 
        wrong === "load" ? <CircularProgress /> : <button onClick={loginValid} className="admin-subcan">SUBMIT</button>}
        
        <button onClick={() => window.location.replace('/')}
        className="admin-subcan can" >CANCEL</button>
        </div>
        <Link id="linktoadmin" style={{opacity: '0', pointerEvents: 'none'}} to="/adminpage">go</Link>
    </div>
</div>

)
}
