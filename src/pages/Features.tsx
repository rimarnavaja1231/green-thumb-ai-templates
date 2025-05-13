
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { CheckCheck, Droplet, Sun, Leaf, Bell, Cloud, Smartphone, Info } from "lucide-react";

export default function Features() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 mx-auto text-center">
          <Badge className="mb-4">Features</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Smart Plant Care Features</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our AI-powered system combines cutting-edge technology with user-friendly design to ensure your plants thrive with minimal effort.
          </p>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-12 md:py-16" id="features">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="monitoring" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
                <TabsTrigger value="automation">Automation</TabsTrigger>
                <TabsTrigger value="ai">AI Detection</TabsTrigger>
                <TabsTrigger value="control">Control</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monitoring" id="monitoring">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Smart Monitoring</h2>
                  <p className="text-muted-foreground mb-6">
                    Our system continuously tracks essential metrics to ensure optimal growing conditions for your plants.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCheck className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Soil Moisture Sensing</h3>
                        <p className="text-muted-foreground">Precise measurements of soil moisture levels to prevent over or under-watering</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCheck className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Temperature & Humidity</h3>
                        <p className="text-muted-foreground">Continuous environment monitoring to ensure ideal growing conditions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCheck className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Light Exposure</h3>
                        <p className="text-muted-foreground">Track daily light levels to optimize plant placement and growth</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCheck className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Real-time Data</h3>
                        <p className="text-muted-foreground">Access current and historical data through our intuitive dashboard</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted rounded-xl p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="Smart Monitoring System" 
                    className="rounded-lg w-full h-auto shadow-md" 
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="automation" id="automation">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-muted rounded-xl p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="Automated Plant Care" 
                    className="rounded-lg w-full h-auto shadow-md" 
                  />
                </div>
                
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-4">Automated Care</h2>
                  <p className="text-muted-foreground mb-6">
                    Let our system handle the routine aspects of plant care with intelligent automation.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Droplet className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Smart Watering</h3>
                        <p className="text-muted-foreground">AI-driven watering schedules adjusted to each plant's specific needs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Sun className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Light Management</h3>
                        <p className="text-muted-foreground">Optional grow light control for plants in low-light environments</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Bell className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Timely Reminders</h3>
                        <p className="text-muted-foreground">Get notifications for tasks that can't be automated, like fertilizing</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Info className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Seasonal Adjustments</h3>
                        <p className="text-muted-foreground">System automatically adapts to seasonal changes in growing conditions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="ai" id="ai">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">AI Disease Detection</h2>
                  <p className="text-muted-foreground mb-6">
                    Our advanced AI algorithms can identify plant health issues before they become severe.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Leaf className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Early Detection</h3>
                        <p className="text-muted-foreground">Identify diseases, pests, and nutrient deficiencies in their early stages</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Leaf className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Treatment Recommendations</h3>
                        <p className="text-muted-foreground">Receive specific guidance on how to address identified issues</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Leaf className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Visual Analysis</h3>
                        <p className="text-muted-foreground">Use your smartphone camera to get instant plant health assessments</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Leaf className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Learning System</h3>
                        <p className="text-muted-foreground">Our AI continuously improves its accuracy with each interaction</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted rounded-xl p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="AI Disease Detection" 
                    className="rounded-lg w-full h-auto shadow-md" 
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="control" id="control">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 bg-muted rounded-xl p-6">
                  <img 
                    src="/placeholder.svg" 
                    alt="Mobile & Web Control" 
                    className="rounded-lg w-full h-auto shadow-md" 
                  />
                </div>
                
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-bold mb-4">Mobile & Web Control</h2>
                  <p className="text-muted-foreground mb-6">
                    Access your plant care system from anywhere using our intuitive interfaces.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Smartphone className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Responsive Dashboard</h3>
                        <p className="text-muted-foreground">Access real-time data and controls from any device</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Bell className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Push Notifications</h3>
                        <p className="text-muted-foreground">Receive important alerts about your plants' conditions</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Cloud className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Cloud Integration</h3>
                        <p className="text-muted-foreground">Secure cloud storage of your plant data with historical tracking</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <CheckCheck className="text-primary h-6 w-6 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-lg">Remote Control</h3>
                        <p className="text-muted-foreground">Trigger watering or adjust settings even when you're away from home</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Technical Specs */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Hardware Components</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>ESP32 Microcontroller</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>Capacitive Soil Moisture Sensors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>DHT22 Temperature & Humidity Sensor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>BH1750 Light Intensity Sensor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>12V Water Pump with Relay Control</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Software & AI</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>Random Forest Machine Learning Model</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>Secure Cloud Data Storage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>Progressive Web Application</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>RESTful API for Device Communication</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>TensorFlow Lite for Edge AI Processing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Performance</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>Low Power Consumption (≤2W average)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>Wi-Fi & Bluetooth Connectivity</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>12-month Battery Life (rechargeable)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>±3% Sensor Accuracy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCheck className="h-4 w-4 text-primary" />
                    <span>Supports up to 12 plants per hub</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
