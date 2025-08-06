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
            className="p-4 rounded-full shadow-lg"
            style={{ backgroundColor: '#fcd2f1', color: '#000' }}
          >
            <div className="flex items-center gap-3">
              <Wand2 className="h-6 w-6" />
              <div className="text-left">
                <div className="font-bold text-lg">Your Business</div>
                <div className="font-bold text-lg">Wizard</div>
              </div>
            </div>
          </Button>

          {/* Floating tip bubble */}
          <div className="absolute bottom-full right-0 mb-4 w-80">
            <Card className="border-techbiz-purple/30 bg-card/95 backdrop-blur-sm shadow-xl">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-techbiz-purple/20 rounded-full">
                    <Sparkles className="h-4 w-4 text-techbiz-purple" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground mb-1">
                      Wizard Tip #{currentTip + 1}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {wizardTips[currentTip]}
                    </p>
                  </div>
                </div>
                {/* Speech bubble arrow */}
                <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-card border-r border-b border-techbiz-purple/30"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Expanded Wizard Panel */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed bottom-0 right-0 w-full max-w-md h-[500px] bg-card shadow-2xl">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="bg-techbiz-purple p-6 text-primary-foreground">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-primary-foreground/20 rounded-full">
                      <Wand2 className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Your Business Wizard</h3>
                      <p className="text-primary-foreground/80 text-sm">AI-powered guidance for your journey</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(false)}
                    className="text-primary-foreground hover:bg-primary-foreground/20 p-2"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Star className="h-4 w-4 text-techbiz-purple" />
                    Quick Business Insights
                  </h4>
                  
                  <div className="space-y-3">
                    {wizardTips.map((tip, index) => (
                      <Card
                        key={index}
                        className={`border transition-colors cursor-pointer ${
                          index === currentTip
                            ? 'border-techbiz-purple bg-techbiz-purple/5'
                            : 'border-border hover:border-techbiz-purple/50'
                        }`}
                        onClick={() => setCurrentTip(index)}
                      >
                        <CardContent className="p-3">
                          <p className="text-sm text-muted-foreground">{tip}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-techbiz-purple" />
                    Quick Actions
                  </h4>
                  
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      className="w-full justify-start border-techbiz-purple/30 hover:bg-techbiz-purple/10 text-muted-foreground"
                    >
                      <Sparkles className="mr-2 h-4 w-4 text-techbiz-purple" />
                      Find My Perfect Business Type
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-start border-techbiz-purple/30 hover:bg-techbiz-purple/10 text-muted-foreground"
                    >
                      <Wand2 className="mr-2 h-4 w-4 text-techbiz-purple" />
                      Check Scheme Eligibility
                    </Button>

                    <Button
                      className="w-full bg-techbiz-purple hover:bg-techbiz-purple/90 text-primary-foreground"
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
