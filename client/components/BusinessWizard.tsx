import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import {
  Sparkles,
  Wand2,
  Star,
  MessageCircle,
  ArrowRight,
  X,
  Send,
  Bot,
} from "lucide-react";

export default function BusinessWizard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTip, setCurrentTip] = useState(0);
  const [showTip, setShowTip] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Business Wizard. I can help you with business registration, licensing, and government schemes. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const wizardTips = [
    "💡 Did you know? MSME registration gives you access to 200+ government schemes!",
    "🚀 Startups with DPIIT recognition get 3 years of income tax exemption!",
    "⚡ GST registration can be completed online in just 3-5 days!",
    "🎯 Professional tax varies by state - Delhi has competitive rates!",
    "🏆 Shop & Establishment license is mandatory for all commercial setups!",
  ];

  const aiResponses = {
    'business registration': 'To register your business, you\'ll need: 1) Choose business structure (Sole Proprietorship, Partnership, MSME, or Startup) 2) Prepare required documents 3) Complete online registration. The process typically takes 5-7 days.',
    'msme': 'MSME registration provides access to 50+ government schemes, easier loan approvals, and tax benefits. It\'s free and can be completed online through the Udyam portal in 1-2 days.',
    'gst': 'GST registration is mandatory for businesses with turnover above ₹40 lakhs (₹20 lakhs for services). You\'ll need PAN, business registration certificate, and bank details. Processing takes 3-5 days.',
    'startup': 'DPIIT Startup recognition offers 3 years income tax exemption, fast-track patent examination, and access to government schemes. Your startup should be less than 10 years old and have innovative business model.',
    'schemes': 'Popular schemes include: PM MUDRA (loans up to ₹10 lakh), Stand-Up India (₹10 lakh - ₹1 crore), PM SVANidhi (street vendors), and Startup India Seed Fund. Each has specific eligibility criteria.',
    'license': 'Common licenses include: Shop & Establishment (mandatory), Professional Tax, FSSAI (food businesses), Pollution Clearance (manufacturing), and Import-Export Code (international trade).',
    'default': 'I can help you with business registration, MSME benefits, GST registration, startup schemes, government licensing, and compliance requirements. What specific topic interests you?'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % wizardTips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(aiResponses)) {
      if (key !== 'default' && message.includes(key)) {
        return response;
      }
    }
    return aiResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: generateAIResponse(inputMessage),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Wizard Button */}
      {!isExpanded && (
        <div className="fixed bottom-6 right-6 z-50 max-w-[calc(100vw-3rem)]">
          <Button
            onClick={() => {
              setIsExpanded(true);
              setShowTip(true); // Show tip again when opening wizard
            }}
            className="p-4 rounded-full shadow-lg bg-background dark:bg-[#696669] text-foreground dark:text-white border-2 border-border dark:border-[#696669] hover:shadow-xl hover:scale-105 transition-all duration-300 dark:hover:bg-[#7a747a]"
          >
            <div className="flex items-center gap-3">
              <Wand2 className="h-6 w-6" />
              <div className="text-left">
                <div className="font-bold text-lg">Your Business</div>
                <div className="font-bold text-lg">Wizard</div>
              </div>
            </div>
          </Button>

          {/* Floating tip bubble - only show when wizard is not expanded */}
          {showTip && !isExpanded && (
            <div className="absolute bottom-full right-0 mb-4 w-80 max-w-[calc(100vw-3rem)] -translate-x-4">
              <Card className="shadow-xl bg-background dark:bg-[#696669] border-border dark:border-[#696669] relative">
                <CardContent className="p-4 pr-10">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-muted dark:bg-white/20 rounded-full">
                      <Sparkles className="h-4 w-4 text-foreground dark:text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium mb-1 text-foreground dark:text-white">
                        Wizard Tip #{currentTip + 1}
                      </p>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">
                        {wizardTips[currentTip]}
                      </p>
                    </div>
                  </div>
                  {/* Close button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowTip(false)}
                    className="absolute top-2 right-2 h-6 w-6 p-0 hover:bg-muted dark:hover:bg-white/20 text-muted-foreground dark:text-gray-300 hover:text-foreground dark:hover:text-white"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                  {/* Speech bubble arrow */}
                  <div className="absolute bottom-0 right-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-background dark:bg-[#696669]"></div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      )}

      {/* Expanded Wizard Panel */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed bottom-4 right-4 w-full max-w-md max-h-[calc(100vh-2rem)] h-[500px] shadow-2xl rounded-lg overflow-hidden bg-background dark:bg-[#696669]">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="p-6 bg-background dark:bg-[#696669]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-muted dark:bg-white/20 rounded-full">
                      <Wand2 className="h-6 w-6 text-foreground dark:text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground dark:text-white">
                        Your Business Wizard
                      </h3>
                      <p className="text-sm text-muted-foreground dark:text-gray-300">
                        AI-powered guidance for your journey
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsExpanded(false)}
                    className="p-2 hover:bg-muted dark:hover:bg-white/20 text-foreground dark:text-white"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isBot
                            ? 'bg-muted dark:bg-white/20 text-foreground dark:text-white'
                            : 'bg-primary text-primary-foreground'
                        }`}
                      >
                        {message.isBot && (
                          <div className="flex items-center gap-2 mb-1">
                            <Bot className="h-3 w-3" />
                            <span className="text-xs opacity-70">AI Assistant</span>
                          </div>
                        )}
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted dark:bg-white/20 px-4 py-2 rounded-lg">
                        <div className="flex items-center gap-2">
                          <Bot className="h-3 w-3" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-border dark:border-gray-600">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask me about business registration, schemes, licenses..."
                    className="flex-1 border-border dark:border-gray-600"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputMessage("business registration")}
                    className="text-xs"
                  >
                    Business Registration
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputMessage("MSME benefits")}
                    className="text-xs"
                  >
                    MSME Benefits
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputMessage("government schemes")}
                    className="text-xs"
                  >
                    Schemes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
