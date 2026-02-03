import React, { useState, type HTMLElementType, type SubmitEventHandler } from "react";
import type { TransactionCategory, TransactionItem } from "../App"

interface FormProps{
    clickHandler: (item: TransactionItem) => void;
}

const Form = ({clickHandler}: FormProps) => {
    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [category, setCategory] = useState<TransactionCategory>('Expense');



    function submitHandler(e:React.FormEvent){
        const parsedAmount = parseFloat(amount);
        e.preventDefault();
        const newTask: TransactionItem = {
            id: crypto.randomUUID(),
            description,
            amount: parsedAmount,
            date,
            category
        }
        clickHandler(newTask);
        setAmount('');
        setDescription('');
        setDate('');

    }

  return (
    <div>
        <form className="flex flex-row w-screen px-16 justify-between" onSubmit={submitHandler}>
            <input className="border-2 p-1 " type="text" placeholder="Description" onChange={ e => setDescription(e.target.value)} value={description} required/>
            <input className="border-2 p-1" type="date" placeholder="Date" onChange={ e => setDate(e.target.value)} value={date} required/>
            <input className="border-2 p-1 " type="number" placeholder="Amount" onChange={ e => setAmount(e.target.value)} value={amount} required/>
            <select className={`border-2 p-1 ${category === 'Expense' ? 'bg-red-400' : 'bg-green-400' } `} onChange={e => setCategory(e.target.value as TransactionCategory)}>
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
            </select>
            <button className="border-2 p-1 bg-zinc-400 " type="submit">Add Transaction</button>
        </form>
    </div>
  )
}

export default Form