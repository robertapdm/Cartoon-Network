import styled from "styled-components";

export const MainStyle = styled.main`
width: 100vw;
height: 100%;

@media screen and (max-width:500px) {
height: 60vh;
}
`
export const SectionUm = styled.section`
width: 100vw;
height: 40vh;
background-color: #211921;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width:500px) {
    height: 30vh;
    justify-content: space-around;
    overflow-x: scroll;
    overflow-y: hidden;

&::-webkit-scrollbar{
    display: none;
}
}
`
export const ImgUm = styled.img`
@media screen and (max-width:500px) {
width: 250px;
}
`
export const SectionDois = styled.section`
height: 40vh;
background-color: #EDD820;
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width:500px) {
    height: 30vh;
    justify-content: space-around;
    overflow-x: scroll;
    overflow-y: hidden;

&::-webkit-scrollbar{
    display: none;
}
}
`
export const ImgDois = styled.img`
@media screen and (max-width:500px) {
width: 200px;
}
`