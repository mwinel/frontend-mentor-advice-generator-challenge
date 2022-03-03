import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import Card from './components/Card/Card';

export default function App() {
    const [advice, setAdvice] = useState({
        slip: { id: 124, advice: 'Do not check work email on your days off.' },
    });

    const fetchData = useCallback(async () => {
        try {
            const { data } = await axios.get(
                'https://api.adviceslip.com/advice'
            );
            setAdvice(data);
        } catch (err) {
            console.log(err);
        }
    }, []);

    const handleFetchAdvice = () => {
        fetchData();
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <main>
            <div className="container">
                <Card
                    number={advice.slip.id}
                    advice={advice.slip.advice}
                    handleFetchAdvice={handleFetchAdvice}
                />
            </div>
        </main>
    );
}
