import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''} ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <div className="h-1 w-8 bg-amber-500"></div>
        <h6 className="text-amber-500 uppercase font-medium tracking-wider text-sm">Find Out More</h6>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-zinc-400 max-w-2xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;