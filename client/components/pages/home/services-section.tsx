import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Heart, Users, Zap } from "lucide-react";

export default function ServicesSection() {
  return (
    <>
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional photography for every special occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Wedding Photography */}
            <Card className="border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Wedding Photography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Capture the love and joy of your wedding day with
                  professional, artistic photographs.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Pre-wedding shoots
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    8-10 hours coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    500+ edited photos
                  </li>
                </ul>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full text-xs mt-4 bg-transparent cursor-pointer hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Birthday Party Photography */}
            <Card className="border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Birthday Party</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Celebrate milestones with beautiful photographs that capture
                  the fun and excitement.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    4-6 hours coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Candid moments
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    200+ edited photos
                  </li>
                </ul>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full text-xs mt-4 bg-transparent cursor-pointer hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Convocation Photography */}
            <Card className="border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Convocation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Document the achievements of your institution with
                  professional event photography.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Full event coverage
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Group and individual shots
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    300+ edited photos
                  </li>
                </ul>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full text-xs mt-4 bg-transparent cursor-pointer hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Other Events */}
            <Card className="border-border bg-card hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Other Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Corporate events, family portraits, anniversaries, and more.
                  Custom packages available.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Custom duration
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Flexible packages
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Tailored approach
                  </li>
                </ul>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full text-xs mt-4 bg-transparent cursor-pointer hover:text-white"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
