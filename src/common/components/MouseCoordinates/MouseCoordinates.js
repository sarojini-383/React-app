import React from 'react';
import {
    MouseCoordinatesContainer,
    UserBlock,
    Txt,
} from './styledComponent'

class MouseCoordinates extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <MouseCoordinatesContainer  onMouseMove={this.handleMouseMove}>
        <UserBlock>
        <Txt>Move the mouse around!</Txt>
        <Txt>The current mouse position is ({this.state.x}, {this.state.y})</Txt>    
        </UserBlock>
      </MouseCoordinatesContainer>
    );
  }
}

export default MouseCoordinates;