import "./Square.scss";
import { FaRegCircle as Nought } from "react-icons/fa";
import { ImCross as Cross } from "react-icons/im";

const SYMBOLS_MAP = {
    cross: Cross,
    nought: Nought,
};

export type Symbol = keyof typeof SYMBOLS_MAP;

type SquareProps = {
    symbol?: Symbol;
    onClick: () => void;
};

export function Square({ symbol, onClick }: SquareProps) {
    function renderSymbol() {
        if (!symbol) return;

        const Symbol = SYMBOLS_MAP[symbol];

        return <Symbol className="c-ttt-square__symbol" />;
    }

    return (
        <div className="c-ttt-square" onClick={onClick}>
            {renderSymbol()}
        </div>
    );
}
