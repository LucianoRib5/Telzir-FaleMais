import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    };

    input, select{
        border: none;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
        padding: .5rem 0 .5rem .5rem;
    };
    
    select, input{
        height: 2.5rem;
    };

    h1, h2 {
        font-family: 'Bebas Neue', cursive;
        color: #9900F0;
    };
`;