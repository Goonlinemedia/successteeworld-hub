import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  Edit2, 
  Trash2, 
  Loader2, 
  PackageX, 
  Search, 
  Filter, 
  X,
  Check
} from "lucide-react";
import { toast } from "sonner";
import { formatNaira } from "@/lib/products";

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: string;
  inStock: boolean;
  brand?: string;
  sku?: string;
  createdAt?: any;
};

interface ProductListProps {
  onEdit: (product: Product) => void;
}

export function ProductList({ onEdit }: ProductListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const q = query(collection(db, "products"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const prods = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Product[];
      setProducts(prods);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching products:", error);
      toast.error("Failed to load products");
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      await deleteDoc(doc(db, "products", id));
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center p-12">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const FilterSelect = ({ placeholder }: { placeholder: string }) => (
    <Select>
      <SelectTrigger className="h-7 text-[10px] bg-[#F2F2F2] border-gray-300 rounded-none w-auto min-w-[100px]">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All {placeholder}</SelectItem>
      </SelectContent>
    </Select>
  );

  const StatusIcon = ({ active }: { active: boolean }) => (
    <div className={`w-5 h-4 flex items-center justify-center rounded-[2px] ${active ? 'bg-[#4CAF50]' : 'bg-gray-300'}`}>
      {active && <Check className="w-3 h-3 text-white" />}
    </div>
  );

  return (
    <div className="flex flex-col">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="h-9 bg-transparent border-b rounded-none p-0 flex justify-start gap-1">
          <TabsTrigger 
            value="overview" 
            className="rounded-t-md rounded-b-none border border-b-0 data-[state=active]:bg-white data-[state=active]:border-gray-300 h-full text-xs px-4"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="export" 
            className="rounded-t-md rounded-b-none border border-b-0 data-[state=active]:bg-white data-[state=active]:border-gray-300 h-full text-xs px-4"
          >
            Manage Product Export
          </TabsTrigger>
          <TabsTrigger 
            value="upload" 
            className="rounded-t-md rounded-b-none border border-b-0 data-[state=active]:bg-white data-[state=active]:border-gray-300 h-full text-xs px-4"
          >
            Image Upload
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-0 border p-1 bg-[#F9F9F9]">
          {/* Advanced Filter Bar */}
          <div className="flex items-center gap-1 mb-1 overflow-x-auto pb-1 bg-[#E6E6E6] p-1 border border-gray-300">
            <div className="relative flex items-center bg-white border border-gray-300 h-7 px-2">
              <input 
                type="text" 
                placeholder="Search SKU..." 
                className="text-[10px] outline-none w-24"
              />
              <X className="w-3 h-3 text-gray-400" />
            </div>
            <FilterSelect placeholder="SKU (config)" />
            <FilterSelect placeholder="Attribute set" />
            <FilterSelect placeholder="Categories" />
            <FilterSelect placeholder="Brand" />
            <FilterSelect placeholder="Workflow Stage" />
            <FilterSelect placeholder="Status" />
            <FilterSelect placeholder="Visibility" />
            <FilterSelect placeholder="Date" />
            
            <div className="flex gap-1 ml-auto">
              <Button variant="outline" className="h-7 text-[10px] bg-white rounded-none border-gray-300 px-2">Clear</Button>
              <Button variant="outline" className="h-7 text-[10px] bg-white rounded-none border-gray-300 px-2">Filter</Button>
              <Button variant="outline" className="h-7 text-[10px] bg-white rounded-none border-gray-300 px-2">Select all</Button>
              <Select>
                <SelectTrigger className="h-7 text-[10px] bg-white border-gray-300 rounded-none w-[100px]">
                  <SelectValue placeholder="With selected" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delete">Delete</SelectItem>
                </SelectContent>
              </Select>
              <Button className="h-7 text-[10px] bg-gray-200 text-black hover:bg-gray-300 rounded-none border border-gray-400 px-2">Go</Button>
            </div>
          </div>

          {/* Catalog Table */}
          <div className="bg-white border border-gray-300 overflow-x-auto">
            <Table className="border-collapse">
              <TableHeader className="bg-[#E6E6E6]">
                <TableRow className="hover:bg-transparent h-8 border-b-gray-400">
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 text-center uppercase">ID</TableHead>
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 uppercase">Attribute set</TableHead>
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 uppercase">SKU</TableHead>
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 uppercase">Name</TableHead>
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 uppercase">Ex: Sony (Brand)</TableHead>
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 text-center uppercase"># of simples</TableHead>
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 text-center uppercase">Active Avail...</TableHead>
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 text-center uppercase">Available Stock</TableHead>
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 text-center uppercase">PC</TableHead>
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 text-center uppercase">EC</TableHead>
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 text-center uppercase">Images</TableHead>
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 text-center uppercase">QC</TableHead>
                  <TableHead className="text-[10px] font-bold text-black border-r border-gray-300 h-8 px-2 text-center uppercase">Status</TableHead>
                  <TableHead className="text-[10px] font-bold text-black h-8 px-2 text-center uppercase">Visible</TableHead>
                  <TableHead className="text-[10px] font-bold text-black h-8 px-2 text-center uppercase">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={15} className="text-center py-20">
                      <PackageX className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium">No products yet</h3>
                      <p className="text-sm text-muted-foreground">Add your first product to get started.</p>
                    </TableCell>
                  </TableRow>
                ) : (
                  products.map((product) => (
                    <TableRow key={product.id} className="h-8 hover:bg-blue-50/30">
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2 text-center">{product.id.slice(0, 8)}</TableCell>
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2">{product.category}</TableCell>
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2">{product.sku || 'N/A'}</TableCell>
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2 text-blue-600 underline cursor-pointer" onClick={() => onEdit(product)}>
                        {product.name}
                      </TableCell>
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2 uppercase font-bold">{product.brand || 'STW'}</TableCell>
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2 text-center">1</TableCell>
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2 text-center">{product.inStock ? '1' : '0'}</TableCell>
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2 text-center">{product.inStock ? '1' : '0'}</TableCell>
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2 text-center">
                        <div className="flex justify-center"><StatusIcon active={true} /></div>
                      </TableCell>
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2 text-center">
                        <div className="flex justify-center"><StatusIcon active={true} /></div>
                      </TableCell>
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2 text-center">
                        <div className="flex justify-center"><StatusIcon active={product.image ? true : false} /></div>
                      </TableCell>
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2 text-center">
                        <div className="flex justify-center"><StatusIcon active={true} /></div>
                      </TableCell>
                      <TableCell className="text-[10px] border-r border-gray-200 py-1 px-2 text-center">
                        <div className="flex justify-center"><StatusIcon active={product.inStock} /></div>
                      </TableCell>
                      <TableCell className="text-[10px] py-1 px-2 text-center">
                        <div className="flex justify-center"><StatusIcon active={true} /></div>
                      </TableCell>
                      <TableCell className="text-[10px] py-1 px-2 text-center">
                        <div className="flex items-center justify-center gap-1">
                          <button onClick={() => onEdit(product)} className="text-blue-600 hover:underline">Edit</button>
                          <span className="text-gray-300">|</span>
                          <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:underline">Delete</button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        
        <TabsContent value="export" className="mt-0 border p-8 bg-white text-center text-muted-foreground">
          Export functionality placeholder.
        </TabsContent>
        
        <TabsContent value="upload" className="mt-0 border p-8 bg-white text-center text-muted-foreground">
          Bulk image upload placeholder.
        </TabsContent>
      </Tabs>
    </div>
  );
}
