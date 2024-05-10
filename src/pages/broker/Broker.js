import React from 'react';
import "./Broker.css"

const Broker = () => {
    return (
        <div className="broker-page">
            <div className="heading">
                <h1>Property search and comparison</h1>
            </div>
            <div className="info">
                <div className="property-info">
                    <form className="my-form">
                        <div className="property-info-heading">
                            <h1 className="title-text">Listed Property Info</h1>
                        </div>
                        <div className="text-field-2">
                            <label>
                                Enter ZPID (Zillow property ID)
                            </label>
                            <input placeholder="re"/>
                        </div>
                        <div className="text-field-2">
                            <label>
                                Enter Property URL
                            </label>
                            <input placeholder="Enter URL if you have"/>
                        </div>
                        <div className="text-field-2">
                            <label>
                                Enter Address
                            </label>
                            <input placeholder="Pleasw Enter E-mail Address"/>
                        </div>
                        <div className="text-field-2">
                            <label>
                                Enter Living area of the subject property (sq ft)
                            </label>
                            <input/>
                        </div>
                        <div className="text-field-2">
                            <label>
                                Select known improvements
                            </label>
                            <input placeholder="Choose an option"/>
                        </div>
                        <div className="text-field-2">
                            <label>
                                Select known deficiencies
                            </label>
                            <input placeholder="Choose an option"/>
                        </div>
                        <button type="submit" className="my-form__search">
                            Search
                        </button>
                    </form>
                </div>
                <div className="cost-adjustment">
                    <h1 className="title-text">Cost Matrix Adjustments</h1>
                    <form className="">

                    </form>
                </div>
            </div>

        </div>
    );
};

export default Broker;