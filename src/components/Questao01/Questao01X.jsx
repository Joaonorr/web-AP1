import { useState } from "react";
import Questao01Y from "./Questao01Y";

function Questao01X() {

    // estado que armazena o array de medias
    const [medias, setMedias] = useState([]);

    // array de alunos
    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
    ];

    // função que retorna um array de alunos com nota menor ou igual a 5
    const alunosComNotaVermelha = () => {
        // filtra o array de alunos e retorna um array de alunos com nota menor ou igual a 5
        const aprovados = alunos.filter((aluno, index) => {
            return medias[index] <= 5;
        });

        // para cada aluno com nota menor ou igual a 5, retorna o aluno
        if (aprovados.length === 0) {
            return <p>Não há alunos com nota menor ou igual a 5</p>
        }
        else {
            return (
                <ul>
                    {aprovados.map((aluno) => {
                        return <p key={aluno.nome}>{aluno.nome}</p>
                    })}
                </ul>
            );
        }
    }

    // o componente Questao01Y é renderizado e o estado medias é atualizado
    return (
        <div>
            <h1>Questão 1</h1>
            <Questao01Y  alunos={alunos} setMedia={setMedias}/>
            <h2>Alunos com médias menor ou igual a 5:</h2> 
            {alunosComNotaVermelha()}  
        </div>
    );
}

export default Questao01X;