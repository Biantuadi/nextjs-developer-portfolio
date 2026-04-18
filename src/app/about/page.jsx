import Image from 'next/image'
import { getPageBySlug } from '@/lib/cosmic'
import Socials from '@/components/Socials'
import { sanitize } from 'isomorphic-dompurify'
import getMetadata from 'helpers/getMetadata'

const fallbackAboutData = {
  content: `<p>Je m'appelle <strong>Beni Biantuadi</strong>, développeur Fullstack & Mobile et entrepreneur.</p>
  <p>Basé à <strong>Nancy</strong> et formé à <strong>Epitech</strong>, je conçois des solutions web et mobiles orientées résultats.</p>
  <p>Mon expérience chez <strong>PMB Software</strong> m'a permis de travailler sur des applications concrètes, avec un focus sur la qualité technique, l'expérience utilisateur et l'impact métier.</p>
  <p>Je développe avec un esprit builder : transformer une idée en produit utile, scalable et prêt pour le marché.</p>
  <p>Je partage également ma vision tech sur LinkedIn où je suis reconnu comme <strong>Top Voice Développeur Web</strong>.</p>`,
  metadata: {
    heading: 'À propos de moi',
    image: {
      imgix_url: '/images/avatar_4.png',
    },
    socials: {
      metadata: {
        email: '',
        github: '',
        linkedin: 'beni-biantuadi-022585201',
        resume: { url: '' },
      },
    },
  },
}

async function getData() {
  const pageData = await getPageBySlug('about-page', 'content,metadata')
  return {
    pageData: pageData || fallbackAboutData,
  }
}

export async function generateMetadata() {
  const [pageData, socialData, siteSettings] = await Promise.all([
    getPageBySlug('about-page', 'metadata'),
    getPageBySlug('social-config', 'metadata'),
    getPageBySlug('site-settings', 'metadata'),
  ])

  const title = getMetadata(pageData?.metadata?.meta_title, 'À propos | Beni Biantuadi')
  const description = getMetadata(
    pageData?.metadata?.meta_description,
    'Découvrez le parcours et les compétences de Beni Biantuadi.'
  )
  const image = getMetadata(
    pageData?.metadata?.meta_image?.imgix_url,
    siteSettings?.metadata?.default_meta_image?.imgix_url ?? ''
  )
  const baseUrl = getMetadata(siteSettings?.metadata?.site_url, 'http://localhost:3000')
  const url = getMetadata(`${baseUrl}/about`)
  const twitterHandle = getMetadata(socialData?.metadata?.twitter)

  return {
    title,
    description,
    image,
    openGraph: {
      title,
      description,
      url,
      images: image
        ? [
            {
              url: image,
              width: 800,
              height: 600,
            },
          ]
        : [],
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: twitterHandle,
      images: image ? [image] : [],
    },
  }
}

const AboutPage = async () => {
  const data = await getData()
  const pageData = data.pageData

  return (
    <>
      <section>
        <h1 className="text-2xl md:text-3xl mb-12 font-bold">
          {pageData?.metadata?.heading}
        </h1>
        <div className="flex flex-col md:flex-row-reverse justify-between">
          {pageData?.metadata?.image && (
            <div className="relative max-w-[200px] md:max-w-sm mb-12">
              <Image
                src={pageData?.metadata?.image?.imgix_url}
                alt="Developer avatar"
                quality={60}
                width={270}
                height={270}
                priority
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                className="w-fit"
              />
            </div>
          )}
          <div className="flex-1 mt-12 md:mt-0 flex flex-col justify-start gap-y-8 pr-12">
            <div
              className="text-fore-primary mb-8 space-y-4"
              dangerouslySetInnerHTML={{
                __html: sanitize(pageData?.content),
              }}
            />
            <Socials
              resume={pageData?.metadata?.socials?.metadata?.resume?.url}
              email={pageData?.metadata?.socials?.metadata?.email}
              github={pageData?.metadata?.socials?.metadata?.github}
              linkedin={pageData?.metadata?.socials?.metadata?.linkedin}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export const revalidate = 60
export default AboutPage
