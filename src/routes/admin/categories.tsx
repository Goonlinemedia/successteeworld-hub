import { createFileRoute } from '@tanstack/react-router'
import { CategoryManager } from '@/components/admin/CategoryManager'

export const Route = createFileRoute('/admin/categories')({
  component: CategoriesPage,
})

function CategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight">Category Management</h2>
        <p className="text-muted-foreground">
          Organize your products by creating and managing categories.
        </p>
      </div>
      <CategoryManager />
    </div>
  )
}
