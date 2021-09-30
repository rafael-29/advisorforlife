import React, {useState} from 'react'
import { CircularProgress } from "@material-ui/core"
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function SignIn() {
    
const [adminUser, setAdminUser] = useState()
const [adminPass, setAdminPass] = useState()

const [wrong, setWrong] = useState()
const [isLoading, setIsLoading] = useState(false);
    
const loginValid = async () => {

   setIsLoading(true)

    const logenData = {
        username: adminUser,
        password: adminPass
    }

    const result = await axios.post("https://sunfinancial.herokuapp.com/auth/login", logenData);
    

   console.log(result)

   try {
       
   } catch (error) {
    setWrong('Invalid User')
   }

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
        {isLoading ? <CircularProgress style={{
            marginLeft: "auto",
            marginRight: "auto"
        }} /> : 
        (
        <React.Fragment>
        <button onClick={loginValid} className="admin-subcan">SUBMIT</button> 
        <button onClick={() => window.location.replace('/')}className="admin-subcan can" >CANCEL</button>
        </React.Fragment>
        )
        }
        
        
        </div>
        <Link id="linktoadmin" style={{opacity: '0', pointerEvents: 'none'}} to="/adminpage">go</Link>
    </div>
</div>

)
}
