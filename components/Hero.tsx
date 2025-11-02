export default function Hero() {
  return (
    <section className="bg-white">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Side - Image */}
      <div className="relative h-full">
        <img 
          src="https://picsum.photos/1200/1400" 
          alt="Alice Chen - Professional workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col justify-center px-8 py-16 lg:px-16 lg:py-24 bg-slate-50">
        <div className="max-w-xl">
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-6">
            <span className="text-sm font-medium text-slate-700">Available for New Projects</span>
          </div>

          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Alice Chen
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Delivering exceptional results through technical expertise and strategic execution. Specialized in transforming complex challenges into scalable, high-impact solutions.
          </p>

          {/* Key Value Props */}
          <div className="space-y-4 mb-10">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-slate-700">
                <span className="font-semibold">Proven Track Record:</span> Successfully delivered 50+ projects across diverse industries
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-slate-700">
                <span className="font-semibold">Diverse Expertise:</span> Full-stack development, system architecture, and technical leadership
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-slate-700">
                <span className="font-semibold">Client-Backed Reputation:</span> 98% client satisfaction with consistent 5-star testimonials
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg shadow-md hover:bg-slate-800 transition-colors">
              View Portfolio
            </button>
            <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg shadow-sm border-2 border-slate-200 hover:border-slate-300 transition-colors">
              Get in Touch
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">50+</div>
                <div className="text-sm text-slate-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">12+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-900 mb-1">98%</div>
                <div className="text-sm text-slate-600">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}