import { ComponentProps } from 'react'
import { Star } from 'phosphor-react'
import { StarSelected } from './star-selected'
import styles from './styles.module.scss'

type RatingButtonProps = ComponentProps<'button'> & {
  isActive: boolean
}

export function RatingButton({ isActive, ...props }: RatingButtonProps) {
  return (
    <button className={styles.ratingButton} {...props}>
      {isActive ? <StarSelected /> : <Star size={32} weight="fill" />}
    </button>
  )
}
