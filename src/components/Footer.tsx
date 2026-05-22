export function Footer() {
  return (
    <footer className="py-8 border-t border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/50 text-center relative z-10">
      <p className="text-slate-800 dark:text-gray-300 text-sm font-semibold">
        &copy; {new Date().getFullYear()} Ritesh Portfolio. All rights reserved. 
        <br className="md:hidden" />
        <span className="hidden md:inline"> | </span>
        Built with React & Tailwind CSS.
      </p>
    </footer>
  );
}
