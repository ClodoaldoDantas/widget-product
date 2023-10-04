import styles from './App.module.scss'
import { ProductCard } from './components/ProductCard'
import { ProductProvider } from './contexts/ProductContext'

export function App() {
  return (
    <main className={styles.wrapper}>
      <ProductProvider>
        <ProductCard />
      </ProductProvider>
    </main>
  )
}
