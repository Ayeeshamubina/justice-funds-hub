import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Shield, MessageSquare, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Grievance = () => {
  const [ticketId, setTicketId] = useState("");

  const handleSubmitGrievance = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Grievance submitted successfully! Your ticket ID is GRV2025001234");
  };

  const mockGrievances = [
    {
      id: "GRV2025001234",
      subject: "Application approval delay",
      description: "My application DBT2025001234 has been pending for over 30 days...",
      status: "In Progress",
      date: "15 Jan 2025",
      statusColor: "warning"
    },
    {
      id: "GRV2024009876",
      subject: "Incorrect fund amount disbursed",
      description: "The disbursed amount does not match the approved amount...",
      status: "Resolved",
      date: "10 Dec 2024",
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
              <p className="text-xs text-muted-foreground">Grievance Redressal</p>
            </div>
          </Link>
          <Button asChild variant="outline">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Submit Grievance */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-2xl font-bold text-foreground">Submit a Grievance</h2>
                <p className="text-sm text-muted-foreground">We're here to help resolve your concerns</p>
              </div>
            </div>

            <form onSubmit={handleSubmitGrievance} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile Number</Label>
                  <Input id="mobile" type="tel" placeholder="+91 XXXXX-XXXXX" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="applicationId">Application ID (Optional)</Label>
                  <Input id="applicationId" placeholder="DBT2025XXXXXX" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Grievance Category</Label>
                <select 
                  id="category" 
                  className="w-full h-10 px-3 rounded-md border border-input bg-background"
                  required
                >
                  <option value="">Select category</option>
                  <option value="application_delay">Application Delay</option>
                  <option value="incorrect_amount">Incorrect Amount</option>
                  <option value="document_issue">Document Verification Issue</option>
                  <option value="payment_delay">Payment Delay</option>
                  <option value="technical_issue">Technical Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Brief description of your issue" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Please provide detailed information about your grievance..."
                  rows={6}
                  required
                />
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-foreground mb-1">Important:</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Please provide accurate information to help us resolve your grievance faster</li>
                      <li>• You will receive a ticket ID to track your grievance status</li>
                      <li>• Expected resolution time: 5-7 working days</li>
                      <li>• For urgent matters, call our helpline: 1800-XXX-XXXX</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Submit Grievance
              </Button>
            </form>
          </Card>

          {/* Track Grievance */}
          <Card className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Track Your Grievance</h3>
            <div className="flex gap-2 mb-8">
              <Input 
                placeholder="Enter Ticket ID (e.g., GRV2025001234)"
                value={ticketId}
                onChange={(e) => setTicketId(e.target.value)}
              />
              <Button className="bg-primary hover:bg-primary/90">
                Track
              </Button>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Recent Grievances</h4>
              {mockGrievances.map((grievance) => (
                <Card key={grievance.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <p className="font-semibold text-foreground">{grievance.id}</p>
                        <Badge variant={grievance.statusColor as any} className="text-xs">
                          {grievance.status}
                        </Badge>
                      </div>
                      <h5 className="text-base font-medium text-foreground mb-2">{grievance.subject}</h5>
                      <p className="text-sm text-muted-foreground mb-3">{grievance.description}</p>
                      <p className="text-xs text-muted-foreground">Submitted on {grievance.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t">
                    {grievance.status === "Resolved" ? (
                      <>
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-sm text-success">Your grievance has been resolved</span>
                      </>
                    ) : (
                      <>
                        <Clock className="h-4 w-4 text-warning" />
                        <span className="text-sm text-muted-foreground">Our team is working on your grievance</span>
                      </>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-background border-primary/20">
            <h3 className="text-xl font-semibold text-foreground mb-4">Need Immediate Help?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-2">Helpline</h4>
                <p className="text-2xl font-bold text-primary mb-1">1800-XXX-XXXX</p>
                <p className="text-sm text-muted-foreground">Available 24/7</p>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">Email Support</h4>
                <p className="text-lg font-medium text-foreground mb-1">support@dbtportal.gov.in</p>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Grievance;
