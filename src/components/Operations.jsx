import { useState } from 'react';
import { deposit, withdraw } from '../actions/accountActions';
import { store } from '../configureStore/store';


const Operations = () => {
  const [amount, setAmount] = useState(0);

  return (
    <div className="operations">
      <h2>Operations</h2>
      <button onClick={() => store.dispatch(deposit(amount))}>Deposit</button>
      <input
        type="number"
        value={amount}
        min="0"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => store.dispatch(withdraw(amount))}>Withdraw</button>
    </div>
  );
};

export default Operations;
