import { createFileRoute } from '@tanstack/react-router'
import { ArrowUpRight } from '../components/Button'
import { Reveal, Section, SectionLabel } from '../components/Reveal'

export const Route = createFileRoute('/contact')({ component: Contact })

const socials = [
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

function Contact() {
  return (
    <div className="fade-in">
      <Section className="pt-32 pb-16 md:pt-44 md:pb-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: intro */}
          <div>
            <Reveal>
              <SectionLabel>Contact</SectionLabel>
            </Reveal>
            <Reveal delay={120}>
              <h1 className="t-display mt-6 text-ink">Get in touch</h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="t-heading-s mt-8 max-w-[460px] text-gray-70">
                Get in touch to learn more about Briggs and how we can help you achieve your
                business goals.
              </p>
            </Reveal>
          </div>

          {/* Right: contact info + socials */}
          <div className="flex flex-col gap-12 md:items-end md:text-right">
            <Reveal delay={120}>
              <div className="md:text-right">
                <p className="t-body text-gray-50">Get in touch</p>
                <a
                  href="mailto:info.briggsasia@gmail.com"
                  className="t-heading-xs mt-2 inline-flex items-center gap-1 text-ink transition-colors hover:text-gray-70 md:inline-flex"
                >
                  info.briggsasia@gmail.com
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="md:text-right">
                <p className="t-body text-gray-50">Phone</p>
                <p className="t-heading-xs mt-2 text-ink">+62 815 7526 6601</p>
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="md:text-right">
                <p className="t-body text-gray-50">Address</p>
                <p className="t-heading-xs mt-2 text-ink">Jakarta, ID</p>
              </div>
            </Reveal>

            <Reveal delay={360}>
              <div className="flex flex-col gap-3 md:items-end">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="t-heading-xs inline-flex items-center gap-1 text-ink transition-colors hover:text-gray-70"
                  >
                    {s.label}
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <div className="h-32" />
    </div>
  )
}
