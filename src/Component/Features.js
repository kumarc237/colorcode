import React from "react";

const Features = () => (
    <div className="container">
        <div className="card">
            <div className="card-body">
                <h3 className="text-center my-3">
                    {""}
                    Manage the list of features and permission
                </h3>
                <div>
                    <div className="row">
                        <div className="col-sm-6 bg-success p-3">
                            <h3> Feature</h3>
                            <div class="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                            <label className="form-check-label" for="flexSwitchCheckChecked">Reviews</label>
                               </div>
                               <div class="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                          <label className="form-check-label" for="flexSwitchCheckChecked">Testimonials</label>
                            </div>
                            <div class="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                          <label className="form-check-label" for="flexSwitchCheckChecked">Quality Content</label>
                            </div>
                            
                        </div>
                        <div className="col-sm-6 bg-secondary p-3">
                            <h3> Portfolio</h3>
                            <div class="form-check form-switch mt-3">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                            <label className="form-check-label" for="flexSwitchCheckChecked">Admin</label>
                               </div>
                               <div class="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
                          <label className="form-check-label" for="flexSwitchCheckChecked">Transportation</label>
                            </div>
                            <div class="form-check form-switch">
                          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/>
                          <label className="form-check-label" for="flexSwitchCheckChecked">Logistics</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
)

export default Features;