import React from 'react';

interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return (
    <section className="flex items-center justify-center gap-10 p-20 xl:flex-col xl:items-stretch">
      {children}
    </section>
  );
}

export default Section;
