import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import CardProduct from "./CardProduct";
import { productItem } from "@/Utils/DummyDB";

function CategoriesProduct({title, datas}:{title:string, datas:productItem[]}) {
  return (
    <div>
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">{title}</h1>
            <Link to={`product/${title}`}>
            <span  className="flex items-center gap-3">
                Voir tout
                <IoIosArrowForward />
            </span>
            </Link>
        </div>
        <div className="my-4 grid grid-cols-5">
            {
                datas.map(({title, price, img, id})=>
                    <Link to={`/product/detail/${id}`} key={id}>
                        <CardProduct titleItem={title} price={price} image={img[0]} />
                    </Link>
                )
            }
        </div>
    </div>
  )
}

export default CategoriesProduct