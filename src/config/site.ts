export interface NavLink {
  label: string;
  href: string;
}

export const siteConfig = {
  name: 'Azar Cósmico',
  title: 'Azar Cósmico — podcast de comédia, improviso e cultura de João Guilherme Matos',
  description:
    'Azar Cósmico é um podcast onde João Guilherme Matos funde entretenimento e cultura, abordando tópicos com um estilo muito próprio e conversando com convidados num registo descontraído. Novos episódios aos domingos, quinzenalmente.',
  siteUrl: 'https://www.azarcosmico.com',
  language: 'pt',
  locale: 'pt_PT',
  dateLocale: 'pt-PT',
  socialImage: '/og-image.png',

  author: {
    name: 'João Guilherme Matos',
    href: 'https://joaoguilhermematos.com',
    role: 'Criador e anfitrião do Azar Cósmico',
    location: 'Portugal',
    email: 'joguimatos@gmail.com',
  },

  developer: {
    name: 'Valente',
    href: 'https://joaonunovalente.com',
  },

  /** The pill above the homepage headline. Set `enabled: false` to remove it. */
  availability: {
    enabled: true,
    label: 'Episódios quinzenais aos domingos',
  },

  /** The button at the end of the header and in the mobile menu. */
  action: { label: 'Ouvir agora', href: '/ouvir/' },

  socials: [
    { label: 'Spotify', href: 'https://open.spotify.com/show/3raId5U6ZI0gecgoVNCONS' },
    { label: 'Apple', href: 'https://podcasts.apple.com/pt/podcast/id1526008257?mt=2&ls=1' },
    { label: 'YouTube', href: 'https://youtube.com/@JoaoGuilhermeMatos' },
    { label: 'Instagram', href: 'https://www.instagram.com/azarcosmicopodcast/' },
  ] satisfies NavLink[],
};

export const navigation: NavLink[] = [
  { label: 'Episódios', href: '/episodios/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Vídeos', href: '/videos/' },
  { label: 'Sobre', href: '/sobre/' },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacidade', href: '/privacidade/' },
  { label: 'Termos', href: '/termos/' },
  { label: 'Registo de Alterações', href: '/registo-de-alteracoes/' },
  { label: 'Código-fonte', href: 'https://github.com/joaonunovalente/azar-cosmico' },
];
