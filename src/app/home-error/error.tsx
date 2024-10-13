'use client'

import styles from 'app/sass/global-error.module.sass'
import Image from 'next/image'
import { useEffect } from 'react'

export default function error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Image
          src='https://img.icons8.com/?size=100&id=44000&format=png&color=000000'
          alt='error icon'
          width={100}
          height={100}
        />
        <h2>Ha ocurrido un error</h2>
        <button type='button' onClick={reset} className={styles.Error__button}>
          Intentar de nuevo
        </button>
      </div>
    </div>
  )
}
