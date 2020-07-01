import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {        
      return (
        <button className="square" 
        onClick={props.onClick}
        >
          {props.value}
        </button>
      );
  }
  
class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = { //Esto es como pasarle this.state.squares donde ese squares 
                        //esta compuesto por el arreglo de 9 elementos con null
            squares: Array(9).fill(null),
            xIsNext:true, //Para controlar si poner una X o una O
        };
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O'; //Preguntamos si xIsNext es true o false y dependiendo de eso le ponemos X o O
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext, //Si estaba en True pasa a False o viceversa
        });
    }
    
    renderSquare(i) {
        return (
            <Square 
            value={this.state.squares[i]}
            onClick = {() => this.handleClick(i)}
            />
        );
    }

    render() {
        const status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderSquare(0)}
                {this.renderSquare(1)}
                {this.renderSquare(2)}
            </div>
            <div className="board-row">
                {this.renderSquare(3)}
                {this.renderSquare(4)}
                {this.renderSquare(5)}
            </div>
            <div className="board-row">
                {this.renderSquare(6)}
                {this.renderSquare(7)}
                {this.renderSquare(8)}
            </div>
        </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
            </div>
        </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);