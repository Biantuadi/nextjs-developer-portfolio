import { LetterIcon } from '@/configs/icons'
import sanitizeHtml from 'sanitize-html'

const ContactSection = ({ heading, bodyText, email, linkedin }) => {
  return (
    <section id="contact" className="group h-72 flex flex-col items-center justify-center my-32">
      <h3 className="text-3xl flex items-center gap-x-2 font-bold">
        <span className="bg-back-subtle p-1 rounded-full">
          <LetterIcon />
        </span>
        {heading}
      </h3>
      <div
        className="text-fore-subtle my-3 text-center space-y-4"
        dangerouslySetInnerHTML={{
          __html: sanitizeHtml(bodyText || ''),
        }}
      />
      <a
        href={email ? `mailto:${email}` : `https://www.linkedin.com/in/${linkedin}`}
        className="text-white px-16 py-3.5 mt-8 text-xl bg-gradient-to-r from-accent to-violet-400 rounded hover:from-pink-500 hover:to-yellow-500"
      >
        {email ? 'Me contacter' : 'Me contacter sur LinkedIn'}
      </a>
    </section>
  )
}

export default ContactSection
