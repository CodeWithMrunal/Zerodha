import React from "react";

function Home(){
    return (
        <div className="container-fluid mb-5" style={{backgroundColor:"rgb(57, 125, 208)", color:"white"}}>
            <div className="container py-5 px-5">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <h1 className="fs-3">Support Portal</h1>
                    <a href="/" style={{color:"white"}} className="fs-5">Track Tickets</a>
                </div>
                <div className="row">
                    <div className="col-6 mt-5">
                        <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
                        <input className="support_input" placeholder="Eg: how do i activate F&O, why is my order getting rejected.."/><br/>
                        <a href="/" className="text-white me-3">Track account opening </a>
                        <a href="/" className="text-white me-3">Track segment activation </a>
                        <a href="/" className="text-white me-3">Intraday margins </a>
                        <a href="/" className="text-white me-3">Kite user manual</a>
                    </div>
                    <div className="col-2 mt-5"></div>

                    <div className="col-4 mt-5">
                        <h1 className="fs-3">Featured</h1>
                        <ol>
                            <li><a href="/" className="text-white fs-5">Current Takeovers and Delisting - January 2024</a></li>
                            <li><a href="/" className="text-white fs-5">Latest Intraday leverages - MIS & CO</a></li>
                        </ol> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;