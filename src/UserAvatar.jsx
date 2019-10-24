import React from "react";

class UserAvatar extends React.Component {
  render() {
    const { image } = this.props;
    return <img src={image} alt="Avatar" />;
  }
}

export default UserAvatar;
