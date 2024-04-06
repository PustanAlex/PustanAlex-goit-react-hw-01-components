import style from './TransactionHistory.module.css'

function TransactionHistory({items}) {

    return (
    <table className={style.transactionHistory}>
        <thead className={style.tableHead}>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody className={style.tableBody}>
            {items.map((item, index) => (
                     <tr key={item.id} className={index % 2 === 0 ? style.rowWhite : style.rowGrey}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                        </tr>
            ))}
        </tbody>

    </table>
    )
}

export default TransactionHistory;