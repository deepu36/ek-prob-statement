import PopoverWrapper from "./../popover/popover";

export default function Dropdown(props) {
  const { optionsList } = props;
  return (
    <>
      <div className="container border p-3 mt-3">
        <div className="row">
          <div className="col-md-4 mb-3">
            <select className="form-select custom-select">
              <option value="" disabled selected>
                Choose your country
              </option>
              {optionsList.map((option, i) => (
                <option
                  value={option.station}
                  key={i}
                  data-secondary-text={option.stationLongName}
                >
                  {option.station}
                  {option.station}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <select className="form-select custom-select">
              <option value="" disabled selected>
                Choose your country
              </option>
              {optionsList.map((option, i) => (
                <option
                  value={option.station}
                  key={i}
                  data-secondary-text={option.stationLongName}
                >
                  {option.station}
                  {option.station}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-4 mb-3">
            <input type="date" className="form-control custom-select" />
          </div>
          <div className="col-md-4 mb-3">
            <PopoverWrapper
              id="columnValueInfoTooltip"
              placement="bottom"
              anchorContent={
                <input
                  type="text"
                  className="form-control custom-select"
                  data-container="body"
                  data-toggle="popover"
                  data-placement="bottom"
                />
              }
            >
              {
                <>
                  <div className="passengerType">
                    <button type="button">-</button>
                    <div className="passegerData">
                      <label>1 Adults</label>
                      <p>12+ Age</p>
                    </div>
                    <button type="button">+</button>
                  </div>
                  <div className="passengerType">
                    <button type="button">-</button>
                    <div className="passegerData">
                      <label>1 Adults</label>
                      <p>12+ Age</p>
                    </div>
                    <button type="button">+</button>
                  </div>
                  <div className="passengerType">
                    <button type="button">-</button>
                    <div className="passegerData">
                      <label>1 Adults</label>
                      <p>12+ Age</p>
                    </div>
                    <button type="button">+</button>
                  </div>
                </>
              }
            </PopoverWrapper>
          </div>
          <div className="col-md-4 mb-3">
            <select className="form-select custom-select">
              <option>Economy Class</option>
              <option>Business Class</option>
              <option>First Class</option>
            </select>
          </div>
          <div className="col-md-4 mb-3">
            <button type="button" className="btn btn-danger btn-lg w-100">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
