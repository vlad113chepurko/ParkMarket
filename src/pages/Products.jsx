import { useGetProducts } from "../hooks/useGetProducts";
import { useCategoryStore } from "../store/useCategoryStore";
import Filter from "../components/Filter";

export default function Products() {

  const { category } = useCategoryStore((state) => state.category)

  useGetProducts();

  return (
    <div>
      <Filter />
      <h1>{category}</h1>

    </div>
  )
}
