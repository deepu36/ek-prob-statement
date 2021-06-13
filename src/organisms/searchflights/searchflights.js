import React from "react";
import PopoverWrapper from "../../molecules/popover/popover";
import Passenger from "../../molecules/passengertype/passenger";
import SearchFlightDatePicker from "../../molecules/searchflightdatepicker/searchflightdatepicker";
import Dropdown from "../../molecules/dropdown/dropdown";
import SelectDropDown from "../../molecules/selectDropDown/selectDropDown";
import { passengersClass } from "../../mockdata/mockData";

export default function SearchFlights(props) {
    const [departureCode, setDepartureCode] = React.useState(null);
    const [passCount, setPassCount] = React.useState(1);
    const handleInputChange = (e) => {
        setDepartureCode(e)
    }

    const handleInputChangeAr = (e) => {
        // setDepartureCode(e)
    }

    const handlePassengerCount = (e) => {
        setPassCount(e)
    }

    return (
        <div className="container border p-3 mt-3">
            <div className="row">
                <div className={`${departureCode ? 'col-md-4' : 'col-md-5'} mb-3`}>
                    <SelectDropDown handleChange={handleInputChangeAr} />
                </div>
                <div className={`${departureCode ? 'col-md-4' : 'col-md-5'} mb-3`}>
                    <SelectDropDown handleChange={handleInputChange} />
                </div>

                {departureCode && <React.Fragment>
                    <div className="col-md-4 mb-3">
                        <SearchFlightDatePicker />
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="d-flex align-items-center">
                            <div className="departingDate1 w-100">
                                <small>Passenger</small>
                                <PopoverWrapper
                                    id="columnValueInfoTooltip"
                                    placement="bottom"
                                    closeIcon={false}
                                    anchorContent={
                                        <input
                                            type="button"
                                            className="form-control text-left custom-select"
                                            data-placement="bottom"
                                            value={`${passCount} Passenger`}
                                        />
                                    }
                                >
                                    {
                                        <Passenger handleChange={handlePassengerCount}/>
                                    }
                                </PopoverWrapper>
                            </div>
                            <div className="px-2">
                                <PopoverWrapper
                                    id="columnValueInfoTooltip"
                                    placement="bottom"
                                    closeIcon={true}
                                    anchorContent={
                                        <span className="tooltip-icon">
                                            <i className="fa fa-info-circle" aria-hidden="true" />
                                        </span>
                                    }
                                >
                                    {
                                        <div className="p-2">
                                            <p>You can book up to nine passengers per booking, including adults, children and infants.
                                            </p>
                                            <p>Each adult passenger can bring one infant.</p>
                                            <p>
                                                Children travelling alone, or in a different cabin class to their parents, are considered Unaccompanied Minors and pay the full adult fare. Please get in touch with us to book this service.
                                            </p>
                                        </div>
                                    }
                                </PopoverWrapper>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="departingDate1">
                            <small>Class</small>
                            <Dropdown optionsList={passengersClass} handleChange={handleInputChange} />
                        </div>
                    </div>
                </React.Fragment>}
                <div className={`${departureCode ? 'col-md-4' : 'col-md-2'} mb-3`}>
                    <button type="button" className="btn btn-danger custom-btn w-100 btn-block">
                    {departureCode ? "Search flights" : "Continue"}
                    </button>
                </div>
            </div>
        </div>
    )
}