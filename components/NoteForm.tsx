'use client';

import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/navigation';

export default function NoteForm() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null); // 记住用户选了什么图片
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() && !file) return; // 如果既没打字也没选图，就不让发

    setLoading(true);
    let uploadedImageUrl = null;

    try {
      // 1. 如果用户选了图片，先呼叫我们的地下暗道传图！
      if (file) {
        const formData = new FormData();
        formData.append('file', file);

        // 发送给我们的 API
        const uploadRes = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        const uploadData = await uploadRes.json();

        if (uploadData.success) {
          uploadedImageUrl = uploadData.url; // 拿到大仓库返回的图片公网链接！
        } else {
          alert('图片上传失败：' + uploadData.error);
          setLoading(false);
          return;
        }
      }

      // 2. 把文字和图片链接，一起存进 Supabase 数据库
      const { error } = await supabase.from('notes').insert([
        { 
          title: title, 
          image_url: uploadedImageUrl // 把刚才拿到的链接存进新加的格子里
        }
      ]);

      if (error) {
        alert('数据库保存失败：' + error.message);
      } else {
        // 🌟 新增：悄悄呼叫我们的内部邮局发通知！
        // 贴心小优化：如果用户只发了图片没打字，给邮件一个默认提示
        const emailContent = title.trim() ? title : '【发来了一张新图片】';
        
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: emailContent })
        }).catch(err => console.error('呼叫邮局失败', err));

        // 3. 发送成功！清空输入框和图片，并刷新列表
        setTitle(''); 
        setFile(null); 
        router.refresh(); 
      }
    } catch (err: any) {
      alert('发生错误：' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 pt-6 border-t border-gray-200">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="写下你的新留言..."
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        disabled={loading}
      />
      
      <div className="flex items-center gap-2">
        {/* 图片选择按钮 */}
        <input
          type="file"
          accept="image/*" // 只允许选图片
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="flex-1 text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all cursor-pointer"
          disabled={loading}
        />
        
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 min-w-[120px] transition-all"
        >
          {loading ? '发送中...' : '🚀 发送图文'}
        </button>
      </div>
    </form>
  );
}