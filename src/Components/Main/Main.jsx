import React from "react";
import * as S from './MainStyle'
import Scooby from './images-main/scooby.png'
import Ben10 from './images-main/ben10.png'
import Looney from './images-main/looney.png'
import Gumball from './images-main/gumball.png'
import Meninas from './images-main/meninas.png'
import TomJerry from './images-main/tomjerry.png'
import Banner from './Banner'
function Main(){
    return(
        <S.MainStyle>
            <S.SectionUm className="um">
                <S.ImgUm src={Scooby} alt="Imagem dos personagens do desenho Scooby Doo" />
                <S.ImgUm src={Ben10} alt="Imagem dos personagens do desenho Ben 10" />
                <S.ImgUm src={Looney} alt="Imagem dos personagens do desenho Looney Tunes" />
            </S.SectionUm>
            <Banner/>
            <S.SectionDois className="dois">
                <S.ImgDois src={Gumball} alt="Imagem dos personagens do desenho Gumball" />
                <S.ImgDois src={Meninas} alt="Imagem dos personagens do desenho Meninas Super Poderosas" />
                <S.ImgDois src={TomJerry} alt="Imagem dos personagens do desenho Tom e Jerry" />
            </S.SectionDois>
        </S.MainStyle>
    )
}

export default Main