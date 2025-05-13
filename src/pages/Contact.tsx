
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  MessageSquare, 
  Phone, 
  Send,
  User,
  Check
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
      
      // Reset form (would normally use a form library like react-hook-form)
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions about our AI-Powered Smart Plant Care System? We're here to help. Reach out using your preferred method below.
          </p>
        </div>
      </section>

      {/* Contact Methods Tabs */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="form" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="form">
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>Contact Form</span>
              </TabsTrigger>
              <TabsTrigger value="email">
                <Mail className="h-4 w-4 mr-2" />
                <span>Email</span>
              </TabsTrigger>
              <TabsTrigger value="phone">
                <Phone className="h-4 w-4 mr-2" />
                <span>Phone</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="form">
              <Card>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <div className="relative">
                          <Input 
                            id="name" 
                            placeholder="Enter your name" 
                            required 
                            className="pl-10" 
                          />
                          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="Enter your email" 
                            required 
                            className="pl-10" 
                          />
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input 
                        id="subject" 
                        placeholder="What is this regarding?" 
                        required 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message here..." 
                        required 
                        rows={6} 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full md:w-auto" disabled={submitting}>
                      {submitting ? (
                        <>Sending Message...</>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="email">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <Mail className="h-16 w-16 text-primary mx-auto" />
                    <h2 className="text-2xl font-bold">Email Us</h2>
                    <p className="text-muted-foreground mb-4">
                      Send us an email and we'll get back to you within 24-48 hours.
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" asChild>
                        <a href="mailto:info@smartplantcare.com">
                          <Mail className="mr-2 h-4 w-4" />
                          info@smartplantcare.com
                        </a>
                      </Button>
                      
                      <Button variant="outline" asChild>
                        <a href="mailto:support@smartplantcare.com">
                          <Mail className="mr-2 h-4 w-4" />
                          support@smartplantcare.com
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="phone">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center space-y-4">
                    <Phone className="h-16 w-16 text-primary mx-auto" />
                    <h2 className="text-2xl font-bold">Call Us</h2>
                    <p className="text-muted-foreground mb-4">
                      Speak directly with our team during business hours (9am - 5pm PST).
                    </p>
                    
                    <div className="space-y-4">
                      <Button variant="outline" className="w-full md:w-auto" asChild>
                        <a href="tel:+18005551234">
                          <Phone className="mr-2 h-4 w-4" />
                          Sales: (800) 555-1234
                        </a>
                      </Button>
                      
                      <Button variant="outline" className="w-full md:w-auto" asChild>
                        <a href="tel:+18005555678">
                          <Phone className="mr-2 h-4 w-4" />
                          Support: (800) 555-5678
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <Check className="text-primary mr-2 h-5 w-5" />
                  How quickly can I get a response?
                </h3>
                <p className="text-muted-foreground">
                  We aim to respond to all inquiries within 24-48 hours during business days. For urgent matters, please call our support line.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <Check className="text-primary mr-2 h-5 w-5" />
                  Do you offer technical support?
                </h3>
                <p className="text-muted-foreground">
                  Yes, we provide comprehensive technical support for all users of our AI-Powered Smart Plant Care System.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <Check className="text-primary mr-2 h-5 w-5" />
                  Can I request a product demonstration?
                </h3>
                <p className="text-muted-foreground">
                  Absolutely! Fill out the contact form and select "Product Demo" as the subject, or call our sales team directly.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-medium mb-3 flex items-center">
                  <Check className="text-primary mr-2 h-5 w-5" />
                  How do I report a bug or issue?
                </h3>
                <p className="text-muted-foreground">
                  Please contact our technical support with details about the issue, including any error messages and steps to reproduce the problem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location & Social Media */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Location */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Location</h2>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                <p className="text-muted-foreground">Map would appear here</p>
              </div>
              <p className="text-muted-foreground">
                123 Innovation Drive<br />
                San Francisco, CA 94107<br />
                United States
              </p>
            </div>
            
            {/* Connect with us */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <p className="text-muted-foreground mb-6">
                Follow us on social media for the latest updates, plant care tips, and community stories.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                  Twitter
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                  Facebook
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                  Instagram
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                  </svg>
                  LinkedIn
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                  </svg>
                  YouTube
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">We Value Your Feedback</h2>
          <p className="mb-8 opacity-90 max-w-2xl mx-auto">
            Your input helps us improve our AI-Powered Smart Plant Care System and provide better support to our community of plant enthusiasts.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <a href="#feedback-form">
              Share Your Thoughts
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
