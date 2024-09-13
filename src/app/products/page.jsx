

import ProductCart from "../../components/productcart"
import axios from "axios"
 



export default async function page() {


    const getToken = await axios.get("/api/")

    const fetchData = await axios.get("https://jsonplaceholder.typicode.com/users");

    

    console.log(fetchData);
    


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Electricity Only</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCart key={index} product={product} />
        ))}
      </div>
    </div>

  )
}

