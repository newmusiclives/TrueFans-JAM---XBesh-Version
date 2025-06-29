import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { 
  Newspaper, 
  Download, 
  Mail, 
  Calendar, 
  Users, 
  TrendingUp, 
  Award, 
  Globe,
  ArrowRight,
  ExternalLink,
  FileText,
  Image,
  Video,
  Mic,
  Camera,
  Quote
} from 'lucide-react'

const Press: React.FC = () => {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "TrueFans JAM Raises $15M Series A to Revolutionize Intimate Live Music",
      excerpt: "Funding will accelerate platform growth and expand into international markets, bringing house concerts to music lovers worldwide.",
      category: "Funding",
      readTime: "3 min read"
    },
    {
      date: "February 8, 2024", 
      title: "Platform Reaches 10,000 Artists Milestone, Celebrates Community Growth",
      excerpt: "TrueFans JAM celebrates reaching 10,000 active artists on the platform, with over 15,000 intimate shows hosted to date.",
      category: "Milestone",
      readTime: "2 min read"
    },
    {
      date: "January 22, 2024",
      title: "TrueFans JAM Launches AI-Powered Tour Routing for Optimal Artist Experiences",
      excerpt: "New intelligent algorithm helps artists create efficient, profitable tours based on fan demand and geographic optimization.",
      category: "Product",
      readTime: "4 min read"
    },
    {
      date: "December 10, 2023",
      title: "Company Expands to 15 International Markets, Bringing House Concerts Global",
      excerpt: "International expansion includes Canada, UK, Australia, and 12 European countries, with localized support and currency options.",
      category: "Expansion",
      readTime: "3 min read"
    }
  ]

  const mediaKit = [
    {
      title: "Company Logos",
      description: "High-resolution logos in various formats",
      icon: <Image className="h-6 w-6" />,
      files: ["PNG", "SVG", "EPS"],
      size: "2.3 MB"
    },
    {
      title: "Product Screenshots",
      description: "Platform interface and mobile app screens",
      icon: <Camera className="h-6 w-6" />,
      files: ["High-res", "Web-ready"],
      size: "15.7 MB"
    },
    {
      title: "Executive Photos",
      description: "Professional headshots of leadership team",
      icon: <Users className="h-6 w-6" />,
      files: ["JPG", "PNG"],
      size: "8.2 MB"
    },
    {
      title: "Company Fact Sheet",
      description: "Key statistics and company information",
      icon: <FileText className="h-6 w-6" />,
      files: ["PDF", "DOC"],
      size: "1.1 MB"
    },
    {
      title: "Demo Videos",
      description: "Platform walkthrough and feature demos",
      icon: <Video className="h-6 w-6" />,
      files: ["MP4", "MOV"],
      size: "125 MB"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand identity and usage guidelines",
      icon: <Newspaper className="h-6 w-6" />,
      files: ["PDF"],
      size: "4.8 MB"
    }
  ]

  const mediaContacts = [
    {
      name: "Sarah Martinez",
      role: "Head of Communications",
      email: "press@truefansjam.com",
      phone: "+1 (555) 123-4567",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "David Chen",
      role: "PR Manager",
      email: "media@truefansjam.com", 
      phone: "+1 (555) 123-4568",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ]

  const mediaFeatures = [
    {
      outlet: "TechCrunch",
      title: "How TrueFans JAM is Bringing Intimacy Back to Live Music",
      date: "March 2024",
      type: "Feature Article",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop"
    },
    {
      outlet: "Rolling Stone",
      title: "The House Concert Revolution: Artists Find New Revenue Streams",
      date: "February 2024",
      type: "Industry Analysis",
      logo: "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop"
    },
    {
      outlet: "Billboard",
      title: "TrueFans JAM CEO on the Future of Intimate Live Music",
      date: "January 2024",
      type: "Executive Interview",
      logo: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop"
    },
    {
      outlet: "Music Business Worldwide",
      title: "Platform Analytics: How Data Drives Better Artist-Fan Connections",
      date: "December 2023",
      type: "Data Story",
      logo: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=100&h=50&fit=crop"
    }
  ]

  const companyStats = [
    { number: "2,500+", label: "Active Artists", description: "Growing monthly" },
    { number: "1,200+", label: "Host Venues", description: "Across 50 countries" },
    { number: "15,000+", label: "Shows Hosted", description: "Since launch" },
    { number: "$2.8M+", label: "Artist Earnings", description: "Platform lifetime" }
  ]

  const awards = [
    {
      title: "Best Music Tech Startup 2024",
      organization: "Music Industry Awards",
      year: "2024"
    },
    {
      title: "Innovation in Live Music",
      organization: "SXSW Pitch Competition",
      year: "2023"
    },
    {
      title: "Top 50 Startups to Watch",
      organization: "TechCrunch",
      year: "2023"
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
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                Press &
                <span className="text-primary-600 block">Media</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Get the latest news, press releases, and media resources about TrueFans JAM's 
                mission to transform the live music industry through intimate artist-fan connections.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                <Mail className="h-5 w-5 mr-2" />
                Contact Press Team
              </Button>
              <Button size="lg" variant="outline">
                <Download className="h-5 w-5 mr-2" />
                Download Media Kit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
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

      {/* Press Releases */}
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
              Latest Press Releases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with our latest company news, product announcements, and industry insights.
            </p>
          </motion.div>

          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-3">
                          <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                            {release.category}
                          </span>
                          <span className="text-sm text-gray-600">{release.date}</span>
                          <span className="text-sm text-gray-600">{release.readTime}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{release.title}</h3>
                        <p className="text-gray-600 mb-4">{release.excerpt}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 ml-4 flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Press Releases
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Media Kit */}
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
              Media Kit & Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download high-quality assets, company information, and brand guidelines 
              for your stories and coverage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaKit.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full cursor-pointer">
                  <CardHeader>
                    <div className="bg-primary-100 text-primary-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {item.files.map((file, fileIndex) => (
                          <span
                            key={fileIndex}
                            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                          >
                            {file}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{item.size}</span>
                        <Button size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
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
              Recent Media Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how industry publications are covering TrueFans JAM and the intimate music revolution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={feature.logo}
                        alt={feature.outlet}
                        className="w-16 h-8 object-cover rounded"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold text-gray-900">{feature.outlet}</span>
                          <span className="text-sm text-gray-600">•</span>
                          <span className="text-sm text-gray-600">{feature.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {feature.type}
                        </span>
                      </div>
                      <ExternalLink className="h-5 w-5 text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
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
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry recognition for our innovation in transforming live music experiences.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center">
                  <CardContent className="pt-6">
                    <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{award.title}</h3>
                    <p className="text-gray-600 mb-2">{award.organization}</p>
                    <p className="text-sm text-primary-600 font-medium">{award.year}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contacts */}
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
              Media Contacts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our press team for interviews, quotes, and additional information.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaContacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={contact.image}
                        alt={contact.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                        <p className="text-primary-600 font-medium">{contact.role}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-primary-600">
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mic className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{contact.phone}</span>
                      </div>
                    </div>
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
              Ready to Cover Our Story?
            </h2>
            <p className="text-xl text-primary-100">
              We're always happy to share insights about the future of live music and 
              our mission to connect artists with passionate fans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Mail className="h-5 w-5 mr-2" />
                Contact Press Team
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <Calendar className="h-5 w-5 mr-2" />
                Schedule Interview
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Press
