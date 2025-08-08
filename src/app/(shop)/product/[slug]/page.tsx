import { titleFont, bodyFont } from "@/config/fonts";
import { Button } from "@/components/ui/button/Button";
import { ProductSlideshow, } from "@/components";
import { Size } from "@/interfaces";
import { ProductMobileSlideshow } from "@/components/product/slidehosw/ProductMobileSlideshow";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/actions";
import { AddToCart } from "./ui/AddToCart";

interface Props {
  params: {
    slug: string;
  }
}

const coloresDisponibles = [
  { id: "1", name: "Rojo", hex: "#FF0000" },
  { id: "2", name: "Azul", hex: "#0000FF" },
  { id: "3", name: "Negro", hex: "#000000" },
];

const availableTallas: Size[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];
const imagenes: string[] = ['/images/ropa/sale.webp', '/images/ropa/sale.webp', '/images/ropa/sale.webp'];

export default async function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug)


  if (!product) {
    notFound();
  }


  return (
    <div className="container mx-auto min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Slideshow */}
        <div className="col-span-1 md:col-span-2 w-full">
          <ProductMobileSlideshow
            images={imagenes}
            title=""
            className="block md:hidden w-full max-w-full"
          />
          <ProductSlideshow
            images={imagenes}
            title=""
            className="hidden md:block w-full max-w-full"
          />
        </div>

        <div className="col-span-1 px-5">

          <p className={`${titleFont.className} font-semibold text-lg`}>Title</p>
          <p className={`${bodyFont.className} font-semibold text-xl`}>S/ 32</p>
          <AddToCart product={product} />
          <div className="my-5">
            <p className="font-semibold">Descripción:</p>
            <p>{/* Add description content */}</p>
          </div>
        </div>
      </div>

      <div className={`text-2xl ${titleFont.className}`}>
        También te podría gustar
      </div>
    </div>
  );
}