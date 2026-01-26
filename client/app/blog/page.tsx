"use client";

import Link from "next/link";
import { Clock, User, Tag, Search } from "lucide-react";
import { useState } from "react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      id: 1,
      title: "10 Essential Tips for Wedding Photography",
      excerpt:
        "Master the art of capturing the perfect wedding moments with these professional tips and tricks.",
      author: "Rajesh Kumar",
      date: "Jan 15, 2024",
      category: "Photography Tips",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Lighting Techniques for Indoor Events",
      excerpt:
        "Learn how to master indoor lighting and create stunning photos without relying solely on natural light.",
      author: "Priya Sharma",
      date: "Jan 10, 2024",
      category: "Lighting",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Editing Secrets: From RAW to Final Image",
      excerpt:
        "Discover the post-processing workflow that transforms raw photos into stunning masterpieces.",
      author: "Kavya Singh",
      date: "Jan 5, 2024",
      category: "Editing",
      image:
        "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&h=400&fit=crop",
      readTime: "7 min read",
    },
    {
      id: 4,
      title: "Planning Your Birthday Photo Session",
      excerpt:
        "Complete guide to planning a fun and memorable birthday photoshoot with creative ideas and themes.",
      author: "Rajesh Kumar",
      date: "Jan 1, 2024",
      category: "Event Planning",
      image:
        "https://images.unsplash.com/photo-1504674900769-0c8fcb0aad18?w=600&h=400&fit=crop",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "Capturing Candid Moments That Tell Stories",
      excerpt:
        "The art and technique of capturing genuine, unscripted moments that convey real emotions.",
      author: "Anil Verma",
      date: "Dec 28, 2023",
      category: "Photography Tips",
      image:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Equipment Guide: Choosing the Right Gear",
      excerpt:
        "Complete breakdown of camera equipment, lenses, and accessories for professional event photography.",
      author: "Priya Sharma",
      date: "Dec 20, 2023",
      category: "Equipment",
      image:
        "https://images.unsplash.com/photo-1606986628025-35d57e735ae00?w=600&h=400&fit=crop",
      readTime: "8 min read",
    },
  ];

  const categories = [
    "All",
    "Photography Tips",
    "Lighting",
    "Editing",
    "Event Planning",
    "Equipment",
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-5xl font-bold mb-4">Photography Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Tips, insights, and inspiration from our photography experts.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="bg-card border border-border rounded-lg p-4 mb-6">
            <div className="flex items-center gap-3">
              <Search size={20} className="text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground placeholder-muted-foreground"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-card border border-border hover:border-primary text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden bg-background">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <span>{article.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No articles found. Try adjusting your search.
            </p>
          </div>
        )}

        {/* Newsletter */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get photography tips, client stories, and exclusive offers delivered
            to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted-foreground outline-none focus:border-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
