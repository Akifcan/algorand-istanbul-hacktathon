"use client"
import { Button } from "@/components/ui/button";
import { Code, Shield, Coins, Zap, ShoppingCart, Truck, Heart, ExternalLink, Menu, Copy } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-foreground">AlgoPOS</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium">Features</a>
                <a href="#use-cases" className="text-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium">Use Cases</a>
                <a href="#docs" className="text-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium">Docs</a>
                <a href="#github" className="text-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium">GitHub</a>
                <a href="#contact" className="text-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>
            <div className="hidden md:block">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                Get Started
              </Button>
            </div>
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40">
        <div className="absolute inset-0 algo-hero-gradient"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm text-muted-foreground mb-8">
                <span className="inline-block w-2 h-2 bg-accent rounded-full mr-2"></span>
                Developer-First Blockchain SDK
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
                Bridge Web2 to Web3
                <span className="block bg-gradient-to-r from-accent to-destructive bg-clip-text text-transparent">
                  with Ease
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Integrate blockchain technology into your systems within seconds.
                Build powerful Web3 applications on Algorand with developer-friendly tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" className="shine-effect bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 transition-all">
                  Get Started
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 transition-all hover:bg-accent hover:text-accent-foreground">
                  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  View on GitHub
                </Button>
              </div>

              {/* Stats Section */}
              <div className="stats-grid rounded-2xl p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">0.001</div>
                    <div className="text-xs text-muted-foreground">ALGO Fee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">4.5s</div>
                    <div className="text-xs text-muted-foreground">Block Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">1000+</div>
                    <div className="text-xs text-muted-foreground">TPS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Code Example */}
            <div className="floating-card">
              <div className="code-block p-0 overflow-hidden max-w-lg mx-auto">
                <div className="flex items-center justify-between px-6 py-4 relative z-10">
                  <div className="flex items-center space-x-2 pb-10">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => navigator.clipboard.writeText(`import { sendPayment } from "algopos"

await sendPayment({
  from: wallet,
  to: "ALGO_WALLET_ADDRESS",
  amount: 1
})`)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="px-6 pb-6 relative z-10">
                  <pre className="text-sm text-white">
                    <code>{`import { sendPayment } from "algopos"

await sendPayment({
  from: wallet,
  to: "ALGO_WALLET_ADDRESS",
  amount: 1
})`}</code>
                  </pre>
                </div>
              </div>

              {/* Second Code Block */}
              <div className="code-block p-0 overflow-hidden max-w-lg mx-auto mt-6">
                <div className="flex items-center justify-between px-6 py-4 relative z-10">
                  <div className="flex items-center space-x-2 pb-10">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground"
                    onClick={() => navigator.clipboard.writeText(`import { writeData } from "algopos"

await writeData({
  key: "user_score",
  value: { score: 100 }
})`)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="px-6 pb-6 relative z-10">
                  <pre className="text-sm text-white">
                    <code>{`import { writeData } from "algopos"

await writeData({
  key: "user_score",
  value: { score: 100 }
})`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm text-black font-bold mb-8 shadow-lg">
                <div className="w-2 h-2 bg-black rounded-full mr-3 animate-pulse"></div>
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
                      <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-black font-bold text-sm">!</span>
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-foreground">Ready to start building?</div>
                  <div className="text-xs text-muted-foreground">Join 1000+ developers already using AlgoPOS</div>
                </div>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Started
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
                <div className="bg-accent text-black p-4 rounded-2xl shadow-2xl transform -rotate-12 floating-card">
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
              <div className="flex flex-col lg:flex-row items-center gap-16">
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
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        View Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex-1 lg:order-2">
                  <div className="relative h-96 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-3xl overflow-hidden">
                    <div className="absolute inset-4 bg-background/50 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <ShoppingCart className="h-16 w-16 text-blue-500" />
                        </div>
                        <div className="text-2xl font-bold text-foreground">Live Payment Demo</div>
                      </div>
                    </div>
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
                      <Button className="bg-green-500 hover:bg-green-600 text-white">
                        Case Study <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex-1 lg:order-1">
                  <div className="relative h-96 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-3xl overflow-hidden">
                    <div className="absolute inset-4 bg-background/50 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Truck className="h-16 w-16 text-green-500" />
                        </div>
                        <div className="text-2xl font-bold text-foreground">Live Tracking</div>
                      </div>
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
                      <Button className="bg-purple-500 hover:bg-purple-600 text-white">
                        Success Story <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex-1 lg:order-2">
                  <div className="relative h-96 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl overflow-hidden">
                    <div className="absolute inset-4 bg-background/50 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-32 h-32 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Heart className="h-16 w-16 text-purple-500" />
                        </div>
                        <div className="text-2xl font-bold text-foreground">Impact Dashboard</div>
                      </div>
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
                  <Button size="lg" className="bg-accent text-black hover:bg-accent/90 font-bold">
                    Start Building Today
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Terminal Style CTA Section */}
      <section className="py-20 relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-destructive/5"></div>

        {/* Matrix Rain Effect Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 gap-4 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="relative">
                <div className="absolute top-0 w-full h-4 bg-gradient-to-b from-accent to-transparent animate-pulse"
                     style={{ animationDelay: `${i * 0.5}s`, animationDuration: '3s' }}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">

            {/* Terminal Window */}
            <div className="bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">

              {/* Terminal Header */}
              <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-gray-400 text-sm font-mono">terminal — algopos-setup</div>
                </div>
                <div className="text-gray-500 text-xs">⌘ C to copy</div>
              </div>

              {/* Terminal Content */}
              <div className="p-8 bg-black font-mono text-sm">

                {/* Installation Commands */}
                <div className="mb-8">
                  <div className="text-accent mb-2">$ npm install algopos</div>
                  <div className="text-gray-400 mb-4">
                    <span className="text-green-500">✓</span> Installing AlgoPOS SDK...
                  </div>

                  <div className="text-accent mb-2">$ touch app.js</div>
                  <div className="text-gray-400 mb-4">
                    <span className="text-green-500">✓</span> Creating your first app...
                  </div>
                </div>

                {/* Code Block */}
                <div className="bg-gray-900 rounded-lg p-6 mb-8 border border-gray-700">
                  <div className="text-gray-500 text-xs mb-3">app.js</div>
                  <div className="space-y-2">
                    <div><span className="text-purple-400">import</span> <span className="text-white">{ sendPayment }</span> <span className="text-purple-400">from</span> <span className="text-green-400">"algopos"</span></div>
                    <div className="text-gray-500">// Send your first transaction</div>
                    <div><span className="text-blue-400">await</span> <span className="text-yellow-400">sendPayment</span>({</div>
                    <div className="pl-4"><span className="text-white">amount:</span> <span className="text-orange-400">1</span>,</div>
                    <div className="pl-4"><span className="text-white">to:</span> <span className="text-green-400">"ALGO_ADDRESS"</span></div>
                    <div>})</div>
                  </div>
                </div>

                {/* Success Output */}
                <div className="text-green-400 mb-6">
                  <div>✅ Transaction sent successfully!</div>
                  <div>🎉 Welcome to the Algorand ecosystem</div>
                </div>

                {/* Prompt */}
                <div className="flex items-center">
                  <span className="text-accent mr-2">$</span>
                  <div className="w-2 h-5 bg-accent animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Action Buttons Below Terminal */}
            <div className="mt-12 text-center">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Start Building in Seconds</h3>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Copy the commands above or click below to access our comprehensive documentation
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-accent text-black hover:bg-accent/90 font-bold text-lg px-8 py-6 min-w-48"
                  onClick={() => navigator.clipboard.writeText('npm install algopos')}
                >
                  <Copy className="mr-3 h-5 w-5" />
                  Copy Install Command
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-6 min-w-48"
                >
                  <Code className="mr-3 h-5 w-5" />
                  View Full Docs
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-600 text-white hover:bg-gray-800 text-lg px-8 py-6 min-w-48"
                >
                  <svg className="mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                  GitHub Repo
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">5min</div>
                  <div className="text-gray-400 text-sm">Setup Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">1000+</div>
                  <div className="text-gray-400 text-sm">Developers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Live Apps</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">AlgoPOS</h3>
              <p className="text-muted-foreground">
                Bridging Web2 and Web3 with developer-friendly blockchain tools.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Docs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">API Reference</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Examples</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Community</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">GitHub</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Discord</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Twitter</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Brand Guidelines</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t">
            <p className="text-center text-muted-foreground">
              © 2025 AlgoPOS. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
