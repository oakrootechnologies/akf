'use client'

interface PlantImageProps {
  imageKey: string
  alt?: string
  className?: string
  bucketName?: string
}

export default function PlantImage({
  imageKey,
  alt = 'Plant image',
  className = '',
  bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME || 'your-bucket-name',
}: PlantImageProps) {
  const imageUrl = `https://${bucketName}.s3.amazonaws.com/${imageKey}`

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={className}
      loading="eager"
    />
  )
}

