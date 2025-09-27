"use client"
import { Button } from "@/components/ui/button";
import { Code, Shield, Coins, Zap, Heart, ExternalLink } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm text-black font-bold mb-8 shadow-lg" style={{color: 'white'}}>
              <div className="w-2 h-2 bg-white rounded-full mr-3 animate-pulse"></div>
              BUILT ON ALGORAND BLOCKCHAIN
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Your Gateway to
              <span className="block bg-gradient-to-r from-accent via-destructive to-accent bg-clip-text text-transparent">
                Blockchain Innovation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Drop AlgoPOS into your codebase and unlock the power of Web3.
              Zero blockchain expertise required. Production-ready in minutes.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Feature 1 - Large */}
            <div className="lg:col-span-1">
              <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 hover:border-accent/40 transition-all duration-500 group">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="h-8 w-8 text-black" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Instant Plug & Play</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Import AlgoPOS, call a function, deploy. That's it. No complex configurations,
                      no steep learning curves. Just instant blockchain superpowers for your application.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Zero configuration setup
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        TypeScript support included
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        Works with any framework
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Large */}
            <div className="lg:col-span-1">
              <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-destructive/10 to-destructive/5 border border-destructive/20 hover:border-destructive/40 transition-all duration-500 group">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-destructive flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Algorand Powered</h3>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      Built on the world's most advanced pure proof-of-stake blockchain.
                      Enjoy instant finality, carbon-negative transactions, and enterprise-grade security.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        4.5 second block finality
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        0.001 ALGO transaction fee
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        Carbon-negative network
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Developer Experience</h4>
              <p className="text-muted-foreground text-sm">Clean APIs, comprehensive docs, and intuitive function names that just make sense.</p>
            </div>

            <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Coins className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Production Ready</h4>
              <p className="text-muted-foreground text-sm">Battle-tested in production with enterprise-grade error handling and monitoring.</p>
            </div>

            <div className="group p-6 rounded-2xl bg-card/50 backdrop-blur-sm border hover:bg-card/80 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Heart className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Community Driven</h4>
              <p className="text-muted-foreground text-sm">Open source, actively maintained, with a growing community of builders.</p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-r from-accent/20 to-destructive/20 border border-accent/30">
              <div className="text-left">
                <div className="text-sm font-semibold text-foreground">Ready to start building?</div>
                <div className="text-xs text-muted-foreground">Join 1000+ developers already using AlgoPOS</div>
              </div>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Get Started
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}