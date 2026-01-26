import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">LensClick</h3>
              <p className="text-sm text-muted-foreground">
                Professional photography services for your special moments.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/services/wedding"
                    className="hover:text-foreground"
                  >
                    Weddings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/birthday"
                    className="hover:text-foreground"
                  >
                    Birthday Parties
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/convocation"
                    className="hover:text-foreground"
                  >
                    Convocations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/other"
                    className="hover:text-foreground"
                  >
                    Other Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-foreground">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/privacy" className="hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-foreground">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} LensClick. All rights reserved. Built
              with care for photography lovers.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
