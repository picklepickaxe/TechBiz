import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";
import ThemeToggle from "@/components/ThemeToggle";
import BusinessWizard from "@/components/BusinessWizard";
import {
  Building2,
  CheckCircle,
  Users,
  FileText,
  Shield,
  TrendingUp,
  Clock,
  ArrowRight,
  Play,
  Star,
  Sparkles
} from "lucide-react";

export default function Index() {
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: 'login' | 'signup' }>({ isOpen: false, type: 'login' });

  const features = [
    {
      icon: <Building2 className="h-6 w-6" />,
      title: "Business Registration",
      description: "Streamlined process for all types of business entities"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "License Management",
      description: "Track and manage all your licenses in one place"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Monitoring", 
      description: "Stay compliant with automated reminders and updates"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth Schemes",
      description: "Discover government schemes tailored for your business"
    }
  ];

  const businessTypes = [
    "Sole Proprietorship",
    "Partnership", 
    "MSME",
    "DPIIT Startup"
  ];

  const stats = [
    { value: "50K+", label: "Businesses Registered" },
    { value: "200+", label: "Government Schemes" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-techbiz-blue" />
              <span className="text-2xl font-bold text-techbiz-navy">TechBiz</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/business-types" className="text-techbiz-navy/70 hover:text-techbiz-blue-primary transition-colors font-medium">
                Business Types
              </Link>
              <Link to="/schemes" className="text-techbiz-navy/70 hover:text-techbiz-blue-primary transition-colors font-medium">
                Schemes
              </Link>
              <Link to="/compliance" className="text-techbiz-navy/70 hover:text-techbiz-blue-primary transition-colors font-medium">
                Compliance
              </Link>
              <ThemeToggle />
              <Button
                variant="outline"
                size="sm"
                onClick={() => setAuthModal({ isOpen: true, type: 'login' })}
                className="border-techbiz-blue-primary/30 text-techbiz-blue-primary hover:bg-techbiz-blue-primary hover:text-white transition-all duration-300"
              >
                Log In
              </Button>
              <Button
                size="sm"
                onClick={() => setAuthModal({ isOpen: true, type: 'signup' })}
                className="bg-gradient-to-r from-techbiz-blue-primary to-techbiz-blue-secondary hover:from-techbiz-blue-primary/90 hover:to-techbiz-blue-secondary/90 text-white animate-pulse-glow"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-gradient-shift"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/assets/726f008e16a94111b516c224280e89a9/project-4682c6?format=webp&width=1200')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-techbiz-light/70 to-white/80"></div>

          {/* Floating animated elements */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-techbiz-blue-primary/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-techbiz-blue-secondary/30 rounded-full animate-float-reverse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 left-40 w-2 h-2 bg-techbiz-blue-primary/25 rounded-full animate-sparkle" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-techbiz-blue-primary/10 text-techbiz-blue-primary border-techbiz-blue-primary/20 animate-bounce-in">
              <Sparkles className="mr-2 h-3 w-3 animate-sparkle" />
              Solutions for Ease of Doing Business (EODB)
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-techbiz-navy mb-6 leading-tight animate-bounce-in">
              Easing out business activities for
              <span className="text-techbiz-blue-primary bg-gradient-to-r from-techbiz-blue-primary to-techbiz-blue-secondary bg-clip-text text-transparent animate-gradient-shift"> growth</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-techbiz-navy/70 mb-8 max-w-3xl mx-auto leading-relaxed animate-bounce-in" style={{animationDelay: '0.2s'}}>
              Navigate Delhi's business landscape with confidence. From registration to compliance,
              we simplify every step of your entrepreneurial journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-bounce-in" style={{animationDelay: '0.4s'}}>
              <Link to="/business-types">
                <Button size="lg" className="bg-gradient-to-r from-techbiz-blue-primary to-techbiz-blue-secondary hover:from-techbiz-blue-primary/90 hover:to-techbiz-blue-secondary/90 text-white px-8 py-6 text-lg animate-pulse-glow shadow-xl">
                  <Sparkles className="mr-2 h-5 w-5 animate-sparkle" />
                  Start Your Business Journey
                  <ArrowRight className="ml-2 h-5 w-5 animate-float" />
                </Button>
              </Link>

              <Link to="/schemes">
                <Button variant="outline" size="lg" className="border-techbiz-blue-primary text-techbiz-blue-primary hover:bg-techbiz-blue-primary hover:text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-lg">
                  Compare Schemes
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-bounce-in" style={{animationDelay: `${0.6 + index * 0.1}s`}}>
                  <div className="text-3xl md:text-4xl font-bold text-techbiz-navy mb-2 animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                    {stat.value}
                  </div>
                  <div className="text-techbiz-navy/60 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Challenges Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-techbiz-navy mb-6">
              Business Challenges We Solve
            </h2>
            <p className="text-xl text-techbiz-gray">
              Businesses face numerous obstacles in today's complex regulatory environment. 
              TechBiz addresses these pain points with innovative solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Clock className="h-8 w-8 text-techbiz-blue mb-4" />
                <CardTitle className="text-techbiz-navy">Time-Consuming Processes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Redundant and fragmented regulatory processes that delay business operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <FileText className="h-8 w-8 text-techbiz-blue mb-4" />
                <CardTitle className="text-techbiz-navy">Lack of Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  No real-time tracking of approvals and licenses, leading to uncertainty.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-techbiz-blue mb-4" />
                <CardTitle className="text-techbiz-navy">Dependency on Middlemen</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  High dependency on consultants increases costs and reduces transparency.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-techbiz-navy mb-6">
              Why Choose TechBiz?
            </h2>
            <p className="text-xl text-techbiz-gray">
              Our platform provides end-to-end solutions for all your business needs in Delhi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-gradient-to-br from-techbiz-blue-primary/10 to-techbiz-blue-secondary/10 rounded-full flex items-center justify-center text-techbiz-blue-primary mb-4 group-hover:animate-pulse-glow transition-all duration-300">
                    <div className="animate-float" style={{animationDelay: `${index * 0.3}s`}}>
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-techbiz-navy">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-techbiz-navy/70">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types Quick Access */}
      <section className="py-20 bg-gradient-to-br from-techbiz-blue-primary via-techbiz-blue-secondary to-techbiz-blue-primary text-white relative overflow-hidden animate-gradient-shift">
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-white/5 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/10 rounded-full animate-sparkle"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Select Your Business Type
            </h2>
            <p className="text-xl mb-12 text-blue-100">
              Get personalized guidance based on your business structure
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {businessTypes.map((type, index) => (
                <Link key={index} to="/business-types">
                  <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group hover:shadow-2xl animate-bounce-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <CardHeader className="text-center py-8">
                      <CardTitle className="text-white text-base md:text-lg group-hover:animate-float transition-all duration-300">
                        {type}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <Link to="/business-types">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-techbiz-blue-primary hover:bg-gray-100 px-8 py-6 text-lg animate-pulse-glow shadow-xl"
                >
                  <Sparkles className="mr-2 h-5 w-5 animate-sparkle" />
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5 animate-float" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Wizard */}
      <BusinessWizard />

      {/* Auth Modal */}
      <AuthModal
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ isOpen: false, type: 'login' })}
        defaultTab={authModal.type}
      />

      {/* Footer */}
      <footer className="bg-techbiz-navy text-white py-16 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-techbiz-navy to-techbiz-blue-primary/20 animate-gradient-shift opacity-30"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6 relative">
                <Building2 className="h-8 w-8 text-techbiz-blue-primary animate-float" />
                <span className="text-2xl font-bold">TechBiz</span>
              </div>
              <p className="text-white/70 mb-6 max-w-md">
                Simplifying business operations in Delhi with innovative digital solutions
                for entrepreneurs and enterprises.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-white/30 text-white/70 hover:bg-white/10 transition-all duration-300">
                  Contact Support
                </Button>
              </div>
            </div>

            <div className="relative">
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-white/70">
                <li><Link to="/business-types" className="hover:text-techbiz-blue-primary transition-colors animate-float" style={{animationDelay: '0.1s'}}>Business Registration</Link></li>
                <li><Link to="/compliance" className="hover:text-techbiz-blue-primary transition-colors animate-float" style={{animationDelay: '0.2s'}}>License Management</Link></li>
                <li><Link to="/schemes" className="hover:text-techbiz-blue-primary transition-colors animate-float" style={{animationDelay: '0.3s'}}>Government Schemes</Link></li>
              </ul>
            </div>

            <div className="relative">
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-white/70">
                <li><Link to="/help" className="hover:text-techbiz-blue-primary transition-colors animate-float" style={{animationDelay: '0.4s'}}>Help Center</Link></li>
                <li><Link to="/guides" className="hover:text-techbiz-blue-primary transition-colors animate-float" style={{animationDelay: '0.5s'}}>Business Guides</Link></li>
                <li><Link to="/contact" className="hover:text-techbiz-blue-primary transition-colors animate-float" style={{animationDelay: '0.6s'}}>Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70 relative">
            <p className="animate-bounce-in">&copy; 2024 TechBiz. All rights reserved. Empowering businesses in Delhi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
