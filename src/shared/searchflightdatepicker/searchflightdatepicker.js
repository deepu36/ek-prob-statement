import React from "react";

export default function SearchFlightDatePicker(props) {
    return (
        <div className="form-control custom-select">
            <div className="d-flex justify-content-between align-items-center">
                <div className="departingDate">
                    <small>Departing</small>
                    <input type="date" className="border-0" />
                </div>
                <div>-</div>
                <div className="departingDate">
                    <small>Returning</small>
                    <input type="date" className="border-0" />
                </div>
            </div>
        </div>
    )
}