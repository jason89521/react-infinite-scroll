import React from 'react';

interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return (
    <section className="p-20 h-3/4 overflow-auto flex gap-20 justify-center">
      {children}
    </section>
  );
}

export default Section;
