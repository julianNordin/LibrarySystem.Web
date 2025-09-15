import type { Loan } from '../../../types/domain'
import LoanRow from './LoanRow'

interface LoanTableProps {
  loans: Loan[]
}

function LoanTable({ loans }: LoanTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>Book</th>
          <th>Member</th>
          <th>Borrowed</th>
          <th>Due</th>
          <th>Returned</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {loans.map((loan) => (
          <LoanRow key={loan.id} loan={loan} />
        ))}
      </tbody>
    </table>
  )
}

export default LoanTable
