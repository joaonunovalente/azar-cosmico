import { siteConfig } from '@/config/site';
import { episodeHref, postHref, youtubeUrl, type Episode, type Post, type Video } from '@/lib/podcast';

const absolute = (path: string) => new URL(path, siteConfig.siteUrl).toString();

const person = {
  '@type': 'Person',
  '@id': absolute('/#person'),
  name: siteConfig.author.name,
  jobTitle: siteConfig.author.role,
  email: `mailto:${siteConfig.author.email}`,
  url: siteConfig.siteUrl,
  sameAs: siteConfig.socials.map((social) => social.href),
};

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@graph': [
    person,
    {
      '@type': 'PodcastSeries',
      '@id': absolute('/#podcast'),
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      author: { '@id': absolute('/#person') },
    },
    {
      '@type': 'WebSite',
      '@id': absolute('/#website'),
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
      author: { '@id': absolute('/#person') },
    },
  ],
});

export const profileSchema = (path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: absolute(path),
  inLanguage: siteConfig.language,
  mainEntity: person,
});

export const breadcrumbs = (items: { name: string; href: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absolute(item.href),
  })),
});

export const episodeSchema = (episode: Episode) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'PodcastEpisode',
      name: episode.data.title,
      description: episode.data.description,
      url: absolute(episodeHref(episode)),
      datePublished: episode.data.date,
      episodeNumber: episode.data.episodeNumber,
      timeRequired: episode.data.duration || undefined,
      image: episode.data.image || undefined,
      associatedMedia: {
        '@type': 'MediaObject',
        contentUrl: episode.data.audioUrl,
      },
      partOfSeries: { '@id': absolute('/#podcast') },
      author: { '@id': absolute('/#person') },
      inLanguage: siteConfig.language,
    },
    breadcrumbs([
      { name: 'Início', href: '/' },
      { name: 'Episódios', href: '/episodios/' },
      { name: episode.data.title, href: episodeHref(episode) },
    ]),
  ],
});

export const postSchema = (post: Post) => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BlogPosting',
      headline: post.data.title,
      description: post.data.description,
      url: absolute(postHref(post)),
      datePublished: post.data.date,
      image: post.data.image || undefined,
      author: { '@id': absolute('/#person') },
      inLanguage: siteConfig.language,
    },
    breadcrumbs([
      { name: 'Início', href: '/' },
      { name: 'Blog', href: '/blog/' },
      { name: post.data.title, href: postHref(post) },
    ]),
  ],
});

export const videoPageSchema = (video: Video) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: video.data.title,
  description: video.data.description,
  url: youtubeUrl(video.data.youtubeId),
  uploadDate: video.data.date,
  thumbnailUrl: video.data.thumbnail || undefined,
  author: { '@id': absolute('/#person') },
  inLanguage: siteConfig.language,
});
