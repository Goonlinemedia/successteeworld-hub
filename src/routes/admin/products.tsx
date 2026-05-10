import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ProductList, Product } from '@/components/admin/ProductList'
import { ProductForm } from '@/components/admin/ProductForm'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'

export const Route = createFileRoute('/admin/products')({
  component: ProductsPage,
})

function ProductsPage() {
  const [view, setView] = useState<'list' | 'add' | 'edit'>('list')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  const handleEdit = (product: Product) => {
    setSelectedProduct(product)
    setView('edit')
  }

  const handleSuccess = () => {
    setView('list')
    setSelectedProduct(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight">Product Management</h2>
          <p className="text-muted-foreground">
            {view === 'list' 
              ? 'View and manage your product listings.' 
              : view === 'add' 
                ? 'Fill in the details to add a new product.'
                : `Editing: ${selectedProduct?.name}`}
          </p>
        </div>
        {view === 'list' && (
          <Button onClick={() => setView('add')}>
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        )}
      </div>

      {view === 'list' && (
        <ProductList onEdit={handleEdit} />
      )}

      {(view === 'add' || view === 'edit') && (
        <ProductForm 
          initialData={selectedProduct || undefined} 
          onSuccess={handleSuccess} 
          onCancel={() => setView('list')} 
        />
      )}
    </div>
  )
}
