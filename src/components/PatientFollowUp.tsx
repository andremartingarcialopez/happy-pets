import { PencilIcon, TrashIcon } from "@heroicons/react/16/solid";
import { usePatient } from "../hooks/usePatient"

export default function PatientFollowUp() {

    const { state, dispatch } = usePatient();

    return (
        <>
            <div className="flex flex-col justify-center items-center space-y-3 mb-5">
                <h2 className="text-xl md:text-3xl font-bold">Listado de Pacientes</h2>
                <p className="md:text-lg">Administra tus <span className="font-semibold text-orange-600">Pacientes</span></p>
            </div>

            {state.patients.length > 0 &&
                <div className="p-5 bg-white rounded-lg shadow mb-3">
                    <h2 className="text-orange-600 font-bold text-2xl mb-3 border-b-2">Tus Pacientes</h2>
                    {state.patients.map(function (patient) {
                        return (

                            <div key={patient.id} className="py-1 border-b-2 border-b-slate-700 mb-3 flex flex-col md:flex-row md:justify-evenly md:items-center">
                                
                                <div>
                                    <p className="text-2xl font-bold text-slate-700"><span>{patient.namePet}</span> </p>
                                    <p className="font-semibold">Animal: <span className="font-normal">{patient.typePet}</span></p>
                                    <p className="font-semibold">Propietario: <span className="font-normal">{patient.owner}</span></p>
                                    <p className="font-semibold">Email: <span className="font-normal">{patient.email}</span></p>
                                    <p className="font-semibold">Telefono: <span className="font-normal">{patient.phone}</span></p>
                                    <p className="font-semibold">Fecha: <span className="font-normal">{patient.date}</span></p>
                                    <p className="font-semibold">Sintomas: <span className="font-normal">{patient.symptoms}</span></p>
                                </div>

                                <div className="flex flex-col text-center justify-around md:h-40 md:w-40 space-y-3 my-3">
                                    
                                    <button className="flex flex-row justify-center items-center  text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-600 cursor-pointer px-3 py-0.5 rounded-lg">
                                        Editar
                                        <PencilIcon className="w-5 text-white"/>
                                    </button>

                                    <button className="flex flex-row justify-center items-center  text-white bg-red-600 hover:bg-red-700 active:bg-red-600 cursor-pointer px-3 py-0.5 rounded-lg" onClick={() => dispatch({type: "delete-patient", payload: {id: patient.id}})}>
                                        Eliminar
                                        <TrashIcon className="w-5 text-white"/>
                                    </button>

                                </div>

                            </div>
                        )
                    })}

                    <button onClick={() => dispatch({ type: "clear-list" })} className="p-2 bg-red-500 text-white uppercase font-semibold w-full rounded-lg mt-3 cursor-pointer hover:bg-red-700 active:bg-red-500">Vaciar Lista</button>

                </div>
            }

        </>
    )
}
