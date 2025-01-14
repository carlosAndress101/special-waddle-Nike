import React from 'react';

interface LogoNikeProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const LogoNike: React.FC<LogoNikeProps> = ({ className, ...rest }) => (
  <svg
    width={30}
    height={30}
    fill="none"
    aria-hidden="true"
    viewBox="0 0 24 24"
    {...rest}
    className={className}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21 8.719 7.836 14.303C6.74 14.768 5.818 15 5.075 15c-.836 0-1.445-.295-1.819-.884-.485-.76-.273-1.982.559-3.272.494-.754 1.122-1.446 1.734-2.108-.144.234-1.415 2.349-.025 3.345.275.2.666.298 1.147.298.386 0 .829-.063 1.316-.19L21 8.719z"
      clipRule="evenodd"
    />
  </svg>
)

export default LogoNike
