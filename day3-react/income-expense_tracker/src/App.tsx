
import Header from './components/Header'
import TransactionList from './components/TransactionList'

const App = () => {
  return (
      <div className='h-full min-h-screen w-full bg-gray-950 flex flex-col'>
        <Header title="Income/Expense Tracker" description='A simple app to track my budgets...' />
        <TransactionList />

    </div>
  )
}

export default App