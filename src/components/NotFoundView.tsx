import { Button } from './Button'
import { Reveal, Section } from './Reveal'

export function NotFoundView() {
  return (
    <div className="fade-in">
      <Section className="flex min-h-[60vh] flex-col justify-center py-32">
        <Reveal>
          <h1 className="t-display max-w-[1000px] text-ink">
            Oops. It looks like the page you’re trying to reach{' '}
            <span className="text-gray-50">doesn’t exist</span> or has been moved.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-10">
            <Button href="/">Go to home</Button>
          </div>
        </Reveal>
      </Section>
    </div>
  )
}
