import React, { useState, useEffect } from 'react';

const Questao03 = () => {
    // estado que armazena a capital com maior população
    const [maiorPopulacao, setMaiorPopulacao] = useState("");
    const [menorPopulacao, setMenorPopulacao] = useState("");

    // função que retorna a capital com maior população
    useEffect(() => {
        // faz a requisição para a API
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            .then( // quando a resposta chegar
                (response) => {
                    return response.json() // converte a resposta para json
                }
            )
            .then( // quando o json estiver pronto
                (data) => {
                    // inicializa as variáveis maior e menor com a população da primeira capital
                    let maior = data[0].population;
                    let menor = data[0].population;
                    let indexMaior = 0;
                    let indexMenor = 0;

                    // percorre o array de capitais e atualiza as variáveis maior e menor
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].population > maior) {
                            maior = data[i].population;
                            indexMaior = i;
                        }
                        if (data[i].population < menor) {
                            menor = data[i].population;
                            indexMenor = i;
                        }
                    }

                    // atualiza o estado com a capital com maior população
                    setMaiorPopulacao(data[indexMaior].capital[0]);
                    // atualiza o estado com a capital com menor população
                    setMenorPopulacao(data[indexMenor].capital[0]);
                }
            )
            .catch(error => console.log(error)) // captura o erro, caso ocorra
    }, []);

    return (
        <div>
            <h1>Questão 3</h1>
            <h2>Capital com maior população: {maiorPopulacao}</h2>
            <h2>Capital com menor população: {menorPopulacao}</h2>
        </div>
    );
}

export default Questao03;