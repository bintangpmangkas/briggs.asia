import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { NotFoundView } from '../components/NotFoundView'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Briggs — Services Specialist' },
      { name: 'description', content: 'Discover the essence of Briggs, a Services Specialist. Let’s shape your brand into a masterpiece together.' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: '' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Host+Grotesk:ital,wght@0,300..700;1,300..700&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: NotFoundView,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
