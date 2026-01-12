'use client'

import { useState, useEffect } from 'react'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'introduction',
        'intellectual-property',
        'website-use',
        'products-services',
        'replacement-policy',
        'feedback',
        'promotions',
        'disclaimer',
        'governing-law',
        'amendments',
        'contact'
      ]

      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on mount

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setActiveSection(sectionId)
    }
  }

  return (
    <main className="min-h-screen">
      <NavbarMain />
      
      {/* Terms and Conditions Content */}
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            TERMS AND CONDITIONS
          </h1>
          <p className="text-gray-600 mb-8">
            Last Updated: 29 November 2025
          </p>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Sidebar Navigation */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <nav className="sticky top-24">
                <div className="border-l-4 border-purple-600 pl-4 space-y-3">
                  <a
                    href="#introduction"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('introduction')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'introduction' || activeSection === ''
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: activeSection === 'introduction' || activeSection === '' ? '#81ba00' : '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'introduction' && activeSection !== '') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    1. Introduction and Agreement
                  </a>
                  <a
                    href="#intellectual-property"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('intellectual-property')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'intellectual-property'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'intellectual-property') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    2. Intellectual Property Rights
                  </a>
                  <a
                    href="#website-use"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('website-use')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'website-use'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'website-use') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    3. Website Use and Conduct
                  </a>
                  <a
                    href="#products-services"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('products-services')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'products-services'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'products-services') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    4. Products, Services, Price and Payment Terms
                  </a>
                  <a
                    href="#replacement-policy"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('replacement-policy')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'replacement-policy'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'replacement-policy') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    5. Plant Replacement Policy
                  </a>
                  <a
                    href="#feedback"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('feedback')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'feedback'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'feedback') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    6. Feedback and Suggestions
                  </a>
                  <a
                    href="#promotions"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('promotions')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'promotions'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'promotions') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    7. Promotions, Contests, and Sweepstakes
                  </a>
                  <a
                    href="#disclaimer"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('disclaimer')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'disclaimer'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'disclaimer') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    8. Disclaimer of Warranties & Limitation of Liability
                  </a>
                  <a
                    href="#governing-law"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('governing-law')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'governing-law'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'governing-law') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    9. Governing Law and Jurisdiction
                  </a>
                  <a
                    href="#amendments"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('amendments')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'amendments'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'amendments') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    10. Amendments to Terms
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('contact')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'contact'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'contact') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    11. Contact Information
                  </a>
                </div>
              </nav>
            </aside>

            {/* Right Main Content */}
            <div className="flex-1 max-w-4xl">
              <div className="space-y-8 text-gray-700">
                {/* Introduction and Agreement */}
                <section id="introduction" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>1. Introduction and Agreement</h2>
                  <p>
                    Welcome to Agrikrishi Farms. These Terms and Conditions (&quot;Terms&quot;) govern your use of the website located at (to be provided) (hereinafter &quot;the Website&quot;), which is owned and operated by Agrikrishi Farms, a company incorporated in India with its principal address in Indore (hereinafter &quot;the Company,&quot; &quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot;).
                  </p>
                  <p>
                    By accessing, browsing, or using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use the Website.
                  </p>
                </section>

                {/* Intellectual Property Rights */}
                <section id="intellectual-property" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>2. Intellectual Property Rights</h2>
                  <p>
                    The Website and its entire contents, features, and functionality—including but not limited to all information, software, text, displays, images, video, audio, logos, visual designs, trademarks, and the design, selection, and arrangement thereof (hereinafter &quot;Content&quot;)—are the exclusive property of Agrikrishi Farms and are protected by Indian and international copyright, trademark, and other intellectual property laws.
                  </p>
                  <p>
                    You are granted a limited, non-exclusive, non-transferable license to access the Website for your personal, non-commercial use. You must not reproduce, distribute, modify, create derivative works of, publicly display, republish, or otherwise exploit any of the Content without our prior written consent.
                  </p>
                </section>

                {/* Website Use and Conduct */}
                <section id="website-use" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>3. Website Use and Conduct</h2>
                  <p>
                    You agree to use the Website only for lawful purposes and in accordance with these Terms. As a condition of your use, you agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Use the Website in any manner that could disable, overburden, damage, or impair the site.</li>
                    <li>Attempt to gain unauthorized access to any part of the Website, the server on which it is stored, or any server, computer, or database connected to the Website.</li>
                    <li>Introduce any viruses, trojan horses, worms, or other material that is malicious or technologically harmful.</li>
                  </ul>
                </section>

                {/* Products, Services, Price and Payment Terms */}
                <section id="products-services" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>4. Products, Services, Price and Payment Terms</h2>
                  <p>
                    The Website showcases our range of horticulture and agroforestry products and services. This display does not constitute an automated offer to sell. All transactions for the purchase of plant(s) or services from the Company are governed by a separate, formal sales agreement, invoice, or quotation provided by us. In the event of any conflict between these Terms and a specific sales agreement, the terms of the sales agreement shall prevail.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#81ba00' }}>Price and Payment Terms</h3>

                  <h4 className="text-xl font-bold mt-6 mb-3" style={{ color: '#81ba00' }}>4.1. Pricing</h4>
                  <p>
                    All payments must be made as per the rate in force at the time of delivery, which may differ from any prior quotations or estimates.
                  </p>

                  <h4 className="text-xl font-bold mt-6 mb-3" style={{ color: '#81ba00' }}>4.2. Advance Payment</h4>
                  <p>
                    To confirm an order, a non-refundable advance payment (e.g., 30% Advance per units and balance against delivery or as specified in the invoice) is required.
                  </p>

                  <h4 className="text-xl font-bold mt-6 mb-3" style={{ color: '#81ba00' }}>4.3. Advance Payment Validity</h4>
                  <p>
                    All advance payments received are valid for a period of three (3) months from the date of receipt. If the Purchaser fails to take delivery of the products within this period, the advance payment shall be forfeited by the Company.
                  </p>

                  <h4 className="text-xl font-bold mt-6 mb-3" style={{ color: '#81ba00' }}>4.4. Final Payment</h4>
                  <p>
                    The outstanding balance for any order is due in full &quot;against delivery&quot; (i.e., at or prior to the time of product handover).
                  </p>

                  <h4 className="text-xl font-bold mt-6 mb-3" style={{ color: '#81ba00' }}>4.5. Delivery Policy</h4>
                  <p>
                    The Company reserves the right to cancel or postpone the delivery of an order in the event of any circumstances arising beyond its reasonable control (Force Majeure), including but not limited to, adverse weather, transportation disruptions, supply chain failure, or acts of God, without any liability to the Purchaser.
                  </p>

                  <h4 className="text-xl font-bold mt-6 mb-3" style={{ color: '#81ba00' }}>4.5. Retention of title</h4>
                  <p>
                    All products supplied to the Purchaser shall remain the sole and exclusive property of Agrikrishi Farms until the full sales amount, including any outstanding balance, is fully realized and received by the Company.
                  </p>

                  <h4 className="text-xl font-bold mt-6 mb-3" style={{ color: '#81ba00' }}>4.6. Return and Refund Policy</h4>
                  <p>
                    All sales are final. Products, once sold and delivered, will not be taken back by the Company. All payments, including advance payments, are strictly non-refundable.
                  </p>

                  <h4 className="text-xl font-bold mt-6 mb-3" style={{ color: '#81ba00' }}>4.7. No Buy-Back Policy</h4>
                  <p>
                    The Company provides no guarantee, representation, or agreement, express or implied, for &quot;buy-back.&quot; Agrikrishi Farms is under no obligation to purchase crops, timber, or any produce generated from the plants it sells.
                  </p>

                  <h4 className="text-xl font-bold mt-6 mb-3" style={{ color: '#81ba00' }}>4.8. Verification and Technician Fees</h4>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>All replacement claims are strictly contingent upon mandatory verification and approval by a Company-appointed technician or representative.</li>
                    <li>The Purchaser must request a verification visit by contacting our branch office.</li>
                    <li>All fees associated with the technician&apos;s visit (e.g., travel, inspection fees) are payable by the Purchaser to our branch office in advance.</li>
                    <li>The Company technician&apos;s assessment of the mortality, its cause, and the eligibility for replacement is final and binding.</li>
                  </ul>
                </section>

                {/* Plant Replacement Policy */}
                <section id="replacement-policy" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>5. Plant Replacement Policy</h2>
                  <p>
                    This policy outlines the terms of replacement for plant(s) purchased directly from Agrikrishi Farms (hereinafter &quot;Purchaser&quot; or &quot;Client&quot;).
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#81ba00' }}>5.1. Eligibility and Verification</h3>
                  <p>
                    All replacement claims are subject to the sole discretion and verification of the Company. The Purchaser must provide adequate proof of purchase (i.e., the original invoice) and may be required to submit photographic evidence or consent to a site visit by a Company representative to assess the claim.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#81ba00' }}>5.2. First-Time Replacement</h3>
                  <p>
                    A Purchaser is entitled to a one-time, no-cost replacement for any plant(s) that have expired or failed to establish post-purchase, provided the claim is verified and approved by the Company.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#81ba00' }}>5.3. Second Replacement</h3>
                  <p>
                    Should the replacement plant(s) provided under Article 5.2 also fail, the Purchaser may request a second replacement for the same plant(s). This second replacement is subject to a mandatory service and product fee equivalent to fifty percent (50%) of the original billed amount for the specific plant(s), as stated on the original invoice.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#81ba00' }}>5.4. Third Replacement</h3>
                  <p>
                    Should the second replacement plant(s) also fail, the Purchaser may request a third and final replacement. This third replacement is subject to a mandatory service and product fee equivalent to seventy-five percent (75%) of the original billed amount for the specific plant(s), as stated on the original invoice.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#81ba00' }}>5.5. Policy Limitations</h3>
                  <p>
                    This policy is strictly limited to three (3) replacement instances (one free, two chargeable) per original plant item purchased. This policy does not cover, and the Company is not liable for, plant failure due to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Negligence, improper care, or failure to follow planting and care instructions provided by the Company.</li>
                    <li>This policy is valid for a maximum period of six (6) months from the date of the original purchase invoice.</li>
                    <li>The Company&apos;s liability for replacement shall not, under any circumstances, exceed sixty percent (60%) of the total plant mortality verified (e.g., if 100 plants are verified to have expired, the maximum replacement provided will be 60 plants).</li>
                    <li>Acts of God, including but not limited to floods, droughts, extreme temperatures, or other severe weather events.</li>
                    <li>Pest infestations or diseases that occur post-delivery and acceptance of the plant(s).</li>
                    <li>Any mechanical or chemical damage caused by the Purchaser or third parties.</li>
                  </ul>
                </section>

                {/* Feedback and Suggestions */}
                <section id="feedback" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>6. Feedback and Suggestions</h2>
                  <p>
                    Any feedback, comments, ideas, or suggestions you provide to the Company (hereinafter &quot;Feedback&quot;) shall become the sole and exclusive property of Agrikrishi Farms. We shall be free to use, implement, disclose, reproduce, or otherwise exploit such Feedback for any purpose whatsoever, commercial or otherwise, without any obligation to provide compensation or credit to you.
                  </p>
                </section>

                {/* Promotions, Contests, and Sweepstakes */}
                <section id="promotions" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>7. Promotions, Contests, and Sweepstakes</h2>
                  <p>
                    The Company may, from time to time, offer promotions, contests, or sweepstakes. All such promotions shall be governed by separate rules and terms, which will be made available at that time.
                  </p>
                </section>

                {/* Disclaimer of Warranties & Limitation of Liability */}
                <section id="disclaimer" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>8. Disclaimer of Warranties & Limitation of Liability</h2>
                  <p>
                    The Website is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Company makes no representations or warranties of any kind, express or implied, as to the operation of the Website or the information or content included on it.
                  </p>
                  <p>
                    In no event shall Agrikrishi Farms, its directors, employees, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the Website or any products or services purchased from us.
                  </p>
                </section>

                {/* Governing Law and Jurisdiction */}
                <section id="governing-law" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>9. Governing Law and Jurisdiction</h2>
                  <p>
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal action, suit, or proceeding arising out of, or related to, these Terms or the Website shall be instituted exclusively in the competent courts located in Indore, Madhya Pradesh.
                  </p>
                </section>

                {/* Amendments to Terms */}
                <section id="amendments" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>10. Amendments to Terms</h2>
                  <p>
                    We reserve the right, at our sole discretion, to modify or replace these Terms at any time by posting the updated terms on the Website. It is your responsibility to review these Terms periodically for changes.
                  </p>
                </section>

                {/* Contact Information */}
                <section id="contact" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>11. Contact Information</h2>
                  <p>For any questions or clarifications regarding these Terms & Conditions, please contact us:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>By email: <a href="mailto:info@agrikrishifarms.com" className="underline" style={{ color: '#81ba00' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>info@agrikrishifarms.com</a></li>
                    <li>By phone: 79873 84443</li>
                    <li>By website: <a href="/contact" className="underline" style={{ color: '#81ba00' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>Contact Page</a></li>
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

