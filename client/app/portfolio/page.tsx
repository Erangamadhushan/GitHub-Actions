"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";
import { projects as allProjects } from "@/data/pages/portfolio/gallery.data";
import { gallery } from "@/types";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "wedding", label: "Weddings" },
    { id: "birthday", label: "Birthdays" },
    { id: "convocation", label: "Convocations" },
    { id: "events", label: "Special Events" },
  ];

  

  const filteredProjects =
    selectedCategory === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-balance mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Browse our collection of captured moments from hundreds of
            successful events and celebrations.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            Showing {filteredProjects.length} project
            {filteredProjects.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project: gallery) => (
            <div
              key={project.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden bg-background">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all">
                    View Full Gallery
                  </button>
                </div>
                <button
                  onClick={() => toggleFavorite(project.id)}
                  className="absolute top-3 right-3 bg-card/80 backdrop-blur p-2 rounded-full hover:bg-primary transition-all"
                >
                  <Heart
                    size={20}
                    className={
                      favorites.has(project.id)
                        ? "fill-current text-red-500"
                        : "text-muted-foreground"
                    }
                  />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.location}
                </p>
                <Link
                  href={`/portfolio/${project.id}`}
                  className="inline-flex items-center text-primary hover:text-accent transition-colors"
                >
                  View Project <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Capture Your Special Moment?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Let us create stunning memories of your next event. Book your
            photography session today.
          </p>
          <Link
            href="/book"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
