import React from "react"
import * as S from './BannerStyle'

function Banner(){
    return(
        <S.Banner>
            <S.H2>Assista aos melhores desenhos de nossa programação.</S.H2>
            
            <S.Div>
                <S.Card className="gumball">
                    <S.Iframe width="400" height="225" src="https://www.youtube.com/embed/KxGIO8vZ_l0?si=FCAmmo38_354JT_F&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></S.Iframe>
                </S.Card>
                <S.Card className="jorel">
                    <S.Iframe width="400" height="225" src="https://www.youtube.com/embed/tVZiwfVOkGw?si=hRq3LTapYCAMGRdM&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></S.Iframe>
                </S.Card>
                <S.Card className="horadaaventura">
                    <S.Iframe width="400" height="225" src="https://www.youtube.com/embed/52btJv3BOnM?si=T4anL9XCjW2xIe8Z&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></S.Iframe>
                </S.Card>
            </S.Div>
        </S.Banner>
    )
}

export default Banner