import { createFileRoute } from '@tanstack/react-router'
import { OrdersList } from '@/components/admin/OrdersList'

export const Route = createFileRoute('/admin/sales')({
  component: SalesPage,
})

function SalesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Sales & Orders</h2>
        <p className="text-muted-foreground">
          Track customer purchases and manage order fulfillment.
        </p>
      </div>
      <OrdersList />
    </div>
  )
}
