export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
  <div className="max-w-3xl mx-auto">
    <div className="text-center mb-12">
      <h3 className="text-2xl font-semibold mb-3">Alice Chen</h3>
      <p className="text-gray-400 text-sm max-w-md mx-auto">
        Professional services and consultation
      </p>
    </div>
    
    <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
      <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">
        About
      </a>
      <a href="#services" className="text-gray-300 hover:text-white transition-colors text-sm">
        Services
      </a>
      <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors text-sm">
        Portfolio
      </a>
      <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">
        Contact
      </a>
    </div>

    <div className="flex justify-center items-center gap-6 mb-12">
      <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
      <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
      </a>
      <a href="mailto:contact@alicechen.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      </a>
    </div>

    <div className="border-t border-slate-700 pt-8 text-center">
      <p className="text-gray-400 text-sm">
        &copy; 2025 Alice Chen. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  );
}