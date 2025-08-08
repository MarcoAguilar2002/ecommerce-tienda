// ---------------- ENUMS ----------------
export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';

// ---------------- MODELOS ----------------
export interface Category {
    id: string;
    name: string;
    img: string;
    slug: string;
    description: string;
    products?: Product[]; // opcional si no siempre cargas productos
}

export interface Collection {
    id: string;
    name: string;
    slug: string;
    description?: string | null;
    img: string;
    products?: Product[];
}

export interface Color {
    id: string;
    name: string;
    hex: string;
    variants?: ProductVariant[];
}

export interface Product {
    id: string;
    title: string;
    description: string;
    slug: string;
    tags: string[];
    categoryId: string;
    category: Category;
    collectionId?: string | null;
    collection?: Collection | null;
    variants?: ProductVariant[];
}

export interface ProductVariant {
    id: string;
    productId: string;
    product: Product;
    colorId: string;
    color: Color;
    size: Size;
    stock: number;
    images?: ProductVariantImage[];
    orderDetails?: OrderDetail[];
}

export interface ProductVariantImage {
    id: string;
    url: string;
    variantId: string;
    variant: ProductVariant;
}

export interface Company {
    id: string;
    name: string;
    description?: string | null;
    qrCodeUrl: string;
    logoWithTextUrl: string;
    logoWithoutTextUrl: string;
}

export interface Order {
    id: string;
    customerName: string;
    customerEmail: string;
    note: string;
    isPaid: boolean;
    total: number;
    createdAt: Date;
    updatedAt: Date;
    orderDetails?: OrderDetail[];
}

export interface OrderDetail {
    id: string;
    quantity: number;
    price: number;
    variantId: string;
    variant: ProductVariant;
    orderId: string;
    order: Order;
}


export interface CartProduct {
    id: string;       
    slug: string;     
    title: string;     
    price: number;    
    quantity: number; 
    size: Size;        
    color: Color;     
    image: string;   
}
