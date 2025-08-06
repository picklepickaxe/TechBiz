import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { 
  Sparkles, 
  Wand2, 
  Star, 
  MessageCircle,
  ArrowRight,
  X
} from "lucide-react";

export default function BusinessWizard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);

  const wizardTips = [
    "💡 Did you know? MSME registration gives you access to 200+ government schemes!",
    "🚀 Startups with DPIIT recognition get 3 years of income tax exemption!",
    "⚡ GST registration can be completed online in just 3-5 days!",
    "🎯 Professional tax varies by state - Delhi has competitive rates!",
    "🏆 Shop & Establishment license is mandatory for all commercial setups!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % wizardTips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Floating Wizard Button */}
      {!isExpanded && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsExpanded(true)}
            className="relative group bg-gradient-to-r from-techbiz-blue-primary to-techbiz-blue-secondary hover:from-techbiz-blue-primary/90 hover:to-techbiz-blue-secondary/90 text-white p-4 rounded-full shadow-2xl animate-wizard-float"
          >
            {/* Magic sparkles around the button */}
            <div className="absolute -top-2 -left-2 w-3 h-3 bg-yellow-400 rounded-full animate-magic-sparkle"></div>
            <div className="absolute -top-1 -right-3 w-2 h-2 bg-yellow-300 rounded-full animate-magic-sparkle" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute -bottom-2 -left-3 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-magic-sparkle" style={{animationDelay: '1s'}}></div>
            <div className="absolute -bottom-1 -right-2 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-magic-sparkle" style={{animationDelay: '1.5s'}}></div>
            
            <div className="flex items-center gap-3">
              <Wand2 className="h-6 w-6 animate-float" />
              <div className="text-left">
                <div className="font-bold text-lg">Your Business</div>
                <div className="font-bold text-lg">Wizard</div>
              </div>
            </div>
            
            {/* Pulsing glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-techbiz-blue-primary to-techbiz-blue-secondary animate-pulse-glow opacity-75"></div>
          </Button>

          {/* Floating tip bubble */}
          <div className="absolute bottom-full right-0 mb-4 w-80 transform transition-all duration-300 hover:scale-105">
            <Card className="border-techbiz-blue-primary/30 bg-white/95 backdrop-blur-sm shadow-xl animate-bounce-in">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-gradient-to-br from-techbiz-blue-primary to-techbiz-blue-secondary rounded-full animate-pulse-glow">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-techbiz-navy mb-1">
                      Wizard Tip #{currentTip + 1}
                    </p>
                    <p className="text-sm text-techbiz-navy/70 animate-fade-in">
                      {wizardTips[currentTip]}
                    </p>
                  </div>
                </div>
                {/* Speech bubble arrow */}
                <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-techbiz-blue-primary/30"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Expanded Wizard Panel */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed bottom-0 right-0 w-full max-w-md h-[500px] bg-gradient-to-b from-techbiz-light to-white shadow-2xl animate-bounce-in">
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="bg-gradient-to-r from-techbiz-blue-primary to-techbiz-blue-secondary p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-techbiz-blue-primary to-techbiz-blue-secondary animate-gradient-shift opacity-20"></div>
                
                {/* Floating sparkles */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-sparkle"></div>
                <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-sparkle" style={{animationDelay: '0.7s'}}></div>
                <div className="absolute bottom-4 left-8 w-1 h-1 bg-yellow-500 rounded-full animate-sparkle" style={{animationDelay: '1.4s'}}></div>
                
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white/20 rounded-full animate-wizard-float">
                      <Wand2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Your Business Wizard</h3>
                      <p className="text-white/80 text-sm">AI-powered guidance for your journey</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(false)}
                    className="text-white hover:bg-white/20 p-2"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                <div className="space-y-4">
                  <h4 className="font-semibold text-techbiz-navy flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500 animate-sparkle" />
                    Quick Business Insights
                  </h4>
                  
                  <div className="space-y-3">
                    {wizardTips.map((tip, index) => (
                      <Card 
                        key={index}
                        className={`border transition-all duration-300 hover:shadow-md cursor-pointer ${
                          index === currentTip 
                            ? 'border-techbiz-blue-primary bg-techbiz-blue-primary/5 animate-pulse-glow' 
                            : 'border-gray-200 hover:border-techbiz-blue-primary/50'
                        }`}
                        onClick={() => setCurrentTip(index)}
                      >
                        <CardContent className="p-3">
                          <p className="text-sm text-techbiz-navy/80">{tip}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-techbiz-navy mb-3 flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-techbiz-blue-primary animate-float" />
                    Quick Actions
                  </h4>
                  
                  <div className="space-y-2">
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-techbiz-blue-primary/30 hover:bg-techbiz-blue-primary/10 text-techbiz-navy"
                    >
                      <Sparkles className="mr-2 h-4 w-4 text-techbiz-blue-primary" />
                      Find My Perfect Business Type
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full justify-start border-techbiz-blue-primary/30 hover:bg-techbiz-blue-primary/10 text-techbiz-navy"
                    >
                      <Wand2 className="mr-2 h-4 w-4 text-techbiz-blue-primary" />
                      Check Scheme Eligibility
                    </Button>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-techbiz-blue-primary to-techbiz-blue-secondary hover:from-techbiz-blue-primary/90 hover:to-techbiz-blue-secondary/90 text-white animate-pulse-glow"
                    >
                      Start Business Journey
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
