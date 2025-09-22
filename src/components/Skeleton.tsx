interface SkeletonProps {
  rows?: number
}

function Skeleton({ rows = 3 }: SkeletonProps) {
  return (
    <div aria-hidden="true">
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          style={{
            height: '1.5rem',
            margin: '0.5rem 0',
            background: '#e5e4e7',
            borderRadius: '4px',
          }}
        />
      ))}
    </div>
  )
}

export default Skeleton
