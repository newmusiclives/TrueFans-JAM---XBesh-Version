import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { 
  FileText, 
  Users, 
  Shield, 
  CreditCard, 
  AlertTriangle, 
  CheckCircle, 
  Scale, 
  Globe, 
  Mail, 
  Phone, 
  Calendar,
  Music,
  Home,
  Gavel,
  UserCheck,
  Ban,
  RefreshCw,
  Download,
  ExternalLink,
  Info
} from 'lucide-react'

const Terms: React.FC = () => {
  const lastUpdated = "December 15, 2024"
  const effectiveDate = "January 1, 2025"

  const userTypes = [
    {
      icon: <Music className="h-6 w-6" />,
      title: "Artists",
      description: "Musicians creating and managing tours",
      color: "bg-purple-100 text-purple-600",
      responsibilities: [
        "Provide accurate tour and performance information",
        "Maintain professional conduct with hosts and fans",
        "Honor confirmed tour dates and commitments",
        "Comply with venue rules and local regulations"
      ]
    },
    {
      icon: <Home className="h-6 w-6" />,
      title: "Hosts",
      description: "Venue owners and event organizers",
      color: "bg-blue-100 text-blue-600",
      responsibilities: [
        "Provide safe and suitable venues for performances",
        "Ensure all necessary permits and licenses",
        "Maintain venue standards and safety protocols",
        "Honor hosting commitments and agreements"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Music Lovers",
      description: "Fans discovering and attending shows",
      color: "bg-green-100 text-green-600",
      responsibilities: [
        "Respect venue rules and artist performances",
        "Provide accurate information when purchasing tickets",
        "Follow community guidelines and conduct standards",
        "Report any safety concerns or inappropriate behavior"
      ]
    }
  ]

  const prohibitedActivities = [
    {
      category: "Content Violations",
      items: [
        "Posting false, misleading, or fraudulent information",
        "Sharing copyrighted material without permission",
        "Uploading inappropriate or offensive content",
        "Impersonating other users or entities"
      ]
    },
    {
      category: "Platform Misuse",
      items: [
        "Attempting to hack, disrupt, or damage the platform",
        "Creating multiple accounts to circumvent restrictions",
        "Using automated tools or bots without permission",
        "Interfering with other users' experience"
      ]
    },
    {
      category: "Commercial Violations",
      items: [
        "Conducting transactions outside the platform",
        "Avoiding platform fees through alternative arrangements",
        "Misrepresenting pricing or availability",
        "Engaging in price manipulation or fraud"
      ]
    },
    {
      category: "Safety & Legal",
      items: [
        "Harassment, discrimination, or threatening behavior",
        "Violating local laws or regulations",
        "Endangering the safety of other users",
        "Promoting illegal activities or substances"
      ]
    }
  ]

  const paymentTerms = [
    {
      title: "Artist Payments",
      description: "Revenue sharing and payout structure for performers",
      details: [
        "80-90% revenue share based on subscription tier",
        "Payments processed within 7 days after show completion",
        "Minimum payout threshold of $50",
        "Direct deposit or PayPal transfer options"
      ]
    },
    {
      title: "Host Compensation",
      description: "Earnings structure for venue providers",
      details: [
        "Negotiated compensation per hosting agreement",
        "Payment within 14 days of successful show completion",
        "Bonus incentives for highly-rated venues",
        "Transparent fee structure with no hidden costs"
      ]
    },
    {
      title: "Platform Fees",
      description: "Service charges and transaction costs",
      details: [
        "2.9% + $0.30 payment processing fee",
        "10-20% platform service fee based on tier",
        "No setup fees or monthly minimums",
        "Transparent pricing with no surprise charges"
      ]
    },
    {
      title: "Refund Policy",
      description: "Cancellation and refund procedures",
      details: [
        "Full refund for cancellations 48+ hours in advance",
        "50% refund for cancellations 24-48 hours prior",
        "No refund for same-day cancellations (except emergencies)",
        "Platform fee refunded for verified technical issues"
      ]
    }
  ]

  const disputeResolution = [
    {
      step: "1",
      title: "Direct Communication",
      description: "Users attempt to resolve issues directly through platform messaging",
      timeframe: "3-5 business days"
    },
    {
      step: "2", 
      title: "Platform Mediation",
      description: "TrueFans JAM team mediates between parties to find resolution",
      timeframe: "5-10 business days"
    },
    {
      step: "3",
      title: "Formal Arbitration",
      description: "Binding arbitration through approved third-party service",
      timeframe: "30-60 days"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-center mb-6">
                <FileText className="h-12 w-12 text-primary-600 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Terms of
                  <span className="text-primary-600 block">Service</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Clear, fair terms that protect everyone in the TrueFans JAM community. 
                Read how we work together to create amazing musical experiences.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm border">
                <div className="text-sm text-gray-600">Last Updated</div>
                <div className="font-semibold text-gray-900">{lastUpdated}</div>
              </div>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm border">
                <div className="text-sm text-gray-600">Effective Date</div>
                <div className="font-semibold text-gray-900">{effectiveDate}</div>
              </div>
              <Button size="lg" variant="outline">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agreement Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Agreement Overview
            </h2>
            <p className="text-xl text-gray-600">
              By using TrueFans JAM, you agree to these terms. Here's what that means.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Scale className="h-6 w-6" />
                  </div>
                  <CardTitle>Fair & Balanced</CardTitle>
                  <CardDescription>
                    Terms designed to protect all parties while enabling creative collaboration.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="bg-green-100 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <CardTitle>Clear Expectations</CardTitle>
                  <CardDescription>
                    Straightforward rules and responsibilities for artists, hosts, and fans.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <CardTitle>Community Protection</CardTitle>
                  <CardDescription>
                    Safeguards to ensure a safe, respectful environment for everyone.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* User Responsibilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              User Responsibilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each user type has specific responsibilities to ensure the platform works for everyone.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {userTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className={`${type.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
                      {type.icon}
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                    <CardDescription className="mb-4">{type.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {type.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Prohibited Activities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To maintain a safe and fair platform, these activities are strictly prohibited.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {prohibitedActivities.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="bg-red-100 text-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Ban className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <AlertTriangle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Violation Consequences
                </h3>
                <p className="text-gray-600 mb-6">
                  Violations may result in warnings, account suspension, or permanent bans depending on severity.
                </p>
                <Button variant="outline">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Report Violation
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Payment Terms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Payment Terms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing and payment policies for all platform transactions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {paymentTerms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="bg-green-100 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{term.title}</CardTitle>
                    <CardDescription className="mb-4">{term.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {term.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dispute Resolution */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Dispute Resolution
            </h2>
            <p className="text-xl text-gray-600">
              Fair and efficient process for resolving conflicts between platform users.
            </p>
          </motion.div>

          <div className="space-y-8">
            {disputeResolution.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                          <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                            {step.timeframe}
                          </span>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Card className="bg-primary-50 border-primary-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Need Help Resolving a Dispute?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our support team is here to help mediate and resolve conflicts fairly.
                </p>
                <Button>
                  <Gavel className="h-5 w-5 mr-2" />
                  Start Dispute Resolution
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Platform Rights & Limitations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
                Platform Rights & Limitations
              </h2>
              <p className="text-xl text-gray-600">
                Understanding our rights and limitations as a platform provider.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <UserCheck className="h-6 w-6 mr-3 text-green-600" />
                    Our Rights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Modify platform features and functionality
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Suspend or terminate accounts for violations
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Update terms with reasonable notice
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      Investigate and resolve disputes
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Info className="h-6 w-6 mr-3 text-blue-600" />
                    Our Limitations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      Not responsible for user-generated content
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      Cannot guarantee show attendance or success
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      Limited liability for technical issues
                    </li>
                    <li className="flex items-start">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      Users responsible for tax obligations
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Updates & Contact */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
              Questions About These Terms?
            </h2>
            <p className="text-xl text-primary-100">
              We're here to help clarify any questions about our terms of service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Mail className="h-5 w-5 mr-2" />
                Contact Legal Team
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <RefreshCw className="h-5 w-5 mr-2" />
                Terms Update History
              </Button>
            </div>
            <div className="bg-primary-700 rounded-lg p-6 text-left max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-white mb-3">Terms Updates</h3>
              <p className="text-primary-100 text-sm">
                We'll notify you at least 30 days before any significant changes to these terms. 
                Continued use of the platform after changes take effect constitutes acceptance of the new terms.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Terms
