import React from 'react'

export default function ThemeToggle({theme, setTheme}){
  return (
    <div className="fixed right-4 bottom-6 z-40">
      <button
        onClick={()=> setTheme(theme==='dark' ? 'light' : 'dark')}
        className="px-3 py-2 rounded bg-white dark:bg-[#0b1220] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 shadow-sm"
        aria-label="Toggle theme"
      >
        {theme==='dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  )
}
