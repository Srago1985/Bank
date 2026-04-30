import Bank from "./Bank";

const Balance = ({ balance, quote }) => {

    const info = 'blabla';
    console.log('Balance component rendered');
    return (
        <div className="mb-6 border-b border-white/25 pb-6">
            <Bank info={info} />
            <h2 className="mt-4 text-sm font-medium uppercase tracking-wide text-red-500">{quote}</h2>
            <h2 className="mt-4 text-sm font-medium uppercase tracking-wide text-slate-200">Balance</h2>
            <p className="mt-2 text-3xl font-semibold text-emerald-600">${balance.toFixed(2)}</p>
        </div>
    );
};

export default Balance;
