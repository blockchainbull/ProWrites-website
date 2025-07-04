'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const form = e.currentTarget
      const formData = new FormData(form)
      
      const response = await fetch('https://formspree.io/f/xjkrdvaa', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#008080] to-[#006666] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Let&apos;s Discuss Your Medical Writing Needs
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              Ready to elevate your medical content with physician-authored expertise? 
              We&apos;re here to help you achieve better outcomes through better communication.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">We Are Just A Message Away!</h2>
                
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="mb-6 p-6 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
                        <p className="text-green-700 mt-1">
                          Thank you for your interest in ProWrites. Our team will review your inquiry and 
                          get back to you within 24 hours with a personalized response.
                        </p>
                        <div className="mt-3 p-3 bg-green-100 rounded">
                          <p className="text-sm text-green-700 font-medium">What happens next?</p>
                          <ul className="text-sm text-green-600 mt-1 space-y-1">
                            <li>• A physician-writer will assess your needs</li>
                            <li>• You&apos;ll receive a personalized response within 24 hours</li>
                            <li>• We&apos;ll schedule a strategy call if it&apos;s a good fit</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-6 p-6 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <h3 className="text-lg font-semibold text-red-800">Message Not Sent</h3>
                        <p className="text-red-700 mt-1">
                          Sorry, there was an error sending your message. Please try again or contact us directly at{' '}
                          <a href="mailto:contact@prowrites.io" className="font-semibold underline">
                            contact@prowrites.io
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                      placeholder="youremail@somthing.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company/Organization
                    </label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                      placeholder="Your Company&apos;s Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="solution" className="block text-sm font-semibold text-gray-700 mb-2">
                      Which solution interests you most?
                    </label>
                    <select 
                      id="solution" 
                      name="solution"
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                    >
                      <option value="">Select a solution</option>
                      <option value="patient-education">Patient Education</option>
                      <option value="medical-education">Medical Education</option>
                      <option value="clinical-authority">Clinical Authority</option>
                      <option value="digital-health-content">Digital Health</option>
                      <option value="multiple">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008080] focus:border-transparent"
                      placeholder="Describe your medical writing needs, timeline, and any specific requirements"
                      required
                    ></textarea>
                  </div>

                  {/* Hidden field for form identification */}
                  <input type="hidden" name="_subject" value="New contact form submission from ProWrites website" />

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-[#008080] text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div className="bg-[#F1FFE9] p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#008080] rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">contact@prowrites.io</p>
                        <p className="text-sm text-gray-500">We respond within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#008080]">
                  <h4 className="font-semibold text-gray-900 mb-2">Quick Response Guarantee</h4>
                  <p className="text-gray-600 text-sm">
                    We understand that medical writing projects often have tight deadlines. 
                    Our team responds to all inquiries within 24 hours, and we can accommodate 
                    rush projects when needed.
                  </p>
                </div>

                {/* Schedule Call */}
                <div className="bg-[#008080] p-6 rounded-xl text-white">
                  <h4 className="font-semibold mb-2">Prefer to Schedule a Call?</h4>
                  <p className="text-teal-100 text-sm mb-4">
                    Book a 30-minute strategy call to discuss your project in detail.
                  </p>
                  <button className="bg-white text-[#008080] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                    Schedule Call
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">How quickly can you start a project?</h3>
                <p className="text-gray-600">
                  Most projects can begin within 1-2 weeks of contract signing. For urgent projects, 
                  we can often accommodate faster start times with our dedicated rush team.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you work with small organizations?</h3>
                <p className="text-gray-600">
                  Absolutely! We work with organizations of all sizes, from solo practices to 
                  Fortune 500 companies. Our solutions are scalable to meet any budget and scope.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">What makes your content different?</h3>
                <p className="text-gray-600">
                  All our content is authored or reviewed by practicing physicians, ensuring 
                  clinical accuracy and real-world applicability that resonates with both 
                  patients and healthcare professionals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Do you handle regulatory compliance?</h3>
                <p className="text-gray-600">
                  Yes, our team includes regulatory experts who ensure all content meets 
                  FDA, EMA, and other relevant regulatory requirements for your industry and region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}