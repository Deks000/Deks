import React from "react";

class Button extends React.Component {
  render() {
    const { label, handleClick } = this.props;
    return (
      <button id="Get" onClick={handleClick}>
        {label}
      </button>
    );
  }
}

export default Button;
