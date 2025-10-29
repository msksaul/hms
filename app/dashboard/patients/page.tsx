import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"
 
async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    { id: "a1f3c9b2", amount: 120, status: "pending", email: "alice@example.com" },
    { id: "b9e8f1a7", amount: 450, status: "processing", email: "bob@example.com" },
    { id: "c7d2a4e5", amount: 300, status: "success", email: "carol@example.com" },
    { id: "d3a9e8f4", amount: 220, status: "failed", email: "dan@example.com" },
    { id: "e2f4b1c9", amount: 800, status: "pending", email: "eve@example.com" },
    { id: "f6c3a8d7", amount: 75, status: "processing", email: "frank@example.com" },
    { id: "g1e7d5b3", amount: 640, status: "success", email: "grace@example.com" },
    { id: "h9b5f4e2", amount: 130, status: "failed", email: "henry@example.com" },
    { id: "i2c6a7d8", amount: 270, status: "pending", email: "irene@example.com" },
    { id: "j8f1e3b9", amount: 950, status: "processing", email: "jack@example.com" },
    { id: "k4b7d2e6", amount: 410, status: "success", email: "kate@example.com" },
    { id: "l5e9a1c3", amount: 520, status: "failed", email: "leo@example.com" },
    { id: "m7c4f8b2", amount: 180, status: "pending", email: "mia@example.com" },
    { id: "n3a6e9d5", amount: 360, status: "processing", email: "nick@example.com" },
    { id: "o9f2b8c1", amount: 240, status: "success", email: "olivia@example.com" },
    { id: "p6d3a7e4", amount: 600, status: "failed", email: "paul@example.com" },
    { id: "q2e5b9c7", amount: 310, status: "pending", email: "quinn@example.com" },
    { id: "r8f1a6d2", amount: 710, status: "processing", email: "rose@example.com" },
    { id: "s4c9e3b5", amount: 95, status: "success", email: "sam@example.com" },
    { id: "t1b7f8a9", amount: 880, status: "failed", email: "tina@example.com" },
    { id: "u5e3c2d4", amount: 210, status: "pending", email: "uma@example.com" },
    { id: "v9a6b1f7", amount: 330, status: "processing", email: "victor@example.com" },
    { id: "w3d5e8c9", amount: 470, status: "success", email: "will@example.com" },
    { id: "x7b2a9f4", amount: 560, status: "failed", email: "xena@example.com" },
    { id: "y1f8d3e6", amount: 630, status: "pending", email: "yuri@example.com" },
    { id: "z4c7b5a2", amount: 280, status: "processing", email: "zoe@example.com" },
    { id: "aa9e1d6f", amount: 150, status: "success", email: "amy@example.com" },
    { id: "bb3c8f2a", amount: 400, status: "failed", email: "ben@example.com" },
    { id: "cc6a5e9b", amount: 720, status: "pending", email: "clara@example.com" },
    { id: "dd2f7b3e", amount: 510, status: "processing", email: "dave@example.com" },
  ];
}

export default async function Patients () {

  const data = await getData()

  return (
    <div className='px-4 lg:px-6'>
      <DataTable columns={columns} data={data}/>
    </div>

  )
}
