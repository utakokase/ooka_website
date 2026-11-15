import type { Property } from '../data/properties';
import { useI18n } from '../i18n/context';
import { LocaleLink } from './LocaleLink';
import { KindBadge, PhotoPlaceholder, PriceDisplay } from './property-parts';

export function PropertyCard({ property }: { property: Property }) {
  const { t } = useI18n();
  const text = t.properties[property.slug];
  const image = property.images[0];

  return (
    <LocaleLink
      to={property.pagePath ?? `/properties/${property.slug}`}
      className="group flex flex-col border border-line bg-white no-underline text-ink hover:text-ink hover:border-brand"
    >
      <div className="relative h-[170px] overflow-hidden">
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <PhotoPlaceholder className="w-full h-full" />
        )}
        <KindBadge kind={property.kind} className="absolute top-2 left-2" />
      </div>
      <div className="px-3.5 py-3 flex flex-col gap-1.5 flex-1">
        <h3 className="m-0 text-[15px] font-bold leading-snug group-hover:text-brand group-hover:underline">
          {text.title}
        </h3>
        <PriceDisplay property={property} />
        <ul className="m-0 p-0 list-none text-[13px] text-sub border-t border-dotted border-rule pt-1.5 mt-auto">
          {text.cardLines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </div>
    </LocaleLink>
  );
}
