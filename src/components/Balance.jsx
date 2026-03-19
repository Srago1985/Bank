import { useSelector } from 'react-redux';

const Balance = () => {
    const balance = useSelector((state) => state.balance);
    return (
        <div className="mb-6 border-b border-white/25 pb-6">
            <h1 className="text-2xl font-bold text-white">Bank Account</h1>
            <h2 className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-200">Balance</h2>
            <p className="mt-2 text-3xl font-semibold text-emerald-600">${balance.toFixed(2)}</p>
        </div>
    );
};

export default Balance;
