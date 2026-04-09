import { supabase } from '../lib/supabase';
import NoteForm from '../components/NoteForm';

// 强制这个页面每次访问都去数据库拿最新数据（不使用旧缓存）
export const revalidate = 0;

export default async function Home() {
  // 查数据，并且加上 .order() 让最新的留言排在最上面！
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .order('id', { ascending: false });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 text-black p-4">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800 tracking-tight">我的零服务器全栈小站 🚀</h1>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-xl font-bold mb-6 text-blue-600 flex items-center gap-2">
          <span>💬</span> 最新留言：
        </h2>

        {error ? (
          <p className="text-red-500 bg-red-50 p-3 rounded-lg border border-red-100">连接出错了：{error.message}</p>
        ) : (
          <ul className="space-y-3 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
            {data?.map((note) => (
              <li key={note.id} className="flex flex-col gap-2 text-lg font-medium bg-gray-50 p-3 rounded-lg border border-gray-100 shadow-sm">
                {/* 1. 如果有文字，就显示文字 */}
                {note.title && <p>{note.title}</p>}
                
                {/* 2. 如果有图片链接，就把它当做图片显示出来！ */}
                {note.image_url && (
                  <img 
                    src={note.image_url} 
                    alt="留言配图" 
                    className="max-w-full h-auto rounded-md shadow-sm border border-gray-200 object-cover max-h-64" 
                  />
                )}
              </li>
            ))}
            {data?.length === 0 && <p className="text-gray-400 italic">还没有人留言哦，快来抢沙发！</p>}
          </ul>
        )}

        {/* 我们的客户端交互表单登场！ */}
        <NoteForm />
      </div>
    </div>
  );
}