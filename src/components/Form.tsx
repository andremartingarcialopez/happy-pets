
export function Form() {
    return (
        <>
            <div className="flex flex-col justify-center items-center space-y-3 mb-5">
                <h2 className="text-xl md:text-3xl font-bold">Seguimiento de Pacientes</h2>
                <p className="md:text-lg">Añade tu Pacientes y <span className="font-semibold text-orange-600">Administralos</span></p>
            </div>
            <form className="p-8 rounded-xl bg-white shadow-xl">
                <div>
                    <label htmlFor="namePet" className="font-semibold">Nombre:</label>
                    <input type="text" id="namePet" className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" placeholder="Nombre de la mascota" />
                </div>

                <div>
                    <label htmlFor="owner" className="font-semibold">Propietario:</label>
                    <input type="text" id="owner" className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" placeholder="Nombre del propietario" />
                </div>

                <div>
                    <label htmlFor="email" className="font-semibold">Email:</label>
                    <input type="email" id="email" className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" placeholder="Email del propietario" />
                </div>

                <div>
                    <label htmlFor="phone" className="font-semibold">Telefono:</label>
                    <input type="tel" id="phone" className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" placeholder="Telefono del propietario" />
                </div>

                <div>
                    <label htmlFor="date" className="font-semibold">Fecha:</label>
                    <input type="date" id="date" className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" />
                </div>

                <div>
                    <label htmlFor="symptoms" className="font-semibold">Sintomas:</label>
                    <textarea className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" id="symptoms" placeholder="Sintomas de la mascota"></textarea>
                </div>

                <input className="mt-3 bg-orange-600 w-full text-center text-white font-semibold uppercase p-2 rounded-lg hover:bg-orange-700 cursor-pointer active:bg-orange-600" type="submit" value={"Agregar Paciente"} />
            </form>
        </>
    )
}
