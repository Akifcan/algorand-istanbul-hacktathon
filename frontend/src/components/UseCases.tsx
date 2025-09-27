"use client"
import { Button } from "@/components/ui/button";
import { ShoppingCart, Truck, Heart, ExternalLink } from "lucide-react";

export function UseCases() {
  return (
    <section id="use-cases" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-destructive/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-8xl mx-auto">

          {/* Header with Floating Elements */}
          <div className="relative mb-24">
            <div className="text-center">
              <div className="inline-block relative mb-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent to-destructive rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative bg-foreground text-background px-8 py-4 rounded-full font-bold text-sm tracking-wider">
                  ⚡ BLOCKCHAIN IN ACTION
                </div>
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-foreground mb-8 leading-none">
                REAL WORLD
                <span className="block bg-gradient-to-r from-accent to-destructive bg-clip-text text-transparent">
                  IMPACT
                </span>
              </h2>
              <div className="max-w-2xl mx-auto text-xl text-muted-foreground font-medium">
                See how industry leaders are revolutionizing their businesses with AlgoPOS
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute top-0 left-0 hidden lg:block">
              <div className="bg-accent text-white p-4 rounded-2xl shadow-2xl transform -rotate-12 floating-card">
                <div className="text-2xl font-bold">$2M+</div>
                <div className="text-xs">Volume</div>
              </div>
            </div>
            <div className="absolute top-20 right-0 hidden lg:block">
              <div className="bg-destructive text-white p-4 rounded-2xl shadow-2xl transform rotate-12 floating-card" style={{ animationDelay: '1s' }}>
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-xs">Uptime</div>
              </div>
            </div>
          </div>

          {/* Diagonal Layout */}
          <div className="space-y-24">
            {/* E-commerce - Left */}
            <div className="flex flex-col lg:flex-row items-center gap-16 w-full">
              <div className="flex-1 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-background/90 backdrop-blur-sm rounded-3xl p-8 border border-blue-500/20">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mr-6">
                        <ShoppingCart className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground">E-Commerce</div>
                        <div className="text-blue-500 font-semibold">Payment Revolution</div>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Transform your online store with instant crypto payments. Zero chargebacks, global reach, minimal fees.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-blue-500/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-500">4.5s</div>
                        <div className="text-sm text-muted-foreground">Settlement Time</div>
                      </div>
                      <div className="bg-blue-500/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-blue-500">0%</div>
                        <div className="text-sm text-muted-foreground">Chargebacks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:order-2 w-full h-full rounded-lg overflow-hidden" style={{ background: 'blue', height: 300, minHeight: 300 }}>
                <div className="relative h-full w-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl overflow-hidden rounded-lg" style={{ background: 'red', minHeight: 300 }}>
                  <video src="/videos/payment.mp4" className="absolute inset-0 w-full h-full object-cover" loop muted autoPlay></video>
                </div>
              </div>
            </div>

            {/* Supply Chain - Right */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-background/90 backdrop-blur-sm rounded-3xl p-8 border border-green-500/20">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mr-6">
                        <Truck className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground">Supply Chain</div>
                        <div className="text-green-500 font-semibold">Complete Transparency</div>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Track every product from origin to consumer. Immutable records ensure authenticity and build trust.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-green-500/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-green-500">100%</div>
                        <div className="text-sm text-muted-foreground">Traceability</div>
                      </div>
                      <div className="bg-green-500/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-green-500">24/7</div>
                        <div className="text-sm text-muted-foreground">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 lg:order-1">
                <div className="flex-1 lg:order-2 w-full h-full rounded-lg overflow-hidden" style={{ background: 'blue', height: 300, minHeight: 300 }}>
                  <div className="relative h-full w-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl overflow-hidden rounded-lg" style={{ background: 'red', minHeight: 300 }}>
                    <video src="/videos/supply-chain.mp4" className="absolute inset-0 w-full h-full object-cover" loop muted autoPlay></video>
                  </div>
                </div>
              </div>
            </div>

            {/* Charity - Left */}
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 lg:order-1">
                <div className="relative">
                  <div className="absolute -inset-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
                  <div className="relative bg-background/90 backdrop-blur-sm rounded-3xl p-8 border border-purple-500/20">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mr-6">
                        <Heart className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-foreground">Charity & NGOs</div>
                        <div className="text-purple-500 font-semibold">Transparent Giving</div>
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      Build donor trust with complete transparency. Track every donation from source to impact.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="bg-purple-500/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-500">100%</div>
                        <div className="text-sm text-muted-foreground">Transparency</div>
                      </div>
                      <div className="bg-purple-500/10 rounded-xl p-4">
                        <div className="text-2xl font-bold text-purple-500">Real-time</div>
                        <div className="text-sm text-muted-foreground">Impact</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               <div className="flex-1 lg:order-1">
                 <div className="flex-1 lg:order-2 w-full h-full rounded-lg overflow-hidden" style={{background: 'blue', height: 300, minHeight: 300}}>
                <div className="relative h-full w-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl overflow-hidden rounded-lg" style={{background: 'red',minHeight: 300}}>
                  <video src="/videos/data.mp4" className="absolute inset-0 w-full h-full object-cover" loop muted autoPlay></video>
                </div>
              </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-32">
            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-destructive rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-foreground text-background p-8 rounded-2xl">
                <div className="text-2xl font-bold mb-4">Ready to Transform Your Industry?</div>
                <div className="text-lg mb-6 opacity-80">Join 50+ companies already building with AlgoPOS</div>
                <Button size="lg" className="bg-accent text-white hover:bg-accent/90 font-bold">
                  Start Building Today
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}