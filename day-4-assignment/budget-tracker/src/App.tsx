import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header"
import TransactionList from "./components/TransactionList";

export type TransactionCategory = 'Expense' | 'Income';

type displayedTransactionType = 'Total' | 'Expense' | 'Income';

let currentDisplayedTransactionType:displayedTransactionType = 'Total';

export interface TransactionItem{
  id: string;
  description: string;
  amount: number;
  date: string;
  category: TransactionCategory;
}

const INITIAL_TRANSACTIONS : TransactionItem[] = [
  {
    id: "id1",
    description: "Tea",
    amount: 50,
    date: "2026-02-04",
    category: "Expense"
  },
  {
    id: "id2",
    description: "Salary",
    amount: 4000,
    date: "2026-01-28",
    category: "Income"
  },
  {
    id: "id3",
    description: "Room Rent",
    amount: 2500,
    date: "2021-01-31",
    category: "Expense"
  }
]




const App = () => {
  const [transaction, setTransaction] = useState<TransactionItem[]>(INITIAL_TRANSACTIONS)

  const incomeTransaction: TransactionItem[] = transaction.filter(item => item.category === 'Income');
  const expenseTransaction: TransactionItem[] = transaction.filter(item => item.category === 'Expense')


  const [incomeTransactions,setIncomeTransactions] = useState<TransactionItem[]>(incomeTransaction)
  const [expenseTransactions,setExpenseTransactions] = useState<TransactionItem[]>(expenseTransaction)


  function clickHandler(item: TransactionItem){
    setTransaction([...transaction,item]);
  }
  
  function totalHandler(){
    console.log('totalHandler clicked');
    currentDisplayedTransactionType = 'Total'
    setTransaction([...transaction]);
  }
  function incomeHandler(){
    console.log('incomeHandler clicked');
    currentDisplayedTransactionType = 'Income'
    setIncomeTransactions([...incomeTransaction])
  }
  function expenseHandler(){
    console.log('expenseHandler clicked');
    currentDisplayedTransactionType = 'Expense'
    setExpenseTransactions([...expenseTransaction])
  }

  function ondeleteTask(item: TransactionItem){
    let transactionsdatas = transaction.filter(elem => item.id !== elem.id);
    setTransaction(transactionsdatas);
  }

  
  
  return (
    <div className="min-h-screen h-full w-full flex flex-col gap-5 items-center p-10">
      <Header title="Budget Tracker App" description="This is a budget tracker app"/>
      <Form clickHandler = {clickHandler}/>
      <div className="w-full flex flex-row gap-20">
        <button className="border-none bg-zinc-400 px-10 py-2" onClick={totalHandler}>Total</button>
        <button className="border-none bg-green-400 px-10 py-2" onClick={incomeHandler}>Income</button>
        <button className="border-none bg-red-400 px-10 py-2" onClick={expenseHandler}>Expense</button>
      </div>
      <TransactionList ondeleteTask = {ondeleteTask}
  transactions={
    currentDisplayedTransactionType === 'Total'
      ? transaction
      : currentDisplayedTransactionType === 'Income'
        ? incomeTransactions
        : expenseTransactions
  }
/>
    </div>
  )
}

export default App