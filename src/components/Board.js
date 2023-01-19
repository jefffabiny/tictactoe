import React from "react";

import Square from "./Square";

export default class Board extends React.Component {
  renderSquare() {
    let squares = [];
    for (let i in Array(9).fill(null)) {
      squares.push(
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
    return squares;
  }

  render() {
    return <div className="board">{this.renderSquare()}</div>;
  }
}
