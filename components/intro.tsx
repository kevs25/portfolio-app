import Image from 'next/image'
import authorImage from '@/public/images/author/kevin.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Kevin Daniel.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer based in Bangalore,India, with 1.6 years of experience. I am passionate about building scalable and efficient applications, specializing in both front-end and back-end development. I enjoy solving complex problems and continuously learning new technologies to enhance my skills.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg'
          src={authorImage}
          alt='Kevin Daniel'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}