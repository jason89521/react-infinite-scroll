import React from 'react';

interface FeatureProps {
  title: string;
  className?: string;
  children?: string;
}

function Feature({ title, className, children }: FeatureProps) {
  return (
    <div className={`${className} flex flex-col justify-center text-center gap-20 xl:gap-5`}>
      <h2 className="text-6xl font-bold 2xl:text-5xl">{title}</h2>
      <p className="text-2xl 2xl:text-xl">{children}</p>
    </div>
  );
}

export default Feature;
