import Input from "@/components/ui/input"
import { redirect } from "react-router-dom";

function IndexAdmin() {
  return (
    <div className="flex justify-center mt-10">
      <div>
      <h1 className="text-xl font-bold uppercase">Bonjour Admin</h1>
      <form>
        <Input type="text" title=" Title" />
        <Input type="number" title=" Price" />
        <Input type="text" title=" Image" />
        <button type="button" className="block mt-8 mb-8 hover:bg-blue-900 border hover:text-white transition-all duration-300 rounded-lg font-bold border-blue-900 py-3 px-3 w-80">Publie</button>
      </form>
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