import { useDispatch, useSelector } from 'react-redux'
import { setQuote } from '../actions/quoteAction'

export const useQuote = () => {
  const dispatch = useDispatch()
  const quote = useSelector((state) => state.quote.quote)

  const handleGetQuote = () => {
    dispatch(setQuote('Fetching quote...'))

    fetch('https://api.gameofthronesquotes.xyz/v1/random')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setQuote(data.sentence))
      })
      .catch((error) => {
        console.error('Error fetching quote:', error)
        dispatch(setQuote('Failed to fetch quote. Please try again later.'))
      })
  }

  return {
    quote,
    handleGetQuote,
  }
}