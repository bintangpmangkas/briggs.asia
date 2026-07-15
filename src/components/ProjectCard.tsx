import { Link } from '@tanstack/react-router'
import type { Project } from '../data/projects'

export function ProjectCard({
  project,
  span = false,
}: {
  project: Project
  span?: boolean
}) {
  return (
    <Link
      to="/work/$slug"
      params={{ slug: project.slug }}
      className="group block"
    >
      <div
        className={`relative overflow-hidden rounded-[24px] bg-gray-5 ${
          span ? 'aspect-[16/9]' : 'aspect-[4/3]'
        }`}
      >
        <img
          src={project.mainImage}
          alt={project.thumbnailTitle}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <div>
          <p className="t-body text-gray-50">{project.client}</p>
          <h3 className="t-heading-s mt-1 text-ink">{project.thumbnailTitle}</h3>
        </div>
      </div>
    </Link>
  )
}
