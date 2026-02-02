import type { TransactionItem } from "./TransactionList"


const TransactionCard = (data: TransactionItem) => {
  return (
    <div key={data.id} className="flex justify-between text-white p-10">
        <div className="flex flex-col">
            <h3 className="text-2xl font-bold">{data.description}</h3>
            <p className="font-medium">{data.category}</p>
        </div>
        <span className={`text-2xl ${data.category === 'Expense' ? 'text-red-500' : 'text-green-500'}`}>{"RS " + data.amount}</span>
        </div>
  )
}

export default TransactionCard
