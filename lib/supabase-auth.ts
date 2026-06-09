import { createClient, type User } from '@supabase/supabase-js'

export async function getAuthenticatedUser(request: Request): Promise<User | null> {
  const authorization = request.headers.get('authorization')
  const token = authorization?.startsWith('Bearer ') ? authorization.slice(7).trim() : ''
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!token || !supabaseUrl || !supabaseAnonKey) {
    return null
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
  const { data, error } = await supabase.auth.getUser(token)

  return error ? null : data.user
}

export async function getAuthenticatedAdmin(request: Request): Promise<User | null> {
  const user = await getAuthenticatedUser(request)
  return user?.app_metadata?.role === 'admin' ? user : null
}
