import Image, { type ImageProps } from 'next/image'
import { optimizedSrc, type ImageVariant } from '@/lib/optimized-image'

type OptimizedImageProps = Omit<ImageProps, 'src' | 'unoptimized'> & {
  src: string
  variant?: ImageVariant
}

export default function OptimizedImage({ src, variant = 'display', alt, ...props }: OptimizedImageProps) {
  return <Image {...props} src={optimizedSrc(src, variant)} alt={alt} unoptimized />
}
