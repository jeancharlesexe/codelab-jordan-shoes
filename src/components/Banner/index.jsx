import React from "react";

import { 
    BannerWrapper,
    BannerWrapperInner
} from "./styles";
import BannerImage from '../../assets/images/banner.png'
import JordanLogo from '../../assets/icons/logo-white.svg';

const Banner = ()=>{
    return(
        <BannerWrapper srcImage={BannerImage}>
            <BannerWrapperInner>
                <header> 
                    <img src={JordanLogo} alt="logo white"/>
                    <span>JordanShoes</span>
                </header>
                <h1>A melhor loja de Jordan</h1>
                <p>
                    O tênis Jordan é fruto de uma velha e forte <br/>
                    parceria entre a Nike e o jogador Michael Jordan.
                </p>
            </BannerWrapperInner>
        </BannerWrapper>
    )
}

export default Banner;