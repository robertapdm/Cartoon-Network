import React from "react";
import * as S from './FooterStyle'
import Warner from './images-footer/warner.png'
import Github from './images-footer/github.png'
import Linkedin from './images-footer/linkedin.png'



function Footer(){
    return(
        <S.FooterStyle>
            <S.Div>
                <div>
                    <S.ImgLogo src={Warner} alt="" />
                </div>
                <S.Ul>
                    <S.A href=""><li>Sobre nós</li></S.A>
                    <S.A href=""><li>Produtos</li></S.A>
                    <S.A href=""><li>Personagens</li></S.A>
                </S.Ul>
            <S.DivSocial className="sociais">
                <S.ImgSocial src={Github} alt="" />
                <S.ImgSocial src={Linkedin} alt="" />
            </S.DivSocial>
            </S.Div>
            <S.DivAutoral>
                <p>© 2024 Cartoon Network</p>
            </S.DivAutoral>
        </S.FooterStyle>
    )
}

export default Footer