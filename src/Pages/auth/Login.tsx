import { UsersDummy } from "@/Utils/DummyUser";
import { useEffect, useState } from "react";
import { ActionFunction, Form, Link, redirect, useActionData, useNavigation } from "react-router-dom";

function Login() {
  const [errorMsg, setErrorMsg]=useState<string|null>(null)
  const navigation = useNavigation()
  const isSubmitting = navigation.state === "submitting"

  const data = useActionData()

  useEffect(()=>{
    if(data === "invalid datas"){
      setErrorMsg("invalid datas")
    }else if(data === "user not found"){
      setErrorMsg("user not found")
    }else if(data === "invalid password") {
      setErrorMsg("invalid password")
    }else {
      setErrorMsg(null)
    }
  },[data])

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-36 rounded-xl w-auto"
          src="./assets/elenashop-logo.png"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Connectez-vous 
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <Link
          to={"/"}
          className="font-semibold flex justify-end text-indigo-600 hover:text-indigo-500"
        >
          Continuer le shopping
        </Link>
        <Form className="space-y-6" method="post">
          
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
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
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
              Se connecter
            </button>
          </div>
        </Form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Pas de compte ?
          <Link
            to={"/signup"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 mx-2"
          >
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  );
}
 
export default Login;



export const action:ActionFunction = async ({ request }) => {
  const data = await request.formData();

  const loginData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const user = UsersDummy.find(user => user.email == loginData.email)

  if(!loginData.email || !loginData.password){
    return new Response("invalid datas", { status: 400 });
  }
  if(!user){
    return new Response("user not found", { status: 404 });
  }
  if(user.password !== loginData.password){
    return new Response("invalid password", { status: 400 });
  }

  localStorage.setItem('user', JSON.stringify(user))
  
  return redirect('/')
};
