import type React from "react";
import type { TransactionItem } from "../App"
import { Trash } from "lucide-react";

interface transactionProps {
  transaction: TransactionItem
  deleteHandler: (deleteHandler: TransactionItem) => void
}


const TransactionDetail = ({transaction, deleteHandler}: transactionProps) => {

  function onDeleteHandler(){
    deleteHandler(transaction);
  }

  return (
    <div className="flex flex-row justify-between">

      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-extrabold">{transaction.description}</h1>
        <h4 className="text-md">{transaction.date}</h4>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex flex-col items-center gap-1">
          <h2 className= {`text-3xl font-extrabold ${transaction.category === 'Income' ? 'text-green-500':  'text-red-500' }` }>{transaction.amount}</h2>
          <h4 className= {`${transaction.category === 'Income' ? 'text-green-500':  'text-red-500'}` }>{transaction.category}</h4>
        </div>
        <button onClick={onDeleteHandler}>
          <Trash size={25} color="#b83232" strokeWidth={1.75} />
        </button>
        
      </div>

      
      </div>
  )
}

export default TransactionDetail