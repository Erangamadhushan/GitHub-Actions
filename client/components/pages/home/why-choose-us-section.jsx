import { Camera, Heart, Zap } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <>
      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose LensClick?
            </h2>
            <p className="text-lg text-muted-foreground">
              What sets us apart from the rest
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Camera className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Professional Expertise
              </h3>
              <p className="text-muted-foreground">
                Over 10 years of experience capturing life's most important
                moments with artistic vision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Personalized Service
              </h3>
              <p className="text-muted-foreground">
                We understand each event is unique. Custom packages tailored to
                your specific needs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Quick Delivery
              </h3>
              <p className="text-muted-foreground">
                High-quality edited photos delivered within 2-3 weeks of your
                event.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
