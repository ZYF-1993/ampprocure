'use client'; // 这一句极其重要！它告诉 Next.js：这是一个要在浏览器里运行的交互组件

import { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useRouter } from 'next/navigation';

export default function NoteForm() {
  const [title, setTitle] = useState(''); // 记住输入框里的字
  const [loading, setLoading] = useState(false); // 记住按钮是不是正在发送中
  const router = useRouter(); // 用来刷新页面的小工具

  // 当你点击“发送”按钮时，会触发这个魔法
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 阻止浏览器默认的表单跳转
    if (!title.trim()) return; // 如果没写字就点发送，直接拦截

    setLoading(true); // 按钮变成“发送中...”
    
    // 1. 把字塞进 Supabase 数据库的 notes 表里
    const { error } = await supabase.from('notes').insert([{ title: title }]);

    if (error) {
      alert('哎呀，发送失败了：' + error.message);
    } else {
      setTitle(''); // 发送成功！把输入框清空
      router.refresh(); // 神奇的 API：让外部的“服务端组件”重新获取最新数据！
    }
    setLoading(false); // 恢复按钮状态
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex gap-2 pt-6 border-t border-gray-200">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="写下你的新留言..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        disabled={loading}
      />
      <button
        type="submit"
        disabled={loading}
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-all"
      >
        {loading ? '发送中...' : '🚀 发送'}
      </button>
    </form>
  );
}