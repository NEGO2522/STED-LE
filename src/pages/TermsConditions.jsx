import React from 'react'

const TermsConditions = () => {
  return (
    <div className="pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-700 mb-4">Terms & Conditions</h1>
          <p className="text-xl text-gray-600">Please read these terms carefully</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the STED-FY platform, you agree to be bound by these Terms and Conditions.
              If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. User Accounts</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Users must provide accurate and complete information when creating an account</li>
              <li>Users are responsible for maintaining the confidentiality of their account credentials</li>
              <li>Users must notify us immediately of any unauthorized use of their account</li>
              <li>We reserve the right to suspend or terminate accounts that violate our terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Content Usage</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>All content on the platform is for educational purposes only</li>
              <li>Users may not reproduce or distribute content without permission</li>
              <li>Users must respect intellectual property rights</li>
              <li>We reserve the right to remove content that violates our policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our privacy policy explains how we collect, use, and protect your personal information.
              By using our services, you agree to our privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. User Conduct</h2>
            <p className="text-gray-700 leading-relaxed">
              Users must not:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
              <li>Engage in any unlawful or fraudulent activities</li>
              <li>Harass, abuse, or harm other users</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use our platform for commercial purposes without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              STED-FY is not liable for any damages arising from the use or inability to use our services.
              We provide our services "as is" without any warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these terms at any time. Users will be notified of significant
              changes. Continued use of our services constitutes acceptance of updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these terms, please contact us at:
              <br />
              Email: support@sted-fy.com
              <br />
              Address: Dhawas, Near Manas Hospital, Jaipur
            </p>
          </section>
        </div>

        <div className="mt-12 text-gray-600 text-sm">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}

export default TermsConditions 