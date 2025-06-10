import { cn } from '@/utilities/ui'
import React from 'react'

import { CardPostData } from '@/components/Card'

export type Props = {
  articles: CardPostData[]
}

export const ArticleArchive: React.FC<Props> = (props) => {
  const { articles } = props

  return (
    <div className={cn('container')}>
      <div>
        <div className="">
          {articles?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-4 prose" key={index}>
                  <h3>{result.title}</h3>
                </div>
              )
            }
            return null
          })}
        </div>
      </div>
    </div>
  )
}
