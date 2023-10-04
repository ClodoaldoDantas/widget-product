import { ArrowRight } from 'phosphor-react'
import { Button } from '../Button'
import { RatingButton } from '../RatingButton'
import { useProduct } from '../../hooks/useProduct'
import styles from './styles.module.scss'

export function RatingStep() {
  const { rating, setRating, onNextStep } = useProduct()

  function handleSelectItem(value: number) {
    setRating(value)
  }

  return (
    <>
      <h1 className={styles.title}>Avalie o produto</h1>
      <p className={styles.description}>
        O que você achou do produto <span>Smartwatch Amazfit Bip U Pro</span>?
      </p>

      <div className={styles.rating}>
        {Array.from({ length: 5 }).map((_, index) => (
          <RatingButton
            key={index}
            onClick={() => handleSelectItem(index + 1)}
            isActive={rating >= index + 1}
          />
        ))}
      </div>

      <div className={styles.ratingLegend}>
        <span>Ruim</span>
        <span>Ótimo</span>
      </div>

      <Button onClick={onNextStep}>
        Confirmar
        <ArrowRight size={24} />
      </Button>
    </>
  )
}
