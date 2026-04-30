'use client'

import { useEffect } from 'react'
import i18next from 'i18next'
import { usePathname } from 'next/navigation'
import { getCurrentLanguage, initI18n, t } from '@/lib/i18n'

function applyI18nBindings() {
  if (typeof document === 'undefined') {
    return
  }

  document.documentElement.lang = getCurrentLanguage()

  const textTargets = document.querySelectorAll<HTMLElement>('[data-i18n]')
  textTargets.forEach((element) => {
    const key = element.dataset.i18n
    if (!key) {
      return
    }

    const defaultValue = element.dataset.i18nDefault ?? element.textContent ?? ''
    const translated = t(key, defaultValue)
    element.textContent = translated
  })

  const placeholderTargets = document.querySelectorAll<HTMLElement>('[data-i18n-placeholder]')
  placeholderTargets.forEach((element) => {
    const key = element.dataset.i18nPlaceholder
    if (!key) {
      return
    }

    const currentPlaceholder = element.getAttribute('placeholder') ?? ''
    const translated = t(key, currentPlaceholder)
    element.setAttribute('placeholder', translated)
  })

  const ariaLabelTargets = document.querySelectorAll<HTMLElement>('[data-i18n-aria-label]')
  ariaLabelTargets.forEach((element) => {
    const key = element.dataset.i18nAriaLabel
    if (!key) {
      return
    }

    const currentLabel = element.getAttribute('aria-label') ?? ''
    const translated = t(key, currentLabel)
    element.setAttribute('aria-label', translated)
  })
}

export default function I18nRuntime() {
  const pathname = usePathname()

  useEffect(() => {
    let mounted = true

    initI18n().then(() => {
      if (!mounted) return
      applyI18nBindings()
    })

    function handleLanguageChanged() {
      applyI18nBindings()
    }

    i18next.on('languageChanged', handleLanguageChanged)

    return () => {
      mounted = false
      i18next.off('languageChanged', handleLanguageChanged)
    }
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(() => {
      applyI18nBindings()
    }, 0)

    return () => {
      window.clearTimeout(timer)
    }
  }, [pathname])

  return null
}
