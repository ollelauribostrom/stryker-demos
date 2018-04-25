# Stryker React TypeScript demo
- TypeScript
- React
- Jest

Before running example
----------------------
```bash
  cd react-ts
  yarn
```

Simple example (src/components/InRange.tsx)
-------------------------------------------
```ts
  // InRange component (src/components/InRange.tsx)
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

  // The tests (tests/InRange.spec.tsx)
  it("should apply valid classname when input in range", () => {
    const wrapper = shallow(<InRange low={1} high={10} />);
    wrapper.find('input').simulate('change', { target: { value: '5' }});
    expect(wrapper.find('input').hasClass('valid')).toEqual(true);
  });
  it("should apply invalid classname when input NOT in range", () => {
    const wrapper = shallow(<InRange low={1} high={10} />);
    wrapper.find('input').simulate('change', { target: { value: '15' }});
    expect(wrapper.find('input').hasClass('invalid')).toEqual(true);
  });
```
Run tests: `npm test` => All tests pass   
Run coverage: `npm run coverage` => 100% coverage

Is this good enough?
--------------------
Not really..   
1. Run mutation testing: `npm run mutate` => 6 Mutants survived   
2. We do not assert on the boundary values, meaning that the test suite would still pass
if someone would change >= to > (inRange method)
3. We do not check initial state of the component

Add more some more test cases
-----------------------------
Uncomment the test cases in tests/InRange.spec.tsx
```ts
  it("should initially be empty with invalid classname", () => {
    const wrapper = shallow(<InRange low={1} high={10} />);
    expect(wrapper.find('input').hasClass('invalid')).toEqual(true);
    expect(wrapper.find('input').props().value).toEqual('');
  });
  it("should include high value in range", () => {
    const wrapper = shallow(<InRange low={1} high={10} />);
    wrapper.find('input').simulate('change', { target: { value: '10' }});
    expect(wrapper.find('input').hasClass('valid')).toEqual(true);
  });
  it("should include low value in range", () => {
    const wrapper = shallow(<InRange low={1} high={10} />);
    wrapper.find('input').simulate('change', { target: { value: '1' }});
    expect(wrapper.find('input').hasClass('valid')).toEqual(true);
  });
```
Run mutation again: `npm run mutate` => All mutants where killed
