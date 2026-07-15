import { createFileRoute, Link } from '@tanstack/react-router'
import { Button } from '../components/Button'
import { ArrowDown } from '../components/Button'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal, Section, SectionLabel } from '../components/Reveal'
import { homeProjects } from '../data/projects'

export const Route = createFileRoute('/')({ component: Home })

const services = ['Branding', 'UX/UI Designs', 'Motion & Animation', 'Mobile']

const clients = ['Zygo', 'Dazzle', 'Copay', 'Exodus', 'Katika']

function Home() {
  const [featured, ...rest] = homeProjects
  const row1 = rest.slice(0, 2)
  const row2 = rest.slice(2, 4)

  return (
    <div className="fade-in">
      {/* Hero */}
      <Section className="pt-32 pb-20 md:pt-44 md:pb-32">
        <div className="max-w-[1100px]">
          <Reveal>
            <p className="t-body text-gray-50">
              Paid Ads&nbsp;&nbsp;·&nbsp;&nbsp;Product Growth&nbsp;·&nbsp;System Development
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="t-display mt-8 max-w-[1000px] text-ink">
              Discover the essence of Briggs, a Services Specialist.{' '}
              <span className="text-gray-50">
                Let’s shape your brand into a masterpiece together.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10">
              <Button href="/contact">Let’s collaborate</Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Featured project */}
      <Section className="pb-16">
        <Reveal>
          <ProjectCard project={featured} span />
        </Reveal>
      </Section>

      {/* Project grid row 1 */}
      <Section className="pb-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {row1.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Project grid row 2 */}
      <Section className="pb-32 pt-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2">
          {row2.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Designing Success */}
      <Section className="py-24 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>Designing Success</SectionLabel>
          </Reveal>
          <div className="flex flex-col items-start gap-8">
            <Reveal delay={120}>
              <p className="t-heading-l max-w-[800px] text-ink">
                See how we’ve turned ideas into reality. Dive into the stories of{' '}
                <span className="text-gray-50">
                  successful product designs that make a difference.
                </span>
              </p>
            </Reveal>
            <Reveal delay={240}>
              <Button href="/work" variant="secondary">
                Our Work
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section className="py-24 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
          </Reveal>
          <div className="flex flex-col">
            {services.map((s, i) => (
              <Reveal key={s} delay={i * 80}>
                <div className="flex items-center justify-between border-t border-gray-20 py-6 first:border-t-0">
                  <h3 className="t-heading-m text-ink">{s}</h3>
                  <ArrowDown className="text-gray-50" />
                </div>
              </Reveal>
            ))}
          </div>
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
                Explore our journey and learn what sets us apart in crafting impactful digital
                experiences.
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

      {/* Client logos */}
      <Section className="border-t border-gray-20 py-20 md:py-24">
        <Reveal>
          <div className="grid grid-cols-2 items-center gap-y-10 sm:grid-cols-3 md:grid-cols-5">
            {clients.map((c) => (
              <div
                key={c}
                className="t-heading-m text-center text-gray-30 transition-colors hover:text-gray-50"
              >
                {c}
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Bottom spacer before footer */}
      <div className="h-24" />
    </div>
  )
}
