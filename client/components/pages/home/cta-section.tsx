import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  const router = useRouter();
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">
            Ready to Book Your Session?
          </h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with us today to discuss your photography needs and
            find the perfect package for your event.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => router.push("/signup")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Get Started
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
