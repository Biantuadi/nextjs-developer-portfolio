import { getAllPosts, getPageBySlug } from '@/lib/cosmic'
import IntroSection from '@/sections/IntroSection'
import AboutMeSection from '@/sections/AboutMeSection'
import ProfileShowcaseSection from '@/sections/ProfileShowcaseSection'
import ToolboxSection from '@/sections/ToolboxSection'
import WorksSection from '@/sections/WorksSection'
import PostsSection from '@/sections/PostsSection'
import ContactSection from '@/sections/ContactSection'
import { draftMode } from 'next/headers'
import getMetadata from 'helpers/getMetadata'

const fallbackHomeData = {
  avatar: '/images/avatar_4.png',
  heading: 'Je construis des solutions web et mobiles modernes qui accélèrent votre business.',
  sub_heading:
    'Beni Biantuadi — Développeur Fullstack & Mobile, entrepreneur à Nancy. J\'aide startups et entreprises à transformer leurs idées en produits fiables et scalables.',
  about: `<p>Je suis <strong>Beni Biantuadi</strong>, développeur Fullstack & Mobile et entrepreneur.</p>
  <p>Formé à <strong>Epitech</strong>, je développe des applications web et mobiles avec une approche orientée produit, performance et impact business.</p>
  <p>Actuellement en expérience chez <strong>PMB Software</strong>, je travaille sur des solutions digitales concrètes qui résolvent des problèmes réels.</p>
  <p>Basé à <strong>Nancy</strong>, je collabore avec une ambition internationale et une vision moderne de la tech africaine.</p>
  <p><strong>Top Voice Développeur Web</strong> sur LinkedIn, je partage aussi mes retours d\'expérience autour de l\'innovation et de la création de valeur.</p>
  <h4>Slogans professionnels</h4>
  <ul>
    <li>Du code solide, pensé pour la croissance.</li>
    <li>Des produits digitaux qui transforment les idées en résultats.</li>
    <li>Fullstack & Mobile pour des expériences rapides, utiles et scalables.</li>
  </ul>
  <p><strong>Bio courte :</strong> Développeur Fullstack & Mobile | Entrepreneur | J\'aide les entreprises à lancer des produits digitaux performants.</p>
  <p><strong>Elevator pitch :</strong> Je conçois et livre des applications web et mobiles modernes qui créent un impact business réel.</p>`,
  contact_heading: 'Construisons votre prochain produit digital',
  contact_text:
    '<p>Vous avez une idée, un produit à lancer ou une plateforme à faire évoluer ? Parlons-en. Je suis disponible pour collaborer avec startups, clients et entreprises.</p>',
  socials: {
    metadata: {
      email: '',
      linkedin: 'beni-biantuadi-022585201',
      github: '',
      resume: { url: '' },
    },
  },
}

async function getData() {
  const { isEnabled } = draftMode()
  const [allPosts, allWorks, pageData] = await Promise.all([
    getAllPosts(isEnabled, 'posts', 3) || [],
    getAllPosts(isEnabled, 'works', 3) || [],
    getPageBySlug('home-page', 'metadata'),
  ])
  return {
    allPosts,
    allWorks,
    pageData,
  }
}

export async function generateMetadata() {
  const [pageData, socialData, siteSettings] = await Promise.all([
    getPageBySlug('home-page', 'metadata'),
    getPageBySlug('social-config', 'metadata'),
    getPageBySlug('site-settings', 'metadata'),
  ])

  const title =
    getMetadata(pageData?.metadata?.meta_title) || 'Beni Biantuadi | Développeur Fullstack & Mobile'
  const description =
    getMetadata(pageData?.metadata?.meta_description) ||
    'Portfolio de Beni Biantuadi : développement web/mobile, mindset entrepreneur, et solutions orientées résultats.'
  const image = getMetadata(
    pageData?.metadata?.meta_image?.imgix_url,
    siteSettings?.metadata?.default_meta_image?.imgix_url ?? ''
  )
  const url = getMetadata(siteSettings?.metadata?.site_url, 'http://localhost:3000')
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

const HomePage = async () => {
  const data = await getData()
  const allPosts = data.allPosts
  const allWorks = data.allWorks
  const pageData = data.pageData
  const metadata = pageData?.metadata || fallbackHomeData

  return (
    <>
      <IntroSection
        avatar={metadata?.avatar?.imgix_url || metadata.avatar}
        heading={metadata?.heading}
        subHeading={metadata?.sub_heading}
        socials={metadata?.socials}
      />
      <AboutMeSection bodyText={metadata?.about} />
      <ProfileShowcaseSection />
      <ToolboxSection />
      <WorksSection posts={allWorks} />
      <PostsSection posts={allPosts} />
      <ContactSection
        heading={metadata?.contact_heading}
        bodyText={metadata?.contact_text}
        email={metadata?.socials?.metadata?.email}
        linkedin={metadata?.socials?.metadata?.linkedin}
      />
    </>
  )
}
export const revalidate = 60
export default HomePage
