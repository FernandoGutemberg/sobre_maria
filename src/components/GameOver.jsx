import { useContext } from "react";
import { QuizContext } from "../context/quiz";

import WellDone from "../img/welldone.svg";

import "./GameOver.css";



const GameOver = () => {
    return (
        <div id="gameover">
            <h2>Fim do Jogo!</h2>
            <p>Pontuação: X</p>
            <p>Você acertou y de z perguntas.</p>
            <img src={WellDone} alt="Fim do quiz Mariah" />
            <button>Reiniciar</button>

        </div>
    );
};

export default GameOver;
