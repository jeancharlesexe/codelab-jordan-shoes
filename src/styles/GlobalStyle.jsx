import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:Arial, Helvetica, sans-serif;
    }

    html, body, #root{
        height: 100%;
        width: 100%;
        overflow-x: hidden;
    }
`

export default GlobalStyle;