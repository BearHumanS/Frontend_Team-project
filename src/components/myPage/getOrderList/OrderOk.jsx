import React from 'react'
import { confirm } from '../../../store/ProductTransactions'

const OrderOk = ({ detailId }) => {
  const cancel = async () => {
    const res = await confirm(detailId)
    console.log(res)
    alert(res)
  }

  return <button onClick={cancel}>구매확정</button>
}

export default OrderOk
