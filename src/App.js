import React, { Component } from 'react';
import Field from "./components/Field/Field";
import Bulb from "./components/Bulb/Bulb";
import Counter from "./components/Counter/Counter";
import './App.css';

class App extends Component {
    state = {
        manyCells: [],
        triesCount: 0,
    };
    componentDidMount = () => {
        let manyCells = this.cells();
        this.setState({manyCells})
};
  cells = () => {
    const cell = [];
      for (let i = 0; i < 36; i++){
        let oneCell = {
          hasItem: false,
            chooseItem: false,
        };
        cell.push(oneCell)
      }
      cell[Math.floor(Math.random() * 36)].hasItem = true;
    return cell;
};
  hideSquare = (index) => {
    const hide = {...this.state.manyCells[index]};
    const manyCells = [...this.state.manyCells];
    hide.chooseItem = true;
    manyCells[index] = hide;
    let count = this.state.triesCount;
    count ++;
    this.setState({manyCells, triesCount: count});
  };
  getReset = () => {
      const givreset = this.cells();
      this.setState({triesCount: 0, manyCells: givreset});
  };
  render() {
    return (
      <div className="App">
        <Field click={this.hideSquare} cells={this.state.manyCells}/>
        <Counter try={this.state.triesCount}/>
        <Bulb click={this.getReset}/>
      </div>
    );
  }
}

export default App;
