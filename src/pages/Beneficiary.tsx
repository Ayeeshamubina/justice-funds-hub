import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Shield, User, FileText, CreditCard, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Beneficiary = () => {
  const [applicationId, setApplicationId] = useState("");
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Login successful! Redirecting to dashboard...");
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Application submitted successfully! Your application ID is DBT2025001234");
  };

  const mockApplications = [
    {
      id: "DBT2025001234",
      type: "PCR Act Relief",
      status: "Under Review",
      amount: "₹50,000",
      date: "15 Jan 2025",
      progress: 60,
      statusColor: "warning"
    },
    {
      id: "DBT2024009876",
      type: "PoA Act Incentive",
      status: "Approved",
      amount: "₹2,50,000",
      date: "10 Dec 2024",
      progress: 100,
      statusColor: "success"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">DBT Portal</h1>
              <p className="text-xs text-muted-foreground">Beneficiary Portal</p>
            </div>
          </Link>
          <Button asChild variant="outline">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="login" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="apply">Apply for Benefits</TabsTrigger>
            <TabsTrigger value="track">Track Application</TabsTrigger>
          </TabsList>

          {/* Login Tab */}
          <TabsContent value="login" className="space-y-6">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <User className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Beneficiary Login</h2>
                  <p className="text-sm text-muted-foreground">Secure access to your dashboard</p>
                </div>
              </div>
              
              <form onSubmit={handleLogin} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="aadhaar">Aadhaar Number</Label>
                  <Input 
                    id="aadhaar" 
                    placeholder="XXXX-XXXX-XXXX" 
                    maxLength={14}
                    required
                  />
                  <p className="text-xs text-muted-foreground">We use Aadhaar for secure verification only</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="otp">OTP</Label>
                  <div className="flex gap-2">
                    <Input 
                      id="otp" 
                      placeholder="Enter 6-digit OTP" 
                      maxLength={6}
                      required
                    />
                    <Button type="button" variant="outline">
                      Send OTP
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Login to Dashboard
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-center text-muted-foreground">
                  First time user? Apply for benefits using the "Apply" tab above.
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Apply Tab */}
          <TabsContent value="apply" className="space-y-6">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Apply for Benefits</h2>
                  <p className="text-sm text-muted-foreground">Fill the form to submit your application</p>
                </div>
              </div>

              <form onSubmit={handleApply} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name (as per Aadhaar)</Label>
                    <Input id="fullName" placeholder="Enter full name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="aadhaarApply">Aadhaar Number</Label>
                    <Input id="aadhaarApply" placeholder="XXXX-XXXX-XXXX" maxLength={14} required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefitType">Benefit Type</Label>
                  <select 
                    id="benefitType" 
                    className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    required
                  >
                    <option value="">Select benefit type</option>
                    <option value="pcr">PCR Act Relief</option>
                    <option value="poa">PoA Act Incentive</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input id="mobile" type="tel" placeholder="+91 XXXXX-XXXXX" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bankAccount">Bank Account Number</Label>
                  <Input id="bankAccount" placeholder="Enter bank account number" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ifsc">IFSC Code</Label>
                  <Input id="ifsc" placeholder="Enter IFSC code" required />
                </div>

                <div className="space-y-2">
                  <Label>Supporting Documents</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Upload documents from DigiLocker or your device
                    </p>
                    <Button type="button" variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium text-foreground mb-1">Required Documents:</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Copy of FIR / Court order</li>
                        <li>• Aadhaar card</li>
                        <li>• Bank passbook / cancelled cheque</li>
                        <li>• Caste certificate (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                  Submit Application
                </Button>
              </form>
            </Card>
          </TabsContent>

          {/* Track Tab */}
          <TabsContent value="track" className="space-y-6">
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <CreditCard className="h-8 w-8 text-primary" />
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Track Application</h2>
                  <p className="text-sm text-muted-foreground">Check your application status</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex gap-2">
                  <Input 
                    placeholder="Enter Application ID (e.g., DBT2025001234)"
                    value={applicationId}
                    onChange={(e) => setApplicationId(e.target.value)}
                  />
                  <Button className="bg-primary hover:bg-primary/90">
                    Track
                  </Button>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">Your Applications</h3>
                {mockApplications.map((app) => (
                  <Card key={app.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="font-semibold text-foreground">{app.id}</p>
                          <Badge variant={app.statusColor as any} className="text-xs">
                            {app.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{app.type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-primary">{app.amount}</p>
                        <p className="text-xs text-muted-foreground">{app.date}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Application Progress</span>
                        <span className="font-medium text-foreground">{app.progress}%</span>
                      </div>
                      <Progress value={app.progress} className="h-2" />
                    </div>

                    <div className="mt-4 grid grid-cols-4 gap-2">
                      <div className="flex flex-col items-center gap-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${app.progress >= 25 ? 'bg-success' : 'bg-muted'}`}>
                          <CheckCircle className={`h-4 w-4 ${app.progress >= 25 ? 'text-success-foreground' : 'text-muted-foreground'}`} />
                        </div>
                        <span className="text-xs text-center text-muted-foreground">Submitted</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${app.progress >= 50 ? 'bg-success' : 'bg-muted'}`}>
                          <Clock className={`h-4 w-4 ${app.progress >= 50 ? 'text-success-foreground' : 'text-muted-foreground'}`} />
                        </div>
                        <span className="text-xs text-center text-muted-foreground">Reviewing</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${app.progress >= 75 ? 'bg-success' : 'bg-muted'}`}>
                          <CheckCircle className={`h-4 w-4 ${app.progress >= 75 ? 'text-success-foreground' : 'text-muted-foreground'}`} />
                        </div>
                        <span className="text-xs text-center text-muted-foreground">Approved</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${app.progress >= 100 ? 'bg-success' : 'bg-muted'}`}>
                          <CreditCard className={`h-4 w-4 ${app.progress >= 100 ? 'text-success-foreground' : 'text-muted-foreground'}`} />
                        </div>
                        <span className="text-xs text-center text-muted-foreground">Disbursed</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Beneficiary;
