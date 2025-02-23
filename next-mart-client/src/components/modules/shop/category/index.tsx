import CreateCategoryModal from "@/app/(WithDashboardLayout)/user/shop/category/CreateCategoryModal";
import { NMTable } from "@/components/ui/core/NMTable";
import { ICategory } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
type TCategoriesProps={
  categories:ICategory[]
}
const ManageCategory = ({categories}:TCategoriesProps) => {
console.log(categories)
  const columns: ColumnDef<ICategory>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },

  ]
  // console.log(categories)
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Categories</h1>
        <CreateCategoryModal />
      </div>
      <NMTable data={categories} columns={columns}/>
    </div>
  );
};

export default ManageCategory;
