const byLabel: Record<string, string> = {
  Spotify: 'social-spotify',
  Apple: 'social-apple',
  YouTube: 'social-youtube',
  RSS: 'social-rss',
  Instagram: 'social-instagram',
  Facebook: 'social-facebook',
  Twitch: 'social-twitch',
  LinkedIn: 'social-linkedin',
  X: 'social-twitter-x',
};

export const socialIcon = (label: string) => byLabel[label] ?? 'arrow-up-right';
