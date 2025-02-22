import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getResume } from '@/lib/resume'
import { DownloadIcon } from '@radix-ui/react-icons'
export default async function Resume() {
  const resume = await getResume()

  const { metaData, content } = resume
  const { name, designation, phone, address, linkedIn, gitHub } = metaData
  return (
    <section className='pb-2 pt-24'>
      <div className='container max-w-3xl'>
        <div className='flex flex-wrap items-center justify-between'>
          {name && <h1 className='title'>{name}</h1>}

          <a
            href='/KEVIN_DANIEL_RESUME.pdf'
            download={true}
            className='flex items-center gap-2 text-muted-foreground hover:text-foreground'
          >
            <DownloadIcon className='h-6 w-6'></DownloadIcon>
          </a>
        </div>
        {designation && (
          <p className='mt-2 text-muted-foreground'>{designation}</p>
        )}
        <div className='mt-2 flex flex-row gap-2'>
          {address && <p className='text-muted-foreground'>{address}</p>}
          <span className='text-muted-foreground'>|</span>
          {phone && <p className='text-muted-foreground'>{phone}</p>}
          <span className='text-muted-foreground'>|</span>
          {linkedIn && (
            <a href={linkedIn} className='text-muted-foreground'>
              LinkedIn
            </a>
          )}
          <span className='text-muted-foreground'>|</span>
          {gitHub && (
            <a href={gitHub} className='text-muted-foreground'>
              GitHub
            </a>
          )}
        </div>
        <hr className='my-4' />
        <main className='prose mb-0 mt-0 dark:prose-invert'>
          <MDXRemote source={content} />
        </main>
      </div>
    </section>
  )
}
