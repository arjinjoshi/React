import type { TransactionItem } from "../App"
import TransactionDetail from "./TransactionDetail";

export interface TransactionListProps{
    transactions: TransactionItem[];
    ondeleteTask: (ondeleteTask: TransactionItem) => void
}

interface deleteHandler{
    deleteHandler: (deleteHandler: TransactionItem) => void
}

const TransactionList = ({transactions,ondeleteTask}: TransactionListProps) => {

    const totalRemainingAmount = transactions.reduce((acc, item) => {
        if (item.category === "Income") {
          return acc + item.amount;
        } else  {
          return acc - item.amount;
        }
      }, 0);

      const totalExpense = transactions.reduce((acc, item) => {
        if (item.category === "Expense") {
          return acc + item.amount;
        } else{
            return acc;
        }
      }, 0);
      const totalIncome = transactions.reduce((acc, item) => {
        if (item.category === "Income") {
          return acc + item.amount;
        } else{
            return acc;
        }
      }, 0);

      function deleteHandler(item: TransactionItem){
        ondeleteTask(item);
      }

  return (
    <div className="w-full flex flex-col gap-5">
      {transactions.map(item =>
        <TransactionDetail key={item.id} deleteHandler={deleteHandler} transaction = {item}/>
        )}
        <div  className="flex justify-between text-3xl font-extrabold text-center">
            <div>
            Total Income = <span className="text-green-500"> RS {totalIncome}</span> 
            </div>
            <div>
            Total Expenses = <span className="text-red-500"> RS {totalExpense}</span> 
            </div>
            <div>
            Remaining Amount = <span className={`${totalRemainingAmount>=0 ? 'text-green-500' : 'text-red-500'}`}> RS {totalRemainingAmount}</span> 
            </div>
        </div>
        
    </div>
  )
}

export default TransactionList
