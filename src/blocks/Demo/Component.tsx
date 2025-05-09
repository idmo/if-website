import type { DemoBlock as DemoBlockProps } from 'src/payload-types'
import { cn } from '@/utilities/ui'
import Link from 'next/link'

type Props = {
  className?: string
} & DemoBlockProps

export const DemoBlock: React.FC<Props> = ({
  className,
  chapterTitle,
  chapterNumber,
  chapterEntries,
  chapterSubHeading,
  textColor,
  bgColor,
}) => {
  return (
    <div className="grid md:grid-cols-4 *:p-6 gap-x-4 -mb-12">
      <div
        className={cn('md:col-span-1', className)}
        style={{ backgroundColor: `${bgColor}`, color: `${textColor || 'black'}` }}
      >
        <div className="mb-8 text-7xl">{chapterNumber}</div>
        <div className="font-extrabold">{chapterTitle}</div>
        <div className="text-sm">{chapterSubHeading}</div>
      </div>
      <div
        className="md:col-span-3"
        style={{ backgroundColor: `${bgColor}`, color: `${textColor || 'black'}` }}
      >
        {chapterEntries?.map((entry, index) => {
          const { headline, articleUrl } = entry

          return (
            <Link href={articleUrl ? articleUrl : '#'} key={index} className="flex flex-col">
              {headline && headline}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
