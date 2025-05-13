
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCheck, Users, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 mx-auto text-center">
          <Badge className="mb-4">About the Project</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">AI-Powered Smart Plant Care System</h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Transforming indoor gardening with cutting-edge technology to address houseplant mortality and empower urban plant enthusiasts.
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-12 md:py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-muted-foreground mb-4">
                The AI-Powered Smart Plant Care System addresses a critical challenge faced by urban indoor gardeners: the high mortality rate of houseplants due to inconsistent care and limited botanical knowledge.
              </p>
              <p className="text-muted-foreground mb-4">
                Our solution integrates IoT sensors with cloud-based AI to provide personalized, predictive plant care recommendations, transforming plant ownership into a data-driven, successful experience.
              </p>
              <p className="text-muted-foreground">
                Developed as an affordable and accessible system, it aims to empower urban dwellers to effectively cultivate indoor plants, promoting greener living spaces and sustainable practices.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-6">
              <img 
                src="/placeholder.svg" 
                alt="Smart Plant Care System Overview" 
                className="rounded-lg w-full h-auto shadow-md" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Objectives and Benefits */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Objectives & Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Objectives */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                    <CheckCheck className="h-5 w-5" />
                  </span>
                  Key Objectives
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCheck className="text-primary h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Robust IoT Platform</h4>
                      <p className="text-sm text-muted-foreground">
                        Track soil moisture, temperature, humidity, and light exposure continuously with high precision
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCheck className="text-primary h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Adaptive AI Model</h4>
                      <p className="text-sm text-muted-foreground">
                        Analyze sensor data to provide accurate, personalized care recommendations for multiple plant species
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCheck className="text-primary h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">User-Friendly Interface</h4>
                      <p className="text-sm text-muted-foreground">
                        Deliver timely care instructions through a multi-modal feedback system with high notification accuracy
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCheck className="text-primary h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Affordable Design</h4>
                      <p className="text-sm text-muted-foreground">
                        Create an accessible system under $35 using readily available components with easy installation
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Benefits */}
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-6 flex items-center">
                  <span className="bg-primary/10 text-primary p-2 rounded-full mr-3">
                    <Users className="h-5 w-5" />
                  </span>
                  Key Benefits
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCheck className="text-primary h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Reduced Plant Mortality</h4>
                      <p className="text-sm text-muted-foreground">
                        0/6 plants lost with system vs. 2/6 with manual care during testing period
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCheck className="text-primary h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Resource Efficiency</h4>
                      <p className="text-sm text-muted-foreground">
                        Decreased overwatering incidents and 30% reduction in water usage
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCheck className="text-primary h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Time Savings</h4>
                      <p className="text-sm text-muted-foreground">
                        Over 50% reduction in time spent on plant care compared to manual methods
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCheck className="text-primary h-5 w-5 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Enhanced Experience</h4>
                      <p className="text-sm text-muted-foreground">
                        Significantly improved user satisfaction and confidence in plant care abilities
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-16">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Development Timeline</h2>
          
          <div className="relative border-l border-primary/30 ml-4 md:ml-0 md:mx-auto md:max-w-3xl">
            {/* Timeline Item 1 */}
            <div className="relative pl-8 pb-8 md:ml-[50%] md:pl-10">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="md:absolute md:left-[-160px] md:top-0 md:w-[150px] md:text-right">
                <Badge variant="outline" className="mb-2">Phase 1</Badge>
                <p className="text-sm text-muted-foreground">January 2023</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Research & Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Conducted literature review, user needs analysis, and feasibility studies to define system requirements
                </p>
              </div>
            </div>
            
            {/* Timeline Item 2 */}
            <div className="relative pl-8 pb-8 md:ml-[50%] md:pl-10">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="md:absolute md:left-[-160px] md:top-0 md:w-[150px] md:text-right">
                <Badge variant="outline" className="mb-2">Phase 2</Badge>
                <p className="text-sm text-muted-foreground">March 2023</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Hardware Prototype</h3>
                <p className="text-sm text-muted-foreground">
                  Developed initial sensor array and microcontroller integration with basic data collection functionality
                </p>
              </div>
            </div>
            
            {/* Timeline Item 3 */}
            <div className="relative pl-8 pb-8 md:ml-[50%] md:pl-10">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="md:absolute md:left-[-160px] md:top-0 md:w-[150px] md:text-right">
                <Badge variant="outline" className="mb-2">Phase 3</Badge>
                <p className="text-sm text-muted-foreground">June 2023</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">AI Model Development</h3>
                <p className="text-sm text-muted-foreground">
                  Trained and validated Random Forest model using historical plant data and environmental variables
                </p>
              </div>
            </div>
            
            {/* Timeline Item 4 */}
            <div className="relative pl-8 pb-8 md:ml-[50%] md:pl-10">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="md:absolute md:left-[-160px] md:top-0 md:w-[150px] md:text-right">
                <Badge variant="outline" className="mb-2">Phase 4</Badge>
                <p className="text-sm text-muted-foreground">September 2023</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">System Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Connected hardware, AI model, and user interface components into a cohesive working system
                </p>
              </div>
            </div>
            
            {/* Timeline Item 5 */}
            <div className="relative pl-8 md:ml-[50%] md:pl-10">
              <div className="absolute left-[-8px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
              <div className="md:absolute md:left-[-160px] md:top-0 md:w-[150px] md:text-right">
                <Badge variant="outline" className="mb-2">Phase 5</Badge>
                <p className="text-sm text-muted-foreground">November 2023</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Testing & Validation</h3>
                <p className="text-sm text-muted-foreground">
                  Conducted 12-week trial with multiple plant species to assess system effectiveness and gather feedback
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Developer Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Research Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <img 
                  src="/placeholder.svg" 
                  alt="Team Member" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">Dr. Jane Smith</h3>
                <p className="text-sm text-muted-foreground mb-3">Project Lead & AI Specialist</p>
                <p className="text-sm">
                  Expert in machine learning applications for environmental systems with 10+ years of research experience.
                </p>
              </CardContent>
            </Card>
            
            {/* Team Member 2 */}
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <img 
                  src="/placeholder.svg" 
                  alt="Team Member" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">Prof. Michael Chen</h3>
                <p className="text-sm text-muted-foreground mb-3">Hardware Engineer & IoT Expert</p>
                <p className="text-sm">
                  Specializes in low-power sensor networks and embedded systems for environmental monitoring applications.
                </p>
              </CardContent>
            </Card>
            
            {/* Team Member 3 */}
            <Card className="overflow-hidden">
              <div className="aspect-square">
                <img 
                  src="/placeholder.svg" 
                  alt="Team Member" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold">Dr. Sarah Williams</h3>
                <p className="text-sm text-muted-foreground mb-3">Botanist & UX Researcher</p>
                <p className="text-sm">
                  Plant scientist with expertise in indoor horticulture and human-centered design for technology interfaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our System</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Discover how our AI-powered plant care solution can transform your indoor gardening experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/features">
                  Browse Features <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/demo">Try Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
