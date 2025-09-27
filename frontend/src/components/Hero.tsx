"use client"
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy } from "lucide-react";

export function Hero() {
  return (
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
              <Button size="lg" className="shine-effect bg-primary text-white hover:bg-primary/90 text-lg px-8 py-6 transition-all">
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
                <div className="text-xs text-muted-foreground font-medium">algopos.js</div>
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
                <div className="text-xs text-muted-foreground font-medium">data.js</div>
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
  );
}