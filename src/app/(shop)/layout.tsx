import { Nav, Footer, SliderInfinity, Sidebar } from "@/components";

export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen ">
      <Sidebar />
      <SliderInfinity />
      
      <Nav />
      {children}
      <Footer />
    </main>
  );
}