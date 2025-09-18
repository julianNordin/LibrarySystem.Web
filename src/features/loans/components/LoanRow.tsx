import type { Loan } from '../../../types/domain'
import OverdueBadge from './OverdueBadge'
import ReturnButton from './ReturnButton'

interface LoanRowProps {
  loan: Loan
}

function LoanRow({ loan }: LoanRowProps) {
  return (
    <tr>
      <td>{loan.bookTitle}</td>
      <td>{loan.memberFullName}</td>
      <td>{new Date(loan.borrowedDate).toLocaleDateString()}</td>
      <td>{new Date(loan.dueDate).toLocaleDateString()}</td>
      <td>{loan.returnedDate ? new Date(loan.returnedDate).toLocaleDateString() : '—'}</td>
      <td>{loan.isOverdue && <OverdueBadge />}</td>
      <td>{loan.returnedDate === null && <ReturnButton loanId={loan.id} />}</td>
    </tr>
  )
}

export default LoanRow
