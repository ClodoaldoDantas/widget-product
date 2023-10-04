import { ArrowLeft } from 'phosphor-react'
import productImg from '../../assets/smartwatch.png'
import { useProduct } from '../../hooks/useProduct'
import { CommentStep } from '../CommentStep'
import { FeedbackStep } from '../FeedbackStep'
import { RatingStep } from '../RatingStep'

import styles from './styles.module.scss'

enum Steps {
  Rating = 1,
  Comment,
  Feedback,
}

export function ProductCard() {
  const { currentStep, onPrevStep } = useProduct()

  return (
    <section className={styles.card}>
      <header className={styles.cardHeader}>
        {currentStep === Steps.Comment && (
          <button
            onClick={onPrevStep}
            className={styles.backButton}
            aria-label="Voltar para o passo anterior"
          >
            <ArrowLeft size={24} />
          </button>
        )}

        <img src={productImg} alt="Smartwatch Amazfit Bip U Pro" />
      </header>

      <div className={styles.cardBody}>
        {currentStep === Steps.Rating && <RatingStep />}
        {currentStep === Steps.Comment && <CommentStep />}
        {currentStep === Steps.Feedback && <FeedbackStep />}
      </div>
    </section>
  )
}
