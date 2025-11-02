export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Why Work With Me
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        Delivering excellence through expertise, reliability, and proven results
      </p>
    </div>

    {/* Hover Reveal Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      
      {/* Card 1 - Proven Track Record */}
      <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-500 hover:shadow-md">
        <div className="p-8">
          {/* Icon Container */}
          <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
            <svg className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          
          {/* Title - Always Visible */}
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Proven Track Record
          </h3>
          
          {/* Description - Hidden by default, revealed on hover */}
          <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <p className="text-slate-600 leading-relaxed mb-4">
              Consistently delivering successful projects that exceed expectations. My portfolio demonstrates a history of completed work that meets deadlines, stays within budget, and achieves measurable results.
            </p>
            <div className="flex items-center text-sm text-blue-600 font-medium">
              <span>View success stories</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600 rounded-lg transition-colors duration-300 pointer-events-none"></div>
      </div>

      {/* Card 2 - Diverse Skill Set */}
      <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-500 hover:shadow-md">
        <div className="p-8">
          {/* Icon Container */}
          <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
            <svg className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          
          {/* Title - Always Visible */}
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Diverse Skill Set
          </h3>
          
          {/* Description - Hidden by default, revealed on hover */}
          <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <p className="text-slate-600 leading-relaxed mb-4">
              Bringing comprehensive technical expertise across multiple domains. My versatile capabilities allow me to tackle complex challenges and adapt to evolving project requirements with confidence.
            </p>
            <div className="flex items-center text-sm text-blue-600 font-medium">
              <span>Explore capabilities</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600 rounded-lg transition-colors duration-300 pointer-events-none"></div>
      </div>

      {/* Card 3 - Professional Reputation */}
      <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-500 hover:shadow-md">
        <div className="p-8">
          {/* Icon Container */}
          <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
            <svg className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          
          {/* Title - Always Visible */}
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Strong Reputation
          </h3>
          
          {/* Description - Hidden by default, revealed on hover */}
          <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <p className="text-slate-600 leading-relaxed mb-4">
              Built on trust and validated by client testimonials. My professional reputation reflects years of dedication to quality work, ethical practices, and building lasting relationships with satisfied clients.
            </p>
            <div className="flex items-center text-sm text-blue-600 font-medium">
              <span>Read testimonials</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600 rounded-lg transition-colors duration-300 pointer-events-none"></div>
      </div>

      {/* Card 4 - Clear Communication */}
      <div className="group relative bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-all duration-500 hover:shadow-md">
        <div className="p-8">
          {/* Icon Container */}
          <div className="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors duration-300">
            <svg className="w-7 h-7 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          
          {/* Title - Always Visible */}
          <h3 className="text-xl font-semibold text-slate-900 mb-3">
            Clear Communication
          </h3>
          
          {/* Description - Hidden by default, revealed on hover */}
          <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 ease-in-out">
            <p className="text-slate-600 leading-relaxed mb-4">
              Responsive, transparent, and easy to reach. I prioritize keeping you informed throughout every project phase, ensuring smooth collaboration and eliminating surprises through proactive updates.
            </p>
            <div className="flex items-center text-sm text-blue-600 font-medium">
              <span>Get in touch</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Hover Border Effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-600 rounded-lg transition-colors duration-300 pointer-events-none"></div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <p className="text-slate-600 mb-6">
        Ready to start your next project?
      </p>
      <button className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors duration-300 shadow-sm">
        Let's Collaborate
      </button>
    </div>
  </div>
</section>
  );
}