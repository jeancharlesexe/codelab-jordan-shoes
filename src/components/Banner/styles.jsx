import styled from "styled-components";

export const BannerWrapper = styled.section`
    background-color: blue;
    height: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${(props) => props.srcImage});
    background-size: cover;
    background-repeat: no-repeat;
`
export const BannerWrapperInner = styled.div`
    width: 80%;
    height: 100%;
    color: white;
    font-family: "Archivo", Arial, Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    header{
        height: 50px;
        width: 100%;
        background-color: red;
        display: flex;
        align-items: center;
        gap: 5px;
    }
`
