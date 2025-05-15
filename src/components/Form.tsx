import { useEffect, useState } from "react"
import type { Patient } from "../types/types"
import { MessageError } from "./MessageError";
import { usePatient } from "../hooks/usePatient";
import { v4 } from "uuid";
import { validPhone } from "../helpers/helpers";

export function Form() {

    const [error, setError] = useState("");
    const { state, dispatch } = usePatient()
    const [patient, setPatient] = useState<Patient>({
        namePet: "",
        typePet: "",
        owner: "",
        email: "",
        phone: "",
        date: "",
        symptoms: "",
        id: v4()
    });

    useEffect(() => {
        if (state.idEdit) {
            const patientEdit = state.patients.filter(function (patient) {
                return patient.id == state.idEdit
            })[0];

            setPatient(patientEdit)
        }
    }, [state.idEdit])

    function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {

        setPatient({ ...patient, [e.target.id]: e.target.value })
    }

    function validateEmail(email: string) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email)
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const trimPatient = Object.fromEntries(
            Object.entries(patient).map(function ([key, value]) {
                return [key, value.trim()]
            })
        );

        if (Object.values(trimPatient).includes("")) {
            setError("Todos los campos son obligatorios");
            setTimeout(() => {
                setError("")
            }, 3000);
            return
        }

        if (!validateEmail(patient.email)) {
            setError("Email no valido");
            setTimeout(() => {
                setError("")
            }, 3000);
            return
        }

        if (!validPhone(patient.phone)) {
             setError("Numero no valido");
            setTimeout(() => {
                setError("")
            }, 3000);
            return
        }
        

        if (state.idEdit) {
            dispatch({ type: "edit-patient", payload: { patient: patient } })
        } else {
            dispatch({ type: "add-patient", payload: { patient: patient } })
        }



        /* Reiniciamos el fromulario*/
        setPatient({
            namePet: "",
            typePet: "",
            owner: "",
            email: "",
            phone: "",
            date: "",
            symptoms: "",
            id: v4()
        })

    }

    return (
        <>
            <div className="flex flex-col justify-center items-center space-y-3 mb-5">
                <h2 className="text-2xl md:text-3xl font-bold">Seguimiento de Pacientes</h2>
                <p className="text-sm md:text-lg">Añade tus Pacientes y <span className="font-semibold text-orange-600">Administralos</span></p>
            </div>
            <form onSubmit={handleSubmit} className="p-4 rounded-xl bg-white shadow-xl mb-5">
                <div>
                    <label htmlFor="namePet" className="font-semibold">Nombre:</label>
                    <input type="text" id="namePet" className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" placeholder="Nombre de la mascota" value={patient.namePet} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="typePet" className="font-semibold">Animal:</label>
                    <input type="text" id="typePet" className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" placeholder="¿Que animal es?" value={patient.typePet} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="owner" className="font-semibold">Propietario:</label>
                    <input type="text" id="owner" className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" placeholder="Nombre del propietario" value={patient.owner} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="email" className="font-semibold">Email:</label>
                    <input type="email" id="email" className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" placeholder="Email del propietario" value={patient.email} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="phone" className="font-semibold">Telefono:</label>
                    <input maxLength={10} type="tel" id="phone" className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" placeholder="Telefono del propietario" value={patient.phone} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="date" className="font-semibold">Fecha:</label>
                    <input type="datetime-local" id="date" className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" value={patient.date} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="symptoms" className="font-semibold">Sintomas:</label>
                    <textarea className="border border-slate-300 w-full bg-slate-200 rounded-lg my-2 p-1 text-sm" id="symptoms" placeholder="Sintomas de la mascota" value={patient.symptoms} onChange={handleChange}></textarea>
                </div>

                <input className="mt-3 text-sm bg-orange-600 w-full text-center text-white font-semibold uppercase p-2 rounded-lg hover:bg-orange-700 cursor-pointer active:bg-orange-600" type="submit" value={state.idEdit ? "Editar Paciente" : "Agregar Paciente"} />

                {error && <MessageError
                    error={error}
                />}
            </form>
        </>
    )
}
