import { Button } from "../ui/button"

function CheckoutCard() {
  return (
   <div className="flex">
     <div className="flex items-center border rounded-lg">
    <div>
      <img className="w-24" src="https://via.placeholder.com/150" alt="product" />
    </div>
    <div className="mx-4">
      <div className="flex items-center justify-between gap-32">
        <h1 className="font-bold text-lg">Product Name</h1>
        <span className="text-black cursor-pointer">X</span>
      </div>
      <div className="flex items-center gap-5 rounded-lg my-1">
        <Button className="text-lg cursor-pointer font-bold bg-gray-900 h-7 px-2 text-white flex items-center justify-center ">-</Button>
            <div className="text-lg font-extrabold">1</div>
        <Button className="text-lg cursor-pointer font-bold bg-gray-900 h-7 px-2 text-white flex items-center justify-center ">+</Button>
      </div> 
      <p className="text-lg">Price: 100 TND</p>
    </div>
  </div>
   </div>
  )
}

export default CheckoutCard