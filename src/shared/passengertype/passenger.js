import React, { useState } from "react";

export default function Passenger(props) {
    const { handlePassengerCount } = props;
    const maxPassengers = 9;
    const [maxCount, setMaxCount] = useState(1);
    const [adults, setAdults] = useState(1);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);

    const [isAdultsDisabled, setIsAdultsDisabled] = useState(true);
    const [isChildDisabled, setIsChildDisabled] = useState(true);
    const [isInfantDisabled, setIsInfantDisabled] = useState(true);

    function handleCountPlus(type) {
    
    }
    function handleCountMinus(type) {

    }
    return (
        <>
            <h6 className="border-bottom py-3 text-center">Passengers</h6>
            {
                <div className="passengerType">
                    <button type="button" disabled={isAdultsDisabled} onClick={() => handleCountPlus("adults")}>-</button>
                    <div className="passengerData">
                        <label>{`${adults} Adults`}</label>
                        <p>{"Ages 12+"}</p>
                    </div>
                    <button type="button" disabled={!isAdultsDisabled} onClick={() => handleCountMinus("adults")}>+</button>
                </div>
            }
            {
                <div className="passengerType">
                    <button type="button" disabled={isChildDisabled} onClick={() => handleCountPlus("child")}>-</button>
                    <div className="passengerData">
                        <label>{`${child} Child`}</label>
                        <p>{"Ages 2-11"}</p>
                    </div>
                    <button type="button" disabled={!isChildDisabled} onClick={() => handleCountMinus("child")}>+</button>
                </div>
            }
            {
                <div className="passengerType">
                    <button type="button" disabled={isInfantDisabled} onClick={() => handleCountPlus("infant")}>-</button>
                    <div className="passengerData">
                        <label>{`${infant} Infant`}</label>
                        <p>{"Age under 2, on lap"}</p>
                    </div>
                    <button type="button" disabled={!isInfantDisabled} onClick={() => handleCountMinus("infant")}>+</button>
                </div>
            }
            <p className="border-top py-3 text-center">Please note: You can book for a maximum of nine passengers.</p>
        </>
    )

}