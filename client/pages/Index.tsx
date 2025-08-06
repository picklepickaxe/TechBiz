import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
  Star
} from "lucide-react";

export default function Index() {
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
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/business-types" className="text-techbiz-gray hover:text-techbiz-blue transition-colors">
                Business Types
              </Link>
              <Link to="/schemes" className="text-techbiz-gray hover:text-techbiz-blue transition-colors">
                Schemes
              </Link>
              <Link to="/compliance" className="text-techbiz-gray hover:text-techbiz-blue transition-colors">
                Compliance
              </Link>
              <Button variant="outline" size="sm">
                Log In
              </Button>
              <Button size="sm">
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
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/assets/726f008e16a94111b516c224280e89a9/project-4682c6?format=webp&width=1200')`
          }}
        >
          <div className="absolute inset-0 bg-white/85"></div>
        </div>
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-techbiz-blue/10 text-techbiz-blue border-techbiz-blue/20">
              Solutions for Ease of Doing Business (EODB)
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-techbiz-navy mb-6 leading-tight">
              Easing out business activities for 
              <span className="text-techbiz-blue"> growth</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-techbiz-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              Navigate Delhi's business landscape with confidence. From registration to compliance, 
              we simplify every step of your entrepreneurial journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/business-types">
                <Button size="lg" className="bg-techbiz-blue hover:bg-techbiz-blue/90 text-white px-8 py-6 text-lg">
                  Start Your Business Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/schemes">
                <Button variant="outline" size="lg" className="border-techbiz-blue text-techbiz-blue hover:bg-techbiz-blue hover:text-white px-8 py-6 text-lg">
                  Compare Schemes
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-techbiz-navy mb-2">
                    {stat.value}
                  </div>
                  <div className="text-techbiz-gray text-sm md:text-base">
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
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-techbiz-blue/10 rounded-full flex items-center justify-center text-techbiz-blue mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg text-techbiz-navy">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types Quick Access */}
      <section className="py-20 bg-techbiz-blue text-white">
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
                  <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                    <CardHeader className="text-center py-8">
                      <CardTitle className="text-white text-base md:text-lg">
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
                  className="bg-white text-techbiz-blue hover:bg-gray-100 px-8 py-6 text-lg"
                >
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-techbiz-navy text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <Building2 className="h-8 w-8 text-techbiz-blue" />
                <span className="text-2xl font-bold">TechBiz</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Simplifying business operations in Delhi with innovative digital solutions 
                for entrepreneurs and enterprises.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-gray-600 text-gray-400 hover:bg-gray-800">
                  Contact Support
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/business-types" className="hover:text-white transition-colors">Business Registration</Link></li>
                <li><Link to="/compliance" className="hover:text-white transition-colors">License Management</Link></li>
                <li><Link to="/schemes" className="hover:text-white transition-colors">Government Schemes</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/guides" className="hover:text-white transition-colors">Business Guides</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechBiz. All rights reserved. Empowering businesses in Delhi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
