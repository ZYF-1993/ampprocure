'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabase'

export default function NoteForm() {
  const [title, setTitle] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!title.trim() && !file) return

    setLoading(true)
    let uploadedImageUrl: string | null = null

    try {
      if (file) {
        const formData = new FormData()
        formData.append('file', file)

        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        const uploadData = await uploadResponse.json()

        if (!uploadData.success) {
          alert(`Image upload failed: ${uploadData.error}`)
          setLoading(false)
          return
        }

        uploadedImageUrl = uploadData.url
      }

      const { error } = await supabase.from('notes').insert([
        {
          title,
          image_url: uploadedImageUrl,
        },
      ])

      if (error) {
        alert(`Database insert failed: ${error.message}`)
      } else {
        const emailContent = title.trim() || 'A new image was uploaded without additional text.'

        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: emailContent }),
        }).catch((sendError) => console.error('Notification email failed:', sendError))

        setTitle('')
        setFile(null)
        router.refresh()
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown submission error'
      alert(`Request failed: ${message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 border-t border-gray-200 pt-6">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Write your message..."
        className="rounded-lg border border-gray-300 px-4 py-2 transition-all focus:ring-2 focus:ring-blue-500 focus:outline-none"
        disabled={loading}
      />

      <div className="flex items-center gap-2">
        <input
          type="file"
          accept="image/*"
          onChange={(event) => setFile(event.target.files?.[0] || null)}
          className="flex-1 cursor-pointer text-sm text-gray-500 transition-all file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
          disabled={loading}
        />

        <button
          type="submit"
          disabled={loading}
          className="min-w-[120px] rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white transition-all hover:bg-blue-700 disabled:bg-gray-400"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  )
}
