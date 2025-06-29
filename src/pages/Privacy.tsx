import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Database, 
  Globe, 
  Mail, 
  Phone, 
  Calendar,
  CreditCard,
  MapPin,
  Settings,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Download,
  Trash2,
  Edit,
  Share2
} from 'lucide-react'

const Privacy: React.FC = () => {
  const lastUpdated = "December 15, 2024"

  const dataTypes = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Account Information",
      description: "Name, email, profile details, user preferences",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Data",
      description: "Billing information, transaction history (encrypted)",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location Data",
      description: "City/region for show matching, venue addresses",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Usage Information",
      description: "Platform activity, show attendance, preferences",
      color: "bg-orange-100 text-orange-600"
    }
  ]

  const userRights = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Access Your Data",
      description: "Request a copy of all personal data we have about you"
    },
    {
      icon: <Edit className="h-6 w-6" />,
      title: "Correct Information",
      description: "Update or correct any inaccurate personal information"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Data Portability",
      description: "Export your data in a machine-readable format"
    },
    {
      icon: <Trash2 className="h-6 w-6" />,
      title: "Delete Account",
      description: "Request deletion of your account and associated data"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Control Processing",
      description: "Opt-out of certain data processing activities"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Limit Sharing",
      description: "Control how your information is shared with others"
    }
  ]

  const securityMeasures = [
    {
      title: "End-to-End Encryption",
      description: "All sensitive data is encrypted in transit and at rest using industry-standard AES-256 encryption."
    },
    {
      title: "Secure Payment Processing",
      description: "Payment information is processed through PCI DSS compliant providers. We never store full credit card numbers."
    },
    {
      title: "Regular Security Audits",
      description: "Our systems undergo regular third-party security assessments and penetration testing."
    },
    {
      title: "Access Controls",
      description: "Strict employee access controls with multi-factor authentication and principle of least privilege."
    },
    {
      title: "Data Backup & Recovery",
      description: "Regular encrypted backups with tested disaster recovery procedures to protect against data loss."
    },
    {
      title: "Incident Response",
      description: "24/7 security monitoring with immediate incident response protocols and user notification procedures."
    }
  ]

  const cookieTypes = [
    {
      type: "Essential Cookies",
      purpose: "Required for basic platform functionality and security",
      examples: "Authentication, session management, security features",
      required: true
    },
    {
      type: "Analytics Cookies",
      purpose: "Help us understand how users interact with our platform",
      examples: "Page views, feature usage, performance metrics",
      required: false
    },
    {
      type: "Preference Cookies",
      purpose: "Remember your settings and personalize your experience",
      examples: "Language preferences, display settings, saved filters",
      required: false
    },
    {
      type: "Marketing Cookies",
      purpose: "Deliver relevant content and measure campaign effectiveness",
      examples: "Targeted content, social media integration, ad performance",
      required: false
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
                <Shield className="h-12 w-12 text-primary-600 mr-4" />
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Privacy
                  <span className="text-primary-600 block">Policy</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Your privacy is fundamental to everything we do. Learn how we collect, use, 
                and protect your personal information on TrueFans JAM.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm border">
                <div className="text-sm text-gray-600">Last Updated</div>
                <div className="font-semibold text-gray-900">{lastUpdated}</div>
              </div>
              <Button size="lg" variant="outline">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
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
              Privacy at a Glance
            </h2>
            <p className="text-xl text-gray-600">
              Here's what you need to know about how we handle your information.
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
                  <div className="bg-green-100 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <CardTitle>We Collect Minimal Data</CardTitle>
                  <CardDescription>
                    Only information necessary to provide our services and improve your experience.
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
                  <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Lock className="h-6 w-6" />
                  </div>
                  <CardTitle>Your Data is Secure</CardTitle>
                  <CardDescription>
                    Industry-leading encryption and security measures protect your information.
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
                    <Settings className="h-6 w-6" />
                  </div>
                  <CardTitle>You Have Control</CardTitle>
                  <CardDescription>
                    Access, update, or delete your data anytime. Your privacy, your choice.
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data We Collect */}
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
              Information We Collect
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collect only the information necessary to provide you with the best possible experience on our platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {dataTypes.map((type, index) => (
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
                    <CardTitle className="text-lg">{type.title}</CardTitle>
                    <CardDescription>{type.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Core Platform Services</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Create and manage your account</li>
                      <li>• Match artists with suitable hosts</li>
                      <li>• Process payments and bookings</li>
                      <li>• Provide customer support</li>
                      <li>• Send important service updates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Platform Improvement</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Analyze usage patterns and preferences</li>
                      <li>• Improve our matching algorithms</li>
                      <li>• Develop new features and services</li>
                      <li>• Ensure platform security and safety</li>
                      <li>• Personalize your experience</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Your Rights */}
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
              Your Privacy Rights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You have complete control over your personal information. Here's what you can do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {userRights.map((right, index) => (
              <motion.div
                key={right.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full cursor-pointer">
                  <CardHeader>
                    <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      {right.icon}
                    </div>
                    <CardTitle className="text-lg">{right.title}</CardTitle>
                    <CardDescription>{right.description}</CardDescription>
                  </CardHeader>
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
                  Exercise Your Rights
                </h3>
                <p className="text-gray-600 mb-6">
                  To exercise any of these rights, contact our privacy team. We'll respond within 30 days.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button>
                    <Mail className="h-5 w-5 mr-2" />
                    privacy@truefansjam.com
                  </Button>
                  <Button variant="outline">
                    <Settings className="h-5 w-5 mr-2" />
                    Privacy Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Security Measures */}
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
              How We Protect Your Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We employ industry-leading security measures to keep your information safe and secure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityMeasures.map((measure, index) => (
              <motion.div
                key={measure.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="bg-green-100 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{measure.title}</CardTitle>
                    <CardDescription>{measure.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookies & Tracking */}
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
              Cookies & Tracking
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use cookies and similar technologies to improve your experience and understand how you use our platform.
            </p>
          </motion.div>

          <div className="space-y-6">
            {cookieTypes.map((cookie, index) => (
              <motion.div
                key={cookie.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-lg">{cookie.type}</CardTitle>
                          {cookie.required ? (
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              Required
                            </span>
                          ) : (
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                              Optional
                            </span>
                          )}
                        </div>
                        <CardDescription className="mb-3">{cookie.purpose}</CardDescription>
                        <p className="text-sm text-gray-600">
                          <strong>Examples:</strong> {cookie.examples}
                        </p>
                      </div>
                      {!cookie.required && (
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      )}
                    </div>
                  </CardHeader>
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
            <Button size="lg">
              <Settings className="h-5 w-5 mr-2" />
              Cookie Preferences
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Data Sharing */}
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
                When We Share Information
              </h2>
              <p className="text-xl text-gray-600">
                We never sell your personal information. Here's when we might share it.
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">We Share With:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Service Providers:</strong> Payment processors, hosting services, analytics tools
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Platform Users:</strong> Basic profile info for artists and hosts (with your consent)
                        </div>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Legal Requirements:</strong> When required by law or to protect our users
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">We Never Share:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Personal Contact Info:</strong> Email, phone, address without permission
                        </div>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Payment Details:</strong> Credit card numbers, bank account information
                        </div>
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <strong>Private Messages:</strong> Communications between users
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact & Updates */}
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
              Questions About Privacy?
            </h2>
            <p className="text-xl text-primary-100">
              Our privacy team is here to help. We'll update this policy as needed and notify you of any changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Mail className="h-5 w-5 mr-2" />
                Contact Privacy Team
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <Globe className="h-5 w-5 mr-2" />
                View All Policies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Privacy
