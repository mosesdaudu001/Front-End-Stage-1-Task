import React from 'react'
import PP from '../Photos/IMG_0112.jpg'

export default function Profile() {
    return (
        <div>
        <div className='header_part'>
            <img id='profile__img' className='profile__img' src={PP} alt='Profile_Picture'/>
            <strong className='profile_name'>Moses Daudu</strong>
        </div>
        <div className='main_part'>
            <button className='twitter'>
            <a href="https://twitter.com/moses_snow_/" id='twitter'>Twitter Link</a>
            </button>
            <a href="https://slack.com/" id='slack'></a>           
        </div>
        </div>
    )
}