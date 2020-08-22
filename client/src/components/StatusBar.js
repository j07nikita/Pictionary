import React from 'react';
import './statusbar.css'
import { socket,_roomName } from '../api';

export default class StatusBar extends React.Component {
    constructor() {
        super();
        this.state = {
            currentRound: 0,
            totalRounds: 0,
            word: "",
            player: { drawing: false },
        }
    }

    componentDidMount() {
        socket.on('statusBarData',(data) => {
            console.log("Status Bar: "+data);
            this.setState({
                currentRound: data.roundsPlayed,
                totalRounds: data.totalRounds,
                word: data.currentWord,
                player: data.playerInfo,
            });
        });
    }

    render() {
        var blankWord;
        if (this.state.player.drawing === false) {
            var len = this.state.word.length;
            var temp = "";
            for (var i = 0; i < len; i++) {
                temp = temp.concat("_ ");
            }
            blankWord = temp;
        }

        return (
            <div className="status-bar">
                <table>
                    <tr>
                        <th className="room-id">
                            <h3 className="text">Room ID: {_roomName}</h3>
                        </th>

                        <th className="round-info">
                            <h3 className="text">Round {this.state.currentRound} of {this.state.totalRounds}</h3>
                        </th>

                        <th className="word">
                            {this.state.player.drawing === true &&
                                <h3 className="text">{this.state.word}</h3>
                            }
                            {this.state.player.drawing === false &&
                                <h3 className="text">{blankWord}</h3>
                            }
                        </th>
                    </tr>
                </table>

            </div>
        )
    }
}