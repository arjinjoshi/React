 
 import { useState } from "react";
import TransactionCard from "./TransactionCard";
 export type TransactionType = 'Income' | 'Expense';
 import TransactionForm from "./TransactionForm";
 
 export interface TransactionItem{
    id: string;
    description: string;
    amount: number;
    category: TransactionType;
 }

 const transactionData: TransactionItem[] = [
    {
        id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
        description: "Monthly Rent Payment",
        amount: 12000.00,
        category: "Expense"
    },
    {
        id: "b2c3d4e5-f678-9012-3456-7890abcdef12",
        description: "Freelance Web Development",
        amount: 25000.00,
        category: "Income"
    },
    {
        id: "c3d4e5f6-7890-1234-5678-90abcdef1234",
        description: "Brough a Socks",
        amount: 250.30,
        category: "Expense"
    },
    {
        id: "d4e5f678-9012-3456-7890-abcdef123456",
        description: "Buy Vegetables",
        amount: 450.50,
        category: "Expense"
    },
    {
        id: "e5f67890-1234-5678-90ab-cdef12345678",
        description: "Gym Membership",
        amount: 3000.00,
        category: "Expense"
    }
];

 
 const TransactionList = () => {



    const [data, setData] = useState<TransactionItem[]>(transactionData);

    
    const totalBalance = data.reduce((acc, item) => {
        if (item.category === "Income") {
            return acc + item.amount;
        } else if (item.category === "Expense") {
            return acc - item.amount;
        }
        return acc;
    }, 0);
    

    const handleTaskAdd = (description: string, amount: number, category: TransactionType) => {
        const newTask: TransactionItem = {
            id: crypto.randomUUID(), 
            description,
            amount,
            category,
        }

        setData(prevTrans => [...prevTrans, newTask]);
    }

   return (
     <div className="h-full w flex flex-col">
        <TransactionForm onAdd={handleTaskAdd} />

       {data.map((Item) => <TransactionCard key={Item.id} id={Item.id} description={Item.description} category = {Item.category} amount={Item.amount} />)}
       
        <div className={` text-2xl text-center ${totalBalance>=0 ? 'text-green-600': 'text-red-600'}`}>{"Total Balance = " + totalBalance.toFixed(2)}</div>
       </div>
   )
 }
 
 export default TransactionList
 