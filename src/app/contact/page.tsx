'use client'
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Contact() {
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

            <form 
                    action="https://formspree.io/f/xjkrdvaa" 
                    method="POST"
                    className="space-y-6"
                    >
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
                        placeholder="youremail@something.com"
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
                        placeholder="Your Company's Name"
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
                        <option value="digital-health-content">Digital Health Content</option>
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

                    <input type="hidden" name="_subject" value="New contact form submission from ProWrites website" />

                    <button 
                        type="submit" 
                        className="w-full bg-[#008080] text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-700 transition text-lg"
                    >
                        Send Message
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
                                    <p className="text-gray-600">
                                      <a href="mailto:contact@prowrites.io" className="hover:text-[#008080] transition">
                                          contact@prowrites.io
                                      </a>
                                    </p>
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
                                <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
                                <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
                                <button className="bg-white text-[#008080] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                                <a href="https://calendly.com/contact-prowrites/30min">Schedule Call</a></button>
                              
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
                              Most projects can begin within a couple of days of contract signing. For urgent projects, we can often accommodate faster start times.
                            </p>
                          </div>
            
                          <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Do you work with small organizations?</h3>
                            <p className="text-gray-600">
                              Absolutely! We work with organizations of all sizes, from solo practices to Fortune 500 companies. 
                              Our solutions are scalable to meet any budget and scope.
                            </p>
                          </div>
            
                          <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">What makes your content different?</h3>
                            <p className="text-gray-600">
                              All our content is authored and reviewed by practicing physicians, 
                              ensuring clinical accuracy and real-world applicability that resonates with both patients and healthcare professionals.
                            </p>
                          </div>
            
                          <div className="bg-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Do you handle regulatory compliance?</h3>
                            <p className="text-gray-600">
                              Yes, we ensure all content meets FDA, EMA, and other relevant regulatory requirements for your industry and region.
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