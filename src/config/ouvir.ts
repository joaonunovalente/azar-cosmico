import type { NavLink } from '@/config/site';

export const listen = {
  eyebrow: 'Subscrever',
  title: 'Ouve onde',
  highlight: 'quiseres.',
  text: 'O Azar Cósmico está nas plataformas habituais. Escolhe a tua favorita e subscreve para receberes os novos episódios aos domingos, quinzenalmente.',
};

export const platforms = [
  {
    label: 'Spotify',
    text: 'Streaming e download de todos os episódios.',
    href: 'https://open.spotify.com/show/3raId5U6ZI0gecgoVNCONS',
  },
  {
    label: 'Apple',
    text: 'Subscreve e avalia na app Podcasts da Apple.',
    href: 'https://podcasts.apple.com/pt/podcast/id1526008257?mt=2&ls=1',
  },
  {
    label: 'YouTube',
    text: 'Clips das conversas e sketches em vídeo.',
    href: 'https://youtube.com/@JoaoGuilhermeMatos',
  },
  {
    label: 'RSS',
    text: 'Feed direto para qualquer leitor de podcasts.',
    href: 'https://feeds.redcircle.com/4f697fc3-0312-4b1e-a8ef-9ddb47e3ea1e',
  },
] satisfies (NavLink & { text: string })[];

export const elsewhere = [
  { label: 'Instagram', href: 'https://www.instagram.com/azarcosmicopodcast/' },
  { label: 'Facebook', href: 'https://www.facebook.com/joguimatos' },
  { label: 'X', href: 'https://twitter.com/mr_jmatos' },
  { label: 'Twitch', href: 'https://www.twitch.tv/joaoguilhermematos_' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joaoguilhermematos/' },
] satisfies NavLink[];
