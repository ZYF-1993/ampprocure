'use client'

import { useEffect, useState, type FormEvent } from 'react'
import { supabase } from '@/lib/supabase'

type SiteSettingsState = {
  hero_title: string
  hero_subtitle: string
  hero_image_url: string
}

const EMPTY_SETTINGS: SiteSettingsState = {
  hero_title: '',
  hero_subtitle: '',
  hero_image_url: '',
}

export default function AdminPage() {
  const [authChecking, setAuthChecking] = useState(true)
  const [authLoading, setAuthLoading] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginError, setLoginError] = useState('')

  const [settings, setSettings] = useState<SiteSettingsState>(EMPTY_SETTINGS)
  const [settingsLoading, setSettingsLoading] = useState(false)
  const [saving, setSaving] = useState(false)
  const [saveFeedback, setSaveFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const isLoggedIn = userEmail.length > 0

  async function loadSettings() {
    setSettingsLoading(true)
    setSaveFeedback(null)

    const { data, error } = await supabase
      .from('site_settings')
      .select('hero_title, hero_subtitle, hero_image_url')
      .eq('id', 1)
      .single()

    if (error) {
      setSaveFeedback({ type: 'error', message: `Failed to load settings: ${error.message}` })
      setSettingsLoading(false)
      return
    }

    setSettings({
      hero_title: data.hero_title ?? '',
      hero_subtitle: data.hero_subtitle ?? '',
      hero_image_url: data.hero_image_url ?? '',
    })
    setSettingsLoading(false)
  }

  useEffect(() => {
    let active = true

    async function bootstrap() {
      const { data, error } = await supabase.auth.getSession()

      if (!active) return

      if (error) {
        setLoginError(error.message)
      }

      const sessionUserEmail = data.session?.user?.email ?? ''
      setUserEmail(sessionUserEmail)

      if (sessionUserEmail) {
        await loadSettings()
      }

      setAuthChecking(false)
    }

    void bootstrap()

    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      const nextEmail = session?.user?.email ?? ''
      setUserEmail(nextEmail)
      setLoginError('')

      if (nextEmail) {
        void loadSettings()
      } else {
        setSettings(EMPTY_SETTINGS)
        setSaveFeedback(null)
      }
    })

    return () => {
      active = false
      data.subscription.unsubscribe()
    }
  }, [])

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setAuthLoading(true)
    setLoginError('')

    const { data, error } = await supabase.auth.signInWithPassword({
      email: loginEmail.trim(),
      password: loginPassword,
    })

    if (error) {
      setLoginError(error.message)
      setAuthLoading(false)
      return
    }

    setUserEmail(data.user?.email ?? loginEmail.trim())
    setLoginPassword('')
    await loadSettings()
    setAuthLoading(false)
  }

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaving(true)
    setSaveFeedback(null)

    const { error } = await supabase
      .from('site_settings')
      .update({
        hero_title: settings.hero_title.trim(),
        hero_subtitle: settings.hero_subtitle.trim(),
        hero_image_url: settings.hero_image_url.trim(),
      })
      .eq('id', 1)

    if (error) {
      setSaveFeedback({ type: 'error', message: `Save failed: ${error.message}` })
      setSaving(false)
      return
    }

    setSaveFeedback({ type: 'success', message: 'Saved successfully.' })
    setSaving(false)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setUserEmail('')
    setLoginEmail('')
    setLoginPassword('')
    setSettings(EMPTY_SETTINGS)
    setSaveFeedback(null)
  }

  if (authChecking) {
    return (
      <main className="mx-auto flex min-h-[70vh] w-full max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-slate-600">Checking admin session...</p>
      </main>
    )
  }

  if (!isLoggedIn) {
    return (
      <main className="mx-auto flex min-h-[70vh] w-full max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <section className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-slate-900">Admin Login</h1>
          <p className="mt-2 text-sm text-slate-600">Sign in to manage website content settings.</p>

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label htmlFor="admin-email" className="mb-1 block text-sm font-medium text-slate-800">
                Email
              </label>
              <input
                id="admin-email"
                type="email"
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="admin@company.com"
              />
            </div>

            <div>
              <label htmlFor="admin-password" className="mb-1 block text-sm font-medium text-slate-800">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                required
                className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="Enter password"
              />
            </div>

            {loginError ? <p className="text-sm font-medium text-red-600">{loginError}</p> : null}

            <button
              type="submit"
              disabled={authLoading}
              className="inline-flex w-full items-center justify-center rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
            >
              {authLoading ? 'Signing In...' : 'Login'}
            </button>
          </form>
        </section>
      </main>
    )
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 px-6 py-4">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">Website Content Management Console</h1>
            <p className="mt-1 text-sm text-slate-600">Logged in as {userEmail}</p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
          >
            Logout
          </button>
        </header>

        <div className="px-6 py-6">
          {settingsLoading ? <p className="mb-4 text-sm text-slate-600">Loading current settings...</p> : null}

          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label htmlFor="hero-title" className="mb-1 block text-sm font-medium text-slate-800">
                Hero Title
              </label>
              <input
                id="hero-title"
                type="text"
                value={settings.hero_title}
                onChange={(event) => setSettings((prev) => ({ ...prev, hero_title: event.target.value }))}
                className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="Main homepage title"
              />
            </div>

            <div>
              <label htmlFor="hero-subtitle" className="mb-1 block text-sm font-medium text-slate-800">
                Hero Subtitle
              </label>
              <input
                id="hero-subtitle"
                type="text"
                value={settings.hero_subtitle}
                onChange={(event) => setSettings((prev) => ({ ...prev, hero_subtitle: event.target.value }))}
                className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="Supporting subtitle copy"
              />
            </div>

            <div>
              <label htmlFor="hero-image-url" className="mb-1 block text-sm font-medium text-slate-800">
                Hero Image URL
              </label>
              <input
                id="hero-image-url"
                type="url"
                value={settings.hero_image_url}
                onChange={(event) => setSettings((prev) => ({ ...prev, hero_image_url: event.target.value }))}
                className="w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                placeholder="https://..."
              />
            </div>

            {saveFeedback ? (
              <p className={`text-sm font-medium ${saveFeedback.type === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>
                {saveFeedback.message}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={saving || settingsLoading}
              className="inline-flex items-center justify-center rounded-md bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
