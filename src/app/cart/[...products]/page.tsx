interface ProductsPageProps {
  params: {products: string[]}
}

const ProductsPage = ({params}:ProductsPageProps) => {
  return (
    <div className="fix-height text-3xl font-bold p-5">
    ProductsPage
    <ul className="mt-7">
      {params.products.map(route => (
        <li className="font-normal text-xl text-gray-600">{route}</li>
      ))}
    </ul>
    </div>
)}

export default ProductsPage