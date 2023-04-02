import "./App.scss";
import { TicTacToe } from "./components";

function App() {
    return (
        <div className="c-app">
            <h1 className="c-app__title">Tic-Tac-Toe</h1>

            <div className="c-app__body">
                <TicTacToe />
            </div>
        </div>
    );
}

export default App;
