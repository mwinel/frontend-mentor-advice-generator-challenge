import Button from '../Button/Button';

export default function Card({ number, advice, handleFetchAdvice }) {
    return (
        <>
            <div className="card">
                <h1 className="title">ADVICE #{number}</h1>
                <p className="advice">"{advice}"</p>
                <div className="divider-wrapper">
                    <img
                        src="./images/pattern-divider-desktop.svg"
                        alt="pattern divider"
                    />
                </div>
            </div>
            <Button onClick={handleFetchAdvice} />
        </>
    );
}
