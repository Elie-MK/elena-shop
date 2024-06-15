import { Button } from "@/components/ui/button";
import { addToCart, reduceItem } from "@/store/features/CartSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { datasProducts, productItem } from "@/Utils/DummyDB";
import { useEffect, useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useParams } from "react-router-dom";

function Details() {
  const dispatch = useAppDispatch();
  const selector = useAppSelector((state)=>state.cart);

  const [item, setItem] = useState<number>(0);

  const params = useParams();
  const idProduct = Number(params.idProduct);
  const products = datasProducts.find((data) =>
    data.datas.find((productId) => productId.id === idProduct)
  );
  const product = products?.datas.find((product) => product.id === idProduct);

  useEffect(()=>{
    const item = selector.cart.find((item)=>item.id === idProduct);
    if(item){
      setItem(item.quantity);
    }
  },[idProduct, selector])

  function handleToIncrement(product: productItem) {
    if (product) {
      dispatch(addToCart(product));
      setItem(item + 1);
    }
  }

  function handleToDecrement(product: productItem) {
    if (item > 1) {
      dispatch(reduceItem(product));
      setItem(item - 1);
    } else {
      return;
    }
  }

  return (
    <div>
      <div className="grid grid-cols-2 mx-4">
        <div className="grid grid-cols-2 gap-3 justify-center my-10 ">
          <img className="" src={product?.img[0]} alt="banner" />
          <img className="" src={product?.img[1]} alt="banner" />
        </div>

        {/* Detail product */}
        <div className="flex justify-start my-10 mx-5">
          <div>
            <h1 className="text-3xl font-bold">{product?.title}</h1>
            <p className="text-lg mt-5">{product?.price}.00 TND</p>
            <p className="text-lg my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="flex gap-10 items-center">
              <div className="flex items-center gap-5 border  rounded-lg ">
                <Button
                  onClick={() => product && handleToDecrement(product)}
                  className="text-xl cursor-pointer font-bold bg-gray-900 h-11 px-5 text-white flex items-center justify-center "
                >
                  -
                </Button>
                <div className="text-xl font-extrabold">{item}</div>
                <Button
                  onClick={() => product && handleToIncrement(product)}
                  className="text-xl cursor-pointer font-bold bg-gray-900 h-11 px-5 text-white flex items-center justify-center "
                >
                  +
                </Button>
              </div>
              <Button
                onClick={() => product && dispatch(addToCart(product))}
                size={"lg"}
                variant="outline"
                className="text-lg border-black hover:bg-gray-900 hover:text-white transition-all duration-500"
              >
                <BiShoppingBag className="mx-2" size={25} />
                Ajouter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
