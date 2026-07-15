import { createFileRoute } from '@tanstack/react-router'
import { Button } from '../components/Button'
import { Reveal, Section, SectionLabel } from '../components/Reveal'

export const Route = createFileRoute('/about')({ component: About })

const services = [
  {
    title: 'Branding',
    items: ['Logo Design', 'Brand Guidelines', 'Collateral Design', 'Rebranding Services'],
  },
  {
    title: 'UX & UI Design',
    items: [
      'User Research and Analysis',
      'Wireframing and Prototyping',
      'User Interface Design',
      'User Experience Testing',
      'Responsive Design Solutions',
    ],
  },
  {
    title: 'Motion & Animation',
    items: ['Motion Graphics Design', 'Animated Explainer Videos', 'Interactive Presentations'],
  },
  {
    title: 'Mobile',
    items: [
      'iOS App Development',
      'Android App Development',
      'App Prototyping and Testing',
      'App Maintenance and Updates',
    ],
  },
]

const steps = [
  {
    n: '01',
    title: 'Discover Needs',
    body: 'We delve deep into understanding your brand, target audience, and objectives, unraveling the insights that will shape our creative journey.',
  },
  {
    n: '02',
    title: 'Design Experience',
    body: 'Armed with insights, our design experts bring concepts to life, seamlessly blending aesthetics and functionality for a visually stunning and user-centric experience.',
  },
  {
    n: '03',
    title: 'Refine Feedback',
    body: 'We iterate tirelessly, refining our designs based on feedback, ensuring every pixel and interaction aligns perfectly with your brand identity and user expectations.',
  },
  {
    n: '04',
    title: 'Deliver Project',
    body: 'The culmination of our collaborative efforts results in the delivery of a polished, cohesive digital experience that not only meets but exceeds your expectations.',
  },
]

function About() {
  return (
    <div className="fade-in">
      {/* Intro */}
      <Section className="pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>About Us</SectionLabel>
          </Reveal>
          <div className="max-w-[1000px]">
            <Reveal delay={120}>
              <h1 className="t-display text-ink">
                Develop Your Growth With The{' '}
                <span className="text-gray-50">Us — The Services Specialists</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="t-heading-m mt-8 max-w-[760px] text-gray-70">
                We redefine possibility by combining imagination with precision to shape
                extraordinary experiences.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Two illustration cards */}
      <Section className="pb-20 md:pb-28">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal>
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[24px] bg-gray-5 p-8">
              <img
                src="https://framerusercontent.com/images/0h67TFuk7bDRVujjwt6jBREPseM.png"
                alt="Isometric phone illustration"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[24px] bg-gray-5 p-8">
              <img
                src="https://framerusercontent.com/images/V9HMLInOpxTvB6QtupCYzLvhzP4.png"
                alt="Isometric card illustration"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Our Mission */}
      <Section className="py-24 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>Our Mission</SectionLabel>
          </Reveal>
          <Reveal delay={120}>
            <p className="t-heading-l max-w-[860px] text-ink">
              We believe in the power of design to inspire and make a meaningful impact. We aim to
              transform ideas into captivating designs. We strive to bring creativity and
              functionality together,{' '}
              <span className="text-gray-50">
                crafting solutions that resonate with your audience.
              </span>
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Portfolio preview mockup */}
      <Section className="pb-20 md:pb-28">
        <Reveal>
          <div className="overflow-hidden rounded-[24px] bg-gray-5">
            <img
              src="https://framerusercontent.com/images/nkhzPF2aG9jHzZ0Tx12GETeVy0.png"
              alt="Portfolio preview"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </Section>

      {/* Services intro + list */}
      <Section className="py-24 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
          </Reveal>
          <div>
            <Reveal delay={120}>
              <p className="t-heading-l max-w-[860px] text-ink">
                Services are designed with simplicity and{' '}
                <span className="text-gray-50">effectiveness in mind.</span> We offer a
                comprehensive range of solutions tailored to meet your design needs.
              </p>
            </Reveal>
            <div className="mt-12 flex flex-col">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 80}>
                  <div className="grid grid-cols-1 gap-2 border-t border-gray-20 py-8 first:border-t-0 md:grid-cols-[260px_1fr]">
                    <h3 className="t-heading-m text-ink">{s.title}</h3>
                    <p className="t-body text-gray-70">{s.items.join(' / ')}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Secondary mockup */}
      <Section className="pb-20 md:pb-28">
        <Reveal>
          <div className="overflow-hidden rounded-[24px] bg-gray-5">
            <img
              src="https://framerusercontent.com/images/BlEy7dl8oyqbSUuKiwebIk72QA.png"
              alt="App mockups"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </Section>

      {/* How We Work */}
      <Section className="py-24 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[200px_1fr] md:gap-16">
          <Reveal>
            <SectionLabel>How We Work</SectionLabel>
          </Reveal>
          <div>
            <Reveal delay={120}>
              <p className="t-heading-l max-w-[860px] text-ink">
                Join us in exploring a digital creative process where{' '}
                <span className="text-gray-50">
                  simplicity enhances the beauty and efficacy
                </span>{' '}
                of every design endeavor.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="border-t border-gray-20 pt-6">
                    <p className="t-body text-gray-50">{s.n}</p>
                    <h3 className="t-heading-s mt-3 text-ink">{s.title}</h3>
                    <p className="t-body mt-3 max-w-[420px] text-gray-70">{s.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
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
    </div>
  )
}
