import React from 'react';

function Hero(){
    return (
        <div className='container border-bottom'>
            <div className='row text-center m-5 p-5'>
                <h1 className='fs-3 text-muted'>Zerodha Products</h1>
                <h3 className='text-muted fs-5'>Sleek, modern, and intuitive trading platforms</h3>
                <p className='text-muted'>Check out our <a href='/' className='text-decoration-none'>investment offerings →</a></p>
            </div>
        </div>
    )
}

export default Hero;