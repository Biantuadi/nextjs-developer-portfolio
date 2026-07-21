import Socials from '@/components/Socials'
import Image from 'next/image'

const IntroSection = ({ heading, subHeading, avatar, socials }) => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row justify-start">
      <div className="flex-1 flex flex-col gap-y-4">
        <p className="text-sm uppercase tracking-wider text-accent font-semibold">Fullstack Developer</p>
        <h1 className="text-3xl md:text-5xl font-bold max-w-2xl text-fore-primary">
          {heading || 'Developer Portfolio'}
        </h1>
        <h2 className="mb-2 max-w-xl">{subHeading || 'This portfolio template is powered by Cosmic.'}</h2>
        <div className="flex items-center gap-4 mb-2">
          <a
            href="#projects"
            className="text-white px-5 py-2 text-sm bg-gradient-to-r from-accent to-violet-400 rounded hover:from-pink-500 hover:to-yellow-500"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-5 py-2 text-sm rounded border border-accent text-accent hover:opacity-80 transition"
          >
            Me contacter
          </a>
        </div>
        <Socials
          resume={socials?.metadata?.resume?.url}
          email={socials?.metadata?.email}
          github={socials?.metadata?.github}
          linkedin={socials?.metadata?.linkedin}
        />
      </div>
      <div className="w-[80px] sm:w-[186px] relative mb-6 sm:mb-0 rounded-full">
        <Image
          src={avatar}
          alt="Developer Avatar"
          height={186}
          width={186}
          quality={60}
          className="rounded-full"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>
    </section>
  )
}

export default IntroSection
