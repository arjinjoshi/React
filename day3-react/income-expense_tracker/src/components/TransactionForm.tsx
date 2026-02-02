import { useState } from "react";
import type { TransactionType } from "./TransactionList";



interface TransFormProps {
    onAdd: (description:string, amount: number, category:TransactionType) => void;
}

const TransactionForm = ({ onAdd }: TransFormProps) => {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState<TransactionType>('Expense');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Prevent adding empty tasks
        if (description.trim() === "") {
            alert("The description shouldn't be empty");
            return;
        } 
        const parsedAmount = parseFloat(amount);
        if (amount.trim() === ""|| parsedAmount <= 0) {
            alert("The amount shouldn't be empty or negative");
            return;
        } 

        onAdd(description,parsedAmount,category);
        setDescription(""); // Clear the input field after adding
        setAmount(""); // Clear the input field after adding
        setCategory('Expense');
    }

    return (
        <form onSubmit={handleSubmit}>
                <div className="text-white flex justify-center m-5 gap-2">
            <input 
                type="text" 
                className="p-2 border-2"
                placeholder="Add new description" 
                value={description}
                onChange={e => setDescription(e.target.value)}
               
            />
            <input 
                type="number"
                className="p-2 border-2"
                placeholder="Add amount" 
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            <select
                value={category}
                onChange={(e) => setCategory(e.target.value as TransactionType)}
                className="border p-2 rounded mr-4"
            >
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
                </select>
            <button className="border p-1 bg-blue-400" type="submit">Add Todo</button>
        </div>
        </form>
        
    );
}

export default TransactionForm;