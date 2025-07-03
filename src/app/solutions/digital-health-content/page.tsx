import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function DigitalHealthContent() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#008080] to-[#006666] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Digital Health Content That Users Actually Trust
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Your innovative healthcare technology deserves content that drives adoption and engagement. 
              Our physician-authored digital health content transforms complex medical workflows into 
              intuitive user experiences that healthcare professionals and patients confidently embrace.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-[#008080] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Schedule Your Strategy Call
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#008080] transition">
                View Examples
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Digital Health Content Often Fails</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Generic content created by non-medical writers creates confusion in clinical workflows 
              and reduces user trust. When healthcare technology content doesn't reflect real-world 
              medical practice, it leads to poor adoption rates, frustrated users, and failed digital 
              health initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Clinically-Informed Content That Drives User Success
              </h2>
              <p className="text-xl text-gray-600">
                Our practicing physicians create digital health content based on actual clinical 
                workflows and patient interactions. We understand how healthcare professionals work 
                and what patients need, designing content that seamlessly integrates into existing 
                healthcare processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Create Section */}
      <section className="py-20 bg-[#F1FFE9]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">What We Create</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* EHR & Clinical Software Content */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-[#008080] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">EHR & Clinical Software Content</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>User interface copy and clinical decision support text</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Patient portal content and communication templates</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Clinical alert messages and notification copy</span>
                  </div>
                </div>
              </div>

              {/* Digital Health Applications */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-[#008080] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Health Applications</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>In-app microcopy and user guidance</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Patient onboarding sequences and tutorials</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Telehealth platform content and scripts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drive Higher User Adoption Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              Drive Higher User Adoption and Better Outcomes
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Proven Engagement</h3>
                <p className="text-gray-600">
                  Our content increases user adoption rates by <strong className="text-[#008080]">45%</strong> and 
                  reduces support tickets by <strong className="text-[#008080]">38%</strong>—measurable improvements 
                  that enhance your platform's success.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Accelerated Development</h3>
                <p className="text-gray-600">
                  Physician-authored content eliminates clinical review bottlenecks, reducing your 
                  content development timeline by <strong className="text-[#008080]">50%</strong>.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Higher User Satisfaction</h3>
                <p className="text-gray-600">
                  Clinically accurate, workflow-optimized content keeps users engaged{' '}
                  <strong className="text-[#008080]">4x longer</strong> than generic copy, improving retention rates.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Reduced Compliance Risk</h3>
                <p className="text-gray-600">
                  Content written by practicing physicians ensures regulatory compliance and reduces 
                  legal exposure from day one.
                </p>
              </div>
            </div>

            {/* Competitive Advantage */}
            <div className="bg-[#F1FFE9] p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Competitive Advantage</h3>
              <p className="text-xl text-gray-600">
                Physician-authored content differentiates your platform in a crowded digital health marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Means Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              What This Means for Your Organization
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Faster product launches with clinically-validated content</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Higher user retention and platform engagement</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Reduced development costs and regulatory risks</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Enhanced credibility with healthcare decision-makers</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Measurable improvements in user outcomes and satisfaction scores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#008080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Health Platform?</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Let's discuss how physician-authored content can drive higher user adoption 
            and better outcomes for your digital health technology.
          </p>
          <button className="bg-white text-[#008080] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
            Schedule Your Strategy Call
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}