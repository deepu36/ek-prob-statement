import React from "react";
import styled from "@emotion/styled";
import "./selectDropDown.css";
import { options } from "./options";

import Select from "react-dropdown-select";

export default class SelectDropDown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            multi: false,
            disabled: false,
            loading: false,
            contentRenderer: false,
            dropdownRenderer: true,
            inputRenderer: false,
            itemRenderer: false,
            optionRenderer: false,
            noDataRenderer: false,
            selectValues: [],
            searchBy: "stationCode",
            clearable: true,
            searchable: true,
            create: false,
            separator: false,
            forceOpen: false,
            handle: false,
            addPlaceholder: "",
            labelField: "station",
            valueField: "stationCode",
            color: "#0074D9",
            keepSelectedInList: true,
            closeOnSelect: false,
            dropdownPosition: "bottom",
            direction: "ltr",
            dropdownHeight: "410px"
        };
    }

    setValues = selectValues => {
        this.setState({ selectValues })
        let departureCode = selectValues[0]?.stationCode || null;
        this.props.handleChange(departureCode);
    };

    contentRenderer = ({ props, state }) => {
        return (
            <div>
                {state.values.length} of {props.options.length} Selected
            </div>
        );
    };

    noDataRenderer = () => {
        return (
            <p style={{ textAlign: "center" }}>
                <strong>Ooops!</strong> No data found
            </p>
        );
    };

    itemRenderer = ({ item, itemIndex, props, state, methods }) => (
        <div key={item[props.valueField]} onClick={() => methods.addItem(item)}>
            <div style={{ margin: "10px" }}>
                <input type="checkbox" checked={methods.isSelected(item)} />
                {item[props.labelField]}
            </div>
        </div>
    );

    dropdownRenderer = ({ props, state, methods }) => {
        const regexp = new RegExp(state.search, "i");

        return (
            <div>
                <SearchAndToggle color={this.state.color}></SearchAndToggle>
                <Items>
                    {props.options
                        .filter(item =>
                            regexp.test(item[props.searchBy] || item[props.labelField])
                        )
                        .map(option => {
                            if (
                                !this.state.keepSelectedInList &&
                                methods.isSelected(option)
                            ) {
                                return null;
                            }
                            return (
                                <Item
                                    disabled={option.disabled}
                                    key={option[props.valueField]}
                                    onClick={
                                        option.disabled ? null : () => methods.addItem(option)
                                    }
                                >
                                    <ItemLabel>
                                        {
                                            option.disabled &&
                                            <div className="text-align-flight">
                                                {"All locations"}
                                                <hr className="mb-0" />
                                                {/* <div>{option.stationLongName}</div> */}
                                            </div>
                                        }
                                        {
                                            !option.disabled &&
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="text-align-flight ">
                                                    <span className="font-weight-bold pr-2">{option.city},</span>
                                                    {option.country}
                                                    <div>{option.stationLongName}</div>
                                                </div>
                                                <div className="text-align-flight-right">
                                                    {/* <img src="../../assets/images/emiratesplanetail-logo.png" alt="tail logo"/> */}
                                                    <span className="city_code">{option.cityCode}</span>
                                                </div>
                                            </div>
                                        }
                                    </ItemLabel>
                                </Item>
                            );
                        })}
                </Items>
            </div>
        );
    };

    optionRenderer = ({ option, props, state, methods }) => (
        <React.Fragment>
            <div onClick={event => methods.removeItem(event, option, true)}>
                {option.label}
            </div>
        </React.Fragment>
    );

    inputRenderer = ({ props, state, methods }) => (
        <input
            tabIndex="1"
            className="react-dropdown-select-input"
            size={methods.getInputSize()}
            value={state.search}
            onClick={() => methods.dropDown("open")}
            onChange={methods.setSearch}
            placeholder="Type in"
        />
    );

    render() {
        return (
            <StyledSelect
                placeholder="Select Airport"
                addPlaceholder={this.state.addPlaceholder}
                color={this.state.color}
                disabled={this.state.disabled}
                loading={this.state.loading}
                searchBy={this.state.searchBy}
                separator={this.state.separator}
                clearable={this.state.clearable}
                searchable={this.state.searchable}
                create={this.state.create}
                keepOpen={this.state.forceOpen}
                dropdownHandle={this.state.handle}
                dropdownHeight={this.state.dropdownHeight}
                direction={this.state.direction}
                multi={this.state.multi}
                // values={[options.find(opt => opt.stationCode === "HYD")]} // Default selection HYD
                values={[]} // no default selection
                labelField={this.state.labelField}
                valueField={this.state.valueField}
                options={options}
                dropdownGap={5}
                keepSelectedInList={this.state.keepSelectedInList}
                onDropdownOpen={() => undefined}
                onDropdownClose={() => undefined}
                onClearAll={() => undefined}
                onSelectAll={() => undefined}
                onChange={values => this.setValues(values)}
                noDataLabel="No matches found"
                closeOnSelect={this.state.closeOnSelect}
                noDataRenderer={
                    this.state.noDataRenderer
                        ? () => this.noDataRenderer()
                        : undefined
                }
                dropdownPosition={this.state.dropdownPosition}
                itemRenderer={
                    this.state.itemRenderer
                        ? (item, itemIndex, props, state, methods) =>
                            this.itemRenderer(item, itemIndex, props, state, methods)
                        : undefined
                }
                inputRenderer={
                    this.state.inputRenderer
                        ? (props, state, methods) =>
                            this.inputRenderer(props, state, methods)
                        : undefined
                }
                optionRenderer={
                    this.state.optionRenderer
                        ? (option, props, state, methods) =>
                            this.optionRenderer(option, props, state, methods)
                        : undefined
                }
                contentRenderer={
                    this.state.contentRenderer
                        ? (innerProps, innerState) =>
                            this.contentRenderer(innerProps, innerState)
                        : undefined
                }
                dropdownRenderer={
                    this.state.dropdownRenderer
                        ? (innerProps, innerState, innerMethods) =>
                            this.dropdownRenderer(
                                innerProps,
                                innerState,
                                innerMethods
                            )
                        : undefined
                }
            />
        );
    }
}

const StyledSelect = styled(Select)`
  ${({ dropdownRenderer }) =>
        dropdownRenderer &&
        `
		.react-dropdown-select-dropdown {
			overflow: initial;
		}
	`}
`;

const SearchAndToggle = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin: 10px 10px 0;
    line-height: 30px;
    padding: 0 20px;
    border: 1px solid #ccc;
    border-radius: 3px;
    :focus {
      outline: none;
      border: 1px solid ${({ color }) => color};
    }
  }
`;

const Items = styled.div`
  overflow: auto;
  min-height: 10px;
  max-height: 400px;
`;

const Item = styled.div`
  display: flex;
 
  align-items: baseline;
  cursor: pointer;
  border-bottom: 1px dotted transparent;

  :hover {
    border-bottom: 1px dotted #ccc;
  }

  ${({ disabled }) =>
        disabled
            ? `
  	opacity: 0.5;
  	pointer-events: none;
  	cursor: not-allowed;
  `
            : ""}
`;

const ItemLabel = styled.div`
  padding:15px 10px;
  width:100%;
  :hover{
      background:#d4d4d4
  }
`;
