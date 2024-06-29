import Input from "@/components/ui/input"
import { datasProducts } from "@/Utils/DummyDB";
import { UsersDummy } from "@/Utils/DummyUser";
import { useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { redirect } from "react-router-dom";

function IndexAdmin() { 
  const [selectCat, setSelectCat] = useState<string|null>(null)

  const dummyCategories = [
    "Homme", 
    "Femme", 
    "Accessoires", 
    "Chaussures"
  ]

  return (
    <div className="mt-10">
      <div  className="grid grid-cols-2 px-10 ">
      <div>
      <h1 className="text-xl font-bold uppercase text-center">Ajouter un produit</h1>
      <form>
        <Input type="text" title=" Title" />
        <Input type="number" title=" Price" />
        <Input type="text" title=" Image" />
        <div >
          <h1 className="text-lg font-semibold my-2" >Categories</h1>
          <div className="flex items-center gap-3">
          {
            dummyCategories.map((item)=>(
              <button key={item} onClick={()=>setSelectCat(item)} type="button" className={`${selectCat === item && "bg-blue-900 text-white " } transition-all duration-500  rounded-lg p-2`}>{item}</button>
            ))
          }
          </div>
        </div>
        <button type="button" className="block mt-8 mb-8 hover:bg-blue-900 border hover:text-white transition-all duration-300 rounded-lg font-bold border-blue-900 py-3 px-3 w-96">Ajouter</button>
      </form>
      </div>

      {/* col-2 */}
      <div>
        <h1 className="text-xl font-bold uppercase text-center">Liste d'utilisateurs</h1>
        <div className="my-7">
          {
            UsersDummy.map(({name, email, isAdmin, id})=>(
              <div key={id}>
                <h1 className="text-lg font-semibold my-2">Nom : {name}</h1>
                <h1 className="text-lg font-semibold my-2">Email :  {email}</h1>
                <h1 className="text-lg font-semibold my-2">Role : {isAdmin?"Admin":"User"} </h1>
                <button className="block mb-8 hover:bg-red-600 border text-red-600 border-red-600 hover:text-white transition-all duration-300 rounded-lg font-bold  py-3 px-3 w-96">Supprimer</button>
              </div>
            ))
          }
        </div>
      </div>
      </div>

      {/* list of products */}
      <div className="px-10">
        <h1 className="text-xl font-bold uppercase text-center">Liste des produits</h1>
        <div >
          {
            datasProducts.map(({type, datas})=>(
              <div >
                <h1 className="font-bold text-lg my-5">Categorie : <span className="uppercase">{type}</span> </h1>
                <table className="table-auto border-separate border-spacing-x-32 border-spacing-y-5">
                  <thead className="bg-blue-900 text-white">
                    <tr>
                      <th>Titres</th>
                      <th>Images</th>
                      <th>Prix</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    datas.map(({title, price, img, id})=>(
                      <tr className="" key={id}>
                        <td>{title}</td>
                        <td>
                          <img className="w-20 h-20" src={img[0]} alt={title} />
                        </td>
                        <td>{price} DT</td>
                        <td className="flex items-center gap-5">
                          <button type="button">
                            <MdDelete color="red" size={30} />
                          </button>
                          <button type="button">
                            <MdModeEdit size={30} className="text-blue-900" />
                          </button>
                        </td>
                    </tr>
                    ))
                  }
                  </tbody>
              </table>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default IndexAdmin

export function loader(){
  const userJson = localStorage.getItem('user');
  if(userJson){
    const user = JSON.parse(userJson)
    if(!user.isAdmin){
      return redirect('/')
    }else {
      return IndexAdmin
    }
  }else {
    return redirect('/')
  }
  
} 