import React, { useState } from 'react'
import Layout from '../components/Layout'
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Headphones, Users } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you within 24 hours.')
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with your account, bookings, or technical issues",
      contact: "support@truefansjam.com",
      responseTime: "Within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+1 (555) 123-MUSIC",
      responseTime: "Mon-Fri, 9AM-6PM CT"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help during business hours",
      contact: "Available in app",
      responseTime: "Instant response"
    },
    {
      icon: Headphones,
      title: "Artist Support",
      description: "Specialized support for artist-related questions",
      contact: "artists@truefansjam.com",
      responseTime: "Within 12 hours"
    }
  ]

  const officeLocations = [
    {
      city: "Austin, TX",
      address: "123 Music Street, Austin, TX 78701",
      description: "Our headquarters and main support center"
    },
    {
      city: "Nashville, TN",
      address: "456 Harmony Ave, Nashville, TN 37203",
      description: "Artist relations and music industry partnerships"
    },
    {
      city: "Los Angeles, CA",
      address: "789 Sunset Blvd, Los Angeles, CA 90028",
      description: "West Coast operations and venue partnerships"
    }
  ]

  const categories = [
    "General Inquiry",
    "Artist Support",
    "Host Questions",
    "Technical Issue",
    "Billing & Payments",
    "Partnership Opportunity",
    "Press & Media",
    "Other"
  ]

  return (
    <Layout 
      title="Contact Us" 
      description="Get in touch with our team - we're here to help"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Methods */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How Can We Help?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{method.description}</p>
                <p className="text-purple-600 font-semibold mb-2">{method.contact}</p>
                <p className="text-gray-500 text-xs">{method.responseTime}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. For urgent issues, please use our phone or live chat support.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      placeholder="Brief subject line"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Please provide as much detail as possible..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-colors flex items-center justify-center"
                >
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 text-white h-full">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Support Hours</h4>
                      <p className="text-purple-200">Monday - Friday: 9:00 AM - 6:00 PM CT</p>
                      <p className="text-purple-200">Saturday: 10:00 AM - 4:00 PM CT</p>
                      <p className="text-purple-200">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Community Support</h4>
                      <p className="text-purple-200">
                        Join our Discord community for peer support and real-time help from other artists and hosts.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-yellow-400 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">Emergency Contact</h4>
                      <p className="text-purple-200">
                        For urgent issues during performances, call our emergency line: +1 (555) 911-MUSIC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Locations</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our offices across the country
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{location.city}</h3>
                </div>
                <p className="text-gray-700 mb-3">{location.address}</p>
                <p className="text-gray-600 text-sm">{location.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Link */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking for Quick Answers?</h3>
            <p className="text-gray-600 mb-6">
              Check out our Help Center for frequently asked questions and step-by-step guides.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors">
              Visit Help Center
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
