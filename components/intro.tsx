import Image from 'next/image'
import authorImage from '@/public/images/author/kevin.png'

export default function Intro() {
  const current_date = new Date();
  const experience_date = new Date('2023-08-28');
  
  let years = current_date.getFullYear() - experience_date.getFullYear();
  let months = current_date.getMonth() - experience_date.getMonth();

  if (months < 0) {
    years = years - 1;
    months = months + 12;
  }

  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='overflow-x-hidden mt-2 flex-1 md:mt-0 animate-intro-content-load delay-500 translate-x-[1000%] fill-mode-forwards'>
        <h1 className='title no-underline'>Hey, I&#39;m Kevin Daniel.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a software engineer based in Bangalore,India, with {years}.{months} years of experience. I am passionate about building scalable and efficient applications, specializing in both front-end and back-end development. I enjoy solving complex problems and continuously learning new technologies to enhance my skills.
        </p>
      </div>
      <div className='relative overflow-x-hidden animate-intro-image-load delay-500 translate-x-[1000%] fill-mode-forwards'>
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