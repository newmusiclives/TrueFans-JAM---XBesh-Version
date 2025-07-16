import React, { useState } from 'react'
import Layout from '../components/Layout'
import { 
  Shield, 
  Users, 
  Home, 
  Music, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Star, 
  Heart, 
  Award, 
  Phone, 
  Mail, 
  MessageCircle,
  Calendar,
  DollarSign,
  Camera,
  Volume2,
  Wifi,
  Car,
  Coffee,
  Lightbulb,
  FileText,
  Download,
  Play,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Target,
  Zap
} from 'lucide-react'

const HostGuidelinesPage = () => {
  const [activeSection, setActiveSection] = useState('overview')
  const [expandedFaq, setExpandedFaq] = useState(null)

  const sections = [
    { id: 'overview', title: 'Overview', icon: BookOpen },
    { id: 'preparation', title: 'Event Preparation', icon: Calendar },
    { id: 'during-show', title: 'During the Show', icon: Music },
    { id: 'safety', title: 'Safety & Security', icon: Shield },
    { id: 'best-practices', title: 'Best Practices', icon: Star },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: Lightbulb }
  ]

  const coreValues = [
    {
      icon: Heart,
      title: 'Artist Support',
      description: 'Create an environment where artists feel valued, respected, and inspired to perform their best.'
    },
    {
      icon: Users,
      title: 'Community Building',
      description: 'Foster connections between guests, creating lasting relationships through shared musical experiences.'
    },
    {
      icon: Shield,
      title: 'Safe Spaces',
      description: 'Maintain a welcoming, inclusive environment where everyone feels comfortable and secure.'
    },
    {
      icon: Star,
      title: 'Quality Experience',
      description: 'Deliver consistently excellent shows that exceed expectations for both artists and audiences.'
    }
  ]

  const preparationSteps = [
    {
      category: 'Space Setup',
      items: [
        'Arrange seating in a semi-circle facing the performance area',
        'Ensure adequate lighting for both performer and audience',
        'Test sound system and microphones 30 minutes before guests arrive',
        'Create a designated "backstage" area for artist preparation',
        'Set up merchandise table if artist has items to sell'
      ]
    },
    {
      category: 'Guest Management',
      items: [
        'Send reminder emails 24 hours before the show',
        'Provide clear parking and entry instructions',
        'Prepare name tags or guest list for check-in',
        'Set up refreshment station away from performance area',
        'Designate quiet spaces for conversation during intermission'
      ]
    },
    {
      category: 'Technical Requirements',
      items: [
        'Ensure reliable WiFi for artist and payment processing',
        'Have backup power solutions available',
        'Test all electrical outlets in performance area',
        'Prepare extension cords and power strips as needed',
        'Set up recording equipment if artist requests documentation'
      ]
    }
  ]

  const duringShowGuidelines = [
    {
      phase: 'Pre-Show (30 minutes before)',
      guidelines: [
        'Welcome early arrivals and offer refreshments',
        'Introduce yourself as the host to all guests',
        'Help artist with final sound check and setup',
        'Ensure all phones are on silent mode',
        'Brief artist on audience size and any special requests'
      ]
    },
    {
      phase: 'Show Introduction',
      guidelines: [
        'Warmly welcome everyone and thank them for coming',
        'Briefly introduce the artist and their background',
        'Mention house rules (no flash photography, respectful listening)',
        'Encourage audience engagement when appropriate',
        'Set expectations for intermission and show length'
      ]
    },
    {
      phase: 'During Performance',
      guidelines: [
        'Model attentive listening behavior for guests',
        'Manage any disruptions quickly and quietly',
        'Monitor room temperature and lighting',
        'Be available for artist needs without being intrusive',
        'Encourage applause and positive audience response'
      ]
    },
    {
      phase: 'Post-Show',
      guidelines: [
        'Lead enthusiastic applause and thank the artist',
        'Facilitate meet-and-greet opportunities',
        'Assist with merchandise sales if applicable',
        'Collect feedback from guests about their experience',
        'Help artist pack up and provide refreshments'
      ]
    }
  ]

  const safetyProtocols = [
    {
      category: 'Guest Safety',
      protocols: [
        'Maintain clear emergency exits at all times',
        'Keep first aid kit easily accessible',
        'Monitor alcohol consumption if beverages are served',
        'Ensure adequate lighting in all guest areas',
        'Have emergency contact numbers readily available'
      ]
    },
    {
      category: 'Property Protection',
      protocols: [
        'Secure valuable items before guests arrive',
        'Monitor guest access to private areas of home',
        'Protect floors and furniture in high-traffic areas',
        'Have cleaning supplies ready for immediate spill response',
        'Consider temporary insurance coverage for events'
      ]
    },
    {
      category: 'Artist Security',
      protocols: [
        'Provide secure storage for artist equipment',
        'Ensure artist has private space for preparation',
        'Protect artist from overly enthusiastic fans',
        'Facilitate safe loading/unloading of equipment',
        'Respect artist privacy and personal boundaries'
      ]
    }
  ]

  const bestPractices = [
    {
      title: 'Creating Atmosphere',
      tips: [
        'Dim harsh overhead lights and use warm, ambient lighting',
        'Remove distracting decorations from performance area',
        'Ensure comfortable room temperature (68-72°F)',
        'Minimize background noise from appliances or traffic',
        'Create intimate seating arrangements that encourage connection'
      ]
    },
    {
      title: 'Guest Experience',
      tips: [
        'Greet each guest personally upon arrival',
        'Offer simple refreshments that won\'t create noise',
        'Provide program or artist information sheets',
        'Encourage guests to arrive 15 minutes early',
        'Follow up with thank you messages after the show'
      ]
    },
    {
      title: 'Artist Relations',
      tips: [
        'Communicate clearly about setup time and requirements',
        'Provide bottled water and light snacks for artist',
        'Respect artist\'s pre-show routine and space needs',
        'Handle payment promptly and professionally',
        'Offer genuine feedback and encouragement after performance'
      ]
    }
  ]

  const troubleshootingGuide = [
    {
      issue: 'Technical Problems',
      solutions: [
        'Keep backup microphones and cables available',
        'Have TrueFans support number ready for immediate assistance',
        'Test all equipment 30 minutes before show time',
        'Designate a tech-savvy guest as backup support',
        'Know location of circuit breakers and backup power options'
      ]
    },
    {
      issue: 'Difficult Guests',
      solutions: [
        'Address disruptive behavior quickly but diplomatically',
        'Have a designated quiet area for conversations',
        'Set clear expectations about respectful listening',
        'Don\'t hesitate to ask disruptive guests to step outside',
        'Contact TrueFans support for guidance on serious issues'
      ]
    },
    {
      issue: 'Last-Minute Cancellations',
      solutions: [
        'Notify all guests immediately via phone and email',
        'Offer to reschedule or provide refunds as appropriate',
        'Keep backup entertainment options if possible',
        'Document cancellation reasons for TrueFans team',
        'Follow up with guests to maintain relationships'
      ]
    }
  ]

  const faqs = [
    {
      question: 'What if more guests show up than expected?',
      answer: 'Contact TrueFans support immediately. We can help manage the situation and ensure safety. Never exceed your stated capacity, as this violates safety guidelines and insurance coverage.'
    },
    {
      question: 'Can I serve alcohol at my house concert?',
      answer: 'Yes, but you\'re responsible for monitoring consumption and ensuring guest safety. Check local laws and consider liability implications. We recommend limiting alcohol service and providing substantial food options.'
    },
    {
      question: 'What if the artist wants to sell merchandise?',
      answer: 'Absolutely encourage this! Set up a dedicated table and help facilitate sales. Artists keep 100% of merchandise revenue, and it helps them build their fan base.'
    },
    {
      question: 'How do I handle payment collection?',
      answer: 'TrueFans handles all ticket sales and payments. You\'ll receive your host fee within 48 hours after the show. Never collect cash payments directly from guests.'
    },
    {
      question: 'What if neighbors complain about noise?',
      answer: 'Inform neighbors in advance about your event. Keep music at reasonable levels and end shows by 10 PM on weeknights, 11 PM on weekends. Have our contact information ready to share if needed.'
    },
    {
      question: 'Can I record the performance?',
      answer: 'Only with explicit artist permission. Many artists are happy to have performances recorded for promotional use. Always ask first and respect their decision.'
    }
  ]

  const resources = [
    {
      title: 'Host Handbook PDF',
      description: 'Comprehensive 20-page guide covering all aspects of hosting',
      icon: FileText,
      action: 'Download'
    },
    {
      title: 'Setup Checklist',
      description: 'Printable checklist for event preparation',
      icon: CheckCircle,
      action: 'Download'
    },
    {
      title: 'Emergency Contacts',
      description: 'Important phone numbers and support resources',
      icon: Phone,
      action: 'View'
    },
    {
      title: 'Host Training Video',
      description: '15-minute video walkthrough of best practices',
      icon: Play,
      action: 'Watch'
    }
  ]

  const renderSectionContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Welcome to the TrueFans JAM Host Community</h3>
              <p className="text-lg text-gray-700 mb-6">
                As a TrueFans JAM host, you're not just opening your home – you're creating magical musical experiences 
                that support independent artists and build lasting community connections. These guidelines will help you 
                deliver consistently excellent shows that exceed expectations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-gray-900">{value.title}</h4>
                    </div>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
              <h4 className="text-lg font-bold text-purple-900 mb-4">Your Role as a Host</h4>
              <ul className="space-y-2 text-purple-800">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  <span>Create a welcoming, intimate atmosphere for live music</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  <span>Facilitate connections between artists and audiences</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  <span>Ensure safety and comfort for all participants</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-purple-600 mr-3" />
                  <span>Represent the TrueFans JAM brand with excellence</span>
                </li>
              </ul>
            </div>
          </div>
        )

      case 'preparation':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Preparation</h3>
              <p className="text-gray-700 mb-8">
                Proper preparation is key to hosting successful house concerts. Follow this comprehensive checklist 
                to ensure every detail is covered.
              </p>
            </div>

            {preparationSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{step.category}</h4>
                <ul className="space-y-3">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h4 className="text-lg font-bold text-blue-900 mb-4">Timeline Recommendation</h4>
              <div className="space-y-3 text-blue-800">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3" />
                  <span><strong>1 week before:</strong> Confirm guest count and send reminders</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3" />
                  <span><strong>Day before:</strong> Set up space and test all equipment</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-600 mr-3" />
                  <span><strong>Day of:</strong> Final preparations and artist arrival</span>
                </div>
              </div>
            </div>
          </div>
        )

      case 'during-show':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">During the Show</h3>
              <p className="text-gray-700 mb-8">
                Your role during the performance is crucial for creating an memorable experience. Here's how to 
                manage each phase of the show effectively.
              </p>
            </div>

            {duringShowGuidelines.map((phase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{phase.phase}</h4>
                <ul className="space-y-3">
                  {phase.guidelines.map((guideline, guidelineIndex) => (
                    <li key={guidelineIndex} className="flex items-start">
                      <Star className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{guideline}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )

      case 'safety':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Safety & Security</h3>
              <p className="text-gray-700 mb-8">
                Creating a safe environment is your top priority. These protocols help protect guests, artists, 
                and your property while maintaining a welcoming atmosphere.
              </p>
            </div>

            {safetyProtocols.map((protocol, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{protocol.category}</h4>
                <ul className="space-y-3">
                  {protocol.protocols.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Shield className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-red-50 rounded-lg p-6 border border-red-200">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                <h4 className="text-lg font-bold text-red-900">Emergency Procedures</h4>
              </div>
              <ul className="space-y-2 text-red-800">
                <li>• Keep emergency contact numbers easily accessible</li>
                <li>• Know the location of your nearest hospital</li>
                <li>• Have a clear evacuation plan for your space</li>
                <li>• Contact TrueFans support immediately for any serious incidents</li>
              </ul>
            </div>
          </div>
        )

      case 'best-practices':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h3>
              <p className="text-gray-700 mb-8">
                These proven strategies will help you create exceptional experiences that guests and artists 
                will remember and recommend to others.
              </p>
            </div>

            {bestPractices.map((practice, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{practice.title}</h4>
                <ul className="space-y-3">
                  {practice.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start">
                      <Lightbulb className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )

      case 'troubleshooting':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting Guide</h3>
              <p className="text-gray-700 mb-8">
                Even with careful preparation, unexpected situations can arise. Here's how to handle common 
                challenges with confidence and professionalism.
              </p>
            </div>

            {troubleshootingGuide.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{guide.issue}</h4>
                <ul className="space-y-3">
                  {guide.solutions.map((solution, solutionIndex) => (
                    <li key={solutionIndex} className="flex items-start">
                      <Target className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{solution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h4 className="text-lg font-bold text-green-900 mb-4">Remember: You're Not Alone</h4>
              <p className="text-green-800 mb-4">
                The TrueFans JAM support team is always available to help you handle any situation. 
                Don't hesitate to reach out for guidance, advice, or emergency assistance.
              </p>
              <div className="flex items-center space-x-4">
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Support
                </button>
                <button className="bg-white text-green-600 border border-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <Layout 
      title="Host Guidelines" 
      description="Comprehensive guidelines for hosting successful TrueFans JAM house concerts"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Host Guidelines</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to know to host exceptional house concerts that create magical experiences 
            for artists and audiences alike.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-purple-600" />
              <span>Community Building</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2 text-green-600" />
              <span>Safety First</span>
            </div>
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-2 text-yellow-600" />
              <span>Excellence Standards</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Guidelines Sections</h3>
              <nav className="space-y-2">
                {sections.map((section) => {
                  const Icon = section.icon
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                        activeSection === section.id
                          ? 'bg-purple-100 text-purple-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      <span>{section.title}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
              {renderSectionContent()}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                    {resource.action}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Support Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
            <p className="text-blue-200 mb-6">
              Our host success team is available 24/7 to support you before, during, and after your shows.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Host Community</h3>
            <p className="text-gray-600 mb-6">
              Connect with other hosts, share experiences, and get tips from seasoned community members.
            </p>
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HostGuidelinesPage
