import type { ReactNode } from 'react'

export function ArrowUpRight({ className = '', size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M4 12L12 4M12 4H6M12 4V10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArrowDown({ className = '', size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 3V13M8 13L13 8M8 13L3 8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

type ButtonProps = {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'onDark'
  icon?: ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

export function Button({
  children,
  href,
  variant = 'primary',
  icon,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const base =
    'group inline-flex items-center gap-2 rounded-full px-5 py-3 text-base font-medium transition-all duration-300 ease-out hover:scale-[1.02] active:scale-95'
  const styles =
    variant === 'primary'
      ? 'bg-ink text-paper hover:bg-ink/90'
      : variant === 'onDark'
        ? 'bg-paper text-ink hover:bg-paper/90'
        : 'bg-gray-5 text-ink hover:bg-gray-20'

  const content = (
    <>
      <span>{children}</span>
      {icon ?? <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
    </>
  )

  const isExternal = typeof href === 'string' && /^https?:\/\//i.test(href)

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles} ${className}`}
        {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
      >
        {content}
      </a>
    )
  }
  return (
    <button type={type} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {content}
    </button>
  )
}
