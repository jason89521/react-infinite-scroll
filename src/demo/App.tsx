import React from 'react';
import Infinitelist from 'demo/components/InfiniteList';
import Section from 'demo/components/Section';
import Feature from './components/Feature';

function App() {
  return (
    <div className="h-screen overflow-auto">
      <header className="flex flex-col items-center justify-center gap-10 bg-emerald-400 h-4/5 2xl:h-1/2 text-slate-100">
        <h1 className="flex flex-col items-center justify-center gap-8">
          <span className="text-8xl">React-Infinite-Scroll</span>
          <span className="text-2xl">
            A React component implemented with infinitely scrolling functionality
          </span>
        </h1>
        <a
          className="px-10 py-5 text-2xl capitalize transition rounded bg-slate-50 text-emerald-400 hover:scale-110"
          href="https://github.com/jason89521/react-infinte-scroll"
          target="_blank"
          rel="noreferrer"
        >
          See documentation
        </a>
      </header>

      <Section>
        <Feature className="flex-1 xl:flex-grow-0 text-emerald-400" title="No Extra Element">
          This component will not add extra HTML element to your DOM, so you don't need to worry
          about making extra styling to your components.
        </Feature>
        <Infinitelist className="flex-1" />
      </Section>

      <footer className="flex items-center justify-center h-24 text-xl bg-slate-500 text-slate-50">
        Copyright &copy; Xuan
      </footer>
    </div>
  );
}

export default App;
