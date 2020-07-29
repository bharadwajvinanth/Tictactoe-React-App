import React from "react";
import './game.css';
import IconButton from "@material-ui/core/IconButton";
import UndoIcon from '@material-ui/icons/Undo';
import RedoIcon from '@material-ui/icons/Redo';
import ReplayIcon from '@material-ui/icons/Replay';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            difficulty: "Medium"
        };
    }
    handleChange = (event) =>{

    };
    render(){
        return (
            <div className="game-container">
                <div className="dropdown-container">
                    <select value={this.state.difficulty} onChange={this.handleChange}>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                        <option value="Friend">Play against a friend</option>
                    </select>
                </div>
                <div className="board-container">
                    <div className="player-container">
                        <div className="textbox-container">
                            Player 1
                        </div>

                        <div className="textbox-container">
                            Player 2
                        </div>
                    </div>
                    <div className="turn-container">
                        <p>Turn</p>
                    </div>
                    <div className="ttt-container">

                    </div>
                    <div className="buttons-container">
                        <div className="button-container">
                            <IconButton color="primary" aria-label="undo" component="span">
                                <UndoIcon />
                            </IconButton>
                        </div>
                        <div className="button-container">
                            <IconButton color="primary" aria-label="redo" component="span">
                                <RedoIcon />
                            </IconButton>
                        </div>
                        <div className="button-container">
                            <IconButton color="primary" aria-label="replay" component="span">
                                <ReplayIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
