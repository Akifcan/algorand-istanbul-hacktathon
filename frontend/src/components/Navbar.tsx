"use client"
import { Button } from "@/components/ui/button";
import { supabase } from "@/config/supabase";
import useUserStore from "@/store/user";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export function Navbar() {

  const { user, setUser } = useUserStore()

  const handleSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    if (error) {
      return
    }
    if(!data.session){
      return
    }

    if (!data.session) {
      return
    }
    
    setUser({ email: data.session?.user.email!, id: data.session.user.id })
  }

  useEffect(() => {
    handleSession()
  }, [])

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={'/'}>
            <div className="flex items-center gap-2">
              <img src="/images/logo.png" alt="logo" style={{ width: 100, height: 70, objectFit: 'cover' }} />
              <h1 className="text-2xl font-bold text-foreground">AlgoPOS</h1>
            </div>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center text-center space-x-8">
              <a href="#features" className="text-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium">Features</a>
              <a href="#use-cases" className="text-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium">Use Cases</a>
              <a href="/docs" className="text-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium">Docs</a>
              <a href="#github" className="text-foreground hover:text-accent transition-colors px-3 py-2 text-sm font-medium">GitHub</a>
            </div>
          </div>
          <div className="hidden md:block">
            {!user && (
              <Link href={'/login'}>
                <Button className="bg-accent text-white hover:bg-accent/90">
                  Get Started
                </Button>
              </Link>
            )}
            {user && <Link href={'/dashboard'}>
              <Button className="bg-accent text-white hover:bg-accent/90">
                Go to dashboard
              </Button>
            </Link>
            }
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}