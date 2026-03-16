import Balance from './components/Balance'
import Operations from './components/Operations'
import './App.css'
import { useState } from 'react'

function App() {
const [balance, setBalance] = useState(0);
const deposit = (amount) => {
  setBalance((prevState) => prevState + amount);
};

const withdraw = (amount) => {
  setBalance((prevState) => (prevState - amount >= 0 ? prevState - amount : prevState));
};

  return (
    <div>
      <Balance balance={balance} />
      <Operations onDeposit={deposit} onWithdraw={withdraw} />
    </div>
  )
}

export default App
