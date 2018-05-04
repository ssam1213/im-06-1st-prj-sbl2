import React from 'react';
import Mid from './Mid';
import Right from './Right';
import Left from './Left';

var Content = () => (
    <div className='containerContent' >
        <div className='contentColLeft'>
            <Left />
        </div>
        <div className='contentColMid'>
            <Mid />
        </div>
        <div className='contentColRight'>
            <Right />
        </div>
    </div>
);

export default Content;