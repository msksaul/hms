import { columns, Patient } from "./columns"
import { DataTable } from "./data-table"
 
async function getData(): Promise<Patient[]> {
  // Fetch data from your API here.
  return [
    { id: "20250001", name: "Carlos Gómez", genre: "hombre", age: "34", diagnosis: "Gripe común", status: "externo" },
    { id: "20250002", name: "María López", genre: "mujer", age: "27", diagnosis: "Migraña", status: "externo" },
    { id: "20250003", name: "Jorge Ramírez", genre: "hombre", age: "45", diagnosis: "Hipertensión", status: "internado" },
    { id: "20250004", name: "Ana Castillo", genre: "mujer", age: "52", diagnosis: "Diabetes tipo 2", status: "de alta" },
    { id: "20250005", name: "Luis Martínez", genre: "hombre", age: "39", diagnosis: "Fractura de pierna", status: "internado" },
    { id: "20250006", name: "Lucía Pérez", genre: "mujer", age: "31", diagnosis: "Alergia estacional", status: "externo" },
    { id: "20250007", name: "Sergio Díaz", genre: "hombre", age: "29", diagnosis: "Asma leve", status: "externo" },
    { id: "20250008", name: "Elena Morales", genre: "mujer", age: "64", diagnosis: "Artritis reumatoide", status: "internado" },
    { id: "20250009", name: "Andrés Flores", genre: "hombre", age: "56", diagnosis: "Insuficiencia renal", status: "internado" },
    { id: "20250010", name: "Carmen Ruiz", genre: "mujer", age: "42", diagnosis: "Gastritis crónica", status: "de alta" },
    { id: "20250011", name: "Tomás Herrera", genre: "hombre", age: "48", diagnosis: "Neumonía", status: "internado" },
    { id: "20250012", name: "Isabel Vargas", genre: "mujer", age: "33", diagnosis: "Infección urinaria", status: "externo" },
    { id: "20250013", name: "Ricardo Soto", genre: "hombre", age: "37", diagnosis: "Covid-19", status: "internado" },
    { id: "20250014", name: "Laura Campos", genre: "mujer", age: "25", diagnosis: "Dolor de garganta", status: "externo" },
    { id: "20250015", name: "Pedro Torres", genre: "hombre", age: "60", diagnosis: "Problemas cardíacos", status: "de alta" },
    { id: "20250016", name: "Rosa Blanco", genre: "mujer", age: "46", diagnosis: "Bronquitis", status: "internado" },
    { id: "20250017", name: "David Núñez", genre: "hombre", age: "51", diagnosis: "Colesterol alto", status: "externo" },
    { id: "20250018", name: "Natalia Vega", genre: "mujer", age: "30", diagnosis: "Estrés laboral", status: "externo" },
    { id: "20250019", name: "Héctor León", genre: "hombre", age: "40", diagnosis: "Dolor lumbar", status: "externo" },
    { id: "20250020", name: "Patricia Aguilar", genre: "mujer", age: "38", diagnosis: "Infección de oído", status: "externo" },
    { id: "20250021", name: "Óscar Fuentes", genre: "hombre", age: "58", diagnosis: "Cirugía de rodilla", status: "internado" },
    { id: "20250022", name: "Gabriela Molina", genre: "mujer", age: "43", diagnosis: "Hipotiroidismo", status: "de alta" },
    { id: "20250023", name: "Rodrigo Castro", genre: "hombre", age: "36", diagnosis: "Ansiedad generalizada", status: "externo" },
    { id: "20250024", name: "Claudia Navarro", genre: "mujer", age: "49", diagnosis: "Anemia", status: "de alta" },
    { id: "20250025", name: "Felipe Reyes", genre: "hombre", age: "62", diagnosis: "Diabetes tipo 2", status: "internado" },
    { id: "20250026", name: "Verónica Luna", genre: "mujer", age: "28", diagnosis: "Gripe", status: "externo" },
    { id: "20250027", name: "Hugo Ortega", genre: "hombre", age: "47", diagnosis: "Dolor abdominal", status: "externo" },
    { id: "20250028", name: "Paola Estrada", genre: "mujer", age: "35", diagnosis: "Depresión leve", status: "externo" },
    { id: "20250029", name: "Mario Castillo", genre: "hombre", age: "53", diagnosis: "Cáncer de colon", status: "internado" },
    { id: "20250030", name: "Adriana Salas", genre: "mujer", age: "41", diagnosis: "Apendicitis", status: "de alta" },
  ];
}

export default async function Patients () {

  const data = await getData()

  return (
    <div className="flex flex-col py-4 md:gap-6 md:py-6">
      <div className='px-4 lg:px-6'>
        <DataTable columns={columns} data={data}/>
      </div>
    </div>
  )
}
