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
  const [messagesEndRef, setMessagesEndRef] = useState(null);

  const wizardTips = [
    "💡 Did you know? MSME registration gives you access to 200+ government schemes!",
    "🚀 Startups with DPIIT recognition get 3 years of income tax exemption!",
    "⚡ GST registration can be completed online in just 3-5 days!",
    "🎯 Professional tax varies by state - Delhi has competitive rates!",
    "🏆 Shop & Establishment license is mandatory for all commercial setups!",
  ];

  const aiResponses = {
    // Business Registration
    'business registration': 'To register your business, you\'ll need: 1) Choose business structure (Sole Proprietorship, Partnership, MSME, or Startup) 2) Prepare required documents 3) Complete online registration. The process typically takes 5-7 days. Would you like me to guide you through choosing the right structure?',
    'register': 'To register your business, you\'ll need: 1) Choose business structure (Sole Proprietorship, Partnership, MSME, or Startup) 2) Prepare required documents 3) Complete online registration. The process typically takes 5-7 days. Would you like me to guide you through choosing the right structure?',
    'registration': 'Business registration in Delhi involves selecting the right structure, preparing documents, and completing online applications. I can help you understand which type suits your business best. What\'s your business idea?',

    // MSME
    'msme': 'MSME registration provides access to 50+ government schemes, easier loan approvals, and tax benefits. It\'s free and can be completed online through the Udyam portal in 1-2 days. Benefits include priority lending, lower interest rates, and government tender advantages.',
    'udyam': 'Udyam registration is the new MSME registration process. It\'s completely online, free, and requires only Aadhaar and PAN. You get instant certificate and access to numerous government benefits.',

    // GST
    'gst': 'GST registration is mandatory for businesses with turnover above ₹40 lakhs (₹20 lakhs for services). You\'ll need PAN, business registration certificate, and bank details. Processing takes 3-5 days. I can help you understand GST rates for your business type.',
    'tax': 'GST registration is mandatory for businesses with turnover above ₹40 lakhs (₹20 lakhs for services). You\'ll need PAN, business registration certificate, and bank details. Processing takes 3-5 days. I can help you understand GST rates for your business type.',

    // Startup
    'startup': 'DPIIT Startup recognition offers 3 years income tax exemption, fast-track patent examination, and access to government schemes. Your startup should be less than 10 years old and have innovative business model. The application process is online and free.',
    'dpiit': 'DPIIT recognition provides startups with tax exemptions, patent benefits, and easier compliance. The process involves online application with business plan, incorporation certificate, and innovation details.',

    // Schemes
    'schemes': 'Popular schemes include: PM MUDRA (loans up to ₹10 lakh), Stand-Up India (₹10 lakh - ₹1 crore), PM SVANidhi (street vendors), and Startup India Seed Fund. Each has specific eligibility criteria. Which business sector are you in?',
    'loan': 'Government loan schemes include MUDRA (up to ₹10L), Stand-Up India (₹10L-₹1Cr), and various state schemes. Interest rates are subsidized and collateral requirements are minimal. What\'s your loan requirement?',
    'funding': 'Funding options include government schemes like MUDRA, angel investors, and startup grants. For early-stage businesses, government schemes offer the best terms. What stage is your business at?',

    // Licenses
    'license': 'Common licenses include: Shop & Establishment (mandatory), Professional Tax, FSSAI (food businesses), Pollution Clearance (manufacturing), and Import-Export Code (international trade). Requirements vary by business type.',
    'fssai': 'FSSAI license is mandatory for food businesses. Basic registration for small businesses (turnover <₹12L), State license for medium (₹12L-₹20Cr), and Central license for large businesses. Processing takes 7-15 days.',
    'shop establishment': 'Shop & Establishment license is mandatory for all commercial establishments. It\'s required for hiring employees, opening bank accounts, and other business activities. Application is online through state portal.',

    // Compliance
    'compliance': 'Business compliance includes regular filing of returns, license renewals, and maintaining statutory records. Key areas: GST returns, income tax, labor compliance, and environmental clearances.',
    'documents': 'Essential business documents include: Incorporation certificate, PAN card, GST certificate, bank account details, registered office proof, and director/partner details. Keep digital and physical copies.',

    // General Queries
    'help': 'I can help you with business registration, licensing, government schemes, compliance requirements, and funding options. What specific area would you like to explore?',
    'cost': 'Business setup costs vary: Sole Proprietorship (₹2K-₹5K), Partnership (₹5K-₹10K), MSME registration (Free), GST registration (Free). Professional services may cost extra. What business structure interests you?',
    'time': 'Timeline varies: Business registration (3-7 days), GST (3-5 days), MSME (1-2 days), FSSAI (7-15 days). Parallel processing can reduce overall time. Planning to start soon?',
    'delhi': 'Delhi offers excellent business infrastructure with single-window clearances, online services, and startup-friendly policies. The Delhi Startup Policy provides additional benefits for new businesses.',

    // Default responses
    'greeting': 'Hello! I\'m your Business Wizard, here to guide you through business registration, licensing, and compliance in Delhi. I can help with MSME registration, GST, government schemes, and much more. What would you like to know?',
    'thanks': 'You\'re welcome! Feel free to ask any other questions about business registration, licensing, or government schemes. I\'m here to help make your business journey smooth!',
    'default': 'I can help you with business registration, MSME benefits, GST registration, startup schemes, government licensing, and compliance requirements. Could you be more specific about what you\'d like to know?'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % wizardTips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const generateAIResponse = (userMessage) => {
    const message = userMessage.toLowerCase().trim();

    // Handle greetings
    if (/^(hi|hello|hey|good morning|good afternoon|good evening)/.test(message)) {
      return aiResponses.greeting;
    }

    // Handle thanks
    if (/thank|thanks/.test(message)) {
      return aiResponses.thanks;
    }

    // Handle help requests
    if (/help|assist|guide/.test(message)) {
      return aiResponses.help;
    }

    // More intelligent keyword matching with priority
    const keywords = Object.keys(aiResponses).filter(key => !['greeting', 'thanks', 'default'].includes(key));

    // Check for exact matches first
    for (const keyword of keywords) {
      if (message.includes(keyword)) {
        return aiResponses[keyword];
      }
    }

    // Check for related terms
    if (/register|start.*business|new.*business|open.*business/.test(message)) {
      return aiResponses['business registration'];
    }

    if (/money|fund|capital|invest/.test(message)) {
      return aiResponses.funding;
    }

    if (/permit|permission|legal/.test(message)) {
      return aiResponses.license;
    }

    if (/small.*business|micro.*enterprise/.test(message)) {
      return aiResponses.msme;
    }

    if (/how.*much|price|fee|charge/.test(message)) {
      return aiResponses.cost;
    }

    if (/how.*long|duration|timeline/.test(message)) {
      return aiResponses.time;
    }

    return aiResponses.default;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const currentInput = inputMessage;
    const userMessage = {
      id: Date.now(),
      text: currentInput,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate realistic AI thinking time (1-3 seconds based on message length)
    const thinkingTime = Math.min(3000, Math.max(1000, currentInput.length * 50));

    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        text: generateAIResponse(currentInput),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, thinkingTime);
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
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your question here... e.g., 'How do I start a business in Delhi?'"
                      className="flex-1 border-border dark:border-gray-600 text-sm"
                      onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                      disabled={isTyping}
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim() || isTyping}
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="text-xs text-muted-foreground dark:text-gray-400 px-1">
                    💡 Try asking: \"What documents do I need for GST?\" or \"How much does business registration cost?\"
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-2 mt-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputMessage("How do I register my business?")}
                    className="text-xs"
                  >
                    🏢 Business Registration
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputMessage("What are MSME benefits?")}
                    className="text-xs"
                  >
                    🏭 MSME Benefits
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputMessage("Show me government schemes")}
                    className="text-xs"
                  >
                    💰 Schemes
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setInputMessage("What licenses do I need?")}
                    className="text-xs"
                  >
                    📋 Licenses
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
