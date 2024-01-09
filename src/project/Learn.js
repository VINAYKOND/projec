import React, { useState } from 'react';
import './learn.css'
export default function Learn () {
    return(
        <div className='hea'>
            <div className='Documentation'>
            <h1>Documentation</h1>
            <h2>Guides, tutorials and API reference</h2>
            </div>
            <div className='Blog'>
                <h1>Blog</h1>
                <h2>Culture, learnings, and announcements</h2>
            </div>
            <div className='Product'>
                <h1>Product updates</h1>
                <h2>Changelog for new features and improvements</h2>
            </div>
            <div className='Community'>
                <h1>Community forum</h1>
                <h2>Ask questions and discuss with your peers</h2>
            </div>
            <div className='Slack'>
                <h1>Slack channel</h1>
                <h2>Chat live with other devs in our Slack channel</h2>
            </div>
            <div className='Support'>
                <h1>Support</h1>
                <h2>Got questions? Get in touch with our team</h2>
            </div>
        </div>
    )
}