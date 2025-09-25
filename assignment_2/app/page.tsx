"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Users, Gavel, Briefcase, Settings, Star, Plus, ArrowRight } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function MedenceLegalPage() {
  const [cardOrder, setCardOrder] = useState([0, 1, 2])
  const [typewriterText, setTypewriterText] = useState("")
  const fullText = "How We Stand Out"

  useEffect(() => {
    let currentIndex = 0
    let isDeleting = false

    const typewriterInterval = setInterval(
      () => {
        if (!isDeleting) {
          if (currentIndex < fullText.length) {
            setTypewriterText(fullText.slice(0, currentIndex + 1))
            currentIndex++
          } else {
            setTimeout(() => {
              isDeleting = true
            }, 2000) // Wait 2 seconds before deleting
          }
        } else {
          if (currentIndex > 0) {
            setTypewriterText(fullText.slice(0, currentIndex - 1))
            currentIndex--
          } else {
            isDeleting = false
            setTimeout(() => {
              // Start typing again after 1 second
            }, 1000)
          }
        }
      },
      isDeleting ? 100 : 150,
    ) // Faster deletion, slower typing

    return () => clearInterval(typewriterInterval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCardOrder((prev) => {
        const newOrder = [...prev]
        // Rotate positions: move first to last
        const first = newOrder.shift()
        if (first !== undefined) {
          newOrder.push(first)
        }
        return newOrder
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const slideInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  }

  const cardData = [
    {
      title: "Affordable Legal Solutions",
      description: "Access premium legal services without stretching your budget.",
      bgColor: "bg-blue-200",
      items: [
        "• Flexible plans to suit various financial needs.",
        "• Transparent pricing with no hidden charges.",
        "• Quality legal support at an unbeatable value.",
      ],
    },
    {
      title: "Expert and Personalized Support",
      description: "Unmatched service from seasoned legal professionals tailored to your needs.",
      bgColor: "bg-blue-200",
      items: [
        "• Diverse but expert lawyers.",
        "• Best lawyer-client fit combination.",
        "• Comprehensive solutions as per requirements.",
      ],
    },
    {
      title: "Always Here for Your Problems",
      description: "Count on Medence for round-the-clock assistance and guidance.",
      bgColor: "bg-gray-200",
      items: [
        "• 24/7 customer support for all your queries.",
        "• Timely updates and proactive communication.",
        "• Accessible from wherever and whenever.",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        className="border-b border-gray-200 px-4 py-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
              </div>
            </div>
            <span className="text-lg font-semibold text-gray-900">MEDENCE LEGAL</span>
          </div>

          <nav className="flex items-center space-x-8">
            <a href="#" className="text-gray-900 font-medium border-b-2 border-blue-600 pb-1">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              FAQs
            </a>
          </nav>

          <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
            <span>Book A Call</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-yellow-50 to-yellow-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInLeft}
          >
            <h1 className="text-5xl font-bold text-blue-900 mb-6">Medence Legal</h1>
            <p className="text-xl text-gray-600 mb-8">Your Personal Lawyer. On Your Side, Always.</p>
            <div className="flex space-x-4">
              <Button className="bg-yellow-300 text-black hover:bg-yellow-400 px-8 py-3 rounded-full">
                Check Plans
              </Button>
              <Button variant="outline" className="flex items-center space-x-2 px-8 py-3 rounded-full bg-transparent">
                <span>Book a Call</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInRight}
          >
            <div className="bg-yellow-200 rounded-3xl p-8">
              <Image
                src="/happy-family-with-lawyer-in-professional-setting.jpg"
                alt="Family with lawyer"
                width={600}
                height={400}
                className="rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="px-4 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInLeft}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-blue-900 rounded-lg"></div>
              <div className="w-8 h-8 bg-orange-400 rounded-lg"></div>
              <div className="w-8 h-8 bg-blue-400 rounded-lg"></div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Welcome to Medence Legal.</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Just like insurance, you pay a simple fee upfront — and when trouble comes, we handle the legal fight
                for you.
              </p>
              <p>
                No chasing lawyers. No high legal bills. Just peace of mind for tenants, consumers, and everyday legal
                needs.
              </p>
              <p>It's like having a personal lawyer in your corner to tackle the world for you.</p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={slideInRight}
          >
            <Image
              src="/statue-of-justice-with-scales-against-dramatic-sky.jpg"
              alt="Justice statue"
              width={600}
              height={500}
              className="rounded-3xl"
            />
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <motion.section
        className="px-4 py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How It Works</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Call Our Executive</h3>
              <p className="text-sm text-gray-600">
                Connect with our team to discuss your legal needs and clear all the questions you have right away.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Discovery</h3>
              <p className="text-sm text-gray-600">
                Choose the right plan from our options — custom tailored to match your unique budget & legal needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gavel className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Personal Lawyer</h3>
              <p className="text-sm text-gray-600">
                Congratulations! You now have a dedicated personal lawyer for all your legal matters and needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Legal Assistance</h3>
              <p className="text-sm text-gray-600">
                Call or meet your lawyer anytime for advice or complete legal defence — always by your side.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Customer Support</h3>
              <p className="text-sm text-gray-600">
                Our robust support team is at your disposal, if you need to change lawyers or resolve grievances.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <section className="px-4 py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-center text-white mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={slideInUp}
          >
            Why choose us?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardOrder.map((cardIndex, position) => (
              <motion.div
                key={cardIndex}
                layout
                transition={{ duration: 0.8, ease: "easeInOut" }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={slideInUp}
                style={{ order: position }}
              >
                <Card className={`${cardData[cardIndex].bgColor} border-0`}>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{cardData[cardIndex].title}</h3>
                    <p className="text-gray-700 mb-6">{cardData[cardIndex].description}</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {cardData[cardIndex].items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <motion.section
        className="px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={slideInUp}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
            {typewriterText}
            <span className="animate-pulse">|</span>
          </h2>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-3 bg-gray-50">
              <div className="p-6"></div>
              <div className="p-6 text-center bg-green-100">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-blue-900 rounded-lg"></div>
                  <span className="font-bold text-blue-900">Medence Legal</span>
                </div>
              </div>
              <div className="p-6 text-center bg-red-100">
                <span className="font-bold text-red-700">Other "Typical" Lawyers</span>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              <div className="grid grid-cols-3">
                <div className="p-6 font-semibold text-gray-900">Price Tag</div>
                <div className="p-6 text-center bg-green-50">Starting at ₹199</div>
                <div className="p-6 text-center bg-red-50">Expensive</div>
              </div>

              <div className="grid grid-cols-3">
                <div className="p-6 font-semibold text-gray-900">Price Clarity</div>
                <div className="p-6 text-center bg-green-50">Standard Pricing</div>
                <div className="p-6 text-center bg-red-50">Uncertain & Hidden Pricing</div>
              </div>

              <div className="grid grid-cols-3">
                <div className="p-6 font-semibold text-gray-900">Quality</div>
                <div className="p-6 text-center bg-green-50">Avg. 19 Years of Experience</div>
                <div className="p-6 text-center bg-red-50">Unsure of Quality</div>
              </div>

              <div className="grid grid-cols-3">
                <div className="p-6 font-semibold text-gray-900">Ease</div>
                <div className="p-6 text-center bg-green-50">Auto Case Updates</div>
                <div className="p-6 text-center bg-red-50">Hassles & Runarounds</div>
              </div>

              <div className="grid grid-cols-3">
                <div className="p-6 font-semibold text-gray-900">Flexibility</div>
                <div className="p-6 text-center bg-green-50">Lawyer Replacement Option</div>
                <div className="p-6 text-center bg-red-50">No Flexibility</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        className="px-4 py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">HEAR IT FROM OUR USERS</h2>
          <p className="text-gray-600 mb-12">
            Discover the valuable feedback and testimonials from our satisfied clients about their experiences with us.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInUp}
            >
              <Card className="border-2 border-gray-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Rahul Shrivastavan</h4>
                      <p className="text-sm text-gray-600">IT Professional</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    We have been planning to buy our first ever property. It was this time when my close friend told me
                    to get the documents checked thoroughly. I used Medence's service — their lawyer found a legal issue
                    that could have landed me in major trouble. Just that one review saved me from some financial
                    disaster. Kudos to the team!
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInUp}
            >
              <Card className="border-2 border-gray-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Alok Mishra</h4>
                      <p className="text-sm text-gray-600">SDE Professional</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    My flatmate came across medence over his social media about their free rental agreement checker. We
                    were already in trouble by then though. Our landlord without any warning or reason cut our deposit.
                    And since we are young corporate guys we didn't want to further risk our careers by retaliating
                    against landlord. But medence helped us recover our money from him legally without our involvement.
                    Many other lawyers outside that we approached before meeting medence have inflated costs that were
                    almost double of our 55k deposit. Medence gave us an easy way out here with their flexible plans.
                    Made us feel it was fair. You guys are doing something that most startups fail which is impacting
                    lives in a ways that actually matter.
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInUp}
            >
              <Card className="border-2 border-gray-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pradeep Kumar</h4>
                      <p className="text-sm text-gray-600">Textile Business Owner</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    The customer team is highly responsive. While the lawyer himself was very professional from the
                    start, what impressed me truly was their customer support. They responded to my concerns and made me
                    calm whenever I felt anxious with my legal issue.
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                transition: { duration: 0.3 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={slideInUp}
            >
              <Card className="border-2 border-gray-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">G.Sneha</h4>
                      <p className="text-sm text-gray-600">Government Service</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-4">
                    I was so tired with other divorce lawyers and their money extracting business. Medence's simple
                    pricing is such a relief here. I was unsure of divorce cases because when I came across medence as
                    divorce was not mentioned on their legal plans mentioned on site. But upon enquiring I realised they
                    also take up divorce cases. The issue has arisen and not just that the lawyer is especially so warm.
                    It feels good to know someone powerful has your back in such times. This is an amazing product! I
                    highly recommend it.
                  </p>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Statistics */}
      <motion.section
        className="px-4 py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={slideInUp}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">TRUSTED BY OUR USERS</h2>
          <p className="text-gray-600 mb-16">Medence Legal is backed by results, not just words</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-6xl font-bold text-blue-600 mb-2">27.45+</div>
              <p className="text-gray-600">crore worth of assets under litigation handled</p>
            </div>

            <div>
              <div className="text-6xl font-bold text-blue-600 mb-2">73,000</div>
              <p className="text-gray-600">Average Money Saved per User</p>
            </div>

            <div>
              <div className="text-6xl font-bold text-blue-600 mb-2">4.83</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="px-4 py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-gray-600 mb-6">
              Still have any questions? Contact our Team via{" "}
              <a href="mailto:support@medencelegal.in" className="text-blue-600 underline">
                support@medencelegal.in
              </a>
            </p>
            <Button variant="outline" className="rounded-full bg-transparent">
              See All FAQ's
            </Button>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 flex items-center justify-between border">
              <span className="font-medium text-gray-900">Are you an insurance company?</span>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 p-0">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-center justify-between border">
              <span className="font-medium text-gray-900">
                Why is the plan pricing so affordable while lawyers outside charge so high?
              </span>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 p-0">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-center justify-between border">
              <span className="font-medium text-gray-900">
                Can I avail the lawyer service after the trouble arises and not before?
              </span>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 p-0">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-center justify-between border">
              <span className="font-medium text-gray-900">
                Can I contact my personal lawyer in emergency situations?
              </span>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 p-0">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-center justify-between border">
              <span className="font-medium text-gray-900">Is my information safe and confidential with Medence?</span>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 p-0">
                <Plus className="w-4 h-4" />
              </Button>
            </div>

            <div className="bg-white rounded-lg p-4 flex items-center justify-between border">
              <span className="font-medium text-gray-900">Do you have in-house lawyers?</span>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 rounded-full w-8 h-8 p-0">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-white border-t">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-gray-600">
            Designed & Developed by{" "}
            <a href="#" className="text-blue-600 hover:underline">
              SIDA Technologies
            </a>
          </p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <motion.div
        className="fixed bottom-6 right-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Button className="bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 p-0 shadow-lg">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106" />
          </svg>
        </Button>
      </motion.div>
    </div>
  )
}
