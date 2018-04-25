import * as React from "react";
import { ChangeEvent } from "react";

export interface Props {
  low: number,
  high: number
}

export default class InRange extends React.Component<{
  low: number,
  high: number
}, {
  inRange: boolean,
  value: string
}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inRange: false,
      value: ''
    }
  }
  inRange = (value: any) => {
    return value >= this.props.low && value <= this.props.high;
  }
  onChangeName = (event: ChangeEvent<any>) => {
    const value = event.target.value;
    this.setState({
      value,
      inRange: this.inRange(value)
    });
  }
  render() {
    const className = this.state.inRange ? 'valid' : 'invalid';
    return (
      <input
        className={className}
        value={this.state.value}
        onChange={this.onChangeName}
      />
    );
  }
}