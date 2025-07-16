import React, { useState } from 'react'
import Layout from '../components/Layout'
import { 
  Home, 
  Users, 
  Volume2, 
  Wifi, 
  Car, 
  Shield, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Star, 
  Zap, 
  Coffee, 
  Camera, 
  Music, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Lightbulb,
  FileText,
  Download,
  Play,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Target,
  Award,
  Heart,
  Thermometer,
  Eye,
  Lock,
  Sofa,
  Utensils,
  Accessibility,
  Building,
  TreePine,
  Waves,
  Mountain
} from 'lucide-react'

const VenueRequirementsPage = () => {
  const [activeCategory, setActiveCategory] = useState('space')
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [checkedItems, setCheckedItems] = useState({})

  const categories = [
    { id: 'space', title: 'Space Requirements', icon: Home },
    { id: 'technical', title: 'Technical Setup', icon: Zap },
    { id: 'safety', title: 'Safety & Access', icon: Shield },
    { id: 'comfort', title: 'Guest Comfort', icon: Heart },
    { id: 'logistics', title: 'Logistics', icon: MapPin }
  ]

  const spaceRequirements = [
    {
      category: 'Performance Area',
      requirements: [
        {
          item: 'Minimum 8x8 feet clear performance space',
          essential: true,
          description: 'Artist needs room to move and set up equipment comfortably'
        },
        {
          item: 'Acoustically suitable room (hardwood, tile, or minimal carpet)',
          essential: true,
          description: 'Sound quality is crucial for intimate performances'
        },
        {
          item: 'Ceiling height minimum 8 feet',
          essential: true,
          description: 'Prevents sound dampening and allows proper acoustics'
        },
        {
          item: 'Minimal background noise (away from kitchen, street)',
          essential: true,
          description: 'Ensures audience can hear performance clearly'
        },
        {
          item: 'Neutral backdrop (avoid busy wallpaper or distracting art)',
          essential: false,
          description: 'Helps audience focus on the performer'
        }
      ]
    },
    {
      category: 'Seating Capacity',
      requirements: [
        {
          item: 'Comfortable seating for 15-40 guests',
          essential: true,
          description: 'Optimal range for intimate house concert atmosphere'
        },
        {
          item: 'Chairs arranged in semi-circle or rows facing performer',
          essential: true,
          description: 'Creates connection between artist and audience'
        },
        {
          item: 'All seats have clear sightlines to performance area',
          essential: true,
          description: 'Every guest should see the performer without obstruction'
        },
        {
          item: 'Mix of seating types (chairs, couches, floor cushions)',
          essential: false,
          description: 'Adds comfort variety and intimate atmosphere'
        }
      ]
    },
    {
      category: 'Room Layout',
      requirements: [
        {
          item: 'Open floor plan or large living room',
          essential: true,
          description: 'Allows for proper audience arrangement and acoustics'
        },
        {
          item: 'Easy flow between entrance and seating area',
          essential: true,
          description: 'Guests should move easily without disrupting others'
        },
        {
          item: 'Separate space for refreshments away from performance',
          essential: false,
          description: 'Prevents noise interference during show'
        },
        {
          item: 'Private area for artist preparation',
          essential: false,
          description: 'Gives performer space to prepare and store belongings'
        }
      ]
    }
  ]

  const technicalRequirements = [
    {
      category: 'Power & Electrical',
      requirements: [
        {
          item: 'Multiple electrical outlets near performance area',
          essential: true,
          description: 'Artists need power for instruments, amps, and equipment'
        },
        {
          item: 'Reliable electrical system (no frequent breaker trips)',
          essential: true,
          description: 'Prevents interruptions during performance'
        },
        {
          item: 'Extension cords and power strips available',
          essential: true,
          description: 'Flexibility for equipment placement'
        },
        {
          item: 'Backup power plan for essential equipment',
          essential: false,
          description: 'Preparation for unexpected power issues'
        }
      ]
    },
    {
      category: 'Internet & Communication',
      requirements: [
        {
          item: 'Strong, reliable WiFi connection',
          essential: true,
          description: 'Needed for payment processing and artist needs'
        },
        {
          item: 'WiFi password readily available for artist',
          essential: true,
          description: 'Artists may need internet for backing tracks or promotion'
        },
        {
          item: 'Good cell phone reception throughout venue',
          essential: false,
          description: 'Allows guests to share experience on social media'
        }
      ]
    },
    {
      category: 'Sound System',
      requirements: [
        {
          item: 'Basic sound system or willingness to rent one',
          essential: true,
          description: 'Amplification needed for most performances'
        },
        {
          item: 'Microphone and stand available',
          essential: true,
          description: 'Essential for vocals and audience interaction'
        },
        {
          item: 'Ability to connect instruments to sound system',
          essential: true,
          description: 'Most artists bring electric instruments'
        },
        {
          item: 'Sound check capability 30 minutes before show',
          essential: true,
          description: 'Ensures optimal sound quality for performance'
        }
      ]
    }
  ]

  const safetyRequirements = [
    {
      category: 'Emergency Access',
      requirements: [
        {
          item: 'Clear, unobstructed emergency exits',
          essential: true,
          description: 'Legal requirement and safety necessity'
        },
        {
          item: 'Emergency contact numbers posted',
          essential: true,
          description: 'Quick access to help if needed'
        },
        {
          item: 'First aid kit easily accessible',
          essential: true,
          description: 'Basic medical supplies for minor incidents'
        },
        {
          item: 'Fire extinguisher within reach',
          essential: true,
          description: 'Safety equipment for fire emergencies'
        }
      ]
    },
    {
      category: 'Guest Access',
      requirements: [
        {
          item: 'Safe, well-lit entrance and walkways',
          essential: true,
          description: 'Prevents trips and falls, especially in evening'
        },
        {
          item: 'Clear parking instructions and adequate spaces',
          essential: true,
          description: 'Guests need safe, legal parking options'
        },
        {
          item: 'Accessible entrance for mobility-impaired guests',
          essential: false,
          description: 'Inclusive access for all community members'
        },
        {
          item: 'Bathroom facilities easily accessible to guests',
          essential: true,
          description: 'Basic comfort requirement for events'
        }
      ]
    },
    {
      category: 'Security',
      requirements: [
        {
          item: 'Secure area for artist equipment storage',
          essential: true,
          description: 'Protects valuable instruments and gear'
        },
        {
          item: 'Ability to secure valuable home items during event',
          essential: true,
          description: 'Protects host\'s personal belongings'
        },
        {
          item: 'Well-lit exterior for guest safety',
          essential: true,
          description: 'Deters crime and prevents accidents'
        }
      ]
    }
  ]

  const comfortRequirements = [
    {
      category: 'Climate Control',
      requirements: [
        {
          item: 'Heating/cooling system to maintain 68-72°F',
          essential: true,
          description: 'Comfortable temperature for extended sitting'
        },
        {
          item: 'Good ventilation for room full of people',
          essential: true,
          description: 'Prevents stuffiness during performance'
        },
        {
          item: 'Ability to adjust lighting during performance',
          essential: true,
          description: 'Creates proper ambiance for show'
        }
      ]
    },
    {
      category: 'Guest Amenities',
      requirements: [
        {
          item: 'Clean, accessible restroom facilities',
          essential: true,
          description: 'Basic necessity for guest comfort'
        },
        {
          item: 'Space for coats and personal items',
          essential: true,
          description: 'Guests need secure storage for belongings'
        },
        {
          item: 'Refreshment area separate from performance space',
          essential: false,
          description: 'Allows socializing without disrupting show'
        },
        {
          item: 'Comfortable seating for entire duration of show',
          essential: true,
          description: 'Prevents guest discomfort during performance'
        }
      ]
    }
  ]

  const logisticsRequirements = [
    {
      category: 'Location & Access',
      requirements: [
        {
          item: 'Residential area suitable for evening events',
          essential: true,
          description: 'Neighborhood should allow gatherings without complaints'
        },
        {
          item: 'Easy loading access for artist equipment',
          essential: true,
          description: 'Artists need to transport instruments and gear'
        },
        {
          item: 'Clear address and directions for guests',
          essential: true,
          description: 'Guests must be able to find venue easily'
        },
        {
          item: 'Reasonable distance from main roads/public transit',
          essential: false,
          description: 'Accessibility for guests without cars'
        }
      ]
    },
    {
      category: 'Timing & Scheduling',
      requirements: [
        {
          item: 'Available for 4-hour window (setup, show, cleanup)',
          essential: true,
          description: 'Full event requires preparation and breakdown time'
        },
        {
          item: 'Flexible scheduling for artist arrival/departure',
          essential: true,
          description: 'Artists may need extra time for complex setups'
        },
        {
          item: 'Consideration for neighbor noise concerns',
          essential: true,
          description: 'Maintain good community relationships'
        }
      ]
    }
  ]

  const venueTypes = [
    {
      type: 'Living Room',
      icon: Sofa,
      suitability: 'Excellent',
      pros: ['Natural acoustics', 'Intimate setting', 'Comfortable seating'],
      cons: ['May need furniture rearrangement', 'Limited capacity'],
      tips: 'Remove coffee table, arrange seating in semi-circle'
    },
    {
      type: 'Great Room',
      icon: Home,
      suitability: 'Excellent',
      pros: ['Large capacity', 'Open layout', 'Good acoustics'],
      cons: ['May feel less intimate', 'Harder to heat/cool'],
      tips: 'Use area rugs to define performance space'
    },
    {
      type: 'Finished Basement',
      icon: Building,
      suitability: 'Good',
      pros: ['Sound isolation', 'Flexible layout', 'Neighbor-friendly'],
      cons: ['Potential humidity', 'Lower ceilings', 'Access challenges'],
      tips: 'Ensure proper ventilation and lighting'
    },
    {
      type: 'Sunroom/Conservatory',
      icon: TreePine,
      suitability: 'Fair',
      pros: ['Beautiful ambiance', 'Natural light', 'Unique setting'],
      cons: ['Temperature control', 'Sound reflection', 'Weather dependent'],
      tips: 'Best for acoustic performances, check temperature control'
    },
    {
      type: 'Outdoor Patio',
      icon: Mountain,
      suitability: 'Seasonal',
      pros: ['Natural setting', 'Large capacity', 'Fresh air'],
      cons: ['Weather dependent', 'Power challenges', 'Sound dispersion'],
      tips: 'Have indoor backup plan, consider acoustic challenges'
    }
  ]

  const faqs = [
    {
      question: 'What if my space doesn\'t meet all requirements?',
      answer: 'Contact our venue assessment team! Many requirements can be addressed with simple modifications or equipment rental. We\'ll work with you to find solutions that make your space concert-ready.'
    },
    {
      question: 'Do I need to own a sound system?',
      answer: 'Not necessarily. We can help arrange sound system rental, or some artists bring their own equipment. The key is ensuring adequate amplification for your space size and guest count.'
    },
    {
      question: 'How do I know if my neighbors will complain?',
      answer: 'Inform neighbors in advance, keep reasonable hours (end by 10 PM weeknights, 11 PM weekends), and maintain moderate volume levels. Most neighbors appreciate the heads-up and cultural enrichment.'
    },
    {
      question: 'What about insurance and liability?',
      answer: 'TrueFans JAM provides event insurance coverage for registered hosts. We recommend checking with your homeowner\'s insurance about hosting events and consider additional coverage if needed.'
    },
    {
      question: 'Can I host in an apartment or condo?',
      answer: 'Possibly! Check your lease agreement and building rules first. Apartments can work well for acoustic performances with smaller audiences. Soundproofing and neighbor consideration are extra important.'
    },
    {
      question: 'What if I need to make modifications to my space?',
      answer: 'Simple modifications like furniture rearrangement are normal. For larger changes, consider the cost versus hosting frequency. We can suggest temporary solutions that don\'t require permanent alterations.'
    }
  ]

  const assessmentSteps = [
    {
      step: 1,
      title: 'Self-Assessment',
      description: 'Use our checklist to evaluate your space against requirements',
      action: 'Complete Checklist'
    },
    {
      step: 2,
      title: 'Photo Submission',
      description: 'Submit photos of your space from multiple angles',
      action: 'Upload Photos'
    },
    {
      step: 3,
      title: 'Virtual Consultation',
      description: 'Schedule a video call with our venue assessment team',
      action: 'Book Consultation'
    },
    {
      step: 4,
      title: 'Approval & Setup',
      description: 'Receive approval and guidance for optimal setup',
      action: 'Get Approved'
    }
  ]

  const handleCheckboxChange = (category, index) => {
    const key = `${category}-${index}`
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const renderRequirements = (requirements) => {
    return requirements.map((category, categoryIndex) => (
      <div key={categoryIndex} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 mb-6">
        <h4 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h4>
        <div className="space-y-4">
          {category.requirements.map((req, reqIndex) => {
            const key = `${activeCategory}-${categoryIndex}-${reqIndex}`
            const isChecked = checkedItems[key] || false
            
            return (
              <div key={reqIndex} className="flex items-start space-x-3">
                <button
                  onClick={() => handleCheckboxChange(`${activeCategory}-${categoryIndex}`, reqIndex)}
                  className={`mt-1 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                    isChecked 
                      ? 'bg-green-600 border-green-600' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {isChecked && <CheckCircle className="w-3 h-3 text-white" />}
                </button>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`font-medium ${isChecked ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                      {req.item}
                    </span>
                    {req.essential && (
                      <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full font-medium">
                        Essential
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{req.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    ))
  }

  const renderCategoryContent = () => {
    switch (activeCategory) {
      case 'space':
        return (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Space Requirements</h3>
            <p className="text-gray-700 mb-8">
              Your venue space is the foundation of a great house concert experience. These requirements ensure 
              optimal acoustics, comfort, and safety for both artists and audiences.
            </p>
            {renderRequirements(spaceRequirements)}
          </div>
        )
      
      case 'technical':
        return (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Setup</h3>
            <p className="text-gray-700 mb-8">
              Proper technical infrastructure ensures smooth performances and professional presentation. 
              Most requirements can be met with basic equipment or simple rentals.
            </p>
            {renderRequirements(technicalRequirements)}
          </div>
        )
      
      case 'safety':
        return (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Safety & Access</h3>
            <p className="text-gray-700 mb-8">
              Safety is our top priority. These requirements protect guests, artists, and your property 
              while ensuring everyone can access and enjoy the event comfortably.
            </p>
            {renderRequirements(safetyRequirements)}
          </div>
        )
      
      case 'comfort':
        return (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Guest Comfort</h3>
            <p className="text-gray-700 mb-8">
              Comfortable guests are engaged guests. These requirements ensure everyone can fully enjoy 
              the musical experience without distractions or discomfort.
            </p>
            {renderRequirements(comfortRequirements)}
          </div>
        )
      
      case 'logistics':
        return (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Logistics</h3>
            <p className="text-gray-700 mb-8">
              Smooth logistics make the difference between a good show and a great one. These requirements 
              ensure seamless execution from artist arrival to guest departure.
            </p>
            {renderRequirements(logisticsRequirements)}
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <Layout 
      title="Venue Requirements" 
      description="Complete guide to venue requirements for hosting TrueFans JAM house concerts"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Home className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Venue Requirements</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Transform your space into the perfect intimate concert venue. Our comprehensive requirements 
            ensure exceptional experiences for artists and audiences alike.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
              <span>Safety First</span>
            </div>
            <div className="flex items-center">
              <Volume2 className="w-4 h-4 mr-2 text-blue-600" />
              <span>Optimal Acoustics</span>
            </div>
            <div className="flex items-center">
              <Heart className="w-4 h-4 mr-2 text-red-600" />
              <span>Guest Comfort</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 sticky top-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Requirements</h3>
              <nav className="space-y-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors ${
                        activeCategory === category.id
                          ? 'bg-blue-100 text-blue-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      <span>{category.title}</span>
                    </button>
                  )
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
              {renderCategoryContent()}
            </div>
          </div>
        </div>

        {/* Venue Types Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Venue Types & Suitability</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venueTypes.map((venue, index) => {
              const Icon = venue.icon
              const suitabilityColor = {
                'Excellent': 'text-green-600 bg-green-100',
                'Good': 'text-blue-600 bg-blue-100',
                'Fair': 'text-yellow-600 bg-yellow-100',
                'Seasonal': 'text-purple-600 bg-purple-100'
              }[venue.suitability]
              
              return (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{venue.type}</h3>
                      <span className={`text-sm px-2 py-1 rounded-full font-medium ${suitabilityColor}`}>
                        {venue.suitability}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-2">Advantages</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {venue.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-red-700 mb-2">Considerations</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {venue.cons.map((con, conIndex) => (
                          <li key={conIndex} className="flex items-center">
                            <AlertTriangle className="w-3 h-3 text-red-500 mr-2" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-1">Pro Tip</h4>
                      <p className="text-sm text-blue-800">{venue.tips}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Assessment Process */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Venue Assessment Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {assessmentSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{step.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                  {step.action}
                </button>
              </div>
            ))}
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

        {/* Support Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-900 to-green-800 rounded-2xl p-8 text-white">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Need Assessment Help?</h3>
            <p className="text-green-200 mb-6">
              Our venue specialists are here to help evaluate your space and suggest improvements 
              to meet requirements.
            </p>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Schedule Assessment
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Download Checklist</h3>
            <p className="text-gray-600 mb-6">
              Get our comprehensive venue requirements checklist to evaluate your space offline 
              and prepare for assessment.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default VenueRequirementsPage
