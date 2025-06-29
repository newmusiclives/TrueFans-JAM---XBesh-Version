import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { 
  Briefcase, 
  Users, 
  Heart, 
  Globe, 
  Coffee, 
  Laptop, 
  Music, 
  ArrowRight,
  MapPin,
  Clock,
  DollarSign,
  Star,
  Zap,
  Target,
  Award,
  Headphones,
  Code,
  Palette,
  BarChart,
  Shield,
  MessageCircle
} from 'lucide-react'

const Careers: React.FC = () => {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "5+ years",
      icon: <Code className="h-6 w-6" />,
      description: "Build scalable systems that connect artists with fans worldwide",
      skills: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      title: "Product Designer",
      department: "Design",
      location: "Remote / Nashville, TN",
      type: "Full-time", 
      experience: "3+ years",
      icon: <Palette className="h-6 w-6" />,
      description: "Design beautiful, intuitive experiences for artists and hosts",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"]
    },
    {
      title: "Artist Relations Manager",
      department: "Community",
      location: "Nashville, TN",
      type: "Full-time",
      experience: "4+ years",
      icon: <Music className="h-6 w-6" />,
      description: "Support and grow our community of talented artists",
      skills: ["Music Industry", "Relationship Building", "Event Planning", "Communication"]
    },
    {
      title: "Data Analyst",
      department: "Analytics",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      icon: <BarChart className="h-6 w-6" />,
      description: "Turn data into insights that drive platform growth",
      skills: ["SQL", "Python", "Tableau", "Statistics"]
    },
    {
      title: "Customer Success Specialist",
      department: "Support",
      location: "Remote",
      type: "Full-time",
      experience: "1+ years",
      icon: <Headphones className="h-6 w-6" />,
      description: "Help artists and hosts succeed on our platform",
      skills: ["Customer Service", "Problem Solving", "Communication", "Empathy"]
    },
    {
      title: "Security Engineer",
      department: "Engineering",
      location: "Remote / Austin, TX",
      type: "Full-time",
      experience: "4+ years",
      icon: <Shield className="h-6 w-6" />,
      description: "Ensure the safety and security of our platform and users",
      skills: ["Cybersecurity", "Penetration Testing", "Compliance", "Risk Assessment"]
    }
  ]

  const benefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance plus wellness stipend",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <Laptop className="h-8 w-8" />,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and home office setup budget",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "Music Perks",
      description: "Concert tickets, music festival passes, and artist meet-and-greets",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Growth & Learning",
      description: "Professional development budget and conference attendance support",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Time Off",
      description: "Unlimited PTO, sabbatical options, and mental health days",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: "Equity & Compensation",
      description: "Competitive salary, equity package, and performance bonuses",
      color: "bg-orange-100 text-orange-600"
    }
  ]

  const values = [
    {
      title: "Music First",
      description: "We believe music has the power to connect people and change lives. Every decision we make puts music and artists at the center.",
      icon: <Music className="h-6 w-6" />
    },
    {
      title: "Community Driven",
      description: "We're building more than a platform—we're fostering a global community of music lovers, artists, and hosts.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Innovation & Excellence",
      description: "We push boundaries and set new standards for what's possible in the music industry.",
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: "Authenticity",
      description: "We value genuine connections, honest communication, and staying true to our mission.",
      icon: <Heart className="h-6 w-6" />
    }
  ]

  const teamStats = [
    { number: "50+", label: "Team Members", description: "Passionate music lovers" },
    { number: "15", label: "Countries", description: "Global remote team" },
    { number: "4.9/5", label: "Employee Rating", description: "Glassdoor satisfaction" },
    { number: "95%", label: "Retention Rate", description: "People love working here" }
  ]

  const perks = [
    "Unlimited PTO and flexible working hours",
    "Home office setup budget ($2,000)",
    "Annual music festival passes",
    "Quarterly team retreats in music cities",
    "Professional development budget ($3,000/year)",
    "Mental health and wellness support",
    "Stock options and equity participation",
    "Parental leave (16 weeks paid)",
    "Annual company-wide music conference",
    "Access to exclusive artist events"
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
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                Join Our
                <span className="text-primary-600 block">Mission</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Help us transform the music industry by connecting artists with passionate fans 
                and creating unforgettable intimate concert experiences worldwide.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                View Open Positions
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Learn About Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our team of passionate individuals who are revolutionizing the music industry.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-xl flex items-center justify-center">
                          {position.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl">{position.title}</CardTitle>
                          <p className="text-primary-600 font-medium">{position.department}</p>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="mt-4">{position.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {position.experience}
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-2">Key Skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {position.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <Button className="w-full">
                        Apply Now
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values */}
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
              These core principles guide everything we do and shape the culture we're building together.
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
                    <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in taking care of our team so they can do their best work and live their best lives.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full">
                  <CardHeader>
                    <div className={`${benefit.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4`}>
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Perks List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Additional Perks</CardTitle>
                <CardDescription className="text-center">
                  Even more reasons to love working at TrueFans JAM
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {perks.map((perk, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Star className="h-5 w-5 text-primary-600 flex-shrink-0" />
                      <span className="text-gray-700">{perk}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900">
                Life at TrueFans JAM
              </h2>
              <p className="text-lg text-gray-600">
                We're a diverse, passionate team united by our love of music and commitment to 
                transforming how artists connect with fans. Our culture is built on collaboration, 
                creativity, and the belief that work should be fulfilling and fun.
              </p>
              <p className="text-lg text-gray-600">
                Whether you're working from our Austin headquarters, Nashville office, or anywhere 
                in the world, you'll be part of a team that values your unique perspective and 
                supports your growth.
              </p>
              <Button size="lg" className="group">
                Meet the Team
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </motion.div>
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
              Ready to Make Music History?
            </h2>
            <p className="text-xl text-primary-100">
              Join our mission to transform the music industry and create meaningful connections 
              between artists and fans worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <MessageCircle className="h-5 w-5 mr-2" />
                Contact HR
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers
