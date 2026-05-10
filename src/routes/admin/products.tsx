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
    <div className="space-y-4">
      {view === 'list' && (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Catalog &gt; Overview
            </div>
            <Button 
              onClick={() => setView('add')}
              className="bg-[#E6E6E6] text-black hover:bg-gray-300 border border-gray-400 rounded-sm px-4 h-8 text-xs font-bold uppercase shadow-none"
            >
              Create New Product
            </Button>
          </div>
        </div>
      )}

      {view !== 'list' && (
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tight">
              {view === 'add' ? 'Product Creation' : `Editing: ${selectedProduct?.name}`}
            </h2>
          </div>
        </div>
      )}

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
