import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'
class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) {
        super(props);
        this.state = {
            die1: "one",
            die2: "one",
            isRolling: false
        };
    }

    roll = () => {
       const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
       const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
       this.setState({die1: newDie1, die2: newDie2, isRolling: true})
       //Wait a second and set roll to false
       setTimeout(() => {
           this.setState({isRolling: false})
       }, 1000)
    }
    render() {
        return (
            <div className="RollDice">
                <h2>Roll the Dice!</h2>
               
                <div className="DiceIcons">
                    <Die face={this.state.die1} rolling={this.state.isRolling}/>
                    <Die face={this.state.die2} rolling={this.state.isRolling}/>
                </div>
               
                
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? 'Rolling' : 'Roll Dice'}
                </button>
                
            </div>
        );
    }
}

export default RollDice;