const skills = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Node.js', 'API REST', 'Architecture web scalable', 'Bases de données SQL/NoSQL'],
  mobile: ['React Native', 'Applications cross-platform', 'Optimisation UX mobile'],
  devops: ['Git & GitHub', 'CI/CD', 'Vercel', 'Docker'],
}

const projects = [
  {
    title: 'SaaS de gestion opérationnelle',
    description:
      'Conception d\'une plateforme SaaS orientée efficacité métier pour centraliser les flux et réduire les tâches manuelles.',
    stack: 'Next.js, Node.js, PostgreSQL, API REST',
    value: 'Gain de temps pour les équipes et meilleure visibilité business.',
  },
  {
    title: 'Application mobile orientée terrain',
    description:
      'Développement d\'une application mobile pour digitaliser les actions terrain et fluidifier la remontée d\'information.',
    stack: 'React Native, Backend API, Base de données cloud',
    value: 'Processus plus rapides et meilleure fiabilité des données collectées.',
  },
  {
    title: 'Plateforme web de services digitaux',
    description:
      'Création d\'une plateforme web moderne avec une expérience utilisateur claire, rapide et orientée conversion.',
    stack: 'Next.js, TypeScript, Tailwind CSS',
    value: 'Valorisation de l\'offre et meilleure transformation des visiteurs en prospects.',
  },
]

const ProfileShowcaseSection = () => {
  return (
    <section className="mt-20 space-y-20">
      <div>
        <h3 className="text-2xl md:text-3xl mb-6 text-fore-primary border-b border-b-slate-200 dark:border-b-gray-600 w-fit">
          Compétences Fullstack
        </h3>
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Frontend</h4>
            <p className="text-fore-subtle">{skills.frontend.join(' · ')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Backend</h4>
            <p className="text-fore-subtle">{skills.backend.join(' · ')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Mobile</h4>
            <p className="text-fore-subtle">{skills.mobile.join(' · ')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Outils / DevOps</h4>
            <p className="text-fore-subtle">{skills.devops.join(' · ')}</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl mb-6 text-fore-primary border-b border-b-slate-200 dark:border-b-gray-600 w-fit">
          Expérience
        </h3>
        <div className="rounded-xl border border-slate-200 dark:border-gray-700 p-6">
          <h4 className="font-semibold text-lg">PMB Software</h4>
          <p className="text-fore-subtle mt-3">
            Développement d&apos;applications web et mobiles avec une approche orientée impact : résoudre des problèmes concrets,
            améliorer l&apos;expérience utilisateur et livrer des solutions maintenables pour les équipes produit.
          </p>
        </div>
      </div>

      <div id="projects">
        <h3 className="text-2xl md:text-3xl mb-6 text-fore-primary border-b border-b-slate-200 dark:border-b-gray-600 w-fit">
          Projets
        </h3>
        <div className="grid gap-6">
          {projects.map(project => (
            <article key={project.title} className="rounded-xl border border-slate-200 dark:border-gray-700 p-6">
              <h4 className="font-semibold text-lg">{project.title}</h4>
              <p className="mt-3 text-fore-subtle">{project.description}</p>
              <p className="mt-2 text-sm"><span className="font-semibold">Stack :</span> {project.stack}</p>
              <p className="mt-2 text-sm"><span className="font-semibold">Valeur :</span> {project.value}</p>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl mb-6 text-fore-primary border-b border-b-slate-200 dark:border-b-gray-600 w-fit">
          Entrepreneur & Builder
        </h3>
        <p className="text-fore-subtle">
          En plus du développement, j&apos;adopte un mindset d&apos;entrepreneur : identifier les besoins, prototyper vite et construire
          des solutions digitales qui créent une vraie valeur pour les utilisateurs et les entreprises.
        </p>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl mb-6 text-fore-primary border-b border-b-slate-200 dark:border-b-gray-600 w-fit">
          Reconnaissance
        </h3>
        <p className="text-fore-subtle">
          Reconnu comme <strong>Top Voice Développeur Web</strong> sur LinkedIn, je partage une vision pratique de la tech,
          tournée vers l&apos;exécution, la transmission et l&apos;innovation.
        </p>
      </div>
    </section>
  )
}

export default ProfileShowcaseSection
