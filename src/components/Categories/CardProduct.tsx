import { MdOutlineShoppingBag } from "react-icons/md";

function CardProduct({image, titleItem, price}:{image:string, titleItem:string, price:number}) {
  return (
    <section className="w-60 h-fit group">
        <div className="relative overflow-hidden">
            <img
            className="rounded-lg"
            src={image}
            alt="card photo"
            />
            <div className="absolute cursor-pointer rounded-lg h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <button className="bg-white text-black px-4 py-4 rounded-full">
                    <MdOutlineShoppingBag size={30}/>
                </button>
            </div>
        </div>
      <div className="my-2 cursor-pointer">
        <h1 className="text-lg font-bold">{titleItem}</h1>
        <p className="text-sm my-1"> {price},00 TND</p>
      </div>
    </section>
  );
}

export default CardProduct;
