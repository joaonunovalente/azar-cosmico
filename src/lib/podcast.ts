import { getCollection, type CollectionEntry } from 'astro:content';

export type Episode = CollectionEntry<'episodes'>;
export type Post = CollectionEntry<'posts'>;
export type Video = CollectionEntry<'videos'>;
export type Review = CollectionEntry<'reviews'>;

export const episodesPageSize = 9;
export const postsPageSize = 9;
export const videosPageSize = 9;

export const episodeHref = (episode: Episode) => `/episodios/${episode.id}/`;
export const postHref = (post: Post) => `/blog/${post.id}/`;
export const episodesPageHref = (page: number) => (page <= 1 ? '/episodios/' : `/episodios/pagina/${page}/`);
export const postsPageHref = (page: number) => (page <= 1 ? '/blog/' : `/blog/pagina/${page}/`);
export const videosPageHref = (page: number) => (page <= 1 ? '/videos/' : `/videos/pagina/${page}/`);

/** All episodes, newest first. */
export async function getEpisodes() {
  const episodes = await getCollection('episodes');
  return episodes.sort((a, b) => +new Date(b.data.date) - +new Date(a.data.date));
}

/** All blog posts, newest first. */
export async function getPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => +new Date(b.data.date) - +new Date(a.data.date));
}

/** All video clips, newest first. */
export async function getVideos() {
  const videos = await getCollection('videos');
  return videos.sort((a, b) => +new Date(b.data.date) - +new Date(a.data.date));
}

/** All listener reviews, newest first. */
export async function getReviews() {
  const reviews = await getCollection('reviews');
  return reviews.sort((a, b) => +new Date(b.data.date) - +new Date(a.data.date));
}

const dateFormatter = new Intl.DateTimeFormat('pt-PT', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

/** "2022-08-21" -> "21 de agosto de 2022". Falls back to the raw string. */
export function formatDate(iso: string) {
  const time = Date.parse(`${iso}T00:00:00Z`);
  return Number.isNaN(time) ? iso : dateFormatter.format(new Date(time));
}

/** "PT13M32S" -> "13 min". Falls back to the raw string. */
export function formatDuration(iso: string) {
  const match = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(iso);
  if (!match) return iso;
  const hours = Number(match[1] ?? 0);
  const minutes = Number(match[2] ?? 0);
  if (hours > 0) return `${hours} h ${minutes} min`;
  return `${minutes} min`;
}

export const youtubeUrl = (youtubeId: string) => `https://www.youtube.com/watch?v=${youtubeId}`;
