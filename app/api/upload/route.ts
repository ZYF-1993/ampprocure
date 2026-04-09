import { NextResponse } from 'next/server';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { r2 } from '@/lib/r2'; 

export async function POST(request: Request) {
  try {
    // 1. 接收前端传来的文件数据
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: '没有收到文件哦' }, { status: 400 });
    }

    // 2. 把文件转换成 R2 能看懂的包裹 (Buffer)
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 3. 给文件起个独一无二的名字，防止重名覆盖（加上时间戳）
    const uniqueFilename = `${Date.now()}-${file.name.replace(/\s+/g, '_')}`;

    // 4. 指挥遥控器，把包裹发往大仓库！
    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: uniqueFilename, // 文件名
      Body: buffer, // 文件内容
      ContentType: file.type, // 文件类型
    });

    await r2.send(command);

    // 5. 组装出这个文件在公网上的访问链接
    const publicUrl = `${process.env.R2_PUBLIC_URL}/${uniqueFilename}`; 

    return NextResponse.json({ 
      success: true, 
      message: '文件上传成功！',
      fileName: uniqueFilename,
      url: publicUrl 
    });

  } catch (error: any) {
    console.error('上传出错了:', error);
    return NextResponse.json({ error: '上传失败: ' + error.message }, { status: 500 });
  }
}