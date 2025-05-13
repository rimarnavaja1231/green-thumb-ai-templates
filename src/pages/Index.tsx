
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Leaf, Droplet, Sun, Activity, Images } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                AI-Powered <span className="text-primary">Smart Plant Care</span> System
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Never kill another houseplant. Our intelligent system monitors, predicts, and guides you to ensure thriving indoor gardens.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" asChild>
                  <Link to="/features">
                    Explore Features <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/demo">Try Demo</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-1">
                  <AspectRatio ratio={16/9}>
                    <img 
                      src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9" 
                      alt="Smart Plant Care System" 
                      className="rounded-xl h-full w-full object-cover shadow-lg" 
                    />
                  </AspectRatio>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-lg shadow-lg border border-border">
                  <div className="flex items-center gap-3">
                    <Activity className="text-primary h-5 w-5" />
                    <span className="text-sm font-medium">Live plant monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our system combines IoT sensors, AI algorithms, and user-friendly interfaces to make plant care effortless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
                  alt="Smart Watering Technology"
                  className="absolute inset-0 h-full w-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Droplet className="h-8 w-8 text-white mb-1" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Smart Watering</CardTitle>
                <CardDescription>
                  Precise soil moisture monitoring and AI-driven watering schedules
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our system learns your plant's water needs and adjusts recommendations based on season, growth, and environmental factors.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/features#watering">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                  alt="Light Optimization Technology"
                  className="absolute inset-0 h-full w-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Sun className="h-8 w-8 text-white mb-1" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Light Optimization</CardTitle>
                <CardDescription>
                  Continuous light exposure tracking with placement recommendations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Ensure your plants receive optimal light with real-time monitoring and suggestions for ideal positioning.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/features#lighting">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07" 
                  alt="Disease Detection Technology"
                  className="absolute inset-0 h-full w-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Leaf className="h-8 w-8 text-white mb-1" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>Disease Detection</CardTitle>
                <CardDescription>
                  AI-powered identification of common plant diseases and pests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Early detection system identifies potential health issues before they become serious problems.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/features#disease">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">50%</p>
              <p className="text-muted-foreground">Less time spent on plant care</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">98%</p>
              <p className="text-muted-foreground">Plant survival rate</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">30%</p>
              <p className="text-muted-foreground">Water usage reduction</p>
            </div>
            <div className="p-6">
              <p className="text-4xl font-bold text-primary mb-2">10+</p>
              <p className="text-muted-foreground">Plant species supported</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform your plant care?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of plant enthusiasts who have revolutionized their indoor gardening experience with our smart system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/demo">Try Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
