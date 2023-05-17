import React, { useEffect } from 'react';

const Questao01Y = ({alunos, setMedia}) => {
    // com o map, podemos percorrer o array de alunos e para cada aluno
    // podemos calcular a media e retornar um array de medias
    // o array de medias é armazenado no estado medias
    useEffect(() => {
        const medias = 
            alunos.map((aluno) => 
            {
                const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2;
                return media;
            });
        setMedia(medias);

    }, []);

    return (
        <div>
            Calculando as médias...
        </div>
    );
}

export default Questao01Y;