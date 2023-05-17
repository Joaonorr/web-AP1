import React, { useState } from 'react';

const Questao02 = () => {
    // Flag para alternar entre frente e costas
    const [flag, setFlag] = useState(true);

    // Função que ao ser chamada, altera o valor da flag de true para false e vice-versa
    const handleClick = () => {
        setFlag(!flag); // Altera o valor da flag
    }

    // Renderiza a imagem de frente ou de costas, dependendo do valor da flag
    return (
        <div>
            <h1>Questão 2</h1>
            <img src={
                flag ? 
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" 
                    : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"} 
                    alt="Pikachu" 
            />
            <button onClick={handleClick}>Trocar</button>
        </div>
    );
}

// Exporta o componente
export default Questao02;