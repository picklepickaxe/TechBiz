import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { 
  Building2, 
  Mail, 
  Lock, 
  User, 
  Phone,
  Eye,
  EyeOff,
  Sparkles
} from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: "login" | "signup";
}

export default function AuthModal({ isOpen, onClose, defaultTab = "login" }: AuthModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[450px] p-0 overflow-hidden bg-techbiz-light border-techbiz-blue-primary/20">
        <div className="relative">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-techbiz-blue-primary/10 to-techbiz-blue-secondary/10 animate-gradient-shift"></div>
          
          {/* Floating sparkles */}
          <div className="absolute top-4 right-4 w-2 h-2 bg-techbiz-blue-primary rounded-full animate-sparkle"></div>
          <div className="absolute top-12 left-8 w-1 h-1 bg-techbiz-blue-secondary rounded-full animate-sparkle" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-8 right-12 w-1.5 h-1.5 bg-techbiz-blue-primary rounded-full animate-sparkle" style={{animationDelay: '0.5s'}}></div>

          <DialogHeader className="relative p-6 pb-2">
            <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-techbiz-navy">
              <div className="p-2 bg-gradient-to-br from-techbiz-blue-primary to-techbiz-blue-secondary rounded-full animate-pulse-glow">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              Welcome to TechBiz
            </DialogTitle>
          </DialogHeader>

          <div className="relative p-6 pt-2">
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6 bg-techbiz-blue-primary/10">
                <TabsTrigger 
                  value="login" 
                  className="data-[state=active]:bg-techbiz-blue-primary data-[state=active]:text-white transition-all duration-300"
                >
                  Login
                </TabsTrigger>
                <TabsTrigger 
                  value="signup"
                  className="data-[state=active]:bg-techbiz-blue-primary data-[state=active]:text-white transition-all duration-300"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 animate-bounce-in">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardHeader className="px-0 pb-4">
                    <CardDescription className="text-center text-techbiz-navy/70">
                      Continue your business journey with TechBiz
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-techbiz-navy font-medium">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-techbiz-blue-primary" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            className="pl-10 border-techbiz-blue-primary/30 focus:border-techbiz-blue-primary transition-colors"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-techbiz-navy font-medium">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-techbiz-blue-primary" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            className="pl-10 pr-10 border-techbiz-blue-primary/30 focus:border-techbiz-blue-primary transition-colors"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-techbiz-blue-primary/10"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-techbiz-blue-primary" />
                            ) : (
                              <Eye className="h-4 w-4 text-techbiz-blue-primary" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-techbiz-blue-primary to-techbiz-blue-secondary hover:from-techbiz-blue-primary/90 hover:to-techbiz-blue-secondary/90 text-white font-medium py-6 animate-pulse-glow"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Signing In...
                          </div>
                        ) : (
                          <>
                            <Sparkles className="mr-2 h-4 w-4" />
                            Sign In
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="text-center">
                      <Button variant="link" className="text-techbiz-blue-primary hover:text-techbiz-blue-secondary">
                        Forgot your password?
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4 animate-bounce-in">
                <Card className="border-0 shadow-none bg-transparent">
                  <CardHeader className="px-0 pb-4">
                    <CardDescription className="text-center text-techbiz-navy/70">
                      Start your business journey with TechBiz today
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-0 space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-techbiz-navy font-medium">First Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-techbiz-blue-primary" />
                            <Input
                              id="firstName"
                              placeholder="First name"
                              className="pl-10 border-techbiz-blue-primary/30 focus:border-techbiz-blue-primary transition-colors"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-techbiz-navy font-medium">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Last name"
                            className="border-techbiz-blue-primary/30 focus:border-techbiz-blue-primary transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signupEmail" className="text-techbiz-navy font-medium">Email</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-techbiz-blue-primary" />
                          <Input
                            id="signupEmail"
                            type="email"
                            placeholder="Enter your email"
                            className="pl-10 border-techbiz-blue-primary/30 focus:border-techbiz-blue-primary transition-colors"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-techbiz-navy font-medium">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-techbiz-blue-primary" />
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            className="pl-10 border-techbiz-blue-primary/30 focus:border-techbiz-blue-primary transition-colors"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="signupPassword" className="text-techbiz-navy font-medium">Password</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-techbiz-blue-primary" />
                          <Input
                            id="signupPassword"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a password"
                            className="pl-10 pr-10 border-techbiz-blue-primary/30 focus:border-techbiz-blue-primary transition-colors"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-techbiz-blue-primary/10"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-techbiz-blue-primary" />
                            ) : (
                              <Eye className="h-4 w-4 text-techbiz-blue-primary" />
                            )}
                          </Button>
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-techbiz-blue-primary to-techbiz-blue-secondary hover:from-techbiz-blue-primary/90 hover:to-techbiz-blue-secondary/90 text-white font-medium py-6 animate-pulse-glow"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Creating Account...
                          </div>
                        ) : (
                          <>
                            <Sparkles className="mr-2 h-4 w-4" />
                            Create Account
                          </>
                        )}
                      </Button>
                    </form>

                    <div className="text-center text-sm text-techbiz-navy/70">
                      By signing up, you agree to our{" "}
                      <Button variant="link" className="p-0 h-auto text-techbiz-blue-primary hover:text-techbiz-blue-secondary">
                        Terms of Service
                      </Button>{" "}
                      and{" "}
                      <Button variant="link" className="p-0 h-auto text-techbiz-blue-primary hover:text-techbiz-blue-secondary">
                        Privacy Policy
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
