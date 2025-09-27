export function Footer() {
  return (
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
  );
}