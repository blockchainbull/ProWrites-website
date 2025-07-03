import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Solutions() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#008080] to-[#006666] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Comprehensive Medical Writing Solutions
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              From patient education to clinical authority, we deliver specialized 
              medical writing solutions that advance healthcare communication and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored medical writing solutions designed to meet the unique needs 
              of healthcare organizations, pharmaceutical companies, and digital health platforms.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Patient Education */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-[#F1FFE9] rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-100 transition">
                <svg className="w-8 h-8 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Patient Education</h3>
              <p className="text-gray-600 mb-6">
                Clear, accessible educational materials that empower patients to understand 
                their conditions, treatments, and care options. From condition guides to 
                treatment explanations, we make complex medical information understandable.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Patient information leaflets</li>
                <li>• Condition awareness materials</li>
                <li>• Treatment guides & FAQs</li>
                <li>• Medication adherence content</li>
                <li>• Post-procedure care instructions</li>
              </ul>
              <a 
                href="/solutions/patient-education" 
                className="inline-flex items-center text-[#008080] font-semibold hover:text-teal-700 transition"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Medical Education */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-[#F1FFE9] rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-100 transition">
                <svg className="w-8 h-8 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Medical Education</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive educational content for healthcare professionals, including 
                continuing medical education materials, training modules, and professional 
                development resources that enhance clinical knowledge and skills.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• CME/CPD educational materials</li>
                <li>• Clinical training modules</li>
                <li>• Medical conference presentations</li>
                <li>• Professional development content</li>
                <li>• Interactive learning resources</li>
              </ul>
              <a 
                href="/solutions/medical-education" 
                className="inline-flex items-center text-[#008080] font-semibold hover:text-teal-700 transition"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Clinical Authority */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-[#F1FFE9] rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-100 transition">
                <svg className="w-8 h-8 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Clinical Authority</h3>
              <p className="text-gray-600 mb-6">
                Evidence-based content that establishes clinical credibility and thought 
                leadership. From peer-reviewed publications to expert opinions, we help 
                organizations build authoritative presence in their therapeutic areas.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Peer-reviewed manuscripts</li>
                <li>• Clinical evidence summaries</li>
                <li>• Expert consensus documents</li>
                <li>• Thought leadership articles</li>
                <li>• Scientific communication strategies</li>
              </ul>
              <a 
                href="/solutions/clinical-authority" 
                className="inline-flex items-center text-[#008080] font-semibold hover:text-teal-700 transition"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Digital Health Content */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-[#F1FFE9] rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-100 transition">
                <svg className="w-8 h-8 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Health Content</h3>
              <p className="text-gray-600 mb-6">
                Specialized content for digital health platforms, mobile applications, 
                and telehealth services. We create engaging, accurate content that enhances 
                user experience while maintaining medical accuracy and compliance.
              </p>
              <ul className="text-sm text-gray-500 space-y-2 mb-6">
                <li>• Health app content & UX copy</li>
                <li>• Telehealth platform materials</li>
                <li>• Digital therapeutics content</li>
                <li>• Wearable device communications</li>
                <li>• AI-powered health tool content</li>
              </ul>
              <a 
                href="/solutions/digital-health-content" 
                className="inline-flex items-center text-[#008080] font-semibold hover:text-teal-700 transition"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Solutions */}
      <section className="py-20 bg-[#F1FFE9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose ProWrites Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized approach ensures each solution is tailored to your specific 
              audience, objectives, and regulatory requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#008080] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Audience-Specific</h3>
              <p className="text-gray-600">
                Content tailored to specific audiences - from patients to healthcare professionals 
                to digital health users.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#008080] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Evidence-Based</h3>
              <p className="text-gray-600">
                All content grounded in the latest clinical evidence and regulatory guidelines 
                for maximum credibility.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#008080] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Multi-Platform</h3>
              <p className="text-gray-600">
                Content optimized for various platforms - from print materials to digital 
                interfaces and mobile applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#008080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Medical Content?</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Let&apos; discuss which solution best fits your organization&apos; needs and objectives.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-[#008080] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#008080] transition text-lg">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}