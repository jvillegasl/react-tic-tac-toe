import "./TicTacToe.scss";
import { Square, Symbol } from "./Square";
import { ReactComponent as Grid } from "@/assets/images/ttt-grid.svg";
import { useState, useEffect, useMemo } from "react";
import { indexToMatrixCoordinates, getTicTacToeWinner } from "@/utils";
import classNames from "classnames";

type Board = (Symbol | undefined)[][];

export function TicTacToe() {
    const [boardState, setBoardState] = useState<Board>([[], [], []]);
    const [currentPlayer, setCurrentPlayer] = useState<Symbol>("cross");

    const winner = useMemo(() => getTicTacToeWinner(boardState), [boardState]);

    function handleSquareClick(i: number, j: number) {
        if (boardState[i][j]) return;

        setBoardState((prevState) => {
            const newState = [...prevState];
            newState[i][j] = currentPlayer;
            return newState;
        });

        setCurrentPlayer((prevState) => {
            return prevState === "cross" ? "nought" : "cross";
        });
    }

    function renderBoardItems() {
        return [...new Array(9)].map((e, index) => {
            const [i, j] = indexToMatrixCoordinates(index, 3);

            return (
                <Square
                    key={index}
                    symbol={boardState[i][j]}
                    onClick={() => {
                        handleSquareClick(i, j);
                    }}
                />
            );
        });
    }

    function renderWinner() {
        if (winner === undefined) return;

        return (
            <div className="c-ttt__winner">
                <h2>
                    WINNER! <br /> {winner.toUpperCase()}
                </h2>
            </div>
        );
    }

    function handleResetClick() {
        setBoardState([[], [], []]);
        setCurrentPlayer("cross");
    }

    return (
        <div className="c-ttt">
            <p className="c-ttt__current-player">Turn of {currentPlayer}</p>

            <div className="c-ttt__board">
                <div
                    className={classNames("c-ttt__squares", {
                        "h-invisible": winner !== undefined,
                    })}
                >
                    {renderBoardItems()}
                    <Grid className="c-ttt__grid" />
                </div>
                
                {renderWinner()}
            </div>

            <button className="c-ttt__reset" onClick={handleResetClick}>
                Reset game
            </button>
        </div>
    );
}
