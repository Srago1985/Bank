import { useState } from 'react'


const Operations = ({ onDeposit, onWithdraw }) => {
  const [amount, setAmount] = useState(0);


  return (
    <div className="operations">
      <h2>Operations</h2>
      <button onClick={() => onDeposit(amount)}>Deposit</button>
      <input
        type="number"
        value={amount}
        min="0"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button onClick={() => onWithdraw(amount)}>Withdraw</button>
    </div>
  );
};

export default Operations;
