import React from 'react';

interface SectionProps {
  children: React.ReactNode;
}

function Section({ children }: SectionProps) {
  return (
    <section className="flex justify-center items-center xl:items-stretch gap-20 xl:gap-10 p-20 lg:p-10 overflow-auto min-h-[50%] xl:flex-col">
      {children}
    </section>
  );
}

export default Section;
