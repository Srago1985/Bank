import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deposit, withdraw } from '../actions/accountActions'

export const useAccountOperations = () => {
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()
  const balance = useSelector((state) => state.account.balance)

  const handleAmountChange = (event) => {
    setAmount(Number(event.target.value))
  }

  const handleDeposit = () => {
    dispatch(deposit(amount))
  }

  const handleWithdraw = () => {
    dispatch(withdraw(amount))
  }

  return {
    amount,
    balance,
    handleAmountChange,
    handleDeposit,
    handleWithdraw,
  }
}