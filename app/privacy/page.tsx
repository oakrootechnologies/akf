'use client'

import { useState, useEffect } from 'react'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'interpretation',
        'collecting-data',
        'usage-data',
        'how-we-use',
        'information-share',
        'children-privacy',
        'privacy-choices',
        'data-security',
        'third-party',
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
      
      {/* Privacy Policy Content */}
      <section className="bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            Last updated: November 13, 2025
          </p>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* Left Sidebar Navigation */}
            <aside className="w-full md:w-64 flex-shrink-0">
              <nav className="sticky top-24">
                <div className="border-l-4 border-purple-600 pl-4 space-y-3">
                  <a
                    href="#interpretation"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('interpretation')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'interpretation' || activeSection === ''
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: activeSection === 'interpretation' || activeSection === '' ? '#81ba00' : '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'interpretation' && activeSection !== '') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    Interpretation and Definitions
                  </a>
                  <a
                    href="#collecting-data"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('collecting-data')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'collecting-data'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'collecting-data') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    Information that may be collected automatically
                  </a>
                  <a
                    href="#how-we-use"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('how-we-use')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'how-we-use'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'how-we-use') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    How we use your information
                  </a>
                  <a
                    href="#information-share"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('information-share')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'information-share'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'information-share') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    Information we share
                  </a>
                  <a
                    href="#children-privacy"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('children-privacy')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'children-privacy'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'children-privacy') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    Children privacy
                  </a>
                  <a
                    href="#privacy-choices"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('privacy-choices')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'privacy-choices'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'privacy-choices') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    Your privacy choices
                  </a>
                  <a
                    href="#data-security"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('data-security')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'data-security'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'data-security') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    Data security
                  </a>
                  <a
                    href="#third-party"
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection('third-party')
                    }}
                    className={`block text-sm transition-colors ${
                      activeSection === 'third-party'
                        ? 'font-semibold'
                        : ''
                    }`}
                    style={{
                      color: '#81ba00',
                    }}
                    onMouseEnter={(e) => {
                      if (activeSection !== 'third-party') {
                        e.currentTarget.style.opacity = '0.8'
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1'
                    }}
                  >
                    Third party sites and social media plug-ins
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
                    Contact details
                  </a>
                </div>
              </nav>
            </aside>

            {/* Right Main Content */}
            <div className="flex-1 max-w-4xl">
              <div className="space-y-8 text-gray-700">
                <p>
                  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </p>
                <p>
                  We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                </p>

                {/* Interpretation and Definitions */}
                <section id="interpretation" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>Interpretation and Definitions</h2>
                  
                  <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#81ba00' }}>Interpretation</h3>
                  <p>
                    The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#81ba00' }}>Definitions</h3>
                  <p>For the purposes of this Privacy Policy:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.</li>
                    <li><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                    <li><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to Oksingreen Pvt. Ltd., Indore, India.</li>
                    <li><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.</li>
                    <li><strong>Country</strong> refers to: Madhya Pradesh, India</li>
                    <li><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</li>
                    <li><strong>Personal Data</strong> is any information that relates to an identified or identifiable individual.</li>
                    <li><strong>Service</strong> refers to the Website.</li>
                    <li><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</li>
                    <li><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</li>
                    <li><strong>Website</strong> refers to Oksingreen, accessible from Oksingreen.com</li>
                    <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                  </ul>
                </section>

                {/* Collecting and Using Your Personal Data */}
                <section id="collecting-data" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>Collecting and Using Your Personal Data</h2>
                  
                  <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#81ba00' }}>Types of Data Collected</h3>
                  
                  <h4 className="text-xl font-bold mt-6 mb-3" style={{ color: '#81ba00' }}>Personal Data</h4>
                  <p>
                    While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Email address</li>
                    <li>First name and last name</li>
                    <li>Phone number</li>
                    <li>Address, State, Province, ZIP/Postal code, City</li>
                    <li>Usage Data</li>
                  </ul>
                </section>

                {/* Usage Data */}
                <section id="usage-data" className="scroll-mt-24">
                  <h4 className="text-xl font-bold mt-6 mb-3" style={{ color: '#81ba00' }}>Usage Data</h4>
                  <p>Usage Data is collected automatically when using the Service.</p>
                  <p>
                    Usage Data may include information such as Your Device&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device&apos;s unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                  </p>
                  <p>
                    We may also collect information that Your browser sends whenever You visit Our Service or when You access the Service by or through a mobile device.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#81ba00' }}>Tracking Technologies and Cookies</h3>
                  <p>
                    We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
                  </p>
                </section>

                {/* How we use your information */}
                <section id="how-we-use" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>How we use your information</h2>
                  <p>
                    We use your Personal Data to provide you the product and services you request, communicate with you, improve your experience on the Oksingreen Sites, generally improve our products and services and for other internal business purposes. These uses may also include the recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction of Personal Data. The Personal Data we collect about you may be stored, and later on archived, only for so long as reasonably necessary for the purposes set out above, in accordance with applicable laws.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#81ba00' }}>Information You Provide</h3>
                  <p>
                    You generally do not have to register for a service or program to receive much of the information available through Oksingreen Sites. However, some of our content is available only to registered or identified users and will require you to set up a profile or provide specific information about yourself in order to provide you the service.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#81ba00' }}>Personal Data You Provide When Visiting Oksingreen Sites</h3>
                  <p>
                    Oksingreen collects Personal Data that you provide on Oksingreen Sites, for example, when purchasing a services, to receive marketing products and information, contact Oksingreen customer service, or respond to Oksingreen questionnaires or surveys. This could include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>To provide and maintain our Service, including to monitor the usage of our Service.</li>
                    <li>To manage Your Account: to manage Your registration as a user of the Service.</li>
                    <li>For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased.</li>
                    <li>To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication.</li>
                    <li>To provide You with news, special offers, and general information about other goods, services and events which We offer.</li>
                    <li>To manage Your requests: To attend and manage Your requests to Us.</li>
                  </ul>
                </section>

                {/* Information we share */}
                <section id="information-share" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>Information we share</h2>
                  <p>We may share Your personal information in the following situations:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.</li>
                    <li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                    <li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
                    <li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
                    <li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                    <li><strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
                  </ul>
                </section>

                {/* Children privacy */}
                <section id="children-privacy" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>Children privacy</h2>
                  <p>
                    Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.
                  </p>
                  <p>
                    If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent&apos;s consent before We collect and use that information.
                  </p>
                </section>

                {/* Your privacy choices */}
                <section id="privacy-choices" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>Your privacy choices</h2>
                  <p>
                    You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.
                  </p>
                  <p>
                    Our Service may give You the ability to delete certain information about You from within the Service.
                  </p>
                  <p>
                    You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.
                  </p>
                  <p>
                    Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.
                  </p>
                </section>

                {/* Data security */}
                <section id="data-security" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>Data security</h2>
                  <p>
                    The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially reasonable means to protect Your Personal Data, We cannot guarantee its absolute security.
                  </p>
                  <p>
                    The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
                  </p>
                </section>

                {/* Third party sites */}
                <section id="third-party" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>Third party sites and social media plug-ins</h2>
                  <p>
                    Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party&apos;s site. We strongly advise You to review the Privacy Policy of every site You visit.
                  </p>
                  <p>
                    We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                  </p>
                </section>

                {/* Contact details */}
                <section id="contact" className="scroll-mt-24">
                  <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: '#81ba00' }}>Contact details</h2>
                  <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>By email: contact@oksingreen.com</li>
                    <li>By visiting this page on our website: <a href="https://oksingreen.com/" className="underline" style={{ color: '#81ba00' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>https://oksingreen.com/</a></li>
                    <li>By phone: 08815069927</li>
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
