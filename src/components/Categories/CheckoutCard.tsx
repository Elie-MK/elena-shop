import { useAppDispatch } from "@/store/store"
import { Button } from "../ui/button"
import {  addToCart, reduceItem, removeFromCart } from "@/store/features/CartSlice"
import { productItem } from "@/Utils/DummyDB"

function CheckoutCard({img, title, price, id, qte}:{img:string, title:string, price:number, id:number, qte:number}) {
  const dispatch = useAppDispatch()

  return (
   <div className="flex mb-4">
     <div className="flex items-center border rounded-lg">
    <div>
      <img className="w-24" src={img} alt="product" />
    </div>
    <div className="mx-4">
      <div className="flex items-center justify-between gap-20">
        <h1 className="font-bold text-lg w-64">{title}</h1>
        <span onClick={()=>dispatch(removeFromCart({id}))} className="text-black cursor-pointer">X</span>
      </div>
      <div className="flex items-center gap-5 rounded-lg my-1">
        <Button onClick={()=>dispatch(reduceItem({id} as productItem))} className="text-lg cursor-pointer font-bold bg-gray-900 h-7 px-2 text-white flex items-center justify-center ">-</Button>
            <div className="text-lg font-extrabold">{qte}</div>
        <Button onClick={()=>dispatch(addToCart({id} as productItem))} className="text-lg cursor-pointer font-bold bg-gray-900 h-7 px-2 text-white flex items-center justify-center ">+</Button>
      </div> 
      <div className="flex items-center justify-between">
        <p className="text-lg">Quantity: {qte}</p>
        <p className="text-lg">Price: { price },00 TND</p>
      </div>
    </div>
  </div>
   </div>
  )
}

export default CheckoutCard