import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#008080] to-[#006666] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Where Professionals Do The Writing
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Founded by practicing physicians and medical professionals, ProWrites bridges 
              the gap between clinical expertise and effective communication.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="text-lg text-gray-600 space-y-6">
              <p>
                ProWrites was born from a simple observation: most medical content is written by 
                talented writers who lack clinical experience, resulting in materials that sound 
                professional but miss the nuances that matter to patients and healthcare providers.
              </p>
              <p>
                Our founder, a practicing physician, experienced this firsthand when reviewing 
                patient education materials that, while well-written, failed to address the real 
                concerns and questions patients have. The disconnect was clear – excellent writing 
                skills weren&apos;t enough without deep medical understanding.
              </p>
              <p>
                Today, ProWrites combines the clinical expertise of practicing physicians with 
                professional medical writing excellence. Every piece of content we create is 
                authored or reviewed by medical professionals who understand not just the science, 
                but the human experience behind it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-[#F1FFE9]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Approach</h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#008080] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Physician-Led</h3>
                <p className="text-gray-600">
                  Every project is led by practicing physicians who bring real-world clinical 
                  experience to the writing process.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#008080] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Evidence-Based</h3>
                <p className="text-gray-600">
                  All content is grounded in the latest clinical evidence and best practices, 
                  ensuring accuracy and credibility.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#008080] rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Patient-Centered</h3>
                <p className="text-gray-600">
                  We understand both the clinical and human side of healthcare, creating content 
                  that truly resonates with patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Leadership Team</h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-[#F1FFE9] rounded-full flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold text-[#008080]">DR</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Dr. Rachel Morgan</h3>
                    <p className="text-[#008080] font-semibold">Founder & Chief Medical Officer</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Board-certified internist with 15+ years of clinical experience. Dr. Morgan 
                  founded ProWrites after recognizing the need for physician-authored medical 
                  content. She continues to practice medicine while leading our clinical team.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-[#F1FFE9] rounded-full flex items-center justify-center mr-6">
                    <span className="text-2xl font-bold text-[#008080]">MS</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Michael Stevens</h3>
                    <p className="text-[#008080] font-semibold">Director of Operations</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  Former pharmaceutical executive with extensive experience in medical 
                  communications and regulatory affairs. Michael ensures our content meets 
                  industry standards and client expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Healthcare Organizations Choose ProWrites</h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#008080]">Clinical Credibility</h3>
                <p className="text-gray-600 mb-6">
                  Content written by practicing physicians carries inherent credibility that 
                  patients and healthcare professionals trust.
                </p>
                
                <h3 className="text-xl font-bold mb-3 text-[#008080]">Real-World Insight</h3>
                <p className="text-gray-600">
                  Our team understands the practical challenges of healthcare delivery, not 
                  just the theoretical aspects.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#008080]">Improved Outcomes</h3>
                <p className="text-gray-600 mb-6">
                  Physician-authored content leads to better patient understanding, compliance, 
                  and health outcomes.
                </p>
                
                <h3 className="text-xl font-bold mb-3 text-[#008080]">Regulatory Compliance</h3>
                <p className="text-gray-600">
                  Deep understanding of medical and regulatory requirements ensures compliant, 
                  defensible content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#008080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Medical Professionals?</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Experience the difference that physician-authored content can make for your organization.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-[#008080] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}