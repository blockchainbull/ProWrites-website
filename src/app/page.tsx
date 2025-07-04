'use client'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
  const words = ['Patients', 'Users', 'Physicians']
  
  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex]
      
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length - 1))
        setTypingSpeed(75)
      } else {
        setCurrentText(currentWord.substring(0, currentText.length + 1))
        setTypingSpeed(150)
      }
      
      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000) // Pause before deleting
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
      }
    }
    
    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [currentText, isDeleting, currentWordIndex, typingSpeed])
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#008080] to-[#006666] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Physician-Written Content That{' '}
              <span 
                className="inline-block"
                style={{ 
                  minWidth: '200px',
                  color: '#F1FFE9'
                }}
              >
                {currentText}
                <span 
                  className="animate-pulse"
                  style={{ color: '#F1FFE9' }}
                >
                  |
                </span>
              </span>{' '}
              Actually Understand
            </h1>
            <p className="text-2xl mb-8 text-blue-100">
              Your medical expertise deserves content created by physicians who understand the complexities firsthand. 
              We translate complex medical knowledge into clear, actionable content that drives engagement and clinical outcomes.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-white text-[#008080] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#008080] transition">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Clinical Expertise. Clear Communication. Real Impact.</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              When practicing physicians create your content, the difference is unmistakable. 
              Our medical writing team delivers clinically accurate materials that build trust, improve compliance, and deliver measurable results for your organization.
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
              <h4 className="text-lg font-semibold mb-3 text-[#008080]">Stop Losing Patients to Confusion and Non-Compliance</h4>
              <p className="text-gray-600 mb-4">
                Transform your patient outcomes with physician-authored education that patients actually understand and follow. 
                Reduce readmissions and boost satisfaction scores (HCAHPS/CAHPS) while cutting support calls in half.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Condition awareness materials that build trust</li>
                <li>• Treatment guides that eliminate confusion</li>
                <li>• Post-procedure care instructions that prevent complications</li>
              </ul>
              <Link 
                href="/solutions/patient-education" 
                className="inline-flex items-center text-[#008080] font-semibold hover:text-teal-700 transition"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Medical Education */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-[#F1FFE9] rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-100 transition">
                <svg className="w-8 h-8 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Medical Education</h3>
              <h4 className="text-lg font-semibold mb-3 text-[#008080]">Deliver Training That Actually Improves Clinical Performance</h4>
              <p className="text-gray-600 mb-4">
                Accelerate your learners&apos; success with physician-created content that bridges knowledge gaps and drives 
                measurable outcomes. Achieve better first-time pass rates and higher engagement.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• CME/CPD materials that maintain accreditation</li>
                <li>• Specialty boards, USMLE, NCLEX prep materials</li>
                <li>• Interactive learning resources that engage</li>
              </ul>
              <Link 
                href="/solutions/medical-education" 
                className="inline-flex items-center text-[#008080] font-semibold hover:text-teal-700 transition"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Clinical Authority */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-[#F1FFE9] rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-100 transition">
                <svg className="w-8 h-8 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Clinical Authority</h3>
              <h4 className="text-lg font-semibold mb-3 text-[#008080]">Get Published, Get Funded, Get Recognition</h4>
              <p className="text-gray-600 mb-4">
                Build industry leadership with evidence-based content that positions your organization as the go-to authority. 
                Secure more research funding and more speaking opportunities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Clinical evidence summaries that influence practice</li>
                <li>• Thought leadership articles that generate buzz</li>
                <li>• Scientific communication strategies that amplify impact</li>
              </ul>
              <Link
                href="/solutions/clinical-authority" 
                className="inline-flex items-center text-[#008080] font-semibold hover:text-teal-700 transition"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Digital Health Content */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-[#F1FFE9] rounded-lg flex items-center justify-center mb-6 group-hover:bg-teal-100 transition">
                <svg className="w-8 h-8 text-[#008080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Digital Health</h3>
              <h4 className="text-lg font-semibold mb-3 text-[#008080]">Content That Drives User Adoption</h4>
              <p className="text-gray-600 mb-4">
                Eliminate user frustration with clinically-informed content that healthcare professionals trust. 
                Increase platform adoption while reducing support tickets.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Health app content that users understand</li>
                <li>• Telehealth platform materials that guide seamlessly</li>
                <li>• Digital therapeutics content that engages</li>
              </ul>
              <Link 
                href="/solutions/digital-health" 
                className="inline-flex items-center text-[#008080] font-semibold hover:text-teal-700 transition"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#F1FFE9]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Clinical Advantage in Healthcare Content</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#008080] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Patient Education That Works</h3>
                    <p className="text-gray-600">
                      Medical professionals who understand patient concerns create education materials 
                      that truly resonate—resulting in better understanding and improved outcomes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#008080] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Peer-Level Authority</h3>
                    <p className="text-gray-600">
                      Research articles, CME modules, and thought leadership written by practicing clinicians 
                      who understand your challenges and can authentically represent your expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#008080] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Workflow-Ready Integration</h3>
                    <p className="text-gray-600">
                      EHR materials and digital content created by medical professionals 
                      who actually use these systems—ensuring seamless adoption and practical functionality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#008080] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Clinical-Grade Accuracy</h3>
                    <p className="text-gray-600">
                      Content that passes the strictest medical review because 
                      it&apos; written by practicing clinicians who understand the stakes of healthcare communication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
              <Image src="/ai.svg" alt="Clinical Healthcare Content Illustration" width={550} height={400} />
            
          </div>
        </div>
      </section>


      {/* Trusted By Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 max-w-5xl mx-auto leading-tight">
              Trusted by leading medical centers, health systems, and healthcare innovators who demand clinical-level expertise.
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center h-20">
              <Image 
                src="/jandj.png" 
                alt="Johnson & Johnson" 
                width={140} 
                height={60}
                className="max-w-full h-auto opacity-60 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            
            <div className="flex items-center justify-center h-20">
              <Image 
                src="/api.png" 
                alt="American Physicians Institute" 
                width={140} 
                height={60}
                className="max-w-full h-auto opacity-60 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            
            <div className="flex items-center justify-center h-20">
              <Image 
                src="/cs.png" 
                alt="ClinicalSource" 
                width={140} 
                height={60}
                className="max-w-full h-auto opacity-60 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
            
            <div className="flex items-center justify-center h-20">
              <Image 
                src="/medtronic.png" 
                alt="Medtronic" 
                width={140} 
                height={60}
                className="max-w-full h-auto opacity-60 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Trusted by industry leaders worldwide</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;I&apos;ve been contracting ProWrites since mid-2018 and they
                      have been nothing but efficient, professional, and high
                      quality. Our team works on tight deadlines with many
                      guidelines that ProWrites have followed since day one.
                      Our working projects include various forms of medical
                      writing, which Prowrites have positively impacted our
                      quantity and quality. If you require organization,
                      motivation to learn, assistance on project coordination,
                      and exceptional work, I would highly recommend ProWites!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">BD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Brianne D.</div>
                  <div className="text-sm text-gray-800">Educational Program Manager</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;It&apos;s been a true pleasure working with Prowrites. They
                      supported us by providing many patient clinical cases
                      build-up and written in a highly professional and
                      readable style.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">MH</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Moniek Haan</div>
                  <div className="text-sm text-gray-800">Sr. Digital Marketing Manager at Medtronic</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 italic">
                &quot;Prowrites is one of our best and consistently delivers incredible
                      writing, management, and task management. We work with
                      hundreds of freelancers per year but the staff at Prowrites is in
                      the top 1% of all our commitments. They are organized, flexible,
                      professional. I look forward to working with them for a long time.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">SH</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Shuhan H.</div>
                  <div className="text-sm text-gray-800">CEO Conduct Science</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#008080] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Medical Writing?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join the ranks of leading pharmaceutical companies and healthcare institutions 
            who trust us with their most critical medical writing projects.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-[#008080] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg">
              Start Your Project
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