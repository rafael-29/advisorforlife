import React, {useState, useEffect} from 'react'
import axios from 'axios'

const inq = 'inquiries'
const articles = 'articles'
const messages = 'messages'

const AdminPage = () => {

const [customers, setCustomer] = useState()
const [page, setPage] = useState(inq)

const fetchData = () => {
axios.get('https://bakedbyartapi.herokuapp.com/customer')
.then( result => setCustomer(result.data))
.catch(err => console.log(err))
}



const renderInquiry = () => (
<React.Fragment>
<ul className="d-c-head">
    <li className="d-c-li">NAME</li>
    <li className="d-c-li">PHONE</li>
    <li className="d-c-li d-c-em">EMAIL</li>
</ul>

    {
    customers === undefined ? <h3 style={{marginLeft: '5%'}}>Loading</h3> :
    customers.map(customer => (
    <div className="customerbx"
    key={customer._id} onClick={() => {
    window.location.replace(`/adminpage/${customer._id}`)
    }}>
    <div className="d-c-name">{customer.formone.fullname}</div>
    <div className="d-c-name">{customer.formone.mobilephone}</div>
    <div className="d-c-name d-c-em">{customer.formone.emailad}</div>
    </div>
    ))
    }
</React.Fragment>
)

const renderArticles = () => (
<div className="add-articles">
add articles
</div>
)

const renderMessages = () => (
<div className="inbox-page">
The Inbox
</div>
)

useEffect( () => {

fetchData();

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
            <div className="dash-line">
                <div className="d-line"></div>
            </div>
            <div className="log-out">
                <div className="dash-name">henry tupas <i className="fas fa-sort-down"></i></div>
            </div>
        </div>
        <div className="dash-cnt-inside">
        {page === inq && renderInquiry()}
        {page === articles && renderArticles()}
        {page === messages && renderMessages()}
        
        </div>
    </div>
</div>
)
}
export default AdminPage;