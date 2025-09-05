import React from "react";

function Team() {
  return (
    <div className="container mb-5 p-5">
      <div className="row mt-5 border-top p-5 text-center">
        <h1>People</h1>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center flex-column align-items-center">
          <img
            src="media/images/nithinKamath.jpg"
            alt="nithinkamath"
            className="rounded-circle"
            style={{ width: "60%" }}
          ></img><br/>
            <h2 className="text-muted">Nithin Kamath</h2>
            <h3 className="text-muted fs-5">Founder, CEO</h3>
        </div>
        <div className="col me-5 pe-5 d-flex justify-content-center flex-column lh-lg fs-6">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <br />

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <br />

          <p>Playing basketball is his zen.</p>
          <br />

          <p>
            Connect on{" "}
            <a href="/" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="/" className="text-decoration-none">
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="/" className="text-decoration-none">
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
