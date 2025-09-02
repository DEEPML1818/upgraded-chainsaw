import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/home"));
const Services = lazy(() => import("@/pages/services"));
const ITServices = lazy(() => import("@/pages/it-services"));
const ManagedITServices = lazy(() => import("@/pages/managed-it-services"));
const Consulting = lazy(() => import("@/pages/consulting"));
const Solutions = lazy(() => import("@/pages/solutions"));
const About = lazy(() => import("@/pages/about"));
const Contact = lazy(() => import("@/pages/contact"));
const NotFound = lazy(() => import("@/pages/not-found"));

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-400"></div>
    </div>}>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/services" component={Services}/>
        <Route path="/it-services" component={ITServices}/>
        <Route path="/managed-it-services" component={ManagedITServices}/>
        <Route path="/consulting" component={Consulting}/>
        <Route path="/solution" component={Solutions}/>
        <Route path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
