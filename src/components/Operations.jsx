import { useState } from 'react';
import { deposit, withdraw } from '../actions/accountActions';
import { useDispatch } from 'react-redux';


const Operations = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  return (
    <div className="operations">
      <h2 className="mb-3 text-lg font-semibold text-white">Operations</h2>
      <div className="flex flex-col gap-3">
      <button
        className="cursor-pointer rounded-lg bg-emerald-600 px-4 py-2 text-white shadow-sm transition hover:bg-emerald-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
        onClick={() => dispatch(deposit(amount))}
      >
        Deposit
      </button>
      <input
        type="number"
        value={amount}
        min="0"
        className="w-full rounded-lg border border-white/40 bg-white/90 px-3 py-2 text-slate-900 transition placeholder:text-slate-500 hover:border-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button
        className="cursor-pointer rounded-lg bg-slate-800 px-4 py-2 text-white shadow-sm transition hover:bg-slate-900 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-600 focus-visible:ring-offset-2"
        onClick={() => dispatch(withdraw(amount))}
      >
        Withdraw
      </button>
      </div>
    </div>
  );
};

export default Operations;
