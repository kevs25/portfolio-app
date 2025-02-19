import { getProjectBySlug, getProjects } from '@/lib/projects'
import { ArrowLeftIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const projects = await getProjects()
  // const slugs = projects.map(project => ({ slug: project.slug }))
  const slugs = projects.map((project) => ({ slug: project.slug }))

  return slugs
}
type Params = Promise<{ slug: string }>
export default async function Project({
  params
}: {
  params: Params
}) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  console.log(project)
  if (!project) {
    notFound();
  }

  const { metaData, content } = project
  const { title, description, image } = metaData

  console.log('Slug:', slug)
  console.log('Project Data:', project)

  return (
    <section className='pb-24 pt-32'>
      <div className='container max-w-3xl'>
        <Link
          href='/projects'
          className='mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground'
        >
          <ArrowLeftIcon className='h-5 w-5' />
          <span>Back to projects</span>
        </Link>

        {image && (
            <div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
              <Image
                src={image}
                alt={title || ''}
                className='object-cover'
                fill
              />
            </div>
          )}

        <header>
          <h1 className='title'>{title}</h1>
          <p className='mt-3 text-xs text-muted-foreground'>
            {description}
          </p>
        </header>

        <main className='prose mt-16 dark:prose-invert'>
          <MDXRemote source={content} />
        </main>
      </div>
    </section>
  )
}
