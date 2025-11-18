// src/components/shared/PageHeader.tsx
import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  const headerStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : {};

  return (
    <section
      className={`relative py-20 md:py-32 bg-cover bg-center ${!backgroundImage ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
      style={headerStyle}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/50"></div>}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className={`text-4xl md:text-5xl font-extrabold ${backgroundImage ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`mt-4 text-lg max-w-2xl mx-auto ${backgroundImage ? 'text-gray-200' : 'text-gray-600 dark:text-gray-300'}`}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;