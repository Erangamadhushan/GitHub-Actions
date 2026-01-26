import { ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-4 bg-linear-to-b from-secondary/30 to-background relative"
        style={{
          backgroundImage: "url('/hero-section.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="min-h-[75vh] flex items-center">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
                  Capture Your Precious Moments
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                  LensClick brings professional photography expertise to your
                  weddings, birthday parties, convocations, and special events.
                  Let us preserve your memories with stunning, high-quality
                  photographs.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    size="lg"
                    onClick={() => router.push("/book")}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium cursor-pointer"
                  >
                    Book Now
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => router.push("/portfolio")}
                    className="hover:text-white cursor-pointer"
                  >
                    View Portfolio
                  </Button>
                </div>

                <div className="flex gap-8 pt-4">
                  <div>
                    <p className="text-2xl font-bold text-foreground">50+</p>
                    <p className="text-sm text-muted-foreground">
                      Happy Clients
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">50K+</p>
                    <p className="text-sm text-muted-foreground">
                      Photos Captured
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">4.8★</p>
                    <p className="text-sm text-muted-foreground">
                      Average Rating
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
