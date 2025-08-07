import { Category } from "../category/Category";
import { Category as CategoryProps } from "@/interfaces/category";

interface Props {
    categories: CategoryProps[];
}

export const Categorys = ({ categories }: Props) => {
    return (
        <>
            <div className="text-center my-10">
                <p className="font-bold text-2xl">Explorando Categorías</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories.map((category) => (
                    <Category key={category.slug} {...category} />
                ))}
            </div>
        </>
    );
};
