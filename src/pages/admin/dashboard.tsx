import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { Package, ShieldAlert, Users, FileText } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Dashboard() {
  const { user } = useAuth();

  // Mock data - replace with real data from your API
  const stats = [
    { title: 'Total Products', value: '24', icon: <Package className="h-6 w-6" /> },
    { title: 'Counterfeit Reports', value: '3', icon: <ShieldAlert className="h-6 w-6" /> },
    { title: 'Registered Users', value: '42', icon: <Users className="h-6 w-6" /> },
    { title: 'Transactions', value: '156', icon: <FileText className="h-6 w-6" /> },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome back, {user?.name}</h1>
        <div className="text-sm text-gray-500">
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <Link to="/admin/products" className="block p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl">Manage Products</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-600">
                Register new products or view existing ones
              </p>
            </CardContent>
          </Link>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <Link to="/admin/reports" className="block p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-xl">View Reports</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-gray-600">
                Check counterfeit reports and analytics
              </p>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
}