"use client"
import { ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Settings, Menu, X, User, Bell, Search, LogOut, Play, Receipt } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "@/config/supabase";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import useUserStore from "@/store/user";

export default function DashboardLayout({children}: {children: ReactNode}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoading, setLoading] = useState(true)

  const pathname = usePathname();
  const router = useRouter();
  const { user, setUser } = useUserStore()

  
  const sidebarItems = [
    { id: "home", label: "Home", icon: Home, href: "/dashboard" },
    { id: "demo", label: "Demo", icon: Play, href: "/dashboard/demo" },
    { id: "transactions", label: "Transactions", icon: Receipt, href: "/dashboard/transactions" },
    { id: "settings", label: "Settings", icon: Settings, href: "/dashboard/settings" },
  ];

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Logout error:', error);
      } else {
        setUser(undefined)
        router.push('/login');
      }
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const handleSession = async () => {
    const { data, error } = await supabase.auth.getSession()
    if (error) {
      return
    }
    if(!data.session){
      return router.push('/login')
    }

    if (!data.session) {
      return router.push('/login')
    }
    
    setUser({ email: data.session?.user.email!, id: data.session.user.id })
    setLoading(false)
  }

  useEffect(() => {
    handleSession()
  }, [])

  if(isLoading){
    return <p>Please wait...</p>
  }

  return (
    <div className="min-h-screen h-full bg-background">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center px-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <img src="/images/logo-2.png" alt="logo" style={{width: 70}} />
              <h1 className="text-xl font-bold text-foreground">AlgoFlow</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-full" style={{height: 'calc(100vh - 65px)'}}>
        {/* Sidebar */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-muted/30 border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="flex h-full flex-col">
            <div className="flex h-16 items-center justify-between px-4 lg:hidden">
              <span className="text-lg font-semibold">Menu</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex-1 space-y-2 p-4">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-accent text-white"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="p-4 border-t">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-muted rounded-lg transition-colors">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-56 p-2" align="end" side="top">
                  <div className="space-y-1">
                    <div className="px-3 py-2 border-b">
                      <p className="text-xs text-muted-foreground">{user?.email}</p>
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign out
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-auto min-h-0">
          <div className="h-full flex flex-col px-4 py-8 lg:px-8">
            <div className="flex-1 space-y-6">
                {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}