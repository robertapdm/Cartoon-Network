import React, {useState} from "react";
import * as S from "./ProgramacaoStyle"
import Dexter from './images-programacao/dexter.png'
import VacaeFrango from './images-programacao/vacaefrango.png'
import Du from './images-programacao/du.png'
import Coragem from './images-programacao/coragem.png'
import Jorel from './images-programacao/jorel.png'
import Monica from './images-programacao/monica.png'
import Steven from './images-programacao/steven.png'
import BillyeMandy from './images-programacao/billyemandy.png'

function Programacao(){
    const [desenhos, setDesenhos] = useState([
        {
            hora: '07:00' , nome: 'O Laboratório de Dexter', imagem: Dexter, desenhoManha: true
        },
        {
            hora: '08:00' , nome: 'A Vaca e o Frango', imagem: VacaeFrango, desenhoManha: true
        },
        {
            hora: '09:00' , nome: 'Du, Dudu e Edu', imagem: Du, desenhoManha: true
        },
        {
            hora: '10:00' , nome: 'Coragem, O Cão Covarde', imagem: Coragem, desenhoManha: true
        },
        {
            hora: '11:00' , nome: 'Irmão do Jorel', imagem: Jorel, desenhoManha: true
        },
        {
            hora: '12:00' , nome: 'Turma da Mônica Jovem', imagem: Monica, desenhoManha: false
        },
        {
            hora: '13:00' , nome: 'Steven Universo', imagem: Steven, desenhoManha: false
        },
        {
            hora: '14:00' , nome: 'Billy e Mandy', imagem: BillyeMandy, desenhoManha: false
        }        
    ]
    )

    const desenhoAntesMeioDia = desenhos.filter((item)=>item.desenhoManha === true)

    return(
        <S.Catalogo>
            <S.Section>
                {desenhos.map((item)=>(
                    <S.Card>
                        <h2>{item.hora}</h2>
                        <h2>{item.nome}</h2>
                        <S.Img src={item.imagem} alt="" />
                    </S.Card>
                ))}
            </S.Section>
            <div>
                <h2>Desenhos da Manhã</h2>
                {desenhoAntesMeioDia.map((item)=>(
                    <div>
                        <h2>{item.hora}</h2>
                        <h2>{item.nome}</h2>
                        <img src={item.imagem} alt={item.nome} />
                    </div>
                ))}
            </div>
        </S.Catalogo>
    )
}

export default Programacao