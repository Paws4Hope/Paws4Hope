import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    /* style 전역 관리 */ 
    :root {
            /* color palette */
            --color-white : #fff;
            --color-black : #000;
            --color-line-gray : #999;
            --color-line-gray-100 : #e7e7e9;
            --color-line-gray-200 : #F3F3F4;
        }

    /* reset css*/ 
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; } /* HTML5 display-role reset for older browsers */ article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; } body { line-height: 1; } ol, ul { list-style: none; } blockquote, q { quotes: none; } blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; } table { border-collapse: collapse; border-spacing: 0; } input, button{ border:none; } input:focus, input:active, button:focus, button:active { outline: none; box-shadow: none; }
    
    * {
        box-sizing : border-box;
    }

    button, a{
        cursor: pointer;
        &:hover { cursor: pointer; }
    }
        
`;

export default GlobalStyle;
