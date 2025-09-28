"use client"
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-accent/10 via-background to-destructive/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 leading-tight">
            Ready to Start
            <span className="block bg-gradient-to-r from-accent to-destructive bg-clip-text text-transparent">
              Building?
            </span>
          </h2>

          <p className="text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto">
            Everything you need to integrate AlgoFlow is waiting for you in our documentation
          </p>

          <div className="relative inline-block">
            <div className="absolute -inset-8 bg-gradient-to-r from-accent to-destructive rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <Link href={'/docs'}>
              <Button
                size="lg"
                className="relative bg-accent text-white hover:bg-accent/90 font-bold text-2xl px-16 py-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                📚 Go to Docs
                <ExternalLink className="ml-4 h-8 w-8" />
              </Button>
            </Link>
          </div>

          <div className="mt-16 text-muted-foreground">
            <p className="text-lg">
              5-minute setup • API reference • Examples • Community support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}