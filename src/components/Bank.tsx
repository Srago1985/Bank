import { memo } from "react";

interface BankProps {
    info?: string;
}

const Bank = ({ info }: BankProps) => {

    console.log(info);
  return (
     <h1 className="text-2xl font-bold text-white">{info}Bank Account</h1>
  )
}

export default memo(Bank);
