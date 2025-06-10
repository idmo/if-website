import type { Metadata } from 'next/types'

import { ArticleArchive } from '@/components/ArticleArchive'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const contributors = await payload.find({
    collection: 'contributors',
    depth: 1,
    limit: 100,
    overrideAccess: false,
    select: {
      name: true,
      slug: true,
      categories: true,
      meta: true,
    },
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Contributors</h1>
        </div>
      </div>

      <div className="container">
        {contributors.docs?.map((result, index) => {
          if (typeof result === 'object' && result !== null) {
            return (
              <div className="col-span-4 prose" key={index}>
                <h4>{result.name}</h4>
                <div>{result.bio}</div>
              </div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Payload Website Template Posts`,
  }
}
