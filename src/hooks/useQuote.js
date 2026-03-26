import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from '../features/api/quoteAction'

export const useQuote = () => {
  const dispatch = useDispatch()
  const quote = useSelector((state) => state.quote)

  const handleGetQuote = () => {
    dispatch(fetchQuote())
  }

  return {
    quote,
    handleGetQuote,
  }
}