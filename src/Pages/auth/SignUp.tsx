import { UsersDummy } from "@/Utils/DummyUser"
import { ActionFunction, Form, Link, redirect, useNavigation } from "react-router-dom"

function SignUp() {
    const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"  
  
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-36 rounded-xl w-auto"
        src="./assets/elenashop-logo.png"
        alt="Your Company"
      />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Création de votre compte
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <Link
        to={"/"}
        className="font-semibold flex justify-end text-indigo-600 hover:text-indigo-500"
      >
        Continuer le shopping
      </Link>
      <Form className="space-y-6" method="post" >
      <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Name 
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              className="block w-full rounded-md border-0 py-1.5 px-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
          disabled={isSubmitting}
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            S'enregistrer
          </button>
        </div>
      </Form>

      <p className="mt-10 text-center text-sm text-gray-500">
        Vous avez déjà un compte ?
        <Link
          to={"/login"}
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 mx-2"
        >
          Se connecter
        </Link>
      </p>
    </div>
  </div>
  )
}

export default SignUp


export const action:ActionFunction = async ({request})=>{
  const data = await request.formData();

  const loginData = {
    id:Date.now(),
    name: data.get("name"),
    email: data.get("email"),
    password: data.get("password"),
    isAdmin: false
  };

  if(!loginData.name || !loginData.email || !loginData.password){
    return {
      status:400,
      message:"Tous les champs sont requis"
    }
  }

  const userExist = UsersDummy.find((u)=>u.email === loginData.email)
  if(userExist){
    return {
      status:400,
      message:"Cet email existe déjà"
    }
  }

  localStorage.setItem('user', JSON.stringify(loginData))
  
  return redirect('/')
}

