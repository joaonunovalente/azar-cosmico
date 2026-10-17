export interface ChangelogEntry {
  /** Version label (e.g. `Versão 1`), shown above the date. */
  version: string;
  /** ISO date (`YYYY-MM-DD`), shown with `formatDate`. */
  date: string;
  title: string;
  text: string[] | string;
}

/** Newest first. Edit entries directly to publish site updates. */
export const changelog: ChangelogEntry[] = [
  {
    version: 'Versão 2',
    date: '2026-10-17',
    title: 'Novo site do Azar Cósmico',
    text: ['O Azar Cósmico apresenta um design mais moderno, preservando o conteúdo original.',
           'O website agora é totalmente responsivo, com suporte para temas claro e escuro. Apresenta também um novo logótipo e favicon, além de melhorias de acessibilidade.',
           'Foi removida a funcionalidade da newsletter e a página de Contacto. A página de Reviews foi substituída por um carrossel na homepage.',
           'Foram adicionadas as páginas de Política de Privacidade, Termos de Utilização e Registo de Alterações.',
          ],

  },
  {
    version: 'Versão 1',
    date: '2020-10-21',
    title: 'Lançamento do Azar Cósmico',
    text: 'O Azar Cósmico é lançado com páginas para episódios, blog e vídeos. É também possível ouvir os episódios diretamente no site e subscrever-se à newsletter.',
  },
];
