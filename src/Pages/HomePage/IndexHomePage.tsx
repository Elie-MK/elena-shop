import CategoriesProduct from "@/components/Categories/CategoriesProduct"
import { datasProducts } from "@/Utils/DummyDB"

function IndexHomePage() {
  return (
    <div>
      <div className="mx-10">
        <div className="flex justify-center my-10">
          <img className="w-10/12 rounded-lg" src="assets/banner.jpg" alt="Banner"/>
        </div>

        <div>
          {
            datasProducts.map(({type, datas})=>
              <div key={type}>
                <CategoriesProduct title={type} datas={datas.slice(0,5)} />
              </div> 
            )
          }
        </div>
      </div>
    </div>
  )
}

export default IndexHomePage