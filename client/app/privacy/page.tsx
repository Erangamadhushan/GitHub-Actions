"use client";

import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              LensClick ("Company," "we," "our," or "us") is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and otherwise process personal information
              in connection with our photography services and website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              2. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We may collect information about you in various ways:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="ml-4">
                <strong className="text-foreground">
                  Personal Information:
                </strong>{" "}
                Name, email address, phone number, mailing address, and date of
                event.
              </li>
              <li className="ml-4">
                <strong className="text-foreground">
                  Payment Information:
                </strong>{" "}
                Credit card and billing information processed securely through
                our payment provider.
              </li>
              <li className="ml-4">
                <strong className="text-foreground">Event Photos:</strong>{" "}
                Images captured during booked photography sessions and any
                additional visual content you provide.
              </li>
              <li className="ml-4">
                <strong className="text-foreground">Usage Data:</strong>{" "}
                Information about your interactions with our website, including
                IP address, browser type, and pages visited.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We use the information we collect for the following purposes:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li>
                To provide, maintain, and improve our photography services
              </li>
              <li>To process bookings and payments</li>
              <li>To communicate with you about your events and services</li>
              <li>
                To send promotional emails and updates (with your consent)
              </li>
              <li>To comply with legal obligations</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To resolve disputes and address concerns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement comprehensive security measures to protect your
              personal information, including encryption, secure servers, and
              regular security audits. However, no method of transmission over
              the internet is 100% secure. While we strive to protect your
              information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              5. Sharing of Information
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li>
                Service providers who assist us in operating our website and
                providing services
              </li>
              <li>
                Event organizers and coordinators as needed to facilitate your
                event
              </li>
              <li>Legal authorities when required by law</li>
              <li>Other parties with your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              6. Cookies and Tracking Technologies
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies and similar tracking technologies to
              enhance your experience. You can control cookie settings through
              your browser preferences. Some cookies are essential for website
              functionality, while others help us understand user behavior and
              improve our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              7. Photo Usage and Copyright
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You retain ownership of all photos delivered to you. By booking
              our services, you grant us permission to use a limited number of
              photos for promotional purposes, portfolio display, and
              testimonials. You may request removal of specific images from our
              portfolio at any time. All original, edited photos delivered to
              you are for personal use unless otherwise agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              You have the right to:
            </p>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices. We encourage you to
              review the privacy policies of any external sites before providing
              personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are not intended for children under 18 years of age.
              We do not knowingly collect personal information from minors. If
              we become aware of such collection, we will take steps to delete
              the information and notify the parent or guardian.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              11. Changes to This Policy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy periodically. Changes will be
              posted on this page with an updated "Last updated" date. Continued
              use of our website constitutes acceptance of the updated Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have questions about this Privacy Policy or our privacy
              practices, please contact us at:
            </p>
            <div className="mt-4 bg-card border border-border rounded-lg p-4">
              <p className="text-foreground">
                <strong>LensClick Photography</strong>
              </p>
              <p className="text-muted-foreground">
                Email: privacy@lensclick.com
              </p>
              <p className="text-muted-foreground">Phone: +91-XXXX-XXXX-XX</p>
              <p className="text-muted-foreground">
                Address: [Your Business Address]
              </p>
            </div>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-12 pt-8 border-t border-border">
          <Link
            href="/"
            className="inline-block text-primary hover:text-accent transition-colors font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
