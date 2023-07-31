import { css } from "@emotion/react";

// 반응형 모바일 웹앱 자동 조정을 위한 Screen Size Auto Setting

// 기준 화면 너비
export const initVwViewport = 360;

// pixel을 vw로 변환해주는 함수
const getVw = (px) => `${(px / (initVwViewport * 0.01 * 1)) * 1}vw`;

// 최대 화면 크기에 따라 반응형 스타일을 적용
const SCREEN = (content) => css`
    @media (max-width: ${initVwViewport}px) {
        ${content}
    }
`;

/**
 * CSS 속성 문자열
 * @typedef {"width" | "height" | "font-size" | "margin" | ...} CssProperty
 */

/**
 * @param {CssProperty} property - css 속성
 * @param {number | string} px - 변환할 px 단위 (숫자 또는 css 값)
 * @returns {string} - vw 단위로 변환된 값
 * @example
 * setVw("width", 360) // width: 100vw; width: 360px;
 * setVw("font-size", 18) // font-size: 5vw; font-size: 18px;
 * setVw("margin", "0 auto") // margin: 0 auto;
 * setVw("margin", 18) // margin: 5vw; margin: 18px;
 */
export const setVw = (property, px) =>
    typeof px == "number"
        ? css`
              ${`${property}: ${px}px`};
              /* ${SCREEN(css`
                  ${property}: ${getVw(px)};
              `)}; */
          `
        : css`
              ${`${property}: ${px}`};
          `;

export const initVhViewport = 640;

const getVh = (px) => `${(px / (initVhViewport * 0.01 * 1)) * 1}vh`;

const SCREEN_1 = (content) => css`
    @media (max-height: ${initVhViewport}px) {
        ${content}
    }
`;

export const setVh = (property, px) =>
    typeof px == "number"
        ? css`
              ${`${property}: ${px}px`};
              ${SCREEN_1(css`
                  ${property}: ${getVh(px)};
              `)};
          `
        : css`
              ${`${property}: ${px}`};
          `;
