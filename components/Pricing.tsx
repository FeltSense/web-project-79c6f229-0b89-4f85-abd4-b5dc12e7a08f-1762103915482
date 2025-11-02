export default function Pricing() {
  return (
    <section className="py-24 bg-slate-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Professional website solution with everything you need
      </p>
      
      <div className="inline-flex items-center bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
        <button className="px-6 py-2 rounded-md text-sm font-semibold text-white bg-blue-600 transition-colors">
          Monthly
        </button>
        <button className="px-6 py-2 rounded-md text-sm font-semibold text-gray-600 hover:text-slate-900 transition-colors">
          Annual
        </button>
      </div>
    </div>

    <div className="max-w-md mx-auto">
      <div className="bg-white border-2 border-blue-600 rounded-lg shadow-sm p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Professional Website</h3>
          <p className="text-gray-600 mb-6">Complete solution for your business</p>
          <div className="mb-2">
            <span className="text-5xl font-bold text-slate-900">$29</span>
            <span className="text-gray-600 text-lg"> one-time</span>
          </div>
          <p className="text-sm text-gray-500">Lifetime access, no recurring fees</p>
        </div>

        <div className="border-t border-gray-200 pt-6 mb-8">
          <p className="text-sm font-semibold text-slate-900 mb-4">What's included:</p>
          <ul className="space-y-3">
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Portfolio showcase of successful projects and achievements</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Comprehensive skills and expertise display</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Client testimonials and reputation showcase</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Professional contact form and communication tools</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Certifications and continuous learning highlights</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Mobile-responsive professional design</span>
            </li>
          </ul>
        </div>

        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
          className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm"
        >
          Get Started - $29
        </button>
        
        <p className="text-center text-sm text-gray-500 mt-4">
          Secure payment powered by Stripe
        </p>
      </div>
    </div>
  </div>
</section>
  );
}