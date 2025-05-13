
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from "@/components/ui/slider";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { 
  Droplet, 
  Sun, 
  Thermometer, 
  MoreHorizontal, 
  Activity, 
  ChevronDown,
  ChevronUp,
  Bell,
  CheckCheck,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const [selectedPlant, setSelectedPlant] = useState("monstera");
  const { toast } = useToast();
  
  // Mock data for demo purposes
  const plants = {
    monstera: {
      name: "Monstera Deliciosa",
      moisture: 68,
      light: 76,
      temperature: 24,
      humidity: 55,
      lastWatered: "2 days ago",
      nextWatering: "Tomorrow",
      status: "healthy",
      image: "/placeholder.svg"
    },
    snake: {
      name: "Snake Plant",
      moisture: 42,
      light: 85,
      temperature: 23,
      humidity: 48,
      lastWatered: "5 days ago",
      nextWatering: "In 3 days",
      status: "healthy",
      image: "/placeholder.svg"
    },
    ficus: {
      name: "Fiddle Leaf Fig",
      moisture: 32,
      light: 62,
      temperature: 22,
      humidity: 51,
      lastWatered: "6 days ago",
      nextWatering: "Today",
      status: "needs_attention",
      image: "/placeholder.svg"
    },
  };

  const handleWaterNow = () => {
    toast({
      title: "Watering initiated",
      description: `${plants[selectedPlant as keyof typeof plants].name} is being watered now.`,
      duration: 3000,
    });
  };

  const getMoistureColor = (value: number) => {
    if (value < 30) return "text-destructive";
    if (value < 50) return "text-amber-500";
    return "text-emerald-500";
  };

  const getLightColor = (value: number) => {
    if (value < 40) return "text-blue-500";
    if (value < 70) return "text-amber-500";
    return "text-orange-500";
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="py-8 md:py-12 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Live Plant Dashboard</h1>
          <p className="text-muted-foreground mb-8">
            Monitor and manage your plants in real-time with our intuitive dashboard
          </p>
          
          {/* Plant Selector */}
          <div className="mb-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full md:w-auto">
                  {plants[selectedPlant as keyof typeof plants].name}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full">
                <DropdownMenuItem onClick={() => setSelectedPlant("monstera")}>
                  Monstera Deliciosa
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedPlant("snake")}>
                  Snake Plant
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedPlant("ficus")}>
                  Fiddle Leaf Fig
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Plant Card */}
            <Card className="md:col-span-2 overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <CardHeader>
                  <div className="flex justify-between">
                    <div>
                      <CardTitle>{plants[selectedPlant as keyof typeof plants].name}</CardTitle>
                      <CardDescription>
                        Status: {plants[selectedPlant as keyof typeof plants].status === "healthy" ? (
                          <Badge variant="outline" className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                            Healthy
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                            Needs Attention
                          </Badge>
                        )}
                      </CardDescription>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit Plant Details</DropdownMenuItem>
                        <DropdownMenuItem>View History</DropdownMenuItem>
                        <DropdownMenuItem>Remove Plant</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <div className="relative">
                  <img 
                    src={plants[selectedPlant as keyof typeof plants].image} 
                    alt={plants[selectedPlant as keyof typeof plants].name} 
                    className="h-full w-full object-cover aspect-square md:aspect-auto"
                  />
                </div>
              </div>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                    <Droplet className={`h-8 w-8 mb-2 ${getMoistureColor(plants[selectedPlant as keyof typeof plants].moisture)}`} />
                    <span className="text-sm text-muted-foreground">Soil Moisture</span>
                    <span className="text-2xl font-semibold">{plants[selectedPlant as keyof typeof plants].moisture}%</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                    <Sun className={`h-8 w-8 mb-2 ${getLightColor(plants[selectedPlant as keyof typeof plants].light)}`} />
                    <span className="text-sm text-muted-foreground">Light Level</span>
                    <span className="text-2xl font-semibold">{plants[selectedPlant as keyof typeof plants].light}%</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                    <Thermometer className="h-8 w-8 mb-2 text-blue-500" />
                    <span className="text-sm text-muted-foreground">Temperature</span>
                    <span className="text-2xl font-semibold">{plants[selectedPlant as keyof typeof plants].temperature}°C</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-muted rounded-lg">
                    <Activity className="h-8 w-8 mb-2 text-indigo-500" />
                    <span className="text-sm text-muted-foreground">Humidity</span>
                    <span className="text-2xl font-semibold">{plants[selectedPlant as keyof typeof plants].humidity}%</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Last watered: {plants[selectedPlant as keyof typeof plants].lastWatered}</p>
                  <p className="text-sm font-medium">Next watering: {plants[selectedPlant as keyof typeof plants].nextWatering}</p>
                </div>
                <Button onClick={handleWaterNow}>Water Now</Button>
              </CardFooter>
            </Card>

            {/* Side Controls and Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Controls</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Auto Watering</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Notifications</span>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Grow Light</span>
                    <Switch />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Watering Amount</span>
                      <span>Medium</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Bell className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm">Moisture level alert</p>
                        <p className="text-xs text-muted-foreground">30 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Droplet className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm">Automatic watering completed</p>
                        <p className="text-xs text-muted-foreground">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Sun className="h-4 w-4 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="text-sm">Light level optimized</p>
                        <p className="text-xs text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Data Section */}
      <section className="py-8 md:py-12">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-6">Historical Data</h2>
          
          <Tabs defaultValue="moisture" className="w-full">
            <TabsList className="grid grid-cols-4 mb-6">
              <TabsTrigger value="moisture">Moisture</TabsTrigger>
              <TabsTrigger value="light">Light</TabsTrigger>
              <TabsTrigger value="temperature">Temperature</TabsTrigger>
              <TabsTrigger value="humidity">Humidity</TabsTrigger>
            </TabsList>
            
            {/* Chart content would go here */}
            <TabsContent value="moisture">
              <Card>
                <CardContent className="pt-6 pb-2">
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Moisture chart visualization would appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="light">
              <Card>
                <CardContent className="pt-6 pb-2">
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Light chart visualization would appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="temperature">
              <Card>
                <CardContent className="pt-6 pb-2">
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Temperature chart visualization would appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="humidity">
              <Card>
                <CardContent className="pt-6 pb-2">
                  <div className="h-[300px] flex items-center justify-center border rounded-md">
                    <p className="text-muted-foreground">Humidity chart visualization would appear here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-6">AI Recommendations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Droplet className="h-5 w-5 mr-2 text-primary" />
                  Watering Adjustment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Your Fiddle Leaf Fig is showing signs of underwatering. Consider increasing water amount by 15% for the next two weeks.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">Apply Recommendation</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Sun className="h-5 w-5 mr-2 text-primary" />
                  Light Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Consider moving your Monstera to a location with more indirect sunlight for optimal growth during winter months.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">Mark as Done</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center text-lg">
                  <Activity className="h-5 w-5 mr-2 text-primary" />
                  Maintenance Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">It's time to fertilize your Snake Plant. Use a diluted liquid fertilizer (1:4 ratio) for best results.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="w-full">Mark as Done</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
