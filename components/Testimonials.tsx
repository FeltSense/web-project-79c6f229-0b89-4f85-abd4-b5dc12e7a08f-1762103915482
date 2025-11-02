export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Trusted by Professionals
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        See what clients say about working with Alice Chen
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
        <div className="flex items-center mb-4">
          <div className="flex text-blue-600">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "Alice's attention to detail and strategic thinking transformed our project completely. She delivered ahead of schedule and exceeded every expectation we had."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
            MR
          </div>
          <div>
            <div className="font-semibold text-slate-900">Michael Rodriguez</div>
            <div className="text-sm text-slate-600">VP of Operations, TechVenture Inc</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
        <div className="flex items-center mb-4">
          <div className="flex text-blue-600">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "Working with Alice was a game-changer for our business. Her insights helped us increase efficiency by 40% and her communication throughout was exceptional."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
            SP
          </div>
          <div>
            <div className="font-semibold text-slate-900">Sarah Patterson</div>
            <div className="text-sm text-slate-600">CEO, Innovate Solutions</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
        <div className="flex items-center mb-4">
          <div className="flex text-blue-600">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "Alice brought clarity to a complex situation and provided actionable solutions that we implemented immediately. Her expertise is unmatched and her professionalism outstanding."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
            DK
          </div>
          <div>
            <div className="font-semibold text-slate-900">David Kim</div>
            <div className="text-sm text-slate-600">Director of Strategy, Apex Group</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
        <div className="flex items-center mb-4">
          <div className="flex text-blue-600">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "I've worked with many consultants, but Alice stands out for her ability to understand our unique challenges and deliver tailored solutions that actually work in practice."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
            JM
          </div>
          <div>
            <div className="font-semibold text-slate-900">Jennifer Martinez</div>
            <div className="text-sm text-slate-600">COO, Meridian Enterprises</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
        <div className="flex items-center mb-4">
          <div className="flex text-blue-600">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "Alice's strategic guidance helped us navigate a critical transition period. Her practical approach and deep expertise made all the difference in achieving our goals."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
            RT
          </div>
          <div>
            <div className="font-semibold text-slate-900">Robert Thompson</div>
            <div className="text-sm text-slate-600">Managing Partner, Summit Advisory</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 shadow-sm border border-slate-200">
        <div className="flex items-center mb-4">
          <div className="flex text-blue-600">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-slate-700 mb-6 leading-relaxed">
          "The ROI from working with Alice was evident within the first quarter. Her methodical approach and clear communication made the entire process smooth and highly effective."
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-700 font-semibold mr-4">
            EW
          </div>
          <div>
            <div className="font-semibold text-slate-900">Emily Watson</div>
            <div className="text-sm text-slate-600">Head of Business Development, Catalyst Corp</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}