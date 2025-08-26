"use client"

import { Button } from "@/components/ui/button"
import { useRouter, usePathname, useParams } from "next/navigation"

export function LanguageToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const currentLocale = params.locale as string || 'en'
  const isEnglish = currentLocale === 'en'
  
  const toggleLanguage = () => {
    const newLocale = isEnglish ? 'fr' : 'en'
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-2xl hover:bg-accent/20 p-2"
      title={isEnglish ? "Switch to French" : "Switch to English"}
    >
      {isEnglish ? "FR" : "EN"}
    </Button>
  )
}