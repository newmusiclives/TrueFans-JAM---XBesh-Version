import React from 'react'
import Layout from '../components/Layout'
import { FileText, Users, DollarSign, Shield, AlertTriangle, Scale } from 'lucide-react'

const TermsOfServicePage = () => {
  const sections = [
    {
      title: "Platform Usage",
      icon: Users,
      content: [
        {
          subtitle: "Eligibility",
          details: "You must be at least 18 years old to use TrueFans JAM. Artists under 18 may participate with parental consent and supervision."
        },
        {
          subtitle: "Account Responsibility",
          details: "You are responsible for maintaining the security of your account and all activities that occur under your account."
        },
        {
          subtitle: "Prohibited Activities",
          details: "Users may not engage in harassment, spam, copyright infringement, or any illegal activities on the platform."
        },
        {
          subtitle: "Content Guidelines",
          details: "All content must be original or properly licensed. Hate speech, explicit content, and misleading information are prohibited."
        }
      ]
    },
    {
      title: "Artist Terms",
      icon: FileText,
      content: [
        {
          subtitle: "Performance Requirements",
          details: "Artists must perform primarily original music. Cover songs are allowed but should not exceed 30% of any performance."
        },
        {
          subtitle: "Revenue Sharing",
          details: "Artists receive 70% of all donations. The platform retains 20%, and hosts receive 10% for venue and hosting services."
        },
        {
          subtitle: "Cancellation Policy",
          details: "Artists may cancel performances up to 48 hours before the scheduled time. Late cancellations may result in penalties."
        },
        {
          subtitle: "Quality Standards",
          details: "Artists are expected to maintain professional standards in performance quality, punctuality, and fan interaction."
        }
      ]
    },
    {
      title: "Host Terms",
      icon: Shield,
      content: [
        {
          subtitle: "Venue Requirements",
          details: "Host venues must meet safety, acoustic, and capacity requirements as outlined in our Host Guidelines."
        },
        {
          subtitle: "Host Responsibilities",
          details: "Hosts are responsible for venue setup, basic sound equipment, and creating a welcoming environment for artists and fans."
        },
        {
          subtitle: "Revenue Structure",
          details: "Hosts receive 10% of donations from performances at their venue, plus 2.5% commission from referred artists (2 tiers)."
        },
        {
          subtitle: "Vetting Process",
          details: "All hosts must complete our vetting process, including background checks and venue inspections, with a $100 setup fee."
        }
      ]
    },
    {
      title: "Financial Terms",
      icon: DollarSign,
      content: [
        {
          subtitle: "Payment Processing",
          details: "All payments are processed through secure third-party providers. TrueFans JAM does not store payment information."
        },
        {
          subtitle: "Refund Policy",
          details: "Donations are generally non-refundable. Refunds may be issued in cases of cancelled performances or technical issues."
        },
        {
          subtitle: "Tax Responsibility",
          details: "Users are responsible for reporting and paying taxes on income earned through the platform in accordance with local laws."
        },
        {
          subtitle: "Fee Changes",
          details: "We reserve the right to modify fees with 30 days' notice to users. Changes will not affect existing bookings."
        }
      ]
    }
  ]

  const prohibitedActivities = [
    "Harassment or intimidation of other users",
    "Posting copyrighted content without permission",
    "Creating fake accounts or impersonating others",
    "Attempting to circumvent platform fees",
    "Sharing inappropriate or offensive content",
    "Violating local laws or regulations",
    "Spamming or unsolicited marketing",
    "Interfering with platform functionality"
  ]

  return (
    <Layout 
      title="Terms of Service" 
      description="The rules and guidelines for using TrueFans JAM"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="flex items-center mb-6">
              <Scale className="w-8 h-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Welcome to TrueFans JAM. These Terms of Service govern your use of our platform and services. By using TrueFans JAM, you agree to these terms.
            </p>
            <p className="text-gray-600">
              <strong>Effective Date:</strong> December 2024
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

        {/* Prohibited Activities */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Prohibited Activities</h2>
          </div>
          <div className="bg-red-50 rounded-xl p-8 border border-red-200">
            <p className="text-gray-700 mb-6">
              The following activities are strictly prohibited on TrueFans JAM:
            </p>
            <ul className="space-y-3">
              {prohibitedActivities.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">{activity}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-red-200">
              <p className="text-gray-700">
                Violation of these terms may result in account suspension or termination.
              </p>
            </div>
          </div>
        </div>

        {/* Liability and Disclaimers */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Liability and Disclaimers</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Platform Availability</h3>
                <p className="text-gray-600">
                  While we strive for 99.9% uptime, TrueFans JAM is provided "as is" without warranties. We are not liable for service interruptions or technical issues.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">User Interactions</h3>
                <p className="text-gray-600">
                  TrueFans JAM facilitates connections between users but is not responsible for the actions, content, or conduct of individual users.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                <p className="text-gray-600">
                  Our liability is limited to the amount paid by the user in the 12 months preceding any claim. We are not liable for indirect or consequential damages.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Your Content:</strong> You retain ownership of all content you upload to TrueFans JAM. By uploading content, you grant us a license to display and distribute it on our platform.
              </p>
              <p className="text-gray-600">
                <strong>Our Platform:</strong> The TrueFans JAM platform, including its design, features, and algorithms, is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-gray-600">
                <strong>Copyright Infringement:</strong> We respond to valid DMCA takedown notices. Repeat infringers will have their accounts terminated.
              </p>
            </div>
          </div>
        </div>

        {/* Termination */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Termination</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>By You:</strong> You may terminate your account at any time through your account settings. Termination does not affect existing bookings or payment obligations.
              </p>
              <p className="text-gray-600">
                <strong>By Us:</strong> We may terminate accounts that violate these terms, engage in prohibited activities, or pose risks to our community.
              </p>
              <p className="text-gray-600">
                <strong>Effect of Termination:</strong> Upon termination, your access to the platform will cease, but these terms will continue to apply to past activities.
              </p>
            </div>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-8 text-white">
            <p className="mb-4">
              We may update these Terms of Service periodically to reflect changes in our services or legal requirements.
            </p>
            <p className="mb-4">
              We'll notify users of significant changes via email or platform notification at least 30 days before they take effect.
            </p>
            <p>
              Your continued use of TrueFans JAM after changes take effect constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About These Terms?</h3>
            <p className="text-gray-600 mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">Email: legal@truefansjam.com</p>
              <p className="text-gray-700">Address: 123 Music Street, Austin, TX 78701</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TermsOfServicePage
