import { ChevronRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function PortfolioSection() {
  const router = useRouter();
  return (
    <>
      {/* Portfolio Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Recent Work
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our latest photography projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {
                [
                    'events/birthday-party-1.jpg',
                    'events/wedding-1.jpg',
                    'events/convocation-1.jpg',
                    'events/birthday-party-2.jpg',
                    'events/wedding-2.jpg',
                    'events/convocation-2.jpg',
                ].map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                        <img src={`/${src}`} alt={`Portfolio Image ${index + 1}`} className="w-full h-64 object-cover" />
                    </div>
                ))
            }
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              onClick={() => router.push("/portfolio")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              View Full Portfolio
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
