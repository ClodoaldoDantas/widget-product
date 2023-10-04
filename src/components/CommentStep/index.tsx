import { FormEvent, useState } from 'react'
import { ArrowRight } from 'phosphor-react'
import { Button } from '../Button'
import { useProduct } from '../../hooks/useProduct'
import styles from './styles.module.scss'

export function CommentStep() {
  const [commentInput, setCommentInput] = useState('')
  const { setComment, onNextStep } = useProduct()

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    setComment(commentInput)
    onNextStep()
  }

  const formIsDisabled = commentInput.length === 0

  return (
    <>
      <h2 className={styles.title}>Deixe um comentário</h2>
      <p className={styles.description}>
        Conte sobre o motivo da sua avaliação
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          className={styles.field}
          placeholder="Escreva aqui seu comentário"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />

        <Button type="submit" disabled={formIsDisabled}>
          Enviar
          <ArrowRight size={24} />
        </Button>
      </form>
    </>
  )
}
