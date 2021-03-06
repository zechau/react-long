import React, {Component} from 'react';
import {render} from 'react-dom';

import './index.css';

import LongPress from '../../src';

const styles = {
  block: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 150,
    backgroundColor: '#ffc1c1',
    margin: 'auto',
    marginBottom: 30,
    padding: 25,
    textAlign: 'center'
  }
};

class Demo extends Component {
  state = {
    pressed: []
  };

  addToPressed = index =>
    this.setState({pressed: [...this.state.pressed, index]});

  removeFromPressed = index =>
    this.setState({pressed: this.state.pressed.filter(i => i !== index)});

  render() {
    const {pressed} = this.state;

    return (
      <div>
        <div style={{textAlign: 'center'}}>
          <h1>react-long Demo</h1>
          <h3>(works only on mobile)</h3>
        </div>

        <div>
          {Array.from({length: 10}).map((t, i) => (
            <LongPress
              key={i}
              time={500}
              onLongPress={() => this.addToPressed(i)}
              onPress={() => this.removeFromPressed(i)}
            >
              <div
                style={{
                  ...styles.block,
                  ...(pressed.indexOf(i) !== -1 && {
                    backgroundColor: '#a5d4ab'
                  })
                }}
              >
                <div>
                  <div>
                    {pressed.indexOf(i) === -1
                      ? 'Long press me'
                      : 'Now short press me'}
                  </div>
                </div>
              </div>
            </LongPress>
          ))}
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
