import { Form } from "./components/Form"

function App() {

  return (
    <>
      <header className="p-8">
        <div className="mx-auto max-w-5xl flex flex-col space-y-2 justify-center items-center md:mt-20 md:mb-10">
          <h1 className="text-2xl md:text-5xl font-bold">Happy :<span className="text-orange-600">) Pet</span></h1>
          <p className="text-lg">Con el objetivo de ver a los animales <span className="text-orange-600 font-semibold">Felices</span></p>
        </div>
      </header>

      <section className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Form />
        </div>

      </section>
    </>
  )
}

export default App
