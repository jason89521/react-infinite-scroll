import React from 'react';

function Header() {
  return (
    <header className="flex flex-col items-center justify-center gap-10 bg-emerald-400 min-h-[30rem] text-slate-50 text-center">
      <h1 className="flex flex-col items-center justify-center gap-8">
        <span className="text-8xl xl:text-6xl">React-Infinite-Scroll</span>
        <span className="text-2xl xl:text-xl">
          A React component implemented with infinitely scrolling functionality
        </span>
      </h1>
      <a
        className="px-10 py-5 text-2xl capitalize transition rounded bg-slate-50 text-emerald-400 hover:scale-110"
        href="https://github.com/jason89521/react-infinte-scroll"
      >
        See documentation
      </a>
    </header>
  );
}

export default Header;
