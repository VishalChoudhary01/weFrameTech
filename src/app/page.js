import Navbar from "./components/navbar";
import Image from "next/image";
import Product from "./components/product";
import ProductNavigation from "./components/productNavigation";
export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="container lg:w-full md:w-5/6 w-[90%]">

    <Product/>
    <ProductNavigation/>
    </main>
    </>
  );
}
