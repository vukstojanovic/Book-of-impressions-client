/* SVG Icons go here */

export const IconCaret = ({ color = '#09172C' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="9" viewBox="0 0 13 9">
      <path
        fill={color}
        d="M3.963 -2L2.333 -0.499 7.133 4 2.333 8.501 3.963 10 10.333 4z"
        transform="rotate(90 6.083 4.25)"
      />
    </svg>
  )
}
export const NavArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.933"
      height="16.933"
      viewBox="0 0 16.933 16.933"
    >
      <path
        d="M0,0V8.973H8.973"
        transform="translate(8.466 14.811) rotate(-135)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  )
}

export const ThumbsUp = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81">
      <g transform="translate(24.151 25.001)">
        <path
          d="M25.849,32H0V17.454H5.942L11.885,0H13.37a4.416,4.416,0,0,1,4.457,4.363v7.273h9.716a4.5,4.5,0,0,1,3.367,1.5,4.3,4.3,0,0,1,1.045,3.476l-1.7,11.637a4.338,4.338,0,0,1-1.49,2.679A4.514,4.514,0,0,1,25.849,32Z"
          transform="translate(-0.406 -0.001)"
          fill="none"
          stroke="#4a950a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  )
}
export const ThumbsDown = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="81" height="81" viewBox="0 0 81 81">
      <g transform="translate(24.151 28.151)">
        <path
          d="M25.849,0H0V14.546H5.942L11.885,32H13.37a4.416,4.416,0,0,0,4.457-4.363V20.363h9.716a4.5,4.5,0,0,0,3.367-1.5,4.3,4.3,0,0,0,1.045-3.476l-1.7-11.637a4.338,4.338,0,0,0-1.49-2.679A4.514,4.514,0,0,0,25.849,0Z"
          transform="translate(-0.151 -0.151)"
          fill="rgba(0,0,0,0)"
          stroke="#c40b0b"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  )
}

export const IconPlaceholderLogo = ({ color = '#fff' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="27" viewBox="0 0 17 27">
      <text
        id="G"
        transform="translate(0 21)"
        fill={color}
        fontSize="22"
        fontFamily="Montserrat-ExtraBold, Montserrat"
        fontWeight="800"
      >
        <tspan x="0" y="0">
          G
        </tspan>
      </text>
    </svg>
  )
}

export const CheckedSymbol = ({ color = '#009e2f' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="98" height="98" viewBox="0 0 98 98">
      <g id="Group_206" data-name="Group 206" transform="translate(-263.465 -1617.547)">
        <circle
          id="Ellipse_20"
          data-name="Ellipse 20"
          cx="49"
          cy="49"
          r="49"
          transform="translate(263.465 1617.547)"
          fill={color}
        />
        <path
          id="Path_239"
          data-name="Path 239"
          d="M600.073,2000a4.861,4.861,0,0,0-3.448,1.433l-31.04,31.04-10.345-10.347a4.878,4.878,0,0,0-6.9,6.9l13.8,13.8a4.869,4.869,0,0,0,6.9,0l34.488-34.489a4.881,4.881,0,0,0-3.45-8.33Z"
          transform="translate(-263.692 -355.805)"
          fill="#f0f0f0"
        />
      </g>
    </svg>
  )
}