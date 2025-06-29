import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'
import { Button } from '../components/ui/Button'
import { 
  Check, 
  X, 
  Star, 
  Music, 
  Home as HomeIcon, 
  Users, 
  ArrowRight,
  Crown,
  Zap,
  Shield,
  Headphones,
  Calendar,
  DollarSign,
  Heart,
  Award,
  Sparkles
} from 'lucide-react'

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const artistPlans = [
    {
      name: "Starter",
      description: "Perfect for emerging artists starting their journey",
      monthlyPrice: 0,
      yearlyPrice: 0,
      icon: <Music className="h-8 w-8" />,
      color: "border-gray-200",
      buttonVariant: "outline" as const,
      popular: false,
      features: [
        "Create artist profile",
        "Upload 3 music samples",
        "Basic tour planning",
        "Connect with up to 10 hosts",
        "Standard support",
        "Basic analytics"
      ],
      limitations: [
        "Limited to 2 tours per year",
        "No priority matching",
        "Standard revenue split (80/20)"
      ]
    },
    {
      name: "Professional",
      description: "For serious artists building their fanbase",
      monthlyPrice: 30,
      yearlyPrice: 300,
      icon: <Star className="h-8 w-8" />,
      color: "border-primary-500 ring-2 ring-primary-500",
      buttonVariant: "default" as const,
      popular: true,
      features: [
        "Everything in Starter",
        "Unlimited music samples",
        "Advanced tour planning",
        "Priority host matching",
        "Unlimited tours",
        "Enhanced analytics",
        "Priority support",
        "Custom artist page",
        "Social media integration",
        "Fan email list building"
      ],
      limitations: [
        "Improved revenue split (85/15)"
      ]
    },
    {
      name: "VIP",
      description: "For established artists maximizing their reach",
      monthlyPrice: 100,
      yearlyPrice: 1000,
      icon: <Crown className="h-8 w-8" />,
      color: "border-yellow-400",
      buttonVariant: "outline" as const,
      popular: false,
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom tour routing",
        "VIP host network access",
        "Advanced fan insights",
        "Merchandise integration",
        "Live streaming capabilities",
        "Multi-city tour coordination",
        "Press kit integration",
        "Industry connections"
      ],
      limitations: [
        "Premium revenue split (90/10)"
      ]
    }
  ]

  const hostPlans = [
    {
      name: "Community",
      description: "For music lovers opening their homes occasionally",
      monthlyPrice: 0,
      yearlyPrice: 0,
      icon: <HomeIcon className="h-8 w-8" />,
      color: "border-gray-200",
      buttonVariant: "outline" as const,
      popular: false,
      features: [
        "Create host profile",
        "Host up to 6 shows per year",
        "Basic venue tools",
        "Standard artist matching",
        "Community support",
        "Basic event management"
      ],
      limitations: [
        "Limited customization options",
        "Standard booking priority"
      ]
    },
    {
      name: "Active",
      description: "For dedicated hosts creating regular experiences",
      monthlyPrice: 30,
      yearlyPrice: 300,
      icon: <Heart className="h-8 w-8" />,
      color: "border-green-500 ring-2 ring-green-500",
      buttonVariant: "default" as const,
      popular: true,
      features: [
        "Everything in Community",
        "Unlimited shows",
        "Priority artist matching",
        "Advanced venue customization",
        "Guest management tools",
        "Event promotion support",
        "Revenue sharing opportunities",
        "Enhanced safety features",
        "Priority support"
      ],
      limitations: []
    },
    {
      name: "Venue Partner",
      description: "For professional venues and event spaces",
      monthlyPrice: 50,
      yearlyPrice: 500,
      icon: <Award className="h-8 w-8" />,
      color: "border-purple-400",
      buttonVariant: "outline" as const,
      popular: false,
      features: [
        "Everything in Active",
        "Multi-room venue support",
        "Professional booking tools",
        "Advanced analytics",
        "Custom branding options",
        "Dedicated account support",
        "Industry partnerships",
        "Professional networking",
        "Marketing co-op opportunities"
      ],
      limitations: []
    }
  ]

  const musicLoverFeatures = [
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Discover Shows",
      description: "Browse intimate concerts in your area"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Easy Booking",
      description: "Request invitations with one click"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Connect with Artists",
      description: "Meet musicians in intimate settings"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Support Musicians",
      description: "Directly support your favorite artists"
    }
  ]

  const enterpriseFeatures = [
    "Custom integration solutions",
    "White-label platform options",
    "Dedicated infrastructure",
    "Advanced analytics and reporting",
    "Priority technical support",
    "Custom contract terms",
    "Multi-market deployment",
    "Professional services team"
  ]

  const faqs = [
    {
      question: "How does the revenue split work for artists?",
      answer: "Artists keep the majority of ticket sales, with platform fees ranging from 10-20% depending on your plan. We believe artists should be fairly compensated for their performances."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No hidden fees! Our pricing is transparent. Payment processing fees (2.9% + $0.30) are clearly disclosed and industry-standard."
    },
    {
      question: "Can I change plans anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle."
    },
    {
      question: "What's included in the free plans?",
      answer: "Free plans give you access to core platform features with some limitations. Perfect for trying out the platform before committing to a paid plan."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll provide a full refund."
    },
    {
      question: "How does host revenue sharing work?",
      answer: "Active hosts can earn revenue through ticket sales, merchandise, and optional service fees. The exact split depends on the agreement with the artist."
    }
  ]

  const getPrice = (plan: any) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice
  }

  const getSavings = (plan: any) => {
    if (plan.monthlyPrice === 0) return 0
    return plan.monthlyPrice * 12 - plan.yearlyPrice
  }

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
                Simple, Fair
                <span className="text-primary-600 block">Pricing</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Choose the perfect plan for your musical journey. Whether you're an artist, host, 
                or music lover, we have transparent pricing that grows with you.
              </p>
            </div>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4">
              <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  billingCycle === 'yearly' ? 'bg-primary-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
              </span>
              {billingCycle === 'yearly' && (
                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Save up to 20%
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Artist Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Music className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900">
                For Artists
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plans designed to help musicians connect with fans and build sustainable careers through intimate performances.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
            {artistPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="relative flex-1 max-w-sm mx-auto lg:mx-0"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full ${plan.color} ${plan.popular ? 'shadow-xl scale-105' : ''}`}>
                  <CardHeader className="text-center">
                    <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {plan.icon}
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <div className="text-4xl font-bold text-gray-900">
                        ${getPrice(plan)}
                        <span className="text-lg font-normal text-gray-600">
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                        <div className="text-sm text-green-600 font-medium">
                          Save ${getSavings(plan)} per year
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Button className="w-full" variant={plan.buttonVariant}>
                      {plan.monthlyPrice === 0 ? 'Get Started Free' : 'Start Free Trial'}
                    </Button>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Features included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div className="space-y-3 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900">Revenue Split:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, idx) => (
                            <li key={idx} className="flex items-center text-sm text-gray-600">
                              <DollarSign className="h-4 w-4 text-primary-500 mr-3 flex-shrink-0" />
                              {limitation}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <HomeIcon className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900">
                For Hosts
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your space into a music venue and bring incredible live performances to your community.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 justify-center items-stretch">
            {hostPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="relative flex-1 max-w-sm mx-auto lg:mx-0"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full ${plan.color} ${plan.popular ? 'shadow-xl scale-105' : ''}`}>
                  <CardHeader className="text-center">
                    <div className="bg-green-100 text-green-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      {plan.icon}
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <div className="text-4xl font-bold text-gray-900">
                        ${getPrice(plan)}
                        <span className="text-lg font-normal text-gray-600">
                          /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                        </span>
                      </div>
                      {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                        <div className="text-sm text-green-600 font-medium">
                          Save ${getSavings(plan)} per year
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Button className="w-full" variant={plan.buttonVariant}>
                      {plan.monthlyPrice === 0 ? 'Start Hosting Free' : 'Start Free Trial'}
                    </Button>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Features included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Lovers Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-4">
              <Headphones className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900">
                For Music Lovers
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover and attend intimate concerts. Always free for music lovers!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="text-center">
                <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl">Free Forever</CardTitle>
                <CardDescription className="text-lg">
                  Discover amazing artists and attend intimate shows without any subscription fees.
                  You only pay for the shows you attend.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {musicLoverFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600 text-sm">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="text-center">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                    Start Discovering Shows
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center space-x-3">
                <Zap className="h-8 w-8 text-yellow-500" />
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-gray-900">
                  Enterprise Solutions
                </h2>
              </div>
              <p className="text-xl text-gray-600">
                Custom solutions for record labels, venue networks, and large-scale music organizations.
              </p>
              <ul className="space-y-3">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Contact Sales
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Demo
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="bg-yellow-100 text-yellow-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto">
                      <Crown className="h-8 w-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Custom Pricing</h3>
                    <p className="text-gray-600">
                      Tailored solutions with volume discounts, dedicated support, and custom features.
                    </p>
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <div className="text-sm text-gray-600 mb-2">Starting at</div>
                      <div className="text-3xl font-bold text-gray-900">$500/mo</div>
                      <div className="text-sm text-gray-600">+ usage-based pricing</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Pricing Questions?
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing and plans.
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-left">{faq.question}</CardTitle>
                    <CardDescription className="text-left">{faq.answer}</CardDescription>
                  </CardHeader>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100">
              Join thousands of artists, hosts, and music lovers. Start with our free plans and upgrade as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Music className="h-5 w-5 mr-2" />
                Start as Artist
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <HomeIcon className="h-5 w-5 mr-2" />
                Start as Host
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                <Headphones className="h-5 w-5 mr-2" />
                Find Shows
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Pricing
