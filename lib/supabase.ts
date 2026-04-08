import { createClient } from '@supabase/supabase-js'

// 从 .env.local 中安全地读取刚刚存入的两把钥匙
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// 创建并导出一个能随时操作数据库的“遥控器”
export const supabase = createClient(supabaseUrl, supabaseAnonKey)