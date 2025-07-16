import React from 'react'
import Layout from '../components/Layout'
import { UserPlus, Search, Calendar, Music, Heart, DollarSign, Users, MapPin, CheckCircle } from 'lucide-react'

const HowItWorksPage = () => {
  const artistSteps = [
    {
      step: 1,
      icon: UserPlus,
      title: "Create Your Profile",
      description: "Sign up for free and build your artist profile with your music, photos, and story. Our system learns your style and genre to match you with the right fans.",
      details: [
        "Upload your best tracks and photos",
        "Describe your musical style and influences",
        "Set your availability and preferred venues",
        "Complete profile verification"
      ]
    },
    {
      step: 2,
      icon: Search,
      title: "Get Matched with Fans",
      description: "Our AI-powered algorithm connects you with fans in your area who genuinely love your genre and style. No more playing to empty rooms.",
      details: [
        "Fans discover you through curated recommendations",
        "Quality over quantity - genuine music lovers only",
        "Geographic matching for local performances",
        "Genre and style compatibility scoring"
      ]
    },
    {
      step: 3,
      icon: Calendar,
      title: "Book Intimate Performances",
      description: "Choose from our network of vetted venues and hosts. Book performances that fit your schedule and creative goals.",
      details: [
        "Browse available venues and time slots",
        "Connect directly with hosts",
        "Flexible scheduling around your life",
        "Confirmed bookings with clear expectations"
      ]
    },
    {
      step: 4,
      icon: Music,
      title: "Perform & Connect",
      description: "Play your original music to engaged audiences in intimate settings. Build real relationships with fans who appreciate your artistry.",
      details: [
        "Intimate venues with great acoustics",
        "Engaged audiences who came specifically for you",
        "Direct fan interaction and feedback",
        "Professional atmosphere with personal touch"
      ]
    },
    {
      step: 5,
      icon: DollarSign,
      title: "Earn Fair Revenue",
      description: "Keep 70% of all donations with transparent, real-time tracking. Build sustainable income through authentic fan connections.",
      details: [
        "70% revenue share - industry-leading rate",
        "Real-time earnings dashboard",
        "Multiple revenue streams (donations, merchandise)",
        "Weekly payouts with detailed reporting"
      ]
    }
  ]

  const hostSteps = [
    {
      step: 1,
      icon: UserPlus,
      title: "Apply to Host Network",
      description: "Join our vetted host network with a one-time $100 setup fee. We verify your venue and ensure it meets our quality standards.",
      details: [
        "Complete application and background check",
        "Venue inspection and approval",
        "Host training and guidelines",
        "Access to exclusive host community"
      ]
    },
    {
      step: 2,
      icon: MapPin,
      title: "List Your Venue",
      description: "Showcase your space with photos and details. Set your availability and capacity to attract the right artists and audiences.",
      details: [
        "Professional venue photography tips",
        "Detailed space descriptions and amenities",
        "Flexible scheduling and booking management",
        "Capacity and safety requirement compliance"
      ]
    },
    {
      step: 3,
      icon: Users,
      title: "Match with Artists",
      description: "Get matched with artists whose style fits your venue and audience. Build relationships with talented musicians in your area.",
      details: [
        "Curated artist recommendations",
        "Direct communication with performers",
        "Flexible booking arrangements",
        "Build your venue's reputation and following"
      ]
    },
    {
      step: 4,
      icon: Heart,
      title: "Host Amazing Shows",
      description: "Create memorable experiences for artists and fans. Provide the perfect intimate setting for authentic musical connections.",
      details: [
        "Pre-show setup and sound check support",
        "Create welcoming atmosphere for all attendees",
        "Facilitate artist-fan interactions",
        "Ensure safety and comfort for everyone"
      ]
    },
    {
      step: 5,
      icon: DollarSign,
      title: "Earn Multiple Revenue Streams",
      description: "Earn 10% from hosted shows plus 2.5% referral commissions (2 tiers). Build passive income through your network.",
      details: [
        "10% of donations from every show you host",
        "2.5% commission from artists you refer",
        "2.5% commission from second-tier referrals",
        "Monthly earnings reports and analytics"
      ]
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Authentic Connections",
      description: "Skip the algorithms and connect directly with fans who genuinely love your music"
    },
    {
      icon: DollarSign,
      title: "Fair Revenue Sharing",
      description: "Artists keep 70% of donations - one of the highest rates in the industry"
    },
    {
      icon: Users,
      title: "Quality Over Quantity",
      description: "Intimate venues with engaged audiences who came specifically to hear you"
    },
    {
      icon: MapPin,
      title: "Local Community Focus",
      description: "Build a strong local fanbase and become part of your city's music scene"
    }
  ]

  return (
    <Layout 
      title="How It Works" 
      description="Discover how TrueFans JAM connects artists with their true fans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Two Paths, One Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Whether you're an independent artist looking to build your fanbase or someone with a great space who loves supporting live music, TrueFans JAM has a path for you.
          </p>
        </div>

        {/* For Artists Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Independent Artists</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build a sustainable music career through authentic fan connections
            </p>
          </div>
          
          <div className="space-y-12">
            {artistSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <step.icon className="w-8 h-8 text-purple-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src={`https://images.pexels.com/photos/${
                      index === 0 ? '1105666' : 
                      index === 1 ? '1190298' : 
                      index === 2 ? '1763075' : 
                      index === 3 ? '1540406' : '3184418'
                    }/pexels-photo-${
                      index === 0 ? '1105666' : 
                      index === 1 ? '1190298' : 
                      index === 2 ? '1763075' : 
                      index === 3 ? '1540406' : '3184418'
                    }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt={step.title}
                    className="rounded-2xl shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12 border border-purple-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Artists Choose TrueFans JAM</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* For Hosts Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Venue Hosts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn your space into a thriving music venue and earn multiple revenue streams
            </p>
          </div>
          
          <div className="space-y-12">
            {hostSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {step.step}
                      </div>
                      <step.icon className="w-8 h-8 text-purple-600 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <img 
                    src={`https://images.pexels.com/photos/${
                      index === 0 ? '1105666' : 
                      index === 1 ? '1190298' : 
                      index === 2 ? '1763075' : 
                      index === 3 ? '1540406' : '3184418'
                    }/pexels-photo-${
                      index === 0 ? '1105666' : 
                      index === 1 ? '1190298' : 
                      index === 2 ? '1763075' : 
                      index === 3 ? '1540406' : '3184418'
                    }.jpeg?auto=compress&cs=tinysrgb&w=600`}
                    alt={step.title}
                    className="rounded-2xl shadow-lg w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Join thousands of artists and hosts who are transforming live music, one intimate performance at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Join as Artist (Free)
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Become a Host ($100)
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HowItWorksPage
