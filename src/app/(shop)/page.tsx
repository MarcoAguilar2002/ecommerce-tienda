import React from 'react'
import { Categorys, Skills, Hero, Sale } from '@/components'
import { Collections } from '@/components/collections/Collections';
import { getCategory, getCollection } from '@/actions';
import { Category, Collection, Product } from '@/interfaces';


const page = async () => {
  const categorys: Category[] = await getCategory();
  const collections: Collection[] = await getCollection();



  return (
    <div>
      <Hero />
      <div className="w-full px-6 sm:px-8 lg:px-10 max-w-screen-3xl mx-auto mb-20">
        <Sale />
        <Skills />
        <Categorys categories={categorys} />
        <Collections collections={collections}/>
      </div>
    </div>
  )
}

export default page
