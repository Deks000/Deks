import React from "react";

class Preloader extends React.Component {
  render() {
    return (
      <img
        id="loading"
        src="https://i.gifer.com/7plU.gif"
        alt="Идет загрузка..."
      />
    );
  }
}

export default Preloader;
