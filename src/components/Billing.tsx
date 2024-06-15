import { useState } from "react";
import Input from "./ui/input";

function Billing() {
  const [isValidate, setIsValidate] = useState<boolean>(false);
  return (
    <main>
      {!isValidate && (
        <>
          <h1 className=" my-5 text-2xl font-bold uppercase">
            Confirmation de votre commande
          </h1>
          <div className="flex justify-center">
            <form className="block justify-center">
              <Input title="Noms" />
              <Input title="Mastercard/Visa" type="number" minLength={5} />
              <Input title="CVV" type="number" minLength={5} />
              <button
                type="button"
                onClick={() => setIsValidate(true)}
                className="block mt-8 mb-8 hover:bg-blue-900 border hover:text-white transition-all duration-300 rounded-lg font-bold border-blue-900 py-3 px-3 w-80"
              >
                Confirmer commande
              </button>
            </form>
          </div>
        </>
      )}
        {isValidate && (
            <div className="flex justify-center">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Merci pour votre commande</h1>
                <p className="text-lg mt-5">
                Votre commande a été bien enregistrée. Vous recevrez un email de
                confirmation.
                </p>
            </div>
            </div>
        )}
    </main>
  );
}

export default Billing;
