import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// 拿出我们在 .env.local 里存的钥匙，激活邮递员
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // 接收前端传过来的留言内容
    const { title } = await request.json();

    // 指挥邮递员发信
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>', // 这是 Resend 免费提供的测试发件人
      to: ['zyf5732@gmail.com'], // ⚠️ 这里一定要改成你自己的邮箱！用来收通知
      subject: '🎉 你的全栈小站有新留言啦！',
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>有人在你的网站上留了言：</h2>
          <p style="font-size: 18px; color: #333; background: #f4f4f4; padding: 15px; border-radius: 8px;">
            "${title}"
          </p>
          <p style="color: #888; font-size: 14px;">快去网站后台看看吧！</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    console.error('邮件发送失败:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}