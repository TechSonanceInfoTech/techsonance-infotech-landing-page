"use client"

import { motion } from "framer-motion"
import { FileText, Scale, Shield } from "lucide-react"
import Link from "next/link"

export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-brand-dark via-brand-deep to-brand-dark text-white py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-cyan/20 backdrop-blur-sm border border-brand-cyan/30 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Legal Information
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Terms & Conditions
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Website User Terms & Conditions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Domain & Ownership</h2>
                  <p className="text-gray-600 mb-4">
                    <strong>Domain Name:</strong> www.techsonance.co.in
                  </p>
                  <p className="text-gray-600">
                    <strong>Company:</strong> TechSonance InfoTech LLP
                  </p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                This website is owned and managed by <strong>TechSonance InfoTech LLP</strong>. By accessing and using the www.techsonance.co.in website (the "Web Site"), you are agreeing to be legally bound by these Terms & Conditions. The terms "you" and "User" refer to anyone who accesses the Web Site.
              </p>
            </div>

            {/* Agreement to Terms */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                As you browse through the website and TechSonance InfoTech LLP sites you may access other websites that are subject to different terms of use. When you use those sites, you will be legally bound by the specific terms of use posted on such sites. If there is a conflict between these Terms & Conditions and the other terms and conditions, the other terms & conditions will govern with respect to use of such pages.
              </p>
              <p className="text-gray-700 leading-relaxed">
                TechSonance InfoTech LLP may change these Terms & Conditions at any time without notice. Changes will be posted on the website under "Terms & Conditions". Your use of the Web Site after any changes have been posted will constitute your agreement to the modified Terms & Conditions and all of the changes. Therefore, you should read these Terms & Conditions from time to time for changes.
              </p>
            </div>

            {/* Use of the Website */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Use of the Web Site</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TechSonance InfoTech LLP hereby grants you a non-exclusive, non-transferable, limited license to access and use the Web Site for the fees, if applicable, and under the terms set forth below.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Web Site and the content, including, but not limited to, text, data, reports, opinions, images, photos, graphics, graphs, charts, animations and video (the "Content"), displayed on the Web Site, may be used only for your personal and non-commercial use. Except as otherwise permitted under these Terms & Conditions, you agree not to copy, reproduce, modify, create derivative works from, or store any Content, in whole or in part, from the Web Site or to display, perform, publish, distribute, transmit, broadcast or circulate any Content to anyone, or for any commercial purpose, without the express prior written consent of TechSonance InfoTech LLP.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Content is the exclusive property of TechSonance InfoTech LLP or its licensors, and is protected by copyright and other intellectual property laws. All trade names, trademarks, service marks and other product and service names and logos on the Web Site and within the Content are proprietary to their respective owners and are protected by applicable trademark and copyright laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                To request permission to use any Content or other TechSonance InfoTech LLP material, please contact us at <a href="mailto:hr@techsonance.co.in" className="text-brand-cyan hover:underline">hr@techsonance.co.in</a>
              </p>
            </div>

            {/* Registration */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Registration</h2>
              <p className="text-gray-700 leading-relaxed">
                As part of the registration process, you must select a username and password and provide the website with accurate, complete, and updated information. Failure to do so constitutes a breach of this Agreement, which may result in immediate termination of your access.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are entirely liable for activities conducted by you in connection with your browsing and use of the Web Site. If you are dissatisfied with the Content or the Web Site or with these Terms of Use, your sole and exclusive remedy is to stop using the Content and the Web Site.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-sm text-gray-700 font-semibold">
                  THE CONTENT AND THE WEB SITE ARE PROVIDED "AS IS", WITHOUT ANY WARRANTIES. NEITHER THE WEBSITE NOR TECHSONANCE INFOTECH LLP MAKES ANY GUARANTEES OR WARRANTIES AS TO THE ACCURACY, COMPLETENESS, TIMELINESS OR CURRENTNESS OF OR RESULTS TO BE OBTAINED FROM, ACCESSING AND USING THE WEB SITE.
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The website assumes no responsibility for the use of third party software on the website and shall have no liability whatsoever to any person or entity for the accuracy or completeness of any outcome generated by such software.
              </p>
            </div>

            {/* Links to Other Websites */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Links to Other Web Sites</h2>
              <p className="text-gray-700 leading-relaxed">
                You may, through hypertext or other computer links, gain access to websites operated by persons other than the website. Such hyperlinks are provided for your reference and convenience only, and are the exclusive responsibility of such websites' owners. You agree that the website is not responsible for the content or operation of such websites, and that the website shall have no liability to you or any other person or entity for the use of third party websites.
              </p>
            </div>

            {/* User Content */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. The User's Content</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The User grants to TechSonance InfoTech LLP the non-exclusive right to use all material entered into the Web site by the User (other than third-party material transmitted through private electronic mail) in any of TechSonance InfoTech LLP's print or electronic publications.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The User agrees to indemnify the website and TechSonance InfoTech LLP from all damages, liabilities, costs, charges and expenses, including reasonable attorneys' fees, that the website, TechSonance InfoTech LLP, their affiliates, employees, and authorized representatives may incur as a result of either: (i) the User's breach of this Agreement; or (ii) material entered into the Web site with the use of the User's screen name or password.
              </p>
            </div>

            {/* Payments */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Payments, Cancellation & Refunds</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All information, reports, content and access rights purchased on the website are non-refundable.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We as a merchant shall be under no liability whatsoever in respect of any loss or damage arising directly or indirectly out of the decline of authorization for any Transaction, on Account of the Cardholder having exceeded the preset limit mutually agreed by us with our acquiring bank from time to time.
              </p>
            </div>

            {/* Additional Legal Terms */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Additional Legal Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Agreement will continue until terminated by either party. Either party can terminate the Agreement by notifying the other party by telephone or electronic mail of the decision to terminate.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Agreement constitutes the entire agreement between the parties relating to the Web site and supersedes any and all other agreements, oral or in writing, with respect to the Web Site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Governing Law:</strong> This Agreement, your rights and obligations, and all actions contemplated by this Agreement shall be governed by the laws of India and subject to jurisdiction of courts of Surat, Gujarat.
              </p>
            </div>

            {/* Anti-Hacking */}
            <div className="bg-white rounded-2xl border-2 border-gray-100 p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">8. Anti-Hacking Provision</h2>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                You expressly agree not to use this Web Site in any manner or for any purpose that is prohibited by these terms and conditions. In addition, you expressly agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Use the Web Site for any purpose that is prohibited by any law or regulation</li>
                <li>Use any automated device, program, or tool to access, acquire, copy, or monitor any portion of the Web Site without prior consent</li>
                <li>Obtain or attempt to obtain any materials or information that have not been intentionally made publicly available</li>
                <li>Bypass or circumvent any security measures employed to limit or prevent access to the Web Site</li>
                <li>Violate the security of the Web Site or attempt to gain unauthorized access through hacking or password mining</li>
                <li>Interfere with the proper working of the Web Site or any activities conducted on it</li>
                <li>Take any action that imposes an unreasonable or disproportionately large load on the Web Site infrastructure</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-brand-cyan/10 to-cyan-100 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Our Terms?</h3>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms & Conditions, please contact us.
              </p>
              <Link href="/contact">
                <button className="px-8 py-3 bg-brand-cyan hover:bg-cyan-600 text-white font-semibold rounded-xl transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </div>
  )
}
