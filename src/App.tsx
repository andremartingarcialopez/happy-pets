import { Form } from "./components/Form"
import PatientFollowUp from "./components/PatientFollowUp";
import { usePatient } from "./hooks/usePatient";

function App() {

  const {state} = usePatient();

  localStorage.setItem("patients",JSON.stringify(state.patients))

  return (
    <>
      <header className="p-8">
        <div className="mx-auto max-w-5xl flex flex-col space-y-2 justify-center items-center md:mt-3 md:mb-10">
          <h1 className="text-4xl md:text-5xl font-bold">Happy :<span className="text-orange-600">) Pet</span></h1>
          <p className="text-sm ">Con el objetivo de ver a los animales <span className="text-orange-600 font-semibold">Felices</span></p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 md:gap-10 px-2">
        <div>
          <Form />
        </div>

        <div>
          <PatientFollowUp/>
        </div>

      </section>
    </>
  )
}

export default App
