import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Package, Tags, ShoppingCart, TrendingUp } from 'lucide-react'

export const Route = createFileRoute('/admin/')({
  component: AdminDashboard,
})

function AdminDashboard() {
  const stats = [
    { title: 'Total Products', value: '128', icon: Package, color: 'text-blue-500' },
    { title: 'Categories', value: '12', icon: Tags, color: 'text-purple-500' },
    { title: 'New Orders', value: '24', icon: ShoppingCart, color: 'text-green-500' },
    { title: 'Revenue', value: '₦1.2M', icon: TrendingUp, color: 'text-orange-500' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard Overview</h2>
        <p className="text-muted-foreground">
          Welcome back to Success Tee World management portal.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">+2.5% from last month</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {/* Placeholder for recent activity */}
              <p className="text-sm text-muted-foreground text-center py-8">
                Activity logs will appear here as you manage products.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <button className="w-full justify-start text-sm font-medium border rounded-md p-2 hover:bg-accent">
              Add New Product
            </button>
            <button className="w-full justify-start text-sm font-medium border rounded-md p-2 hover:bg-accent">
              Create Category
            </button>
            <button className="w-full justify-start text-sm font-medium border rounded-md p-2 hover:bg-accent">
              Update Site Settings
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
