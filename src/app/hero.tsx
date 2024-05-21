import Products from "./utils/products"
export default function Hero(){
    return( 
        
        <div className=" absolute  -top-10 flex flex-col justify-center items-center bg-[#1B1D1F] font-sans  gap-2  max-w-[34rem] py-20 rounded-[10px] ">
             <div className="flex flex-col  max-w-[50%] justify-center items-center gap-2">
            <h1 className=" text-[#FEF7EE] text-[32px] font-bold">Our Collection</h1>
           
            <h2 className="text-[#6F757C] font-[600] text-[16px] text-center">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</h2>
            </div>
<section className="flex text-[12px] text-[#FEF7EE] py-3 gap-4 font-semibold">
    <button className="bg-[#6F757C] py-2 px-2 font-semibold rounded-md">All Products</button>
    <button>Available Now</button>
</section>
<Products/>
        </div>
        
    )
}