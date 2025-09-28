"use client"
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy } from "lucide-react";
import Link from "next/link";
import Npm from "./icons/Npm";
import RedirectButton from "./RedirectButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40">
      <img src="/shapes/Corners.svg" alt="corners" className="absolute right-[-200px] top-0 bottom-0" />
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
              <RedirectButton />
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
                <div className="text-xs text-muted-foreground font-medium">AlgoFlow.js</div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={() => navigator.clipboard.writeText(`import { sendPayment } from "AlgoFlow"

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
                  <code>{`import { sendPayment } from "AlgoFlow"

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
                  onClick={() => navigator.clipboard.writeText(`import { writeData } from "AlgoFlow"

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
                  <code>{`import { writeData } from "AlgoFlow"

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