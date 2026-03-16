import { useSyncExternalStore } from 'react';
import { store } from '../configureStore/store';

const Balance = () => {
    const {balance} = useSyncExternalStore(store.subscribe, store.getState);
    return (
        <div className="balance">
            <h1>Bank Account</h1>
            <h2>Balance</h2>
            <p>${balance.toFixed(2)}</p>
        </div>
    );
};

export default Balance;
