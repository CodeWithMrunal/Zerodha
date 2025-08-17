import React from 'react';

function LeftSection({imageURL,prodTitle,prodDesp,tryDemo,learnMore, googlePlay, appStore}){
    return (
        <div className='container pt-5'>
            <div className='row pt-5'>
                <div className='col'>
                    <img src={imageURL} alt='imageurl'/>
                </div>
                <div className='d-flex justify-content-center flex-column col'>
                    <h1 className='ps-3 text-muted fs-3'>{prodTitle}</h1>
                    <p className='ps-3 text-muted'>{prodDesp}</p>
                    <div className='p-3'>
                        <a href={tryDemo} className='text-blue me-5 text-decoration-none'>Try demo <i class="fa-solid fa-arrow-right"></i></a>
                        <a href={learnMore} className='text-blue ms-5 text-decoration-none'>Learn more <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div className='p-3'>
                        <a href={googlePlay} className='me-3'><img src='media/images/googlePlayBadge.svg' alt='googleplay'/></a>
                        <a href={appStore} className='ms-3 '><img src='media/images/appstoreBadge.svg' alt='appstore'/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection;