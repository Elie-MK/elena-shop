import CardProduct from "@/components/Categories/CardProduct";
import { datasProducts } from "@/Utils/DummyDB";
import { Link, useLocation } from "react-router-dom"

function IndexProducts() {
  const location = useLocation()
  const currentPath = location.pathname.split('/')[2];
  
  let pathImageBanner

  if(currentPath === "femme"){
    pathImageBanner = "https://cdn.create.vista.com/downloads/cb0ad732-bd73-4e78-9c55-7576c805d7a7_1024.jpeg"
  } else if(currentPath === "homme" ){
    pathImageBanner = "https://resources.booztcdn.com/brandwalls/Boozt_Brand_Home_Banner_Mobile_828x320px-176_men_SS23-1674134951.jpeg"
  }else{
    pathImageBanner = "https://www.womenfashionwear.com/images/fashion-accessory-banner.jpg"
  }
  
  return (
    <div>
      <div className="mx-10">
        <div className="flex justify-center my-10 gap-3">
          <img className="w-1/1 rounded-lg" src={pathImageBanner} alt="banner" />
        </div>

        <div className="flex justify-between items-center">
          <h1 className="font-bold text-2xl">{currentPath.toUpperCase()}</h1>
          {/* <div>Search</div> */}
        </div>

        <div>
        <div className="my-4 grid grid-cols-5">
            {
                datasProducts.filter(type => type.type == currentPath).map(({datas})=>
                  datas.map(({title, price, img, id})=>
                    <Link to={`/product/detail/${id}`} key={id}>
                      <CardProduct titleItem={title} price={price} image={img[0]} />
                    </Link>
                  )
                )
            }
        </div>
        </div>
      </div>
    </div>
  )
}

export default IndexProducts