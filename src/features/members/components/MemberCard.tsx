import { Link } from 'react-router-dom'
import type { Member } from '../../../types/domain'

interface MemberCardProps {
  member: Member
}

function MemberCard({ member }: MemberCardProps) {
  return (
    <article>
      <h2>
        <Link to={`/members/${member.id}`}>{member.fullName}</Link>
      </h2>
      <p>{member.email}</p>
    </article>
  )
}

export default MemberCard
