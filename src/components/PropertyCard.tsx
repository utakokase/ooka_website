import { ButtonLink } from './ui/ButtonLink';
import type { PropertyData } from '../data/properties';

interface PropertyCardProps {
  property: PropertyData;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const preview = `${property.summary.split('。')[0] ?? property.summary}。`;

  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={property.heroImage}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-mist px-3 py-1 text-[11px] font-semibold tracking-wideish text-navy">
            {property.category}
          </span>
        </div>
        <h3 className="mt-4 min-h-[3.5rem] text-xl font-bold leading-snug text-ink">
          {property.title}
        </h3>
        <p className="mt-3 min-h-[5.25rem] text-sm leading-7 text-muted">{preview}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {property.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-stone px-3 py-1 text-[11px] font-medium text-muted"
            >
              {badge}
            </span>
          ))}
        </div>
        <ButtonLink className="mt-auto self-start pt-7" to={`/properties/${property.slug}`}>
          詳細を見る
        </ButtonLink>
      </div>
    </article>
  );
}
