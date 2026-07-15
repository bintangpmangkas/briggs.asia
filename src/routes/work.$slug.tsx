import { createFileRoute, Link, notFound } from '@tanstack/react-router'
import { Button } from '../components/Button'
import { Reveal, Section, SectionLabel } from '../components/Reveal'
import { getProject, projects } from '../data/projects'

export const Route = createFileRoute('/work/$slug')({
  loader: async ({ params }) => {
    const project = getProject(params.slug)
    if (!project) throw notFound()
    return { project }
  },
  component: WorkDetail,
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.project?.thumbnailTitle ?? 'Work'} — Briggs` }],
  }),
})

function WorkDetail() {
  const { project } = Route.useLoaderData()
  const nextIndex = (projects.findIndex((p) => p.id === project.id) + 1) % projects.length
  const next = projects[nextIndex]

  return (
    <div className="fade-in">
      {/* Header */}
      <Section className="pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="max-w-[1100px]">
          <Reveal>
            <div className="flex flex-wrap gap-x-16 gap-y-6">
              <div>
                <p className="t-body text-gray-50">Industry</p>
                <p className="t-heading-xs mt-1 text-ink">{project.industry}</p>
              </div>
              <div>
                <p className="t-body text-gray-50">Client</p>
                <p className="t-heading-xs mt-1 text-ink">{project.client}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="t-display mt-10 max-w-[1000px] text-ink">{project.fullTitle}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="t-heading-s mt-8 max-w-[760px] text-gray-70">{project.introHeading}</p>
          </Reveal>
        </div>
      </Section>

      {/* Main image */}
      <Section className="pb-16">
        <Reveal>
          <div className="overflow-hidden rounded-[24px] bg-gray-5">
            <img
              src={project.mainImage}
              alt={project.thumbnailTitle}
              className="w-full object-cover"
            />
          </div>
        </Reveal>
      </Section>

      {/* Intro body */}
      <Section className="pb-20 md:pb-28">
        <Reveal>
          <div className="max-w-[760px]">
            {project.introBody.split('\n\n').map((para, i) => (
              <p key={i} className="t-heading-s mb-6 text-gray-70 last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </Reveal>
        {project.buttonText && (
          <Reveal delay={120}>
            <div className="mt-10">
              <Button href={project.websiteLink ?? '#'} variant="secondary">
                {project.buttonText}
              </Button>
            </div>
          </Reveal>
        )}
      </Section>

      {/* Gallery top */}
      {project.galleryTop.length > 0 && (
        <Section className="pb-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.galleryTop.map((src, i) => (
              <Reveal key={src} delay={i * 100}>
                <div className="overflow-hidden rounded-[20px] bg-gray-5">
                  <img src={src} alt="" className="w-full object-cover" loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Gallery side */}
      {project.gallerySideLeft && project.gallerySideRight && (
        <Section className="pb-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Reveal>
              <div className="overflow-hidden rounded-[20px] bg-gray-5">
                <img src={project.gallerySideLeft} alt="" className="w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-[20px] bg-gray-5">
                <img src={project.gallerySideRight} alt="" className="w-full object-cover" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </Section>
      )}

      {/* Gallery bottom */}
      {project.galleryBottom.length > 0 && (
        <Section className="pb-20 md:pb-28">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.galleryBottom.map((src, i) => (
              <Reveal key={src} delay={i * 100}>
                <div className="overflow-hidden rounded-[20px] bg-gray-5">
                  <img src={src} alt="" className="w-full object-cover" loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* Carousel */}
      {project.showCarousel && project.carousel.length > 0 && (
        <Section className="pb-20 md:pb-28">
          <Reveal>
            <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 md:mx-0 md:px-0">
              {project.carousel.map((src, i) => (
                <div
                  key={src}
                  className="min-w-[85%] snap-center overflow-hidden rounded-[20px] bg-gray-5 sm:min-w-[60%] md:min-w-[40%]"
                >
                  <img src={src} alt={`Carousel ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </Reveal>
        </Section>
      )}

      {/* Final section */}
      {project.finalHeading && (
        <Section className="border-t border-gray-20 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
            <Reveal>
              <SectionLabel>The Outcome</SectionLabel>
            </Reveal>
            <div className="max-w-[800px]">
              <Reveal delay={120}>
                <p className="t-heading-m text-ink">{project.finalHeading}</p>
              </Reveal>
              {project.finalBody && (
                <Reveal delay={200}>
                  <p className="t-heading-s mt-8 text-gray-70">{project.finalBody}</p>
                </Reveal>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* Next project */}
      <Section className="border-t border-gray-20 py-16 md:py-24">
        <Reveal>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group block"
          >
            <p className="t-body text-gray-50">Next project</p>
            <div className="mt-3 flex items-center justify-between gap-4">
              <h3 className="t-heading-l text-ink transition-colors group-hover:text-gray-70">
                {next.thumbnailTitle}
              </h3>
              <span className="t-heading-xs text-gray-50">→</span>
            </div>
          </Link>
        </Reveal>
      </Section>
    </div>
  )
}
