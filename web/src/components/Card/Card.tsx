import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

type CardProps = {
  children?: React.ReactNode
  className?: string
  size?: 'small' | 'medium'
}

const Card = ({ children, className, size = 'medium' }: CardProps) => {
  return (
    <div
      className={twMerge(
        clsx(
          size === 'small' ? 'p-2 sm:p-3' : 'px-4 py-5 sm:p-8',
          'rounded-xl transition',
          'shadow-slashwhy-shadow-elevation-01dp dark:shadow-slashwhy-shadow-elevation-06dp',
          'border border-slashwhy-grayscale-haze dark:border-slashwhy-grayscale-charcoal',
          'bg-slashwhy-primary-white dark:bg-slashwhy-grayscale-nightrider',
          'text-slashwhy-grayscale-muted dark:text-slashwhy-grayscale-light',
          'divide-slashwhy-grayscale-haze dark:divide-slashwhy-grayscale-charcoal',
          'group-hover:bg-slashwhy-primary-snow group-hover:dark:bg-slashwhy-grayscale-darkink',
          'group-hover:shadow-slashwhy-shadow-elevation-03dp group-hover:dark:shadow-slashwhy-shadow-elevation-16dp',
          'group-active:bg-slashwhy-pastel-pale-grapefruit group-active:dark:bg-slashwhy-grayscale-darkink',
          'group-active:shadow-slashwhy-shadow group-active:dark:shadow-slashwhy-shadow-dark',

          className
        )
      )}
    >
      {children}
    </div>
  )
}

export default Card
