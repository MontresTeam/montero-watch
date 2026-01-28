"use client";

import React from "react";
import Navbar from "../navBar/NavBar";
import Footer from "../home/Footer/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-black min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center md:text-left">
            <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
              Privacy Policy – Montero
            </h1>
            <p className="font-mona text-sm md:text-base text-gray-500">
              Last updated: 27 January 2026
            </p>
          </div>

          {/* Intro */}
          <section className="mb-10 font-mona text-base md:text-lg text-gray-700 leading-relaxed space-y-4">
            <p>
              This Privacy Policy explains how Montero (“Montero,” “we,” “our,” or “us”) collects, uses, discloses, and protects your personal information when you visit monterowatch.com (the “Site”), interact with us on social media or messaging apps, or take part in our pre-order and crowdfunding activities.
            </p>
            <p>
              We are committed to handling your data lawfully, fairly, and transparently and in line with applicable laws, including the UAE Personal Data Protection Law (PDPL) and, where relevant, GDPR/UK GDPR and CCPA/CPRA.
            </p>
          </section>

          {/* Sections */}
          <div className="space-y-10 font-mona text-base md:text-lg text-gray-800 leading-relaxed">

            {/* 1 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                1) Who we are & contact details
              </h2>
              <p>
                <strong className="font-medium text-black">Controller:</strong> Montero (brand of Montres Trading L.L.C)<br />
                <strong className="font-medium text-black">Registered address:</strong> Moza Plaza 1, Shop 5, Al Khor St., Deira Waterfront, Dubai, United Arab Emirates<br />
                <strong className="font-medium text-black">Email:</strong> support@monterowatch.com (alt: admin@montres.ae)
              </p>
              <p className="mt-2">
                If you have questions or wish to exercise your rights, contact us at the email above.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                2) What we collect
              </h2>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li><strong className="font-medium text-black">Identity & contact:</strong> name, email, phone/WhatsApp, billing/shipping address.</li>
                <li><strong className="font-medium text-black">Order & payment:</strong> items purchased, order history, currency; we receive payment status from processors (e.g., Stripe, PayPal). We do not store full card numbers.</li>
                <li><strong className="font-medium text-black">Account & support:</strong> account credentials (hashed), preferences, messages with support (email, WhatsApp, site chat, Instagram/TikTok/FB DMs).</li>
                <li><strong className="font-medium text-black">Crowdfunding & pre-orders:</strong> pledge amount, reward tier, shipping details, survey responses (e.g., via Kickstarter/BackerKit or similar).</li>
                <li><strong className="font-medium text-black">Marketing & analytics:</strong> email subscription status, campaign source (UTM), Google Analytics 4 events, Meta Pixel events (including Jellop’s tracking pixel where applicable).</li>
                <li><strong className="font-medium text-black">Device & usage:</strong> IP address, device/browser type, pages viewed, approximate location, cookies and similar technologies.</li>
                <li><strong className="font-medium text-black">Photos/UGC:</strong> content you submit (e.g., reviews, tagged posts).</li>
                <li><strong className="font-medium text-black">Compliance & fraud prevention:</strong> IDs or documents you choose to share for warranty, returns, anti-fraud or KYC checks when legally required.</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                3) How we collect it
              </h2>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li><strong className="font-medium text-black">Directly from you</strong> (checkout, account creation, contact forms, chats).</li>
                <li><strong className="font-medium text-black">Automatically</strong> via cookies, pixels, SDKs and similar.</li>
                <li><strong className="font-medium text-black">From partners</strong> such as crowdfunding platforms (e.g., Kickstarter), payment processors, logistics/shipping providers, and marketing/analytics vendors.</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                4) Why we use your data (legal bases)
              </h2>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li><strong className="font-medium text-black">To provide the service / perform a contract:</strong> process orders and pre-orders, deliver products, manage warranty and returns, provide customer support.</li>
                <li><strong className="font-medium text-black">Legitimate interests:</strong> improve the Site and products, keep our services secure, prevent fraud/abuse, understand campaign performance, tailor content, and build our community.</li>
                <li><strong className="font-medium text-black">Consent:</strong> send marketing communications, place non-essential cookies, run remarketing/ads, or where required by local law.</li>
                <li><strong className="font-medium text-black">Legal obligations:</strong> tax, accounting, customs declarations, product safety, consumer rights.</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                5) How we share information
              </h2>
              <p className="mb-3">We share only what’s necessary with trusted recipients:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li><strong className="font-medium text-black">E-commerce, hosting & IT:</strong> website host/CDN, email & CRM tools, cloud providers.</li>
                <li><strong className="font-medium text-black">Payments:</strong> Stripe, PayPal (they act as independent controllers for payment data).</li>
                <li><strong className="font-medium text-black">Crowdfunding & pledge tools:</strong> Kickstarter, BackerKit (if used), solely to fulfill rewards and surveys.</li>
                <li><strong className="font-medium text-black">Marketing & analytics:</strong> Google Analytics 4, Meta (Facebook/Instagram), Jellop media technology partners for campaign measurement and optimization.</li>
                <li><strong className="font-medium text-black">Logistics:</strong> carriers and fulfillment centers; customs brokers where required.</li>
                <li><strong className="font-medium text-black">Professional services & authorities:</strong> auditors, legal advisors, regulators if legally required or to protect our rights.</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information. Where “sharing” for cross-context behavioral advertising applies (e.g., under CPRA), you may opt out (see §10).
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                6) International transfers
              </h2>
              <p>
                We are based in the UAE and use service providers that may process data in the UAE, EEA, UK, US and other countries. Where required, we rely on safeguards such as standard contractual clauses or equivalent transfer mechanisms.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                7) Retention
              </h2>
              <p className="mb-3">We keep data only as long as needed:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li><strong className="font-medium text-black">Orders/warranty:</strong> up to 7 years (tax/accounting/warranty).</li>
                <li><strong className="font-medium text-black">Marketing:</strong> until you unsubscribe or your consent is withdrawn.</li>
                <li><strong className="font-medium text-black">Analytics cookies:</strong> per tool default lifetimes or until you clear them.</li>
                <li><strong className="font-medium text-black">Support chats/emails:</strong> typically 24–36 months unless required longer for disputes or legal obligations.</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                8) Cookies & tracking
              </h2>
              <p className="mb-3">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li>Make the Site work (essential cookies).</li>
                <li>Measure performance (GA4).</li>
                <li>Run ads/retargeting (Meta Pixel/Jellop, Google Ads when used).</li>
              </ul>
              <p className="mt-3">
                You can control cookies via our cookie banner and your browser settings. Blocking some cookies may impact site functionality.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                9) Marketing communications
              </h2>
              <p>
                With your consent (or where permitted), we send emails/SMS/WhatsApp about launches, offers and updates. You can unsubscribe using the link in any message or by contacting us. Service messages (e.g., order status) are not marketing and will still be sent.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                10) Your privacy rights
              </h2>
              <p className="mb-3">Depending on where you live, you may have rights to:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-gray-400">
                <li>Access, correct, delete or port your data.</li>
                <li>Object to or restrict certain processing.</li>
                <li>Withdraw consent at any time (does not affect prior lawful processing).</li>
                <li>Opt out of targeted advertising / sale or sharing of personal info (CPRA).</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, email <a href="mailto:support@monterowatch.com" className="underline hover:text-black">support@monterowatch.com</a>. We may ask for verification.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                Do Not Track: we do not respond to browser DNT signals due to industry limits.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                11) Security
              </h2>
              <p>
                We use administrative, technical and physical safeguards (encryption in transit, access controls, logging). No method of transmission or storage is 100% secure; please use strong, unique passwords for your account.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                12) Children
              </h2>
              <p>
                Our Site is not intended for children under 16 (or lower age where permitted). We do not knowingly collect children’s data. If you believe a child provided data, contact us to delete it.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                13) Pre-orders & crowdfunding specifics
              </h2>
              <p>
                If you pledge through Kickstarter or similar platforms, those platforms are separate controllers of your profile/payment data. We receive only the details needed to fulfill your reward (name, email, pledge tier, address, survey responses) and handle them under this Policy.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                14) Third-party links & social features
              </h2>
              <p>
                The Site may link to third-party sites (e.g., Instagram/TikTok/YouTube). We are not responsible for their privacy practices. Review their policies before using those services.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                15) Changes to this Policy
              </h2>
              <p>
                We may update this Policy from time to time. Changes take effect when posted on this page with a new “Last updated” date. Material changes will be highlighted.
              </p>
            </section>

            {/* 16 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black">
                16) How to contact us
              </h2>
              <p>
                <strong className="font-medium text-black">Questions or requests:</strong> <a href="mailto:sales@monterowatch.com" className="underline hover:text-black">sales@monterowatch.com</a>
              </p>
              <p className="mt-2">
                <strong className="font-medium text-black">Postal:</strong> Montero c/o Montres Trading L.L.C, Moza Plaza 1, Shop 5, Al Khor St., Deira Waterfront, Dubai, UAE
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
