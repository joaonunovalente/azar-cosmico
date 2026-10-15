export interface ChangelogEntry {
  /** Version label (e.g. `Versão 1`), shown above the date. */
  version: string;
  /** ISO date (`YYYY-MM-DD`), shown with `formatDate`. */
  date: string;
  title: string;
  text: string;
}

/** Newest first. Edit entries directly to publish site updates. */
export const changelog: ChangelogEntry[] = [
  {
    version: 'Versão 2',
    date: '2026-10-15',
    title: 'Novo site do Azar Cósmico',
    text: 'O Azar Cósmico apresenta um design mais moderno, preservando o conteúdo original. Foi removida a funcionalidade da newsletter e as páginas de Reviews e Contacto.',
  },
  {
    version: 'Versão 1',
    date: '2020-10-21',
    title: 'Lançamento do Azar Cósmico',
    text: 'O Azar Cósmico é lançado com páginas para episódios, blog e vídeos. É também possível ouvir os episódios diretamente no site e subscrever-se à newsletter.',
  },
];
