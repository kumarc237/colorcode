import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid bg-secondary">
      <div className="row d-flex">
        <div className="col-sm-8 d-flex mt-3">
          <div className="col-sm-3 pt-3">
            <h4>color</h4>
            <div className="">Teardown</div>
            <div className="">News</div>
            <div className="">Partners</div>
            <div className="">About us</div>
            <div className="">Terms of use</div>
          </div>
          <div className="col-sm-3 pt-3">
            <h4>Social</h4>
            <div className="">Facebook</div>
            <div className="">Twitter</div>
            <div className="">Instagram</div>
            <div className="">Youtube</div>
          </div>
          <div className="col-sm-3 pt-3">
            <h4>Service</h4>
            <div className="">Compare</div>
            <div className="">Download</div>
            <div className="">Feedback</div>
            <div className="">Bug Report</div>
          </div>
          <div className="col-sm-3 pt-3">
            <h4>Activity</h4>
            <div className="">Influencers</div>
            <div className="">Co-Branding</div>
            <div className="">Affiliate</div>
            <div className="">Honor</div>
            <div className="">Giveaway</div>
          </div>
        </div>
        <div className="col-sm-4 mt-3">
          <div className="text-center p-3">
            <h4>Newsletter Subscription</h4>
            <div className="input-group mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Subscribe to our Newsletter"
                aria-label="Subscribe"
                aria-describedby="basic-addon2"
              />
              <span className="input-group-text bg-warning" id="basic-addon2">
                Subscribe
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
