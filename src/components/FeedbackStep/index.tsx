import { Button } from '../Button'
import { useProduct } from '../../hooks/useProduct'
import styles from './styles.module.scss'

export function FeedbackStep() {
  const { rating, comment, resetForm } = useProduct()

  function handleResetForm() {
    console.log('Dados', { rating, comment })
    resetForm()
  }

  return (
    <>
      <h2 className={styles.title}>Mensagem Recebida</h2>

      <p className={styles.description}>
        Seu feedback foi enviado com sucesso. Agradecemos a sua participação!
      </p>

      <Button className={styles.action} onClick={handleResetForm}>
        Enviar nova mensagem
      </Button>
    </>
  )
}
