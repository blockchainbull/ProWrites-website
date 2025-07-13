import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link';
import CalendlyWidget from '@/components/Calendly';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CalendlyWidget />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#008080] to-[#006666] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              About You
            </h1>
            <p className="text-xl mb-8 text-teal-100">
              This isn&apos;t about us. It&apos;s about you and the incredible work you&apos;re doing 
              to advance healthcare and improve patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* You're Building the Future */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">You&apos;re Building the Future of Healthcare</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              You&apos;re not just another healthcare organization. You&apos;re the innovator developing breakthrough treatments, 
              the educator shaping tomorrow&apos;s clinicians, and the leader transforming patient care. Your work saves lives, 
              advances medical science, and makes healthcare more accessible for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Your Challenge */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Your Challenge is Real</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              You&apos;re drowning in content demands. Between patient education materials, clinical documentation, 
              research publications, and digital platform content, your team is stretched thin. Meanwhile, 
              generic medical writers don&apos;t understand your clinical workflows, regulatory requirements, 
              or the nuances that make healthcare communication effective.
            </p>
          </div>
        </div>
      </section>

      {/* You Need Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">You Need Partners Who Get It</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              You need content creators who speak your language—literally. Partners who understand the difference 
              between patient-facing materials and peer-reviewed publications. Who know that a misplaced word in 
              clinical documentation can have serious consequences. Who recognize that your digital health platform 
              isn&apos;t just another app—it&apos;s a tool that impacts patient outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* You Deserve Better */}
      <section className="py-16 bg-[#F1FFE9]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">You Deserve Better Than Generic</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#008080] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Your groundbreaking research deserves publication in top-tier journals.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#008080] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Your innovative treatments deserve patient education that actually drives compliance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[#008080] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Your digital health platform deserves content that healthcare professionals trust and use confidently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* You're Ready to Scale */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">You&apos;re Ready to Scale Without Compromise</h2>
            <div className="text-xl text-gray-600 leading-relaxed space-y-3">
              <p>You want to expand your content production without sacrificing clinical accuracy.</p>
              <p>You need faster turnaround times without endless revision cycles.</p>
              <p>You want content that enhances your reputation, not undermines it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* You've Found Your Match */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">You&apos;ve Found Your Match</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We&apos;re the physician-writers who understand your world because we live in it too. 
              We&apos;re your content partners who get it right the first time.
            </p>
            
            <div className="bg-[#008080] p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="text-teal-100 mb-6">
                Let&apos;s discuss how physician-authored content can solve your challenges and amplify your impact.
              </p>
              <Link 
                href="/contact" 
                className="inline-block bg-white text-[#008080] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
              >
                Start the Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}