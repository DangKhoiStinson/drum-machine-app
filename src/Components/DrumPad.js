import React from "react";
import Display from "./Display.js"

const style_drum = { display: "none" };
class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            drums: [{
                    keyboard: "A",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
                    id:1,
                    text: "Chord 2"
                },
                {
                    keyboard: "B",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
                    id:2,
                    text: "Chord 3"
                },
                {
                    keyboard: "C",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
                    id:3,
                    text: "Give us a light"
                },
                {
                    keyboard: "D",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
                    id:4,
                    text: "Dry Oh"
                },
                {
                    keyboard: "E",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
                    id:5,
                    text: "Bld H1"
                },
                {
                    keyboard: "F",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
                    id:6,
                    text: "Punchy kick 1"
                },
                {
                    keyboard: "G",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
                    id:7,
                    text: "Side Stick 1"
                },
                {
                    keyboard: "H",
                    src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
                    id:8,
                    text: "Brk Snr"
                }
            ],
            displayhome:' '
        }
    }
    handleClick(event) {
        var audio_wrap = document.getElementById(event.currentTarget.id);
        var audio= audio_wrap.getElementsByTagName('audio');
        audio[0].play();   
        var a= audio[0].id.toString();
        console.log(a);
        this.setState({
            displayhome:a
        });
        console.log(this.state.displayhome);
    }
    render() {
        const listDrum = this.state.drums.map(i =>
            <div id={i.id} key ={i+1} className="drum-button" onClick={this.handleClick}>
                <p>{i.keyboard}</p>
                <audio id={i.text} controls src={i.src} type="audio/mp3" style={style_drum}>                    
                </audio>
            </div>
        );
        return (
            <div className="drum-machine">
                {listDrum}
                <Display display={this.state.displayhome} />
            </div>
            
        );
    }
}

export default DrumPad