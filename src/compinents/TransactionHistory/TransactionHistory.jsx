import clsx from "clsx"
import css from "./TransactionHistory.module.css"

export default function TransactionHistory({items}) {
    return (
        <table className={css.tableOver}>
         <thead>
          <tr className={css.tableHeader}>
            <th className={css.tableHeaderItem}>Type</th>
            <th className={css.tableHeaderItem}>Amount</th>
            <th className={css.tableHeaderItem}>Currency</th>
          </tr>
        </thead>
      
        <tbody>
        {items.map(({id, type, amount, currency}, index) =>(
        <tr key ={id} className={clsx(css.tableItem, {[css.dark]: index % 2 === 1})}>
            <td className={css.tableHeaderItem}>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
            <td className={css.tableHeaderItem}>{amount}</td>
            <td className={css.tableHeaderItem}>{currency}</td>
          </tr>))}
        </tbody>
      </table>
      )
}