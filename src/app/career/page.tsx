"use client"

import { motion } from "framer-motion"
import {
  CheckCircle2, ArrowRight, Loader2, Upload, X, Briefcase, Home
} from "lucide-react"
import { useState, useTransition, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { submitJobApplication } from "@/actions/career"
import { careerConfig } from "@/config/career-config"

export default function CareerPage() {
  const [isPending, startTransition] = useTransition()
  const [formStatus, setFormStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' })
  const [selectedJob, setSelectedJob] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [fileError, setFileError] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileError('')

    if (file) {
      // Validate file type
      if (file.type !== 'application/pdf') {
        setFileError('Only PDF files are accepted')
        setSelectedFile(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
        return
      }

      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size must be less than 5MB')
        setSelectedFile(null)
        if (fileInputRef.current) fileInputRef.current.value = ''
        return
      }

      setSelectedFile(file)
    }
  }

  const removeFile = () => {
    setSelectedFile(null)
    setFileError('')
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  async function handleSubmit(formData: FormData) {
    setFormStatus({ type: null, message: '' })

    // Manually append the selected file to FormData since it's controlled by React state
    if (selectedFile) {
      formData.set('resume', selectedFile)
    }

    startTransition(async () => {
      const result = await submitJobApplication(formData)

      if (result.success) {
        setFormStatus({ type: 'success', message: result.message })
        const form = document.querySelector('form') as HTMLFormElement
        form?.reset()
        setSelectedFile(null)
        setFileError('')
      } else {
        setFormStatus({ type: 'error', message: result.message })
      }
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-cyan-50/30 to-gray-50 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-brand-cyan/20 text-brand-cyan font-semibold text-sm mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
              </span>
              {careerConfig.hero.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              {careerConfig.hero.title.split('With Us')[0]}<span className="text-brand-cyan">With Us</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              {careerConfig.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href={careerConfig.hero.primaryCTA.href}>
                <Button className="px-8 py-6 bg-brand-cyan hover:bg-cyan-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-200">
                  {careerConfig.hero.primaryCTA.text}
                </Button>
              </a>
              <a href={careerConfig.hero.secondaryCTA.href}>
                <Button className="px-8 py-6 bg-white hover:bg-gray-50 text-brand-cyan border-2 border-brand-cyan font-semibold text-lg rounded-lg transition-all duration-200">
                  {careerConfig.hero.secondaryCTA.text}
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{careerConfig.whyWorkWithUs.title}</h2>
            <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {careerConfig.whyWorkWithUs.points.map((point, index) => (
              <WhyCard key={index} icon={point.icon} title={point.title} />
            ))}
          </div>
        </div>
      </section>

      {/* Life at TechSonance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{careerConfig.lifeAtCompany.title}</h2>
            <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full mb-6" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {careerConfig.lifeAtCompany.description}
            </p>
          </div>

          {/* Modern Grid Layout */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
            {careerConfig.lifeAtCompany.benefits.map((item, index) => (
              <BenefitCard
                key={item.title}
                icon={item.icon}
                title={item.title}
                delay={index * 0.05}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {careerConfig.openPositions.map((job, index) => (
              <JobCard
                key={index}
                job={job}
                onApply={() => {
                  setSelectedJob(job.title)
                  document.getElementById('apply-section')?.scrollIntoView({ behavior: 'smooth' })
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-cyan-50/30">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{careerConfig.hiringProcess.title}</h2>
            <div className="h-1 w-20 bg-brand-cyan mx-auto rounded-full mb-4" />
            <p className="text-gray-600">{careerConfig.hiringProcess.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {careerConfig.hiringProcess.steps.map((step, index) => (
              <HiringStep key={index} {...step} isLast={index === careerConfig.hiringProcess.steps.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply-section" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">{careerConfig.applySection.title}</h2>
              <p className="text-gray-600 mb-8 text-center">
                {careerConfig.applySection.description}
              </p>

              {formStatus.type === 'success' ? (
                <div className="p-6 bg-green-50 border-2 border-green-200 rounded-xl text-green-700 flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Application Submitted!</p>
                    <p className="text-sm">{formStatus.message}</p>
                  </div>
                </div>
              ) : (
                <form action={handleSubmit} className="space-y-5">
                  {selectedJob && (
                    <input type="hidden" name="role" value={selectedJob} />
                  )}

                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                      required
                    />
                  </div>

                  {!selectedJob && (
                    <div>
                      <label htmlFor="roleInterest" className="block text-sm font-semibold text-gray-700 mb-2">
                        Role Interested In
                      </label>
                      <Input
                        id="roleInterest"
                        name="role"
                        placeholder="e.g., Full Stack Developer"
                        className="h-12 focus:border-brand-cyan focus:ring-brand-cyan"
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="resume" className="block text-sm font-semibold text-gray-700 mb-2">
                      Resume Upload (PDF)
                    </label>

                    {!selectedFile ? (
                      <label className="flex items-center justify-center gap-2 h-12 px-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-brand-cyan hover:bg-cyan-50/50 transition-colors">
                        <Upload className="w-5 h-5 text-gray-400" />
                        <span className="text-sm text-gray-600">Choose PDF file (max 5MB)</span>
                        <input
                          ref={fileInputRef}
                          id="resume"
                          name="resume"
                          type="file"
                          accept=".pdf,application/pdf"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                      </label>
                    ) : (
                      <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex-1 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                          <span className="text-sm text-gray-700 font-medium truncate">{selectedFile.name}</span>
                          <span className="text-xs text-gray-500">({(selectedFile.size / 1024).toFixed(1)} KB)</span>
                        </div>
                        <button
                          type="button"
                          onClick={removeFile}
                          className="p-1 hover:bg-red-100 rounded transition-colors"
                        >
                          <X className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    )}

                    {fileError && (
                      <p className="text-sm text-red-600 mt-2">{fileError}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Short Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about yourself and why you'd like to join our team..."
                      className="min-h-[120px] focus:border-brand-cyan focus:ring-brand-cyan"
                    />
                  </div>

                  {formStatus.type === 'error' && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                      {formStatus.message}
                    </div>
                  )}

                  <Button
                    disabled={isPending}
                    className="w-full h-14 bg-brand-cyan hover:bg-cyan-600 text-white font-semibold text-lg rounded-lg shadow-md transition-all duration-200"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      careerConfig.applySection.submitButton
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-dark to-brand-deep text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {careerConfig.finalCTA.title}
            </h2>

            <a href={careerConfig.finalCTA.href}>
              <Button className="px-10 py-6 bg-brand-cyan hover:bg-cyan-600 text-white font-semibold text-lg rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                {careerConfig.finalCTA.buttonText}
              </Button>
            </a>

            <p className="text-gray-300 mt-4 text-sm">
              {careerConfig.finalCTA.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

function WhyCard({ icon: Icon, title }: { icon: any, title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-br from-white to-cyan-50/30 border border-gray-100 hover:border-brand-cyan/30 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 bg-brand-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-brand-cyan" />
      </div>
      <div className="flex-1">
        <p className="text-gray-700 font-medium leading-relaxed">{title}</p>
      </div>
    </motion.div>
  )
}

function JobCard({ job, onApply }: { job: any, onApply: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 hover:border-brand-cyan/50 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {job.experience}
            </span>
            <span className="flex items-center gap-1">
              <Home className="w-4 h-4" />
              {job.location}
            </span>
            <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full font-medium">
              {job.type}
            </span>
          </div>
        </div>
        <Button
          onClick={onApply}
          className="bg-brand-cyan hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 whitespace-nowrap"
        >
          Apply Now
        </Button>
      </div>

      <p className="text-gray-600 mb-4">{job.description}</p>

      <div className="flex flex-wrap gap-2">
        {job.techStack.map((tech: string) => (
          <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function HiringStep({ number, title, description, isLast }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: number * 0.1 }}
      className="relative flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 bg-brand-cyan rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg">
        {number}
      </div>
      <h4 className="font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>

      {!isLast && (
        <ArrowRight className="hidden md:block absolute top-8 -right-8 w-6 h-6 text-brand-cyan/30" />
      )}
    </motion.div>
  )
}

function BenefitCard({ icon: Icon, title, delay }: { icon: any, title: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="group"
    >
      <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-brand-cyan/50 hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center text-center">
        <div className="w-14 h-14 bg-gradient-to-br from-brand-cyan/10 to-cyan-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-7 h-7 text-brand-cyan" />
        </div>
        <h4 className="text-gray-900 font-semibold text-sm leading-tight">{title}</h4>
      </div>
    </motion.div>
  )
}
