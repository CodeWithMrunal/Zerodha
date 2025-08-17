import React from "react";

function Brokerage() {
  return (
    <div className="container border-top">
      <div className="row p-5">
        <div className="col-8 pt-5">
          <h1 className="text-center fs-4 text-primary">Brokerage calculator</h1>
          <ul className="p-5 lh-lg">
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of 250 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              220 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PfS), 0.5% or 2100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₴200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged 240 per executed order instead of 220 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 pt-5">
          <h1 className="text-center fs-4 text-primary">List of charges</h1>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
