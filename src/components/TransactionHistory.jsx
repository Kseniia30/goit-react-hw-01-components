export const TransactionHistory = ({ items }) => {
    return (
        <table className="transaction-history">
            <TransactionTHead />
            <TransactionTBody items={items} />
        </table>
    )
}

const TransactionTHead = () => {
    return (
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
    )
}
const TransactionTBody = ({ items }) => {
    return (
        <tbody>
            {items.map(({id, type, amount, currency}) => (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
        </tbody>
    )
}