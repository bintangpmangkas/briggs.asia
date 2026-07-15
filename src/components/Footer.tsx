import { Link } from '@tanstack/react-router'
import { Button } from './Button'

const siteLinks = [
  { label: 'Home', to: '/' },
  { label: 'Work', to: '/work' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const socials = [
  { label: 'Twitter', href: 'https://twitter.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="t-body text-paper/60">Contact</p>
            <h2 className="t-display mt-4 text-paper">Let’s start creating together</h2>
            <div className="mt-8">
              <Button
                href="https://wa.me/6285175266601?text=Hi!%20I%20need%20Briggs%20to%20help%20my%20company%20growth"
                variant="onDark"
              >
                Let’s discuss
              </Button>
            </div>
          </div>

          <div className="flex gap-12 md:gap-16">
            <div className="flex flex-col gap-3">
              {siteLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="t-heading-xs text-paper/80 transition-colors hover:text-paper"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="t-heading-xs inline-flex items-center gap-1 text-paper/80 transition-colors hover:text-paper"
                >
                  {s.label}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path
                      d="M4 12L12 4M12 4H6M12 4V10"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/15 pt-8">
          <p className="t-body text-paper/50">2026 Briggs Asia · Jakarta, ID</p>
        </div>
      </div>
    </footer>
  )
}
