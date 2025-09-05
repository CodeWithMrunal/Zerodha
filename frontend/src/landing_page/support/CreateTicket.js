import React from "react";

function CreateTicket(){
    return (
        <div className="container">
            <h1>To create a ticket, select a relevant topic</h1>
            <div className="row">
                <div className="col-4 mt-5 pt-5">
                    <h4><i class="fa-solid fa-circle-plus"></i> Account Opening</h4>
                    <div className="mt-3 ps-4" style={{lineHeight:"2.5"}}>
                        <a href="/" className="text-decoration-none ">Resident individual</a><br/>
                        <a href="/" className="text-decoration-none ">Minor</a><br/>
                        <a href="/" className="text-decoration-none ">Non Resident Indian (NRI)</a><br/>
                        <a href="/" className="text-decoration-none ">Company, Partnership, HUF and LLP</a><br/>
                        <a href="/" className="text-decoration-none ">Glossary</a><br/>
                    </div>
                </div>
                <div className="col-4 mt-5 pt-5">
                    <h4><i class="fa-solid fa-user"></i> Your Zerodha Account</h4>
                    <div className="mt-3 ps-4" style={{lineHeight:"2.5"}}>
                        <a href="/" className="text-decoration-none">Your Profile</a><br/>
                        <a href="/" className="text-decoration-none">Account modification</a><br/>
                        <a href="/" className="text-decoration-none">Client Master Report (CMR) and Depository Participant (DP)</a><br/>
                        <a href="/" className="text-decoration-none">Nomination</a><br/>
                        <a href="/" className="text-decoration-none">Transfer and conversion of securities</a><br/>
                    </div>
                </div>
                <div className="col-4 mt-5 pt-5">
                    <h4><i class="fa-brands fa-fly"></i> Kite</h4>
                    <div className="mt-3 ps-4" style={{lineHeight:"2.5"}}>
                        <a href="/" className="text-decoration-none">IPO</a><br/>
                        <a href="/" className="text-decoration-none">Trading FAQs</a><br/>
                        <a href="/" className="text-decoration-none">Margin Trading Facility (MTF) and Margins</a><br/>
                        <a href="/" className="text-decoration-none">Charts and orders</a><br/>
                        <a href="/" className="text-decoration-none">Alerts and Nudges</a><br/>
                        <a href="/" className="text-decoration-none">General</a><br/>
                    </div>
                </div>
            </div>
            <div className="row mb-5 pb-5">
                <div className="col-4 mt-5 pt-5">
                    <h4><i class="fa-solid fa-indian-rupee-sign"></i> Funds</h4>
                    <div className="mt-3 ps-4" style={{lineHeight:"2.5"}}>
                        <a href="/" className="text-decoration-none">Add money</a><br/>
                        <a href="/" className="text-decoration-none">Withdraw money</a><br/>
                        <a href="/" className="text-decoration-none">Add bank accounts</a><br/>
                        <a href="/" className="text-decoration-none">eMandates</a><br/>
                    </div>
                </div>
                <div className="col-4 mt-5 pt-5">
                    <h4><i class="fa-solid fa-terminal"></i> Console</h4>
                    <div className="mt-3 ps-4" style={{lineHeight:"2.5"}}>
                        <a href="/" className="text-decoration-none">Portfolio</a><br/>
                        <a href="/" className="text-decoration-none">Corporate actions</a><br/>
                        <a href="/" className="text-decoration-none">Funds statement</a><br/>
                        <a href="/" className="text-decoration-none">Reports</a><br/>
                        <a href="/" className="text-decoration-none">Profile</a><br/>
                        <a href="/" className="text-decoration-none">Segments</a><br/>
                    </div>
                </div>
                <div className="col-4 mt-5 pt-5">
                    <h4><i class="fa-solid fa-coins"></i> Coin</h4>
                    <div className="mt-3 ps-4" style={{lineHeight:"2.5"}}>
                         <a href="/" className="text-decoration-none">Mutual funds</a><br/>
                         <a href="/" className="text-decoration-none">National Pension Scheme (NPS)</a><br/>
                         <a href="/" className="text-decoration-none">Fixed Deposit (FD)</a><br/>
                         <a href="/" className="text-decoration-none">Features on Coin</a><br/>
                         <a href="/" className="text-decoration-none">Payments and Orders</a><br/>
                         <a href="/" className="text-decoration-none">General</a><br/>
                    </div>
                </div>
                <div className="col-4"></div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default CreateTicket;