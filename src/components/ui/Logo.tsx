import React from 'react';

interface LogoProps {
  className?: string;
  color?: 'black' | 'white';
}

export default function Logo({ className = "", color = 'black' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/лого.png" 
        alt="ПЗТ - Петроградский завод им. Торнева" 
        className="h-16 md:h-20 w-auto object-contain"
      />
    </div>
  );
}