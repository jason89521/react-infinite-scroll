import React from 'react';
import Infinitelist from 'demo/components/InfiniteList';
import Section from 'demo/components/Section';
import Feature from './components/Feature';

function App() {
  return (
    <div className="h-screen overflow-auto">
      <header className="flex flex-col justify-center items-center gap-10 bg-emerald-400 h-4/5 text-slate-100">
        <h1 className="flex flex-col justify-center items-center gap-8">
          <span className="text-8xl">React-Infinite-Scroll</span>
          <span className="text-2xl">
            A React component implemented with infinitely scrolling functionality
          </span>
        </h1>
        <a
          className="px-10 py-5 bg-slate-50 text-emerald-400 text-2xl rounded hover:scale-110 transition capitalize"
          href="https://github.com/jason89521/react-infinte-scroll"
          target="_blank"
          rel="noreferrer"
        >
          See documentation
        </a>
      </header>

      <Section>
        <Feature className="flex-1 text-emerald-400" title="No Extra Element">
          This component will not add extra HTML element to your DOM, so you don't need to worry
          about making extra styling to your components.
        </Feature>
        <Infinitelist className="flex-1" />
      </Section>

      <footer className="flex justify-center items-center bg-slate-500 text-slate-50 text-xl h-24">
        Copyright &copy; Xuan
      </footer>
    </div>
  );
}

export default App;
