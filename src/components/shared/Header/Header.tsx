import Link from 'next/link'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href='/' scroll={false}>
              Home
            </Link>
          </li>
          <li>
            <Link href='/template'>Template</Link>
          </li>
          <li>
            <Link href='/store'>Store</Link>
          </li>
          <li>
            <Link href='/home-error'>Home error</Link>
          </li>
          <li>
            <Link href='/error-example'>Error example</Link>
          </li>
          <li>
            <Link href='/not-found'>404 example</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
