import styled from "styled-components";

export const Banner = styled.section`
height: 100%;
background-color: #211921;
color: #FFFFFF;
padding-top: 10px;
text-align: center;
overflow-x: scroll;
overflow-y: hidden;

&::-webkit-scrollbar{
    display: none;
}
`
export const Div = styled.div`
width: 99%;
height: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin:30px 0;
`

export const H2 = styled.h2`
text-shadow: 0 2px 10px #EDD820;
margin-bottom: 10px;
`
export const Card = styled.div`
width: 400px;
height: 225px;
box-shadow: 0 0 40px #EDD820;
border-radius: 20px;
margin: 0;
padding: 0;
`
export const Iframe = styled.iframe`
border-radius: 20px;
`