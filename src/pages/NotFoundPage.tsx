import { PageHero } from '../components/PageHero';
import { Section } from '../components/Section';
import { ButtonLink } from '../components/ui/ButtonLink';

export function NotFoundPage() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="ページが見つかりません"
        description="URLをご確認いただくか、トップページから目的の情報へお進みください。"
      />
      <Section>
        <div className="surface-card p-8 text-center">
          <p className="text-sm leading-7 text-muted">
            指定されたページは存在しないか、移動した可能性があります。
          </p>
          <ButtonLink className="mt-6" to="/">
            ホームへ戻る
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
