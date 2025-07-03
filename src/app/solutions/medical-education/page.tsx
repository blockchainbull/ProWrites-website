import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MedicalEducation() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#008080] to-[#006666] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Medical Education That Transforms Clinical Practice
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Your expertise deserves educational content that actually improves patient care. 
              Our physician-authored medical education materials translate cutting-edge research 
              into practical knowledge that clinicians can immediately apply in real-world settings.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Medical Education Often Falls Short</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Generic educational content created by non-clinicians lacks the practical insights 
              and real-world application that healthcare professionals need. When medical education 
              doesn't connect theory to practice, it fails to change behaviors or improve patient outcomes.
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
                Clinically-Grounded Education That Drives Practice Change
              </h2>
              <p className="text-xl text-gray-600">
                Our practicing physicians create medical education content based on real clinical 
                experience. We understand the challenges healthcare professionals face and design 
                education that provides actionable solutions they can implement immediately.
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
              {/* Medical Exam Preparation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-[#008080] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Medical Exam Preparation</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>USMLE Step 1, 2, and 3 question banks and study materials</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Specialty board certification prep (Internal Medicine, Surgery, Pediatrics, etc.)</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>NCLEX-RN and NCLEX-PN preparation content</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>PANCE and PANRE physician assistant exam materials</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>High-yield review questions with detailed explanations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Clinical vignette-based practice tests</span>
                  </div>
                </div>
              </div>

              {/* Continuing Medical Education */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-[#008080] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Continuing Medical Education (CME)</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Accredited online modules and courses</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Live conference presentations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Grand rounds materials</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Board certification maintenance content</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drive Better Learning Outcomes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              Drive Better Learning Outcomes and Higher ROI
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Proven Performance</h3>
                <p className="text-gray-600">
                  Our content delivers <strong className="text-[#008080]">89% first-time pass rates</strong> and{' '}
                  <strong className="text-[#008080]">23% higher exam scores</strong>—measurable results that 
                  enhance your program&apos; reputation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Accelerated Content Development</h3>
                <p className="text-gray-600">
                  Physician-authored materials reduce your development time by{' '}
                  <strong className="text-[#008080]">60%</strong> while ensuring clinical accuracy from day one.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Higher Engagement Rates</h3>
                <p className="text-gray-600">
                  Clinically relevant scenarios keep learners engaged{' '}
                  <strong className="text-[#008080]">3x longer</strong> than generic content, improving completion rates.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Reduced Revision Cycles</h3>
                <p className="text-gray-600">
                  Content written by practicing physicians requires minimal clinical review, cutting your 
                  production timeline <strong className="text-[#008080]">in half</strong>.
                </p>
              </div>
            </div>

            {/* Competitive Differentiation */}
            <div className="bg-[#F1FFE9] p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Competitive Differentiation</h3>
              <p className="text-xl text-gray-600">
                Physician-authored content sets your educational programs apart in a crowded marketplace.
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
                  <p className="text-gray-600">Faster time-to-market for new educational products</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Higher customer satisfaction and retention rates</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Reduced content development costs and resources</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Enhanced brand credibility in the medical education space</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Measurable improvements in learner outcomes and program effectiveness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#008080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Medical Education Programs?</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Let&apos; discuss how physician-authored content can drive better learning outcomes 
            and higher ROI for your organization.
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