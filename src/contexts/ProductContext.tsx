import { PropsWithChildren, createContext, useReducer } from 'react'

type ProductContextType = {
  rating: number
  comment: string
  currentStep: number
  onPrevStep: () => void
  onNextStep: () => void
  setRating: (value: number) => void
  setComment: (value: string) => void
  resetForm: () => void
}

type ProductState = Pick<
  ProductContextType,
  'rating' | 'comment' | 'currentStep'
>

export const ProductContext = createContext({} as ProductContextType)

const initialState = {
  rating: 0,
  comment: '',
  currentStep: 1,
}

function reducer(state: ProductState, action: any) {
  switch (action.type) {
    case 'change_step': {
      return {
        ...state,
        currentStep: action.payload,
      }
    }

    case 'set_rating': {
      return {
        ...state,
        rating: action.payload,
      }
    }

    case 'set_comment': {
      return {
        ...state,
        comment: action.payload,
      }
    }

    case 'reset_form': {
      return { ...initialState }
    }

    default: {
      return state
    }
  }
}

export function ProductProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { rating, comment, currentStep } = state

  function onPrevStep() {
    dispatch({ type: 'change_step', payload: state.currentStep - 1 })
  }

  function onNextStep() {
    dispatch({ type: 'change_step', payload: state.currentStep + 1 })
  }

  function setRating(value: number) {
    dispatch({ type: 'set_rating', payload: value })
  }

  function setComment(value: string) {
    dispatch({ type: 'set_comment', payload: value })
  }

  function resetForm() {
    dispatch({ type: 'reset_form' })
  }

  return (
    <ProductContext.Provider
      value={{
        rating,
        comment,
        currentStep,
        onPrevStep,
        onNextStep,
        setRating,
        setComment,
        resetForm,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}
