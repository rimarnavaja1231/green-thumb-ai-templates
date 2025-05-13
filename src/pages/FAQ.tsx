
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 mx-auto text-center">
          <Badge className="mb-4">FAQ</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions about our AI-Powered Smart Plant Care System.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <Tabs defaultValue="general" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
              <TabsTrigger value="setup">Setup & Usage</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>
            
            {/* General Questions */}
            <TabsContent value="general" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is the AI-Powered Smart Plant Care System?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Our AI-Powered Smart Plant Care System is an integrated solution that combines Internet of Things (IoT) sensors with artificial intelligence to monitor and care for indoor plants.
                    </p>
                    <p>
                      The system tracks soil moisture, temperature, humidity, and light exposure in real-time, providing personalized care recommendations based on each plant's specific needs and environmental conditions.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>How does the AI component work?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Our system uses a Random Forest machine learning model that analyzes data collected from sensors to make predictions about plant care needs.
                    </p>
                    <p>
                      The AI learns from historical care data, environmental patterns, and plant responses to create personalized care schedules. It continuously improves its recommendations over time as it gathers more data about your specific plants and environment.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>What types of plants does the system support?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      The system currently supports over 10 common houseplant species, including:
                    </p>
                    <ul className="list-disc pl-6 mb-2 space-y-1">
                      <li>Monstera Deliciosa</li>
                      <li>Snake Plant (Sansevieria)</li>
                      <li>Fiddle Leaf Fig</li>
                      <li>Pothos</li>
                      <li>Peace Lily</li>
                      <li>ZZ Plant</li>
                      <li>Spider Plant</li>
                      <li>Rubber Plant</li>
                      <li>Aloe Vera</li>
                      <li>African Violet</li>
                    </ul>
                    <p>
                      We're continuously expanding our plant database to include more species and varieties.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>How much does the system cost?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      The basic system costs under $35 for the hardware components, making it an affordable solution for indoor gardeners. The system was designed to use readily available, low-cost components while maintaining high accuracy and reliability.
                    </p>
                    <p>
                      For premium features like cloud data storage, advanced analytics, and expanded plant profiles, we offer subscription plans starting at $5/month. A detailed pricing breakdown is available on our pricing page.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>What are the key benefits of using this system?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Based on our research and user testing, the key benefits include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Significantly reduced plant mortality rates (0/6 plants lost with system vs. 2/6 manually)</li>
                      <li>Decreased overwatering incidents, a common cause of plant death</li>
                      <li>Reduced water usage by approximately 30%</li>
                      <li>Time savings of over 50% compared to manual care methods</li>
                      <li>Improved user confidence and satisfaction with plant care</li>
                      <li>Plant-specific adaptability for optimal care of different species</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            {/* Technical Questions */}
            <TabsContent value="technical" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="tech-1">
                  <AccordionTrigger>What hardware components are included in the system?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      The core hardware components include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>ESP32 microcontroller (brain of the system)</li>
                      <li>Capacitive soil moisture sensors (more reliable than resistive sensors)</li>
                      <li>DHT22 temperature and humidity sensor</li>
                      <li>BH1750 light intensity sensor</li>
                      <li>Optional 12V water pump with relay control for automated watering</li>
                      <li>Rechargeable battery pack (for wireless operation)</li>
                      <li>Housing and connectors</li>
                    </ul>
                    <p className="mt-2">
                      All components are designed for low power consumption and long-term reliability.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tech-2">
                  <AccordionTrigger>How accurate are the sensors?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Our sensors provide high accuracy measurements with approximately ±3% margin of error. Specifically:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Soil moisture: ±3% accuracy with proper calibration</li>
                      <li>Temperature: ±0.5°C accuracy</li>
                      <li>Humidity: ±2% accuracy</li>
                      <li>Light sensor: ±5% accuracy</li>
                    </ul>
                    <p className="mt-2">
                      The capacitive soil moisture sensors require minimal recalibration compared to resistive sensors and are designed for long-term use without degradation.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tech-3">
                  <AccordionTrigger>How does the system connect to the internet?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      The system connects to your home network via Wi-Fi using the ESP32's built-in wireless capabilities. It supports standard 2.4GHz Wi-Fi networks with WPA/WPA2 security.
                    </p>
                    <p className="mb-2">
                      Bluetooth connectivity is also available for local configuration and direct connection to mobile devices. This is particularly useful for initial setup or in locations without reliable Wi-Fi access.
                    </p>
                    <p>
                      The system is designed to operate with minimal bandwidth requirements, typically using less than 5MB of data per day for normal operations.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tech-4">
                  <AccordionTrigger>What is the battery life of the system?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      With a standard 3000mAh rechargeable battery pack, the system can operate for approximately:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>2-3 months with hourly sensor readings</li>
                      <li>12+ months with the included power-saving features enabled</li>
                      <li>Indefinitely when connected to a power adapter</li>
                    </ul>
                    <p className="mt-2">
                      The system employs several power-saving techniques, including deep sleep modes, optimized sensor polling, and efficient wireless communication protocols. Average power consumption is approximately 2W during active operation and less than 0.1W during sleep modes.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="tech-5">
                  <AccordionTrigger>How is the data secured?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      We take data security seriously. All data transmitted between the device and our cloud servers is encrypted using industry-standard TLS/SSL protocols. Your plant data is stored in secure cloud databases with strict access controls.
                    </p>
                    <p>
                      User authentication employs OAuth 2.0 standards, and all sensitive information is encrypted both in transit and at rest. We do not sell or share your personal data with third parties. For more details, please refer to our Privacy Policy.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            {/* Setup & Usage */}
            <TabsContent value="setup" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="setup-1">
                  <AccordionTrigger>How difficult is it to set up the system?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      The system is designed for easy setup, typically taking less than 10 minutes. No technical expertise is required. The main steps include:
                    </p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Inserting the soil moisture sensor into the plant pot</li>
                      <li>Placing the temperature/humidity and light sensors nearby</li>
                      <li>Powering on the device</li>
                      <li>Connecting to your Wi-Fi network using our mobile app</li>
                      <li>Selecting your plant type from our database</li>
                    </ol>
                    <p className="mt-2">
                      The app provides step-by-step guidance with illustrations for each part of the setup process. If you encounter any difficulties, our support team is available to assist.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="setup-2">
                  <AccordionTrigger>Can the system control watering automatically?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Yes, the system can be configured for automated watering using the optional water pump component. This feature works by:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Monitoring soil moisture levels in real-time</li>
                      <li>Activating the water pump when moisture falls below the optimal threshold</li>
                      <li>Delivering a precise amount of water based on the specific plant's needs</li>
                      <li>Confirming proper watering through feedback from the soil sensors</li>
                    </ul>
                    <p className="mt-2">
                      The system includes safety features to prevent overwatering, such as maximum run-time limits and leak detection capabilities. You can also manually override automated watering through the app at any time.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="setup-3">
                  <AccordionTrigger>How many plants can one system monitor?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      A single hub can support up to 12 individual plant sensors. Each sensor can monitor:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Soil moisture for its specific plant</li>
                      <li>Local light levels around that plant</li>
                    </ul>
                    <p className="mb-2">
                      Temperature and humidity sensors are typically shared among plants in the same area, as these environmental factors tend to be consistent within a room.
                    </p>
                    <p>
                      For larger collections, multiple hubs can be used and managed through the same app interface, allowing you to monitor dozens or even hundreds of plants if needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="setup-4">
                  <AccordionTrigger>Does it work with all types of potting soil?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      The system works with most common potting soils and growing media, including:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Standard potting mixes</li>
                      <li>Cactus and succulent mixes</li>
                      <li>Peat-based mixes</li>
                      <li>Coconut coir</li>
                      <li>Soil-less media</li>
                    </ul>
                    <p className="mb-2">
                      For accurate readings, the initial calibration process should be performed for each type of growing medium, as different soils have different moisture retention characteristics.
                    </p>
                    <p>
                      Very specialized growing media (like pure LECA or hydroponics) may require additional calibration steps, which are detailed in our advanced setup guide.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="setup-5">
                  <AccordionTrigger>How does the app notify me about plant care needs?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      The app provides notifications through multiple channels:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Push notifications to your mobile device</li>
                      <li>Email alerts (for critical issues)</li>
                      <li>In-app dashboard with status indicators</li>
                      <li>Optional SMS alerts for premium users</li>
                    </ul>
                    <p className="mb-2">
                      You can customize notification preferences for different alert types:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Urgent alerts (e.g., extremely low moisture, potential disease detection)</li>
                      <li>Routine care reminders (e.g., time to fertilize, rotate plant)</li>
                      <li>Environmental alerts (e.g., temperature too low, light levels insufficient)</li>
                      <li>System status (e.g., low battery, connection issues)</li>
                    </ul>
                    <p>
                      All notifications include specific guidance on how to address the identified issue.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            {/* Support */}
            <TabsContent value="support" className="mt-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="support-1">
                  <AccordionTrigger>How do I get technical support if I have issues?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      We offer multiple support channels:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>In-app troubleshooting guide with step-by-step solutions</li>
                      <li>Email support at support@smartplantcare.com (24-48 hour response time)</li>
                      <li>Live chat support during business hours (9am-5pm PST, Monday-Friday)</li>
                      <li>Phone support for premium users</li>
                      <li>Community forum where users share tips and solutions</li>
                    </ul>
                    <p className="mt-2">
                      For fastest resolution, please include your device ID, a description of the issue, and any error messages when contacting support.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="support-2">
                  <AccordionTrigger>Is there a warranty for the hardware?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Yes, all hardware components come with a standard 12-month limited warranty covering manufacturing defects and normal use failures. The warranty includes:
                    </p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Free replacement of defective components</li>
                      <li>Technical support for hardware-related issues</li>
                      <li>Shipping costs for replacement parts within the warranty period</li>
                    </ul>
                    <p className="mb-2">
                      Extended warranty options are available for purchase, extending coverage to 24 or 36 months.
                    </p>
                    <p>
                      The warranty does not cover damage from misuse, unauthorized modifications, water damage (beyond normal use), or other environmental damage. Full warranty details are included in the product packaging.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="support-3">
                  <AccordionTrigger>Can I update the firmware on my device?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Yes, the system supports over-the-air (OTA) firmware updates. When a new update is available, you'll receive a notification in the app. The update process is:
                    </p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Receive update notification</li>
                      <li>Review update details and improvements</li>
                      <li>Click "Update Now" or schedule for later</li>
                      <li>The system will download and install the update automatically</li>
                      <li>A brief restart will occur after installation (typically less than 1 minute)</li>
                    </ol>
                    <p className="mt-2">
                      Updates typically include bug fixes, performance improvements, and occasionally new features. We recommend keeping your device updated to ensure optimal performance and security.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="support-4">
                  <AccordionTrigger>What if my sensor readings seem inaccurate?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      If you suspect inaccurate sensor readings, try these troubleshooting steps:
                    </p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Verify proper sensor placement (soil moisture sensor should be inserted 2-3 inches into the soil)</li>
                      <li>Check for debris or salt buildup on sensors</li>
                      <li>Run the calibration process again using the app's calibration wizard</li>
                      <li>Ensure the sensor is properly connected to the main unit</li>
                      <li>Check battery levels (low power can affect sensor accuracy)</li>
                    </ol>
                    <p className="mt-2">
                      If problems persist after these steps, please contact technical support with details of your issue. In some cases, a sensor replacement may be necessary.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="support-5">
                  <AccordionTrigger>Do you offer refunds if I'm not satisfied?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Yes, we offer a 30-day satisfaction guarantee. If you're not completely satisfied with the system, you can return it within 30 days of purchase for a full refund, minus shipping costs.
                    </p>
                    <p className="mb-2">
                      To initiate a return:
                    </p>
                    <ol className="list-decimal pl-6 space-y-1">
                      <li>Contact customer support at returns@smartplantcare.com</li>
                      <li>Provide your order number and reason for return</li>
                      <li>Receive a return authorization and shipping instructions</li>
                      <li>Return the product in its original packaging if possible</li>
                    </ol>
                    <p className="mt-2">
                      Once we receive the returned product and verify its condition, a refund will be issued to your original payment method within 5-7 business days.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Quick Help Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">User Guides</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive documentation for setup, troubleshooting, and maintenance.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/documentation">
                    View Guides <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
                <p className="text-muted-foreground mb-4">
                  Step-by-step visual instructions for common tasks and features.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/tutorials">
                    Watch Videos <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Contact Support</h3>
                <p className="text-muted-foreground mb-4">
                  Get personalized help from our technical support team.
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">
                    Get Help <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our support team is ready to help you with any other questions or concerns about the AI-Powered Smart Plant Care System.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
