import React from 'react';

function Education(){
    return (
         <div className="container mt-5">
            <div className="row p-5 mt-5">
                <div className="col-6">
                    <img src='media/images/education.svg' alt='education'></img>
                 </div>
                <div className="col-6 mt-5">
                            <h1 className='fs-2'>Free and open market education</h1><br/>
                            <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                            <a href='#' className='text-decoration-none'>Versity <i class="fa-solid fa-arrow-right"></i></a><br/>
                            <p className='mt-4'>TradingQ&A, the most active trading and investment community in
India for all your market related queries.</p>
                            <a href='#' className='text-decoration-none'>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;