import React from "react";

export default class Board extends React.Component {
  render() {
    return (
      <div className="game-info">
        <div>{this.props.status}</div>
        <ol>{this.props.moves}</ol>
      </div>
    );
  }
}
