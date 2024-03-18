import React from "react";
import * as S from './HeaderStyle'
import Logo from './images-header/cn.png'
import Jogos from './images-header/jogos.png'
import Programacao from './images-header/programacao.png'

function Header(){
    return(
        <S.HeaderStyle>
            <S.ImgLogo src={Logo} alt="Logo Cartoon Network" />
            <S.Nav>
                <S.Div>
                    <S.ImgJogos src={Jogos} alt="Imagem Controle de Video Game" />
                    <S.A href=""><S.P>Jogos</S.P></S.A>
                </S.Div>
                <S.Div>
                    <S.ImgProgramacao src={Programacao} alt="Imagem de um Relógio" />
                    <S.A href=""><S.P>Programação</S.P></S.A>
                </S.Div>
            </S.Nav>
        </S.HeaderStyle>
    )
}

export default Header