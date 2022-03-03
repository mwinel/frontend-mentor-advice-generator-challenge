export default function Button({ onClick }) {
    return (
        <button className="dice" onClick={onClick}>
            <img src="./images/icon-dice.svg" alt="icon dice" />
        </button>
    );
}
