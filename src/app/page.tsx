import CategoryList from "@/components/CategoryList";
import Header from "@/components/Header";
import ListProduct from "./components/ListProduct";
import DetailProduct from "./components/DetileProduct";

export default function Home() {
  return (
    <main className="">
      <Header />
      <CategoryList />
      <ListProduct />
      <DetailProduct />
    </main>
  );
};