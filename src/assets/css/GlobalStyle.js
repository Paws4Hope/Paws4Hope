import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    /* style 전역 관리 */ 
    :root {
            /* color palette */
            --color-white : #fff;
            --color-black : #000;
            --color-black-300 : #333;
            --color-gray : #999;
            --color-gray-100 : #dcdcdc;
            --color-gray-200 : #efefef;
            --color-gray-300 : #B5B5B5;
            --color-gray-400 : #F4F4F4;
            --color-gray-500 : #D9D9D9;
            --color-gray-600 : #666;
            --color-gray-700 : #727272;
            --color-gray-900 : #868E96;

            --color-primary : #FFC056;

            --color-line-gray : #999;
            --color-line-gray-100 : #e7e7e9;
            --color-line-gray-200 : #F3F3F4;
            
            /* global layout */
            --global-inner : 1400px; 
            --global-inner-content : 700px;
        }

    /* reset CSS */
    html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; }
    button{border:none; box-shadow:none; border-radius:0; padding:0; overflow:visible; cursor:pointer; background-color: transparent;} 
    figure {   
         margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;}
    * {
        box-sizing : border-box;
    }

    button, a{
        cursor: pointer;
        &:hover { cursor: pointer; }
    }


    .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
    }

    

`;

export default GlobalStyle;
