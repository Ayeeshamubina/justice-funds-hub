import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield, Users, TrendingUp, FileText, CheckCircle, 
  Clock, XCircle, IndianRupee, Download, Filter 
} from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Admin = () => {
  const stats = [
    { 
      label: "Total Applications", 
      value: "2,847", 
      change: "+12%", 
      icon: FileText, 
      color: "text-primary" 
    },
    { 
      label: "Approved", 
      value: "1,923", 
      change: "+8%", 
      icon: CheckCircle, 
      color: "text-success" 
    },
    { 
      label: "Pending Review", 
      value: "734", 
      change: "-5%", 
      icon: Clock, 
      color: "text-warning" 
    },
    { 
      label: "Total Disbursed", 
      value: "₹48.2Cr", 
      change: "+15%", 
      icon: IndianRupee, 
      color: "text-primary" 
    }
  ];

  const recentApplications = [
    {
      id: "DBT2025001234",
      name: "Rajesh Kumar",
      type: "PCR Act Relief",
      amount: "₹50,000",
      date: "15 Jan 2025",
      status: "pending",
      district: "Mumbai"
    },
    {
      id: "DBT2025001233",
      name: "Priya Sharma",
      type: "PoA Act Incentive",
      amount: "₹2,50,000",
      date: "15 Jan 2025",
      status: "approved",
      district: "Delhi"
    },
    {
      id: "DBT2025001232",
      name: "Amit Patel",
      type: "PCR Act Relief",
      amount: "₹75,000",
      date: "14 Jan 2025",
      status: "under_review",
      district: "Ahmedabad"
    },
    {
      id: "DBT2025001231",
      name: "Sunita Devi",
      type: "PoA Act Incentive",
      amount: "₹2,50,000",
      date: "14 Jan 2025",
      status: "rejected",
      district: "Patna"
    }
  ];

  const fundDistributionData = [
    { name: "Jan", amount: 5200000 },
    { name: "Feb", amount: 6800000 },
    { name: "Mar", amount: 4500000 },
    { name: "Apr", amount: 7200000 },
    { name: "May", amount: 8100000 },
    { name: "Jun", amount: 6500000 }
  ];

  const statusDistribution = [
    { name: "Approved", value: 1923, color: "hsl(142 76% 36%)" },
    { name: "Pending", value: 734, color: "hsl(38 92% 50%)" },
    { name: "Rejected", value: 190, color: "hsl(0 84% 60%)" }
  ];

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: any; label: string }> = {
      approved: { variant: "success", label: "Approved" },
      pending: { variant: "warning", label: "Pending" },
      under_review: { variant: "secondary", label: "Under Review" },
      rejected: { variant: "destructive", label: "Rejected" }
    };
    const config = variants[status] || variants.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">DBT Portal</h1>
              <p className="text-xs text-muted-foreground">Admin Dashboard</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
            <Button asChild variant="outline">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-foreground">Fund Disbursement Trend</h3>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fundDistributionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem"
                  }}
                  formatter={(value: any) => `₹${(value / 100000).toFixed(1)}L`}
                />
                <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-6">Application Status Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "0.5rem"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-6 mt-4">
              {statusDistribution.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Applications Table */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Recent Applications</h3>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Application ID</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Applicant</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Type</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">District</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((app) => (
                  <tr key={app.id} className="border-b hover:bg-muted/50">
                    <td className="py-4 px-4 text-sm font-medium text-foreground">{app.id}</td>
                    <td className="py-4 px-4 text-sm text-foreground">{app.name}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{app.type}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{app.district}</td>
                    <td className="py-4 px-4 text-sm font-medium text-foreground">{app.amount}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{app.date}</td>
                    <td className="py-4 px-4">{getStatusBadge(app.status)}</td>
                    <td className="py-4 px-4">
                      <Button variant="outline" size="sm">
                        Review
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <Users className="h-10 w-10 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">Manage Users</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Add, edit, or remove beneficiary and admin users
            </p>
            <Button variant="outline" size="sm">
              Manage
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <TrendingUp className="h-10 w-10 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">View Reports</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Generate detailed reports and analytics
            </p>
            <Button variant="outline" size="sm">
              Generate
            </Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h4 className="text-lg font-semibold text-foreground mb-2">System Settings</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Configure integrations and security settings
            </p>
            <Button variant="outline" size="sm">
              Configure
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
