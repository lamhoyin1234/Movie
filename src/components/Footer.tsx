export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-amber-400 font-bold text-lg tracking-widest uppercase">
          Movie Name
        </p>
        <p className="text-gray-600 text-xs text-center sm:text-right">
          {/* &copy; 2026 Amazon. All rights reserved. */}
          <br />
          This fan page is for educational purposes only.
        </p>
      </div>
    </footer>
  );
}
