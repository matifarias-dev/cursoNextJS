'use client'

import Image from 'next/image'
import { useEffect } from 'react'

interface ErrorProps {
  error: Error
  reset: () => void
}

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
          width={50}
          height={50}
        />
        <p>Ha ocurrido un error</p>
        <button
          type='button'
          onClick={reset}
          style={{
            padding: '0.6rem',
            borderRadius: '1.5rem',
            border: '0.1px solid black',
            color: '#fff',
            cursor: 'pointer',
            backgroundImage: 'linear-gradient(270deg, #4f56ff, #ff4980)'
          }}
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  )
}
