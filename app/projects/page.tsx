import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <h1 className='title mb-12 animate-tech-load translate-y-[-20px] opacity-0 fill-mode-forwards delay-300'>Projects</h1>

        <Projects projects={projects} />
      </div>
    </section>
  )
}