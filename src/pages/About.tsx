import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { Music, Heart, Users, Globe, Award, Target, ArrowRight } from 'lucide-react'

const About: React.FC = () => {
  const values = [
    {
      icon: <Music className="h-8 w-8" />,
      title: "Music First",
      description: "We believe music has the power to connect souls and create lasting memories. Every decision we make puts the music and artists at the center."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Authentic Connections",
      description: "We foster genuine relationships between artists and fans, creating intimate experiences that go beyond traditional concerts."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Driven",
      description: "Our platform thrives on the passion of music lovers who open their homes and hearts to create magical musical moments."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Reach",
      description: "From local living rooms to international tours, we're building a worldwide network of intimate music experiences."
    }
  ]

  const team = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Former touring musician turned tech entrepreneur. Alex founded TrueFans JAM after experiencing the magic of house concerts firsthand."
    },
    {
      name: "Sarah Martinez",
      role: "Head of Artist Relations",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "With 15 years in the music industry, Sarah ensures artists have the tools and support they need to thrive on our platform."
    },
    {
      name: "Marcus Johnson",
      role: "Community Manager",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Marcus builds and nurtures our host community, helping music lovers transform their spaces into intimate venues."
    },
    {
      name: "Emma Thompson",
      role: "Head of Technology",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Emma leads our tech team in creating seamless experiences that connect artists, hosts, and fans around the world."
    }
  ]

  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description: "TrueFans JAM was born from a simple idea: what if every living room could become a concert venue?"
    },
    {
      year: "2021",
      title: "First 100 Shows",
      description: "We celebrated our first 100 house concerts, proving that intimate music experiences were in high demand."
    },
    {
      year: "2022",
      title: "Going Global",
      description: "Expanded internationally, bringing house concerts to music lovers across 15 countries."
    },
    {
      year: "2023",
      title: "10,000 Artists",
      description: "Reached 10,000 artists on our platform, from emerging talents to established performers."
    },
    {
      year: "2024",
      title: "Community of 100K",
      description: "Our community grew to over 100,000 music lovers, hosts, and artists worldwide."
    }
  ]

  const stats = [
    { number: "2,500+", label: "Active Artists", description: "Musicians creating intimate experiences" },
    { number: "1,200+", label: "Host Venues", description: "Homes opened for music" },
    { number: "15,000+", label: "Shows Hosted", description: "Magical moments created" },
    { number: "50+", label: "Countries", description: "Global music community" }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Redefining
                  <span className="text-primary-600 block">Live Music</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We're on a mission to bring artists and fans closer together through intimate, 
                  authentic musical experiences that happen in the heart of communities worldwide.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="group">
                  Join Our Mission
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Intimate music performance"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              To democratize live music by creating a platform where every artist can find their audience, 
              every music lover can discover new talent, and every home can become a venue for unforgettable 
              musical experiences.
            </p>
            <div className="bg-primary-50 rounded-2xl p-8">
              <blockquote className="text-2xl font-medium text-gray-900 italic">
                "Music is meant to be shared, felt, and experienced together. We're building the future 
                where geography doesn't limit discovery, and intimacy doesn't sacrifice reach."
              </blockquote>
              <cite className="block mt-4 text-primary-600 font-medium">— Alex Chen, Founder & CEO</cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              See how we're transforming the music industry, one intimate show at a time.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-8">
                    <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the community we're building together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className="bg-primary-100 text-primary-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From a simple idea to a global movement transforming live music.
            </p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                <div className="flex-1">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {milestone.year}
                        </div>
                        <CardTitle>{milestone.title}</CardTitle>
                      </div>
                      <CardDescription>{milestone.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </div>
                <div className="w-4 h-4 bg-primary-600 rounded-full flex-shrink-0" />
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The passionate people behind TrueFans JAM who make the magic happen every day.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full">
                  <CardContent className="pt-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Be Part of Our Story
            </h2>
            <p className="text-xl text-primary-100">
              Join our mission to transform live music and create unforgettable experiences in communities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Join as Artist
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Become a Host
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
