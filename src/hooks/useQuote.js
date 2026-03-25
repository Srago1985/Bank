import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from '../actions/quoteAction'

export const useQuote = () => {
  const dispatch = useDispatch()
  const quote = useSelector((state) => state.quote.quote)

  const handleGetQuote = () => {
    dispatch(fetchQuote())
  }

  return {
    quote,
    handleGetQuote,
  }
}