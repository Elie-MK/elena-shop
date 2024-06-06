import CheckoutCard from "@/components/Categories/CheckoutCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/store/store";
import { IoCard } from "react-icons/io5";

function Checkout() {
  const selector = useAppSelector((state)=>state.cart)
  const totalPrice = selector.cart.reduce((acc, {price, quantity})=> acc + (price * quantity), 0)
  
  return (
    <div>
     {
      selector.cart.length < 1 && 
      <div className="flex justify-center items-center h-screen ">
       <div>
       <div className="flex justify-center">
        <img className="w-1/2" src="/assets/emptycart.png" />
       </div>
        <h1 className="text-2xl text-center">Votre panier est vide</h1>
       </div>
      </div>
     }

     {
      selector.cart.length >=1 && 

      <div className="grid grid-cols-2 mx-4 py-10 h-screen">
      <div className="border-r">
        <h1 className="font-bold text-2xl mb-5">Product ({selector.cart.length})</h1>
        {
          selector.cart.map(({id, img, title, price, quantity})=>(
            <CheckoutCard key={id} id={id} img={img[0]} title={title} price={price} qte={quantity} />
          ))
        }
      </div>

      {/* Total */}
      <div className="mx-4">
        <h1 className="text-2xl font-bold">TOTAL</h1>
        <div className="my-4">
          <div className="flex items-center gap-10 ">
            <h1 className="font-bold text-xl">Sub-Total :</h1>
            <span className="font-medium text-xl"> {totalPrice}.00 TND </span>
          </div>
          <div className="flex items-center gap-14 my-1">
            <h1 className="font-bold text-xl">Delivery : </h1>
            <span className="font-medium text-xl">Free</span>
          </div>
          <div className="flex items-center gap-8 ">
            <h1 className="font-bold text-xl">Total Price : </h1>
            <span className="font-medium text-xl">{totalPrice}.00 TND</span>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <Button
            variant="outline"
            className="text-lg w-80 border-black hover:bg-gray-900 hover:text-white transition-all duration-500"
          >
            <IoCard className="mx-2" size={25} />
            Checkout
          </Button>
        </div>
      </div>
    </div>
     }
    </div>
  );
}

export default Checkout;
