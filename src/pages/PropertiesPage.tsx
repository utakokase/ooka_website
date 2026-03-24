import { PageHero } from '../components/PageHero';
import { PropertyCard } from '../components/PropertyCard';
import { Section } from '../components/Section';
import { properties } from '../data/properties';

export function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Properties"
        title="物件情報"
        description="投資向け売買物件、実需にも適した賃貸戸建・賃貸マンションを掲載しています。詳細条件や内見のご相談は個別に承ります。"
      />
      <Section className="pt-8 sm:pt-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </Section>
    </>
  );
}
