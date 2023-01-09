import logo from './logo.svg';
import './App.css';
import boxes from './boxes';
import React from 'react';
import Box from './box';

function App() {
    const [squares, setsquares] = React.useState(boxes)

    let setSquares

    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
    }


    const squareElements = squares.map(square => (
        <Box on={square.on}
            key={square.id}
            toggle={()=>toggle(square.id)}
        />
    ))

    return (
        <main>
            {squareElements}
        </main>
    )
}

export default App;
