import { Nav, Footer, SliderInfinity, Sidebar, SidebarShop } from "@/components";

export default function ShopLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen ">
      <Sidebar />
      <SidebarShop />
      <SliderInfinity />

      <Nav />
      {children}
      <Footer />
    </main>
  );
}