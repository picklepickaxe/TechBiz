import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  Factory,
  Lightbulb,
  ArrowRight,
  Check,
  ChevronLeft,
} from "lucide-react";

export default function BusinessTypes() {
  const businessTypes = [
    {
      id: "sole-proprietorship",
      icon: <Users className="h-8 w-8" />,
      title: "Sole Proprietorship",
      description:
        "Perfect for individual entrepreneurs starting their first business",
      features: [
        "Single owner structure",
        "Minimal compliance requirements",
        "Direct control over business",
        "Simple tax filing",
      ],
      timeToSetup: "3-5 days",
      cost: "₹2,000 - ₹5,000",
      recommended: false,
    },
    {
      id: "partnership",
      icon: <Users className="h-8 w-8" />,
      title: "Partnership",
      description:
        "Ideal for businesses with multiple partners sharing responsibilities",
      features: [
        "Shared ownership and responsibilities",
        "Partnership deed required",
        "Shared profits and losses",
        "Multiple skill sets",
      ],
      timeToSetup: "7-10 days",
      cost: "₹5,000 - ₹10,000",
      recommended: false,
    },
    {
      id: "msme",
      icon: <Factory className="h-8 w-8" />,
      title: "MSME",
      description: "Micro, Small & Medium Enterprises with government benefits",
      features: [
        "Government scheme benefits",
        "Easy loan access",
        "Tax exemptions",
        "Udyam registration",
      ],
      timeToSetup: "5-7 days",
      cost: "₹3,000 - ₹8,000",
      recommended: true,
    },
    {
      id: "startup",
      icon: <Lightbulb className="h-8 w-8" />,
      title: "DPIIT Startup",
      description: "Innovation-driven entities with DPIIT recognition benefits",
      features: [
        "Income tax exemption for 3 years",
        "Fast-track patent examination",
        "Self-certification compliance",
        "Government tenders priority",
      ],
      timeToSetup: "15-30 days",
      cost: "₹10,000 - ₹25,000",
      recommended: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-techbiz-blue" />
              <span className="text-2xl font-bold text-techbiz-navy">
                TechBiz
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                Log In
              </Button>
              <Button size="sm">Sign Up</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 bg-gradient-to-r from-techbiz-blue to-techbiz-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your Business Structure
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Select the business type that best fits your goals and
              requirements. Each structure has different benefits, compliance
              requirements, and growth potential.
            </p>
          </div>
        </div>
      </section>

      {/* Business Types Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {businessTypes.map((type) => (
              <Card
                key={type.id}
                className={`relative border-2 hover:shadow-xl transition-all hover:-translate-y-1 ${
                  type.recommended
                    ? "border-techbiz-green shadow-lg ring-2 ring-techbiz-green/20"
                    : "border-gray-200 hover:border-techbiz-blue/50"
                }`}
              >
                {type.recommended && (
                  <Badge className="absolute -top-3 left-6 bg-techbiz-green text-white">
                    Recommended
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                      type.recommended
                        ? "bg-techbiz-green/10 text-techbiz-green"
                        : "bg-techbiz-blue/10 text-techbiz-blue"
                    }`}
                  >
                    {type.icon}
                  </div>
                  <CardTitle className="text-2xl text-techbiz-navy">
                    {type.title}
                  </CardTitle>
                  <CardDescription className="text-base text-techbiz-gray">
                    {type.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-techbiz-navy mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {type.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center text-techbiz-gray"
                        >
                          <Check className="h-4 w-4 text-techbiz-green mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeline and Cost */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-sm text-techbiz-gray">Setup Time</p>
                      <p className="font-semibold text-techbiz-navy">
                        {type.timeToSetup}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-techbiz-gray">
                        Estimated Cost
                      </p>
                      <p className="font-semibold text-techbiz-navy">
                        {type.cost}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link to={`/compliance?type=${type.id}`} className="block">
                    <Button
                      className={`w-full ${
                        type.recommended
                          ? "bg-techbiz-green hover:bg-techbiz-green/90"
                          : "bg-techbiz-blue hover:bg-techbiz-blue/90"
                      } text-white`}
                      size="lg"
                    >
                      Start {type.title} Journey
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-techbiz-navy mb-6">
              Need Help Deciding?
            </h2>
            <p className="text-xl text-techbiz-gray mb-8">
              Our experts can help you choose the right business structure based
              on your specific needs, investment capacity, and growth plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/schemes">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-techbiz-blue text-techbiz-blue hover:bg-techbiz-blue hover:text-white"
                >
                  Compare Government Schemes
                </Button>
              </Link>
              <Button
                size="lg"
                className="bg-techbiz-blue hover:bg-techbiz-blue/90 text-white"
              >
                Consult an Expert
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
