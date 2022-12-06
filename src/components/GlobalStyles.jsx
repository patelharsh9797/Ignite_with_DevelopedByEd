import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    html{
        &::-webkit-scrollbar{
            width:0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            border-radius:5px;
            background-color: darkgray;
        }
    }

    body{
        font-family: 'Montserrat', sans-serif;
    }

    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
    }

    h3{
        font-size: 1.3rem;
        color:#333;
        padding: 1.5rem;
    }

    p{
        font-size:1.2rem;
        line-height: 200%;
    }

    a{
        text-decoration:none;
        color:#333;
    }
`;

export default GlobalStyle;
