import { setQuote } from '../quote/quoteSlice';

export const fetchQuote = () => {
    return async (dispatch) => {
        dispatch(setQuote('Fetching quote...'));

        try {
            const response = await fetch('https://api.gameofthronesquotes.xyz/v1/random');
            const data = await response.json();
            dispatch(setQuote(data.sentence));
        } catch (error) {
            console.error('Error fetching quote:', error);
            dispatch(setQuote('Failed to fetch quote. Please try again later.'));
        }
    };
};