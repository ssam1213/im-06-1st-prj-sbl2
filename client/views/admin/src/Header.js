import React from 'react';
import logo from './simple.png'

var dt = new Date();
var month = dt.getMonth() + 1;
var day = dt.getDate();
var year = dt.getFullYear();


var Header = () => (
    <div>
        <div id='headTitle'>
            <h1 className='head'><strong>Simply Analytics</strong></h1>
            <img src={logo} width="35" height="35" alt="logo" />
        </div>
        <div id="headDate">
            <h1 className='head'>{`${year}/${month}/${day}`}</h1>
        </div>
    </div>
);


export default Header;