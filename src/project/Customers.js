import React, { useState } from 'react';
import './customers.css'
export default function Customers () {
    return(
        <div className='heade'>
            <div className='QUOTES'>
            <h1>QUOTES</h1>
            <h2>Read our Testimonials</h2>
            <h1>ENTERPRISE</h1>
            <h2>DatoCMS for Enterprise</h2>
            </div>
            <div className='SUCCESS'>
                <h1>SUCCESS STORIES</h1>
                <h2>Polestar NEW</h2>
                <p>Localise everything to build a global carmaker website</p>
                <div className='Shopify'>
                    <h2>Shopify Orberlo</h2>
                    <p>Painless switch to static from Wordpress</p>
                </div>
                <div className='Hashicorp'>
                    <h2>Hashicorp</h2>
                    <p>How HashiCorp delivers a reliable editorial workflow</p>
                </div>
                <div className='Chilly'>
                    <h2>Chilly's Bottles</h2>
                    <p>How Rotate built a 2M users a month e-commerce</p>
                </div>
                <div className='Matter'>
                    <h2>Matter Supply</h2>
                    <p>How to deliver an Emmy award-campaign in 4 weeks</p>
                </div>
                <div className='Dovetail'>
                    <h2>Dovetail</h2>
                    <p>Why DatoCMS is their headless CMS of choice</p>
                    <h3>Browse all the case studies »</h3>
                </div>
            </div>
        </div>
    )
}
