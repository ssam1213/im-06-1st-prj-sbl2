import React from 'react';
import logo from './simple.png'

var Header = () => (
    <div>
        <div id='headTitle'>
            <h1 className='head'><strong>Simply Analytics</strong></h1>
            <img src={logo} width="35" height="35" alt="logo" />
        </div>
        <div id="headDate">
            <h2 className='head'>April 23, 2018 - May 7, 2018</h2>
        </div>
    </div>
);


export default Header;