import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogPost = CollectionEntry<'blog'>;

/** Published posts only, newest first. */
export async function getPublishedPosts(): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Same format the prototype used: toLocaleDateString('ja-JP', { year:'numeric', month:'short', day:'numeric' }). */
export function formatDate(d: Date): string {
  return d.toLocaleDateString('ja-JP', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'Asia/Tokyo' });
}

/** Card excerpt: plain text from the Markdown body, 140 chars max (same rule as the prototype). */
export function excerpt(body: string | undefined): string {
  const t = (body || '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^(?:[-*•]|\d+\.)\s+/gm, '')
    .replace(/[*_`]+/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return t.length > 140 ? t.slice(0, 140).trim() + '…' : t;
}
