import styled from "styled-components";

export const FooterStyle = styled.footer`
width: 100vw;
height: 20vh;
background-color: #EDD820;
color: #FFFFFF;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (max-width:500px) {
    height: 17vw;
}
`
export const Div = styled.div`
width: 100vw;
height: 50vh;
background-color: #211921;
display: flex;
justify-content: space-around;
align-items: center;
`
export const ImgLogo = styled.img`
width: 100px;
`
export const Ul = styled.ul`
width: 30vw;
height: 100%;
display: flex;
justify-content: space-around;
align-items: center;

@media screen and (max-width:500px) {
    font-size: 0.6rem;
}
`
export const A = styled.a`
color: #FFFFFF;
font-weight: 400;
transition: all 0.3s;

&:hover{
    color: #EDD820;

}
`
export const DivSocial = styled.div`
width: 130px;
display: flex;
justify-content: space-around;

@media screen and (max-width:500px) {
width: 80px;
margin-right: 5px;
}
`
export const ImgSocial = styled.img`
width: 50px;

@media screen and (max-width:500px) {
    width: 25px;
}
`
export const DivAutoral = styled.div`
height: 100%;
display: flex;
align-items: center;

@media screen and (max-width:500px) {
    font-size: 0.6rem;
}
`