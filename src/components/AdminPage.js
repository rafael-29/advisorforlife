import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const inq = 'inquiries'
const articles = 'articles'
const messages = 'messages'

const AdminPage = () => {

const [customers, setCustomer] = useState()
const [page, setPage] = useState(inq)
const [henMessages, setHenMessages] = useState()

const fetchData = () => {
axios.get('https://bakedbyartapi.herokuapp.com/customer')
.then( result => setCustomer(result.data))
.catch(err => console.log(err))
}

const fetchMessages = () => {
axios.get('https://bakedbyartapi.herokuapp.com/henrymessages')
.then(results => setHenMessages(results.data))
.catch(err => console.log(err))
}


const renderInquiry = () => (
<React.Fragment>
<ul className="d-c-head">
    <li className="d-c-li">NAME</li>
    <li className="d-c-li d-c-em">PHONE</li>
    <li className="d-c-li d-c-em">EMAIL</li>
</ul>
    

    {
    customers === undefined ? <h3 className="no-data">Loading</h3> :
    !customers.length ? <h3 className="no-data">No inquiries</h3> :
    customers.map(customer => (
    <div className="customerbx"
    key={customer._id} onClick={() => {
    window.location.replace(`/adminpage/${customer._id}`)
    }}>
    <div className="d-c-name">{customer.formone.fullname}</div>
    <div className="d-c-name d-c-em">{customer.formone.mobilephone}</div>
    <div className="d-c-name d-c-em">{customer.formone.emailad}</div>
    </div>
    ))
    }
</React.Fragment>
)

const renderArticles = () => (
<div className="add-articles">
    <div className="add-articlebx"><i class="fas fa-plus"></i> add article</div>
</div>
)

const delMes = themes => {
axios.delete(`https://bakedbyartapi.herokuapp.com/henrymessages/${themes}`)
.then( () => alert('deleted successfully'))
.catch(err  => console.log(err))
}

const renderMessages = () => (
<div className="inbox-page">
    <div className="i-p-hone">Your Messages</div>
    {
    henMessages === undefined ? <h1>Loading messages</h1> : 
    henMessages.map( mes => (
    <div className="hen-mesbx" key={mes._id}>
        
        <div className="hen-capbx">
        <div className="hen-lbl">From: </div>
        <p className="hen-cap hen-name"> {mes.name}</p>
        </div>

        <p className="hen-cap mes-email">{mes.email}</p>
        
        <p className="hen-mess">{mes.message}</p>

        <div className="hen-choices">
        <p className="hen-phone">Call  - <span className="hen-span">{mes.phone} <i class="fas fa-mobile-alt"></i></span></p>

        <button  onClick={delMes(mes._id)} className="hen-btn-del">DELETE</button>
        </div>
    </div>
    ))
    }
</div>
)

useEffect( () => {

fetchData();
fetchMessages();
},[]);

return(
<div className="henry-page">
    <div className="dash-board">

        <p className="dashb-ttle dbor">DASHBOARD</p>

        <button onClick={() => setPage(inq)}
        className= {page === inq ? 'dash-active' : "dashb-btn dbor"} >INQUERIES</button>
        <button onClick={() => setPage(articles)}
        className={page === articles ? 'dash-active' : "dashb-btn dbor"}>ARTICLES</button>
        <button onClick={() => setPage(messages)}
        className={page === messages ? 'dash-active' : "dashb-btn dbor"}>MESSAGES</button>
    </div>
    <div className="dash-cnt">
        <div className="dash-cnt-header">
            <div className="admin-header">
            <div>
            <i class="fas fa-user-shield"></i>
            </div>
            <div className="dash-name">henry tupas</div>
            
            </div>
            <div className="log-out">
                <div  onClick={() => window.location.replace('/')}
                 className="dash-name">Sign out <i className="fas fa-sign-out-alt"></i></div>
            </div>
        </div>
        <div className="dash-cnt-inside">
        {page === inq && renderInquiry()}
        {page === articles && renderArticles()}
        {page === messages && renderMessages()}
        
        </div>
    </div>
    
    
<Link to="/" className="sign-out-link">Sign out <i className="fas fa-sign-out-alt"></i></Link>
</div>
)
}
export default AdminPage;