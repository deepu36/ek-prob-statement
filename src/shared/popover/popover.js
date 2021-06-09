import React, { Component } from "react";
import PropTypes from "prop-types";
import { Popover, Overlay } from "react-bootstrap";

class PopoverWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseOverAndOut = this.handleMouseOverAndOut.bind(this);
    this.handleOverleyHide = this.handleOverleyHide.bind(this);
  }

  handleClick(e) {
    e.persist();
    e.preventDefault();
    this.setState((s) => ({ target: e.target, show: !s.show }));
  }

  handleMouseOverAndOut(bool) {
    return (e) => {
      e.persist();
      e.preventDefault();
      if (this.props.showPopoverOnHover) {
        this.setState({ target: e.target, show: bool });
      }
    };
  }

  handleOverleyHide() {
    this.setState({ show: false });
  }

  render() {
    const { id, title, placement, anchorContent, popoverClass, children } =
      this.props;
    return (
      <span>
        <a
          id={`${id}-popover`}
          href="javascript:void(0)"
          onClick={this.handleClick}
          onMouseOver={this.handleMouseOverAndOut(true)}
          onMouseOut={this.handleMouseOverAndOut(false)}
        >
          {anchorContent}
        </a>
        <Overlay
          show={this.state.show}
          target={this.state.target}
          onHide={this.handleOverleyHide}
          animation={false}
          placement={placement}
          shouldUpdatePosition
          rootClose
        >
          <Popover id={id} title={title} bsStyle={`wrapper ${popoverClass}`}>
            <a
              id={`${id}-popover-close`}
              href="javascript:void(0)"
              onClick={(e) => {
                e.preventDefault();
                this.handleOverleyHide();
              }}
            >
              <span className="close-popover">
                <span className="close-icon">
                  <i className="fa fa-times" aria-hidden="true" />
                </span>
              </span>
            </a>
            {children}
          </Popover>
        </Overlay>
      </span>
    );
  }
}

PopoverWrapper.defaultProps = {
  id: "",
  title: "",
  placement: "top",
  anchorContent: "",
  popoverClass: "override",
  showPopoverOnHover: false,
  children: "",
};

PopoverWrapper.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  placement: PropTypes.string,
  popoverClass: PropTypes.string,
  anchorContent: PropTypes.node,
  showPopoverOnHover: PropTypes.bool,
  children: PropTypes.node,
};

export default PopoverWrapper;
