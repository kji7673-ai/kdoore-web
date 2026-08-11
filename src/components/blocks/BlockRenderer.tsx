import React from 'react';
import Image from 'next/image';

interface HeroBlockProps {
  blockType: 'hero';
  title: string;
  subtitle?: string;
  badgeText?: string;
  backgroundImage?: {
    url: string;
    alt?: string;
  };
}

export function BlockRenderer({ blocks }: { blocks: any[] }) {
  if (!blocks || !Array.isArray(blocks)) return null;

  return (
    <>
      {blocks.map((block, index) => {
        switch (block.blockType) {
          case 'hero':
            const hero = block as HeroBlockProps;
            return (
              <section key={index} className="relative w-full h-screen min-h-[800px] flex flex-col justify-center bg-apple-canvas-parchment pt-32 pb-16">
                {hero.backgroundImage?.url && (
                  <div className="absolute inset-0 z-0">
                    <Image 
                      src={hero.backgroundImage.url} 
                      alt={hero.backgroundImage.alt || 'Hero'} 
                      fill 
                      className="object-cover object-center opacity-40 mix-blend-multiply" 
                      priority 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-apple-canvas-parchment via-transparent to-apple-canvas-parchment/90" />
                  </div>
                )}
                
                <div className="relative z-10 container mx-auto px-6 text-center">
                  {hero.badgeText && (
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-apple-pill bg-apple-surface-pearl border border-apple-divider-soft mb-6 animate-fade-in-up">
                      <span className="text-apple-caption-strong text-apple-ink">{hero.badgeText}</span>
                    </div>
                  )}
                  
                  <h1 className="text-apple-hero-display text-apple-ink mb-6 animate-fade-in-up animation-delay-200">
                    {hero.title}
                  </h1>
                  
                  {hero.subtitle && (
                    <p className="text-apple-lead text-apple-ink-muted-80 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
                      {hero.subtitle}
                    </p>
                  )}
                </div>
              </section>
            );
            
          default:
            return <div key={index}>Unknown block: {block.blockType}</div>;
        }
      })}
    </>
  );
}
