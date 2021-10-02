import React from "react";

type BasketPropsType = {
  color: string;
};

const Basket = ({ color }: BasketPropsType) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="23px"
      height="23px"
      viewBox="0 0 75.000000 75.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,75.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M262 645 c-76 -39 -132 -122 -132 -195 0 -27 3 -31 22 -28 17 2 24
   12 29 38 16 101 89 160 195 160 98 0 178 -66 193 -159 5 -28 11 -37 30 -39 23
   -4 24 -2 19 43 -8 64 -53 133 -112 170 -40 24 -62 30 -120 33 -61 3 -78 0
   -124 -23z"
        />
        <path
          d="M80 351 c0 -21 19 -31 61 -31 22 0 29 -5 29 -19 0 -20 -18 -31 -51
   -31 -19 0 -19 -1 0 -50 22 -56 53 -98 97 -129 27 -19 44 -21 163 -21 l132 0
   50 48 c32 31 56 65 69 100 l20 52 -144 0 c-158 0 -176 3 -176 31 0 18 10 19
   154 19 85 0 161 3 170 6 9 3 16 15 16 25 0 18 -12 19 -295 19 -283 0 -295 -1
   -295 -19z"
        />
      </g>
    </svg>
  );
};

export default Basket;
