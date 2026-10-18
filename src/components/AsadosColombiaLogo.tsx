import React from 'react';
import heroLogoImg from '../assets/images/regenerated_image_1791406996272.png';
import headerLogoImg from '../assets/images/regenerated_image_1791406996774.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'hero' | 'header';
}

export const AsadosColombiaLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant
}) => {
  const sizes = {
    sm: 'h-9 sm:h-11 w-auto',
    md: 'h-16 w-auto',
    lg: 'h-28 w-auto',
    xl: 'h-36 sm:h-48 md:h-56 w-auto',
  };

  // Select appropriate regenerated image based on variant or size
  const logoSrc = (variant === 'header' || size === 'sm') ? headerLogoImg : heroLogoImg;

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="Asados Colombia"
        className={`${sizes[size]} object-contain filter drop-shadow-[0_0_20px_rgba(227,6,19,0.6)]`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
