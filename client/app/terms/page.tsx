"use client";

import Link from "next/link";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using this website and booking our photography
              services, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the
              above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              LensClick provides professional photography services for various
              events including but not limited to weddings, birthday parties,
              convocations, and other special events. Our services include
              on-site photography, photo editing, and delivery of
              high-resolution digital images.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              3. Booking and Cancellation Policy
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">Booking:</strong> A
              non-refundable deposit of 50% is required to confirm your booking.
              The remaining 50% is due 7 days before your event date.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">
                Cancellation by Client:
              </strong>{" "}
              Cancellations made more than 60 days before the event will receive
              a 50% refund of deposits paid. Cancellations within 60 days are
              non-refundable. Cancellations within 30 days of the event will
              result in forfeiture of all payments.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Postponement:</strong> If you
              need to postpone your event, you may reschedule within 12 months
              without additional charges (subject to photographer availability).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li>
                All prices are in Indian Rupees (INR) and include applicable
                taxes
              </li>
              <li>Payment methods: Credit/Debit card, UPI, bank transfer</li>
              <li>Late payment may result in cancellation of booking</li>
              <li>
                Additional services requested on the event day will be charged
                at applicable rates
              </li>
              <li>
                Travel expenses for locations beyond 50km from our office are
                additional
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              5. Photography Services Details
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">Turnaround Time:</strong>{" "}
              Edited photos will be delivered within 2-3 weeks of your event.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">Photo Delivery:</strong>{" "}
              Images are delivered via secure cloud storage with password
              protection for event organizers and clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Number of Photos:</strong>{" "}
              Actual number of photos delivered depends on event duration and
              complexity. We typically deliver 100+ edited images per 2 hours of
              coverage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              6. Intellectual Property Rights
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">Copyright:</strong> LensClick
              retains copyright ownership of all photographs taken. Clients
              receive a license to use delivered images for personal,
              non-commercial purposes.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              <strong className="text-foreground">Portfolio Use:</strong> Client
              grants permission to LensClick to use selected photos for
              portfolio, website, and marketing purposes. Clients may request
              removal of specific images from our portfolio.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Restrictions:</strong> Clients
              may not sell, trade, or commercially use photographs without
              written permission from LensClick.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While we take utmost care to capture quality photos, LensClick is
              not responsible for circumstances beyond our control, including
              but not limited to: lighting conditions, weather, disruptions
              during the event, or failures of technical equipment. We maintain
              backup equipment and photographers to minimize service
              interruptions. In case of unforeseeable circumstances preventing
              service delivery, we will offer to reschedule the event or provide
              a full refund.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              8. Client Responsibilities
            </h2>
            <ul className="space-y-2 text-muted-foreground ml-4">
              <li>Provide accurate event details and schedule</li>
              <li>Ensure photographer access to all event locations</li>
              <li>
                Inform us of any special requirements or restrictions in advance
              </li>
              <li>Obtain necessary permissions for photography at venue</li>
              <li>
                Respect photographer's artistic decisions regarding compositions
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              9. Disclaimer of Warranties
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our services are provided on an "as-is" and "as-available" basis.
              LensClick does not warrant that the services will be
              uninterrupted, timely, secure, or error-free. While we strive for
              excellence, we do not guarantee specific results or customer
              satisfaction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These terms and conditions are governed by and construed in
              accordance with the laws of India, and you irrevocably submit to
              the exclusive jurisdiction of the courts located in [Your
              City/State].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              11. Modifications to Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              LensClick reserves the right to modify these terms at any time.
              Changes will be effective immediately upon posting to the website.
              Your continued use of the service constitutes acceptance of any
              modifications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              For any questions or concerns regarding these terms, please
              contact us:
            </p>
            <div className="bg-card border border-border rounded-lg p-4">
              <p className="text-foreground">
                <strong>LensClick Photography</strong>
              </p>
              <p className="text-muted-foreground">
                Email: support@lensclick.com
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
