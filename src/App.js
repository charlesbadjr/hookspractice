import React, {Component} from 'react';
import charPicker from './components/CharPicker';
import Character from './components/Character';




class App extends Component {
  state = {
    selectedCharacter: 1,
    side: 'light',
    destroyed: false
  };
  
  sideHandler = side => {
    this.setState({ side: side });
  };

  charSelectHandler = event => {
    const charId = event.target.value;
    this.setState({ selectedCharacter: charId });
  };

  destructureHandler = () => {
    this.setState({ destroyed: true });
  };

  render(){
    let content = (
      <React.Fragment>
        <charPicker
           side={this.state.side}
           selectedChar={this.state.selectedCharacter}
           onCharSelect={this.charSelectHandler}
        />
        <Character selectedChar={this.state.selectedCharacter} />
        <button onClick={this.sideHandler.bind(this, 'dark')}> Dard Side</button>
        {this.state.side ==='dark' && (
          <button onClick={this.destructionHandler}> Destroy! </button>
        )} 
      </React.Fragment>
    );

    if (this.state.destroyed) {
      content = <h1> Total Destruction! </h1>;
    }
    return content;
  }  
}

export default App;
