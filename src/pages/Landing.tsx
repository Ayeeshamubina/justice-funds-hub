import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Users, TrendingUp, FileText, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Landing = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure & Private",
      description: "End-to-end encryption ensures victim data remains confidential and protected."
    },
    {
      icon: Users,
      title: "Aadhaar Integration",
      description: "Seamless verification with Aadhaar, DigiLocker, and national databases."
    },
    {
      icon: TrendingUp,
      title: "Real-Time Tracking",
      description: "Track fund disbursement and application status in real-time with transparency."
    },
    {
      icon: FileText,
      title: "Digital Documentation",
      description: "Upload and manage all supporting documents digitally through DigiLocker."
    },
    {
      icon: CheckCircle,
      title: "Quick Approval",
      description: "Streamlined verification process ensures faster benefit delivery to victims."
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Access your application and track status anytime, anywhere through web or mobile."
    }
  ];

  const stats = [
    { value: "₹50L+", label: "Funds Disbursed" },
    { value: "10K+", label: "Beneficiaries Helped" },
    { value: "98%", label: "Success Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">DBT Portal</h1>
              <p className="text-xs text-muted-foreground">PCR Act 1955 & PoA Act 1989</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/beneficiary" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Beneficiary Portal
            </Link>
            <Link to="/admin" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Admin Login
            </Link>
            <Link to="/grievance" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Grievances
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-0" />
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <p className="text-sm font-medium text-primary">Government of India Initiative</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Direct Benefit Transfer for Social Justice
              </h2>
              <p className="text-lg text-muted-foreground">
                Transparent, secure, and accessible relief for victims of caste-based discrimination and inter-caste marriage beneficiaries under PCR Act and PoA Act.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/beneficiary">Apply for Benefits</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/track">Track Application</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroBanner} 
                alt="Digital India - DBT Portal" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Why Choose DBT Portal?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with transparency, security, and accessibility at its core to serve victims with dignity and efficiency.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              How It Works
            </h3>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and secure process from application to disbursement
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Register", desc: "Create account using Aadhaar verification" },
              { step: "02", title: "Apply", desc: "Submit application with required documents" },
              { step: "03", title: "Verify", desc: "Authorities verify and approve your application" },
              { step: "04", title: "Receive", desc: "Direct benefit transfer to your bank account" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-background border-primary/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Apply for Benefits?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of beneficiaries who have received timely relief through our transparent and secure DBT system.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/beneficiary">Get Started Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/grievance">Submit Grievance</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold text-foreground">DBT Portal</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Ensuring social justice through transparent and accountable direct benefit transfer system.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Quick Links</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/beneficiary" className="hover:text-primary">Beneficiary Portal</Link></li>
                <li><Link to="/admin" className="hover:text-primary">Admin Dashboard</Link></li>
                <li><Link to="/grievance" className="hover:text-primary">Grievances</Link></li>
                <li><Link to="/track" className="hover:text-primary">Track Application</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Contact</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Helpline: 1800-XXX-XXXX</li>
                <li>Email: support@dbtportal.gov.in</li>
                <li>Available: 24/7</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 Government of India. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
