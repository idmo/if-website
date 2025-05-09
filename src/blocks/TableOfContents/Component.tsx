import type { TableOfContentsBlock as TableOfContentsProps } from 'src/payload-types'
import { cn } from '@/utilities/ui'
import RichText from '@/components/RichText'

type Props = {
  className?: string
} & TableOfContentsProps

export const TableOfContentsBlock: React.FC<Props> = ({
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
          const { headline } = entry

          return (
            <RichText
              data={headline}
              enableGutter={false}
              enableProse={false}
              key={index}
              className="my-2"
            />
          )
        })}
      </div>
    </div>
  )
}
