import styled from "styled-components";

export const HeaderStyle = styled.header`
width: 100vw;
height: 20vh;
background-color: #EDD820;
display: flex;
justify-content: space-around;
align-items: center;

@media screen and (max-width:500px) {
    height: 25vw;
}
`
export const Nav = styled.nav`
width: 260px;
display:flex;
justify-content: space-evenly;
margin: 0 0 0 300px;

@media screen and (max-width:500px) {
    margin: 0;
}
`
export const ImgLogo = styled.img`
width: 200px;
height: 67px;
margin-bottom: 5px;

@media screen and (max-width:500px) {
    width: 150px;
    height: 40px;
    margin: 20px;
}

`
export const ImgJogos = styled.img`
width: 70px;

@media screen and (max-width:500px) {
    width: 40px;
}
`
export const ImgProgramacao = styled.img`
width: 70px;

@media screen and (max-width:500px) {
    width: 40px;
}
`
export const P = styled.p`
font-weight: bold;
padding: 5px;
`
export const A = styled.a`
color: #000000;
font-weight: 400;
transition: all 0.3s;

&:hover{
    color: #FFFFFF;

}
`
export const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media screen and (max-width:500px) {
    margin-bottom: 10px;
}
`