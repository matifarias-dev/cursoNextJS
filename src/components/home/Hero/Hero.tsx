import styles from './Hero.module.css'

export const Hero = () => {
  console.log(styles)
  return (
    <section className={styles.Hero}>
      <h3>Hero</h3>
    </section>
  )
}
