import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'
import { Music, Users, Heart, Award, Globe, Zap } from 'lucide-react'

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Former indie musician turned tech entrepreneur. Built TrueFans JAM after experiencing the disconnect between artists and audiences in traditional venues."
    },
    {
      name: "Maria Rodriguez",
      role: "Head of Artist Relations",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "15+ years in music industry management. Passionate about creating sustainable careers for independent artists through authentic fan connections."
    },
    {
      name: "David Kim",
      role: "CTO",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Former Spotify engineer who believes technology should amplify human connection, not replace it. Architect of our fan-matching algorithm."
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Authentic Connections",
      description: "We believe music is about human connection, not metrics. Every feature we build prioritizes genuine relationships between artists and fans."
    },
    {
      icon: Users,
      title: "Artist-First",
      description: "Independent artists are the heart of music culture. We're committed to fair revenue sharing and tools that help artists thrive."
    },
    {
      icon: Globe,
      title: "Community Over Competition",
      description: "We foster collaboration between artists, hosts, and fans. Success is shared, not hoarded."
    },
    {
      icon: Zap,
      title: "Innovation with Purpose",
      description: "Technology should serve art, not the other way around. We innovate to enhance the musical experience, not complicate it."
    }
  ]

  const stats = [
    { number: "10,000+", label: "Active Artists" },
    { number: "500+", label: "Vetted Hosts" },
    { number: "50,000+", label: "Shows Hosted" },
    { number: "$2.5M+", label: "Paid to Artists" }
  ]

  return (
    <Layout 
      title="About TrueFans JAM" 
      description="We're building the future of live music - one intimate performance at a time"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To create a world where independent artists can build sustainable careers through authentic connections with fans who truly value their music. We're not just another platform - we're a movement to restore the soul of live music.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem We're Solving</h3>
                <p className="text-gray-600 mb-4">
                  Independent artists face an impossible choice: play to empty rooms or compromise their artistic vision for algorithmic approval. Traditional venues prioritize drink sales over music quality, while streaming platforms pay fractions of pennies.
                </p>
                <p className="text-gray-600">
                  Meanwhile, music lovers struggle to discover authentic artists in their area, often settling for cover bands or mainstream acts that don't reflect their taste.
                </p>
              </div>
              <div className="text-center">
                <img 
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Intimate acoustic performance"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every feature we build
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Musicians, technologists, and music lovers united by a shared vision
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-purple-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  TrueFans JAM was born from a simple frustration: why was it so hard for great musicians to find their audience? Our founder, Alex Chen, spent years playing original music in coffee shops and bars, watching talented artists perform to distracted crowds more interested in their phones than the music.
                </p>
                <p>
                  The turning point came during a house concert in 2022. Twenty people gathered in a living room to hear Alex play. The connection was electric - fans sang along, asked about the stories behind songs, and several bought merchandise. That night, Alex earned more than from three months of traditional gigs.
                </p>
                <p>
                  "This is what live music should be," Alex realized. "Intimate, intentional, and authentic."
                </p>
                <p>
                  TrueFans JAM launched in 2023 with a simple mission: scale the house concert experience. We've since facilitated thousands of intimate performances, helping artists build careers while giving fans unforgettable musical experiences.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're an artist, host, or music lover, you have a role to play in transforming live music
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/artist-signup"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-colors inline-block"
            >
              Start as Artist
            </Link>
            <Link 
              to="/become-host"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-purple-600 hover:text-white transition-colors inline-block"
            >
              Become a Host
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
