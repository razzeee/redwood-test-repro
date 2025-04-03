import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { SvgIcon } from 'src/svgIcon'

const Badge = ({
  text,
  backgroundColor,
  textColor,
  icon,
  iconColor,
  iconEnd,
  iconEndColor,
}: {
  text: string
  backgroundColor?: string
  textColor?: string
  icon?: SvgIcon
  iconColor?: string
  iconEnd?: SvgIcon
  iconEndColor?: string
}) => {
  return (
    <span
      className={twMerge(
        clsx(
          backgroundColor ?? 'bg-slashwhy-primary-yaleblue-200/10',
          textColor ?? 'text-slashwhy-primary-yaleblue-200',
          'inline-flex h-6 items-center gap-1 truncate rounded-full py-1 text-sm font-medium',
          icon ? 'pl-1 pr-2' : 'px-2',
          iconEnd ? 'pl-2 pr-1' : 'px-2'
        )
      )}
    >
      {icon && (
        <div className={iconColor}>
          {React.createElement(icon, {
            className: clsx('size-5', iconColor),
            'aria-hidden': 'true',
          })}
        </div>
      )}
      {text}
      {iconEnd && (
        <div className={iconEndColor}>
          {React.createElement(iconEnd, {
            className: clsx('size-4', iconEndColor),
            'aria-hidden': 'true',
          })}
        </div>
      )}
    </span>
  )
}

export default Badge
