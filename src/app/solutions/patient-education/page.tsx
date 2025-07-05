import Header from '@/components/Header'
import Footer from '@/components/Footer'


export default function PatientEducation() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#008080] to-[#006666] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Patient Education That Actually Changes Behavior
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Stop wasting resources on patient materials that get ignored. Our physician-written 
              patient education content transforms complex medical information into clear, actionable 
              guidance that patients understand, trust, and follow.
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

      {/* The Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Most Patient Education Fails</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Generic health content written by non-medical writers creates confusion, reduces trust, 
              and leads to poor health outcomes. When patients can&apos;t understand or trust their education 
              materials, they&apos;re more likely to skip treatments, miss follow-up appointments, and end up 
              back in your facility.
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
                Physician-Authored Content That Drives Real Results
              </h2>
              <p className="text-xl text-gray-600">
                Our practicing physicians create patient education materials that bridge the gap 
                between clinical expertise and patient understanding. The result? Better compliance, 
                improved outcomes, and reduced readmissions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Create Section */}
      <section className="py-20 bg-[#F1FFE9]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">What We Create</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Condition-specific patient portals content</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Pre-procedure and post-operative instructions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Chronic disease management guides</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Medication adherence materials</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Discharge planning resources</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#008080] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Preventive care education</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transform Patient Outcomes Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
              Transform Patient Outcomes with Your Educational Content
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Improved Health Literacy</h3>
                <p className="text-gray-600">
                  Clear, culturally appropriate content that patients at all education levels can 
                  understand and act upon.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Higher Engagement Rates</h3>
                <p className="text-gray-600">
                  Materials that patients actually read and reference because they&apos;re written by 
                  doctors who understand their concerns and questions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Better Compliance</h3>
                <p className="text-gray-600">
                  Step-by-step guidance that removes confusion and builds confidence in treatment plans.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Reduced Readmissions</h3>
                <p className="text-gray-600">
                  Comprehensive discharge instructions and follow-up materials that prevent 
                  avoidable complications.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-[#008080]">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Elevated Patient Experience</h3>
                <p className="text-gray-600">
                  Higher Patient Satisfaction Scores (HCAHPS/CAHPS).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#008080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Patient Education?</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            See how physician-written content can improve your patient outcomes and satisfaction scores.
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