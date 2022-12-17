import Header from "./components/header";
import React from "react";
import { useState } from "react";

function App() {
    const [message, setMessage] = useState("");
    const [morse, setMorse] = useState("");
    function translateToMorse(value) {
        const morseCode = {
            a: ".-",
            b: "-...",
            c: "-.-.",
            d: "-..",
            e: ".",
            f: "..-.",
            g: "--.",
            h: "....",
            i: "..",
            j: ".---",
            k: "-.-",
            l: ".-..",
            m: "--",
            n: "-.",
            o: "---",
            p: ".--.",
            q: "--.-",
            r: ".-.",
            s: "...",
            t: "-",
            u: "..-",
            v: "...-",
            w: ".--",
            x: "-..-",
            y: "-.--",
            z: "--..",
            1: ".----",
            2: "..---",
            3: "...--",
            4: "....-",
            5: ".....",
            6: "-....",
            7: "--...",
            8: "---..",
            9: "----.",
            0: "-----",
        };

        // convert the value to lowercase and split it into an array of characters
        const valueArray = value.toLowerCase().split("");

        // map the array of characters to their corresponding Morse code
        const morseArray = valueArray.map((char) => morseCode[char] || char);

        // join the array of Morse code characters into a string
        return morseArray.join(" ");
    }
    const getMessage = (event) => {
        event.preventDefault();
        setMessage(event.target.value);
        setMorse(translateToMorse(message));
    };

    return (
        <section className="main-section">
            <Header />
            <div className="translator-container">
                <div className="container">
                    <div className="flex-container">
                        <div className="input-container">
                            <label htmlFor="messageInput">Input Text</label>
                            <textarea
                                name="messageInput"
                                id="messageInput"
                                placeholder="Input Message"
                                onChange={getMessage}
                                value={message}
                            ></textarea>
                        </div>
                        <div className="output-container">
                            <label htmlFor="outputInput">Output</label>
                            <textarea
                                name="outputInput"
                                id="outputInput"
                                value={morse}
                                readOnly
                            ></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default App;
