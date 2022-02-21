import React from 'react';
import Infinitelist from 'components/InfiniteList';
import Header from 'components/Header';
import Section from 'components/Section';
import Feature from 'components/Feature';

function App() {
  return (
    <div>
      <Header />

      <Section>
        <Feature className="flex-1 text-emerald-400" title="No Extra Element">
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
