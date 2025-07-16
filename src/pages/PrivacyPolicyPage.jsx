import React from 'react'
import Layout from '../components/Layout'
import { Shield, Eye, Lock, Users, Database, Globe } from 'lucide-react'

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        {
          subtitle: "Account Information",
          details: "When you create an account, we collect your name, email address, profile information, and payment details for transactions."
        },
        {
          subtitle: "Performance Data",
          details: "For artists, we collect information about your performances, music uploads, fan interactions, and earnings data."
        },
        {
          subtitle: "Usage Information",
          details: "We collect data about how you use our platform, including pages visited, features used, and interaction patterns."
        },
        {
          subtitle: "Location Data",
          details: "With your permission, we collect location information to match you with nearby performances and venues."
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        {
          subtitle: "Platform Services",
          details: "We use your information to provide our core services: matching artists with fans, facilitating bookings, and processing payments."
        },
        {
          subtitle: "Personalization",
          details: "We personalize your experience by recommending artists, venues, and performances based on your preferences and history."
        },
        {
          subtitle: "Communication",
          details: "We send you important updates about your account, bookings, and platform changes. Marketing communications are opt-in only."
        },
        {
          subtitle: "Safety & Security",
          details: "We use your information to verify identities, prevent fraud, and maintain the safety of our community."
        }
      ]
    },
    {
      title: "Information Sharing",
      icon: Users,
      content: [
        {
          subtitle: "Public Profiles",
          details: "Artist profiles and performance information are publicly visible to help fans discover music. You control what information is displayed."
        },
        {
          subtitle: "Host Network",
          details: "Vetted hosts receive limited artist information necessary for booking and hosting performances safely."
        },
        {
          subtitle: "Service Providers",
          details: "We share information with trusted partners who help us operate the platform, including payment processors and email services."
        },
        {
          subtitle: "Legal Requirements",
          details: "We may disclose information when required by law or to protect the rights and safety of our users and platform."
        }
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        {
          subtitle: "Encryption",
          details: "All data transmission is encrypted using industry-standard SSL/TLS protocols. Sensitive data is encrypted at rest."
        },
        {
          subtitle: "Access Controls",
          details: "We implement strict access controls, ensuring only authorized personnel can access user data on a need-to-know basis."
        },
        {
          subtitle: "Regular Audits",
          details: "Our security practices are regularly audited by third-party security firms to identify and address potential vulnerabilities."
        },
        {
          subtitle: "Incident Response",
          details: "We have comprehensive incident response procedures and will notify users promptly of any security breaches affecting their data."
        }
      ]
    }
  ]

  const rights = [
    "Access your personal data and receive a copy",
    "Correct inaccurate or incomplete information",
    "Delete your account and associated data",
    "Restrict processing of your information",
    "Data portability to other services",
    "Object to certain data processing activities"
  ]

  return (
    <Layout 
      title="Privacy Policy" 
      description="How we protect and handle your personal information"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Your Privacy Matters</h2>
            </div>
            <p className="text-gray-600 mb-4">
              At TrueFans JAM, we believe privacy is a fundamental right. This policy explains how we collect, use, and protect your personal information when you use our platform.
            </p>
            <p className="text-gray-600">
              <strong>Last updated:</strong> December 2024
            </p>
          </div>
        </div>

        {/* Main Sections */}
        {sections.map((section, index) => (
          <div key={index} className="mb-12">
            <div className="flex items-center mb-6">
              <section.icon className="w-6 h-6 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
            </div>
            
            <div className="space-y-6">
              {section.content.map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.subtitle}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Your Rights */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <p className="text-gray-600 mb-6">
              You have the following rights regarding your personal data:
            </p>
            <ul className="space-y-3">
              {rights.map((right, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{right}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-600">
                To exercise any of these rights, please contact us at{' '}
                <a href="mailto:privacy@truefansjam.com" className="text-purple-600 hover:underline">
                  privacy@truefansjam.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* International Users */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Globe className="w-6 h-6 text-purple-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">International Users</h2>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <p className="text-gray-600 mb-4">
              TrueFans JAM operates globally and complies with international privacy regulations including:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                <span className="text-gray-700">GDPR (European Union)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                <span className="text-gray-700">CCPA (California)</span>
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                <span className="text-gray-700">PIPEDA (Canada)</span>
              </li>
            </ul>
            <p className="text-gray-600">
              Data transfers are protected by appropriate safeguards, including Standard Contractual Clauses approved by the European Commission.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-8 text-white">
            <p className="mb-6">
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span>Email: privacy@truefansjam.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span>Address: 123 Music Street, Austin, TX 78701</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                <span>Response time: Within 30 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Updates */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Policy Updates</h3>
            <p className="text-gray-600">
              We may update this Privacy Policy periodically. We'll notify you of significant changes via email or platform notification. Your continued use of TrueFans JAM after changes take effect constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PrivacyPolicyPage
