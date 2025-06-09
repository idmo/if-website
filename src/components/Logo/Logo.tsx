import React from 'react'
import Image from 'next/image'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    <Image
      className={className}
      src="/img/logo-in.png"
      alt="In Formation Magazine Logo"
      width={20}
      height={50}
      loading={loading}
      priority={priority === 'high'}
    />
  )
}
