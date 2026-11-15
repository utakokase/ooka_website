import { useState } from 'react';
import { SectionTitle } from '../components/page-parts';
import { PropertyCard } from '../components/PropertyCard';
import { publishedProperties, type PropertyKind } from '../data/properties';
import { usePageTitle } from '../hooks/usePageTitle';
import { useI18n } from '../i18n/context';
import { fmt } from '../i18n/format';

type Filter = 'all' | PropertyKind;

export function PropertiesPage() {
  const { t } = useI18n();
  usePageTitle(t.propertiesPage.title);
  const [filter, setFilter] = useState<Filter>('all');

  // 実際に物件がある種別だけボタンを出す
  const kinds = (['sale', 'rent', 'owned'] as const).filter((kind) =>
    publishedProperties.some((p) => p.kind === kind),
  );
  const filters: { value: Filter; label: string }[] = [
    { value: 'all', label: t.propertiesPage.filterAll },
    ...kinds.map((kind) => ({ value: kind, label: t.propertyKinds[kind] })),
  ];
  const visible =
    filter === 'all' ? publishedProperties : publishedProperties.filter((p) => p.kind === filter);

  return (
    <div className="container-page pt-8 pb-12">
      <SectionTitle as="h1" aside={fmt(t.home.listingsCount, { count: visible.length })}>
        {t.propertiesPage.title}
      </SectionTitle>
      <p className="mt-0 mb-4 text-sub">{t.propertiesPage.lead}</p>

      <div role="group" aria-label={t.propertiesPage.filterLabel} className="flex flex-wrap gap-2 mb-5">
        {filters.map((f) => {
          const active = f.value === filter;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.value)}
              className={`min-h-[44px] px-4 text-sm font-bold border ${
                active ? 'bg-brand border-brand text-white' : 'bg-white border-line text-brand hover:border-brand'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {visible.length > 0 ? (
        <div className="grid gap-[18px] grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
          {visible.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      ) : (
        <p className="text-muted">{t.propertiesPage.empty}</p>
      )}
    </div>
  );
}
