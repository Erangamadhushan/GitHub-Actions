"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const faqs = [
    {
      category: "Booking & Services",
      items: [
        {
          q: "How do I book your services?",
          a: 'You can book through our website by visiting the "Book Now" page, selecting your desired package, event type, date, and details. You can also call or email us directly for custom inquiries.',
        },
        {
          q: "What is your cancellation policy?",
          a: "Cancellations made more than 60 days before the event receive a 50% refund. Cancellations within 60 days are non-refundable. We allow rescheduling within 12 months without additional charges.",
        },
        {
          q: "Do you offer rush bookings?",
          a: "Yes, rush bookings are available subject to photographer availability. An additional 20% rush fee applies for events booked within 15 days.",
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept credit/debit cards, UPI, and bank transfers. A 50% deposit is required to confirm booking, with the remaining 50% due 7 days before the event.",
        },
      ],
    },
    {
      category: "Photography & Packages",
      items: [
        {
          q: "How many photographers will be at my event?",
          a: "Most events have 1-2 photographers depending on the package. Wedding packages typically include 2 photographers. You can request additional photographers for an extra fee.",
        },
        {
          q: "What is included in each package?",
          a: "All packages include on-site photography, professional editing, and delivery of high-resolution digital images via cloud storage. Wedding packages include engagement pre-shoot and album design.",
        },
        {
          q: "How many hours of coverage is included?",
          a: "Basic package: 2 hours, Professional: 4 hours, Premium: 6-8 hours. Additional hours are available at applicable rates.",
        },
        {
          q: "Do you provide videography services?",
          a: "Currently, we focus on photography. However, we can recommend trusted videographers in our network upon request.",
        },
      ],
    },
    {
      category: "Photos & Delivery",
      items: [
        {
          q: "When will I receive my photos?",
          a: "Edited photos are typically delivered within 2-3 weeks of your event. Rush processing (1 week) is available for an additional fee.",
        },
        {
          q: "How many photos will I receive?",
          a: "You typically receive 100+ edited images per 2 hours of coverage. The exact number depends on event activities and complexity.",
        },
        {
          q: "In what format are the photos delivered?",
          a: "Photos are delivered as high-resolution JPEG files via secure cloud storage. You can also request RAW files for an additional fee.",
        },
        {
          q: "Can I get prints of my photos?",
          a: "Yes, we offer premium print packages including albums, framed prints, and canvas prints. Contact us for custom print options and pricing.",
        },
      ],
    },
    {
      category: "Photo Rights & Usage",
      items: [
        {
          q: "Who owns the copyright to my photos?",
          a: "LensClick retains copyright ownership. You receive a personal license to use photos for non-commercial purposes.",
        },
        {
          q: "Can I post my photos on social media?",
          a: "Yes, you can share your photos on personal social media accounts. Please tag us @LensClickPhotography.",
        },
        {
          q: "Will you use my photos for marketing?",
          a: "We may use selected photos for our portfolio, website, and marketing with your permission. You can request exclusion of specific images anytime.",
        },
        {
          q: "Can I commercially use the photos?",
          a: "Commercial use requires a separate commercial license. Please contact us for pricing and terms.",
        },
      ],
    },
    {
      category: "Event Organizer Access",
      items: [
        {
          q: "How do event organizers access photos?",
          a: "Event organizers receive secure login credentials to our cloud portal where they can view, download, and share photos with attendees.",
        },
        {
          q: "Can I set expiration dates for shared photos?",
          a: "Yes, you can set access duration for organizer logins. Typically, access is available for 6-12 months from delivery.",
        },
        {
          q: "How do I share photos with guests?",
          a: "Event organizers can generate shareable links or provide organizer login details to guests. We also support email sharing.",
        },
        {
          q: "Is the cloud storage secure?",
          a: "Yes, all photos are stored on secure servers with password protection, SSL encryption, and regular backups.",
        },
      ],
    },
    {
      category: "Policies & Support",
      items: [
        {
          q: "What if I'm not satisfied with the photos?",
          a: "We strive for 100% customer satisfaction. We offer one free re-edit session. For major concerns, contact us within 7 days of delivery.",
        },
        {
          q: "Do you offer money-back guarantee?",
          a: "We guarantee professional service and quality. Refunds are only provided if we fail to deliver agreed services due to our fault.",
        },
        {
          q: "How can I contact you for support?",
          a: "You can reach us via email (support@lensclick.com), phone, or through our contact form. Response time is typically 24-48 hours.",
        },
        {
          q: "Do you travel outside our city?",
          a: "Yes, we travel throughout the region. Locations beyond 50km incur travel charges. We can discuss destination weddings separately.",
        },
      ],
    },
  ];

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our photography services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {faqs.map((section, sectionIdx) => (
          <div key={sectionIdx} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-primary">
              {section.category}
            </h2>
            <div className="space-y-3">
              {section.items.map((item, itemIdx) => {
                const globalIdx = sectionIdx * 100 + itemIdx;
                const isOpen = openItems.has(globalIdx);

                return (
                  <div
                    key={globalIdx}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all"
                  >
                    <button
                      onClick={() => toggleItem(globalIdx)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-background/50 transition-colors text-left"
                    >
                      <h3 className="font-semibold text-foreground pr-4">
                        {item.q}
                      </h3>
                      <ChevronDown
                        size={20}
                        className={`text-primary shrink-0 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 py-4 border-t border-border bg-background/30">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <div className="bg-card border border-border rounded-lg p-8 text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Didn't Find Your Answer?</h2>
          <p className="text-muted-foreground mb-6">
            Our team is here to help. Contact us directly for any questions not
            covered here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/book"
              className="inline-block bg-card border border-border text-foreground px-8 py-3 rounded-lg font-semibold hover:border-primary transition-all"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
