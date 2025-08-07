import React from 'react'
import { Categorys, Skills, Hero, Sale } from '@/components'
import { Collections } from '@/components/collections/Collections';


const sampleCategories = [
  { name: "Abrigos", img: "/images/ropa/ropa.webp", slug: "/category/abrig1", description: "" },
  { name: "Ropa", img: "/images/ropa/ropa.webp", slug: "/category/ropa", description: "" },
  { name: "Ropa2", img: "/images/ropa/ropa.webp", slug: "/category/ropa1", description: "" },
  { name: "Ropa3", img: "/images/ropa/ropa.webp", slug: "/category/ropa2", description: "" },
  { name: "Abrigos2", img: "/images/ropa/ropa.webp", slug: "/category/abrig2", description: "" },
  { name: "Ropa4", img: "/images/ropa/ropa.webp", slug: "/category/ropa3", description: "" },
  { name: "Ropa5", img: "/images/ropa/ropa.webp", slug: "/category/ropa4", description: "" },
  { name: "Ropa6", img: "/images/ropa/ropa.webp", slug: "/category/ropa5", description: "" },
];

const page = () => {
  return (
    <div>
      <Hero />
      <div className="w-full px-6 sm:px-8 lg:px-10 max-w-screen-3xl mx-auto mb-20">
        <Sale />
        <Skills />
        <Categorys categories={sampleCategories} />
        <Collections />
      </div>
    </div>
  )
}

export default page
