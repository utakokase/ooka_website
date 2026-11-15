import { useEffect } from 'react';
import { useI18n } from '../i18n/context';
import { fmt } from '../i18n/format';

/** ブラウザのタブに出るタイトルを設定します。title を省くとサイト既定のタイトルになります。 */
export function usePageTitle(title?: string) {
  const { t } = useI18n();
  useEffect(() => {
    document.title = title ? fmt(t.meta.titleTemplate, { page: title }) : t.meta.defaultTitle;
  }, [title, t]);
}
