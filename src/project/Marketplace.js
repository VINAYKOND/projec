import React, { useState } from 'react';
import './marketplace.css'
export default function Marketplace () {
    return(
        <div className='he'>
            <div className='Starter'>
            <h1>Starter projects</h1>
            <h2>Start with a fully configured DatoCMS project</h2>
            </div>
            <div className='Plugins'>
            <h1>Plugins</h1>
            <h2>Easily expand the capabilities of DatoCMS</h2>
            </div>
            <div className='Hosting'>
            <h1>Hosting & Builds</h1>
            <h2>No matter the stack you're using, we've got you covered</h2>
            </div>
            <div className='Enterprise'>
            <h1>Enterprise apps</h1>
            <h2>Keep your company data secure</h2>
            </div>
        </div>
    )
}
