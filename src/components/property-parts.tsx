import type { Property, PropertyKind } from '../data/properties';
import { useI18n } from '../i18n/context';
import { formatPrice } from '../i18n/format';

const kindColors: Record<PropertyKind, string> = {
  sale: 'bg-accent',
  rent: 'bg-rent',
  owned: 'bg-owned',
};

/** 「売買」「賃貸」などの小さなラベル */
export function KindBadge({ kind, className = '' }: { kind: PropertyKind; className?: string }) {
  const { t } = useI18n();
  return (
    <span className={`inline-block text-white text-xs font-bold px-2 py-0.5 ${kindColors[kind]} ${className}`}>
      {t.propertyKinds[kind]}
    </span>
  );
}

/** 写真がまだない物件の枠 */
export function PhotoPlaceholder({ className = '' }: { className?: string }) {
  const { t } = useI18n();
  return (
    <div className={`bg-placeholder text-placeholder-text text-[13px] flex items-center justify-center ${className}`}>
      {t.common.photoComingSoon}
    </div>
  );
}

/** 価格（数字を大きく）、または「お問い合わせください」 */
export function PriceDisplay({ property, size = 'md' }: { property: Property; size?: 'md' | 'lg' }) {
  const { t, locale } = useI18n();
  const text = t.properties[property.slug];
  const color = property.kind === 'sale' ? 'text-accent' : property.kind === 'rent' ? 'text-rent' : 'text-owned';

  if (property.priceYen === null) {
    return (
      <div className={`font-bold ${color} ${size === 'lg' ? 'text-xl' : 'text-[17px]'} leading-snug`}>
        {text.priceText ?? t.common.priceOnRequest}
      </div>
    );
  }

  const price = formatPrice(locale, property.priceYen);
  return (
    <div className={`font-bold ${color} leading-tight`}>
      <span className={size === 'lg' ? 'text-2xl' : 'text-lg'}>{price.prefix}</span>
      <span className={size === 'lg' ? 'text-[34px]' : 'text-2xl'}>{price.amount}</span>
      <span className="text-sm ml-0.5">{price.suffix}</span>
    </div>
  );
}
