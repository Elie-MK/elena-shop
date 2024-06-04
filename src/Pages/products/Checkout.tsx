import CheckoutCard from "@/components/Categories/CheckoutCard";
import { Button } from "@/components/ui/button";
import { IoCard } from "react-icons/io5";

function Checkout() {
  return (
    <div>
      <div className="grid grid-cols-2 mx-4 py-10 h-screen">
        <div className="border-r">
          <h1 className="font-bold text-2xl mb-5">Product (1)</h1>
          <CheckoutCard />
        </div>

        {/* Total */}
        <div className="mx-4">
          <h1 className="text-2xl font-bold">TOTAL</h1>
          <div className="my-4">
            <div className="flex items-center gap-10 ">
              <h1 className="font-bold text-xl">Sub-Total :</h1>
              <span className="font-medium text-xl"> 254.00 TND</span>
            </div>
            <div className="flex items-center gap-14 my-1">
              <h1 className="font-bold text-xl">Delivery : </h1>
              <span className="font-medium text-xl">Free</span>
            </div>
            <div className="flex items-center gap-8 ">
              <h1 className="font-bold text-xl">Total Price : </h1>
              <span className="font-medium text-xl">254.00 TND</span>
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
    </div>
  );
}

export default Checkout;
