export type ProductType = {
    id: string,
    title: string,
    price: number
}

export const api: Array<ProductType> = [
    {id: '1', title: 'Apple', price: 999},
    {id: '2', title: 'Asus', price: 799}
]