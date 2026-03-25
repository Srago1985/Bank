import Balance from './components/Balance'
import Operations from './components/Operations'
import { useAccountOperations } from './hooks/useAccountOperations'
import { useQuote } from './hooks/useQuote'

function App() {
  const {
    amount,
    balance,
    handleAmountChange,
    handleDeposit,
    handleWithdraw,
  } = useAccountOperations()
  const {
    quote,
    handleGetQuote,
  } = useQuote()

  return (
    <div className="got-dragon-bg min-h-screen px-4 py-10">
      <div className="mx-auto w-full max-w-md rounded-2xl border border-white/25 bg-transparent p-6 shadow-2xl backdrop-blur-md">
        <Balance balance={balance} quote={quote} />
        <Operations
          amount={amount}
          onAmountChange={handleAmountChange}
          onDeposit={handleDeposit}
          onWithdraw={handleWithdraw}
          onGetQuote={handleGetQuote}
        />
      </div>
    </div>
  )
}

export default App
