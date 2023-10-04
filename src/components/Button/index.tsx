import { ComponentProps } from 'react'
import styles from './styles.module.scss'
import classNames from 'classnames'

type ButtonProps = ComponentProps<'button'> & {
  className?: string
}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, className)}
      type="button"
      {...props}
    />
  )
}
