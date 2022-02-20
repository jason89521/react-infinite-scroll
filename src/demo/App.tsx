import React from 'react';

function App() {
  return (
    <div className="h-screen overflow-auto">
      <header className="bg-emerald-400 h-3/5 text-slate-100">
        <h1 className="min-h-full flex flex-col justify-center items-center gap-8">
          <span className="text-8xl">React-Infinite-Scroll</span>
          <span className="text-2xl">
            A React component implemented with infinitely scrolling functionality
          </span>
        </h1>
      </header>

      <footer className="flex justify-center items-center bg-slate-500 text-slate-50 text-xl h-24">
        Copyright &copy; Xuan
      </footer>
    </div>
  );
}

export default App;
