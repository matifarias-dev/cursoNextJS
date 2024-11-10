'use client'

import { Description } from "app/components/home/Description"
import { Hero } from "app/components/home/Hero"
import { useEffect } from "react"


export default function TemplateLayout ({children}:{children: React.ReactNode}) {
  useEffect(() =>{
    console.log('[Template.tsx] enviando metricas...')
  },[])
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  )
}