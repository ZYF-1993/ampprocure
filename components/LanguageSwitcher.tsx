'use client'

import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react'
import i18next from 'i18next'
import FlagIcon from '@/components/FlagIcon'
import { getCurrentLanguage, initI18n, setSiteLanguage, type SiteLanguage } from '@/lib/i18n'

type LanguageOption = {
  code: SiteLanguage
  short: string
  name: string
}

const LANGUAGE_OPTIONS: readonly LanguageOption[] = [
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'ar', short: 'AR', name: 'Arabic' },
  { code: 'de', short: 'DE', name: 'German' },
  { code: 'el', short: 'EL', name: 'Greek' },
  { code: 'es', short: 'ES', name: 'Spanish' },
  { code: 'fa', short: 'FA', name: 'Persian' },
  { code: 'fr', short: 'FR', name: 'French' },
  { code: 'he', short: 'HE', name: 'Hebrew' },
  { code: 'hi', short: 'HI', name: 'Hindi' },
  { code: 'hu', short: 'HU', name: 'Hungarian' },
  { code: 'id', short: 'ID', name: 'Indonesian' },
  { code: 'it', short: 'IT', name: 'Italian' },
  { code: 'ja', short: 'JA', name: 'Japanese' },
  { code: 'ko', short: 'KO', name: 'Korean' },
  { code: 'nl', short: 'NL', name: 'Dutch' },
  { code: 'pl', short: 'PL', name: 'Polish' },
  { code: 'pt', short: 'PT', name: 'Portuguese' },
  { code: 'ru', short: 'RU', name: 'Russian' },
  { code: 'th', short: 'TH', name: 'Thai' },
  { code: 'tr', short: 'TR', name: 'Turkish' },
  { code: 'vi', short: 'VI', name: 'Vietnamese' },
]

const SWITCHER_STYLE: CSSProperties = {
  ['--bg' as string]: '#ffffffb3',
  ['--bg-hover' as string]: '#f3f4f6',
  ['--text' as string]: '#111827',
  ['--text-hover' as string]: '#111827',
  ['--border' as string]: '1px solid #00000000',
  ['--border-width' as string]: '1px',
  ['--border-color' as string]: '#00000000',
  ['--border-radius' as string]: '5px',
  ['--flag-radius' as string]: '2px',
  ['--flag-size' as string]: '18px',
  ['--aspect-ratio' as string]: '4/3',
  ['--font-size' as string]: '14px',
  ['--transition-duration' as string]: '0.2s',
}

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<SiteLanguage>('en')
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement | null>(null)
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const current = useMemo(() => {
    return LANGUAGE_OPTIONS.find((item) => item.code === language) ?? LANGUAGE_OPTIONS[0]
  }, [language])

  useEffect(() => {
    let mounted = true

    initI18n().then(() => {
      if (!mounted) {
        return
      }
      setLanguage(getCurrentLanguage())
    })

    const onLangChange = () => {
      if (!mounted) {
        return
      }
      setLanguage(getCurrentLanguage())
    }

    i18next.on('languageChanged', onLangChange)

    return () => {
      mounted = false
      i18next.off('languageChanged', onLangChange)
    }
  }, [])

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!rootRef.current) {
        return
      }

      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    const onEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onEsc)

    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onEsc)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  const openMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setOpen(true)
  }

  const closeMenuWithDelay = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }

    closeTimerRef.current = setTimeout(() => {
      setOpen(false)
    }, 100)
  }

  const selectLanguage = async (next: SiteLanguage) => {
    if (next === language) {
      setOpen(false)
      return
    }

    setLanguage(next)
    await setSiteLanguage(next)
    setOpen(false)
  }

  return (
    <div
      ref={rootRef}
      className="jyins-trp-shortcode-switcher__wrapper"
      style={SWITCHER_STYLE}
      role="group"
      data-open-mode="hover"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenuWithDelay}
    >
      <div
        className="jyins-trp-language-switcher jyins-trp-ls-dropdown jyins-trp-shortcode-switcher jyins-trp-shortcode-anchor jyins-trp-open-on-hover"
        aria-hidden="true"
        data-no-translation
      >
        <div className="jyins-trp-current-language-item__wrapper">
          <div className="jyins-trp-language-item jyins-trp-language-item__default jyins-trp-language-item__current" title={current.short}>
            <FlagIcon code={current.code} className="jyins-trp-flag-image" />
            <span className="jyins-trp-language-item-name">{current.short}</span>
          </div>
          <svg className="jyins-trp-shortcode-arrow" width="20" height="20" viewBox="0 0 20 21" fill="none" aria-hidden="true" focusable="false">
            <path d="M5 8L10 13L15 8" stroke="var(--text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div
        className={`jyins-trp-language-switcher jyins-trp-ls-dropdown jyins-trp-shortcode-switcher jyins-trp-shortcode-overlay jyins-trp-open-on-hover ${
          open ? 'is-open' : ''
        }`}
        role="listbox"
        aria-expanded={open}
        tabIndex={0}
        data-no-translation
      >
        <button
          type="button"
          className="jyins-trp-current-language-item__wrapper jyins-trp-current-button"
          data-i18n-aria-label="language.select"
          aria-label="Select website language"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="jyins-trp-language-item jyins-trp-language-item__default jyins-trp-language-item__current" title={current.short}>
            <FlagIcon code={current.code} className="jyins-trp-flag-image" />
            <span className="jyins-trp-language-item-name">{current.short}</span>
          </span>
          <svg className="jyins-trp-shortcode-arrow" width="20" height="20" viewBox="0 0 20 21" fill="none" aria-hidden="true" focusable="false">
            <path d="M5 8L10 13L15 8" stroke="var(--text)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="jyins-trp-switcher-dropdown-list" hidden={!open}>
          {LANGUAGE_OPTIONS.map((option) => {
            const isCurrent = option.code === language
            return (
              <button
                key={option.code}
                type="button"
                className={`jyins-trp-language-item ${isCurrent ? 'jyins-trp-language-item__current' : ''}`}
                role="option"
                aria-selected={isCurrent}
                title={option.short}
                onClick={() => selectLanguage(option.code)}
              >
                <FlagIcon code={option.code} className="jyins-trp-flag-image" />
                <span className="jyins-trp-language-item-name" data-no-translation>
                  {option.short}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
