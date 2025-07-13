import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link';


export default function ClinicalAuthority() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#008080] to-[#006666] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Clinical Authority That Positions You as the Expert
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Your medical expertise deserves recognition in the industry&apos; most respected publications 
              and platforms. Our physician-authored clinical content establishes your authority, amplifies 
              your research, and positions your organization as the definitive voice in your specialty.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#008080] transition">
                Ready to discuss your project?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Clinical Authority Building Often Falls Short</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Generic medical writing lacks the clinical depth and credibility that top-tier publications 
              demand. When your groundbreaking research and expertise are&apos;nt communicated with the precision 
              and authority they deserve, opportunities for recognition, funding, and professional advancement 
              are lost.
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
                Physician-to-Physician Authority Building
              </h2>
              <p className="text-xl text-gray-600">
                Our practicing physicians understand what it takes to build clinical credibility. We create 
                authoritative content that resonates with medical peers, journal editors, and industry leaders, 
                ensuring your expertise receives the recognition it deserves.
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
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Research & Publications */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-[#008080] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Research & Publications</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Peer-reviewed journal articles and clinical studies</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Grant proposals and research funding applications</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Conference abstracts and presentation materials</span>
                  </div>
                </div>
              </div>

              {/* Thought Leadership */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-[#008080] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Thought Leadership</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expert opinion pieces and clinical commentary</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Medical blog posts and industry insights</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Position papers on emerging treatments and technologies</span>
                  </div>
                </div>
              </div>

              {/* Professional Communications */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-[#008080] rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Professional Communications</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Clinical practice guidelines and protocols</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Medical device documentation and regulatory submissions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span>Expert witness testimony and legal medical writing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Recognition Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              Build Recognition and Drive Professional Growth
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Enhanced Credibility</h3>
                <p className="text-gray-600">
                  Our physician-authored content establishes your expertise across multiple channels, from industry publications to professional speaking engagements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Accelerated Recognition</h3>
                <p className="text-gray-600">
                  Strategic thought leadership content positions you as the go-to expert in your specialty, attracting media attention and industry partnerships.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Funding Success</h3>
                <p className="text-gray-600">
                  Compelling grant proposals and research documentation that clearly articulate your vision and clinical impact to funding organizations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Career Advancement</h3>
                <p className="text-gray-600">
                  Published content and established authority lead to academic appointments, 
                  board positions, and industry leadership roles.
                </p>
              </div>
            </div>

            {/* Competitive Edge */}
            <div className="bg-[#F1FFE9] p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Competitive Edge</h3>
              <p className="text-xl text-gray-600">
                Authoritative content differentiates your organization and attracts top talent, 
                research partnerships, and clinical collaborations.
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
                  <p className="text-gray-600">Increased industry recognition and thought leadership positioning</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Higher success rates for research funding and publication</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Enhanced recruitment of top medical talent and research partners</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Stronger competitive positioning in your specialty areas</p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#008080] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-600">Measurable growth in professional opportunities and industry influence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#008080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Establish Your Clinical Authority?</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Let&apos; discuss how physician-authored content can position your organization 
            as the definitive expert in your specialty.
          </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact" className=" border-2 bg-white text-[#008080] px-8 py-4 rounded-lg font-semibold hover:bg-[#008080] hover:border-2 hover:text-white trasition text-lg">
                Let&apos;s Talk
              </Link>
              <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
              <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#008080] transition text-lg">
                <a href="https://calendly.com/contact-prowrites/30min">Schedule Consultation</a>
              </button>
            </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}