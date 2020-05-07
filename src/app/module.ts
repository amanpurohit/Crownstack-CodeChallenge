export interface LocationData {
    dealers_id: string;
    name: string;
    opco: string;
    branches: Branch[]
}

export interface Branch {
    branch_id: string;
    name: string;
    categories: Category[]
}

export interface Category {
    image: string;
    name: string;
    subcategories: SubCategory[]
}

export interface SubCategory {
    image: string;
    name: string;
}