export const contactEmail = 'ookagoudou@gmail.com';

export const createMailtoHref = (subject?: string) => {
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${contactEmail}${query}`;
};
