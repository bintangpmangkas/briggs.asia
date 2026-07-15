import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../../components/Button'
import { ProjectCard } from '../../components/ProjectCard'
import { Reveal, Section, SectionLabel } from '../../components/Reveal'
import { projects } from '../../data/projects'

export const Route = createFileRoute('/work/')({ component: Work })

function Work() {
  return (
    <div className="fade-in">
      {/* Intro */}
      <Section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="max-w-[1000px]">
          <Reveal>
            <h1 className="t-display text-ink">Success Stories</h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="t-heading-m mt-8 max-w-[760px] text-ink">
              See how we’ve turned ideas into reality. Dive into the stories of{' '}
              <span className="text-gray-50">
                successful product designs that make a difference.
              </span>
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Projects grid */}
      <Section className="pb-28 md:pb-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 120}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Our Story */}
      <Section className="py-24 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>Our Story</SectionLabel>
          </Reveal>
          <div className="flex flex-col items-start gap-8">
            <Reveal delay={120}>
              <p className="t-heading-l max-w-[800px] text-ink">
                Explore our journey and learn what sets us apart in{' '}
                <span className="text-gray-70">crafting impactful digital experiences</span>.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Button href="/about" variant="secondary">
                About Us
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>
    </div>
  )
}
