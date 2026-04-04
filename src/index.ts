import { emoticons, Emoticon } from './data.js';

export type { Emoticon };

/**
 * Number of available emoticons
 */
export const count: number = emoticons.length;

/**
 * Returns a random emoticon string value.
 * @returns string
 */
export function random(): string {
  return randomObject().value;
}

/**
 * Returns a random emoticon object containing its value, meaning, and tags.
 * @returns Emoticon
 */
export function randomObject(): Emoticon {
  const index = Math.floor(Math.random() * emoticons.length);
  const result = emoticons[index];
  if (!result) {
    return emoticons[0]; // fallback
  }
  return result;
}

/**
 * Returns an array of emoticons containing a specific exact tag.
 * @param tag Search string (e.g. "happy")
 * @returns Emoticon[]
 */
export function getByTag(tag: string): Emoticon[] {
  const searchTag = tag.trim().toLowerCase();
  return emoticons.filter((e) => e.tags && e.tags.includes(searchTag));
}

/**
 * Performs a search across id, value, tags, and meaning text.
 * @param query Search query text
 * @returns Emoticon[]
 */
export function search(query: string): Emoticon[] {
  const cleanQuery = query.trim().toLowerCase();
  if (!cleanQuery) return [];

  return emoticons.filter((e) => {
    if (e.id.toLowerCase().includes(cleanQuery)) {
      return true;
    }
    if (e.value.toLowerCase().includes(cleanQuery)) {
      return true;
    }
    if (e.meaning && e.meaning.toLowerCase().includes(cleanQuery)) {
      return true;
    }
    if (e.tags && e.tags.some((t) => t.includes(cleanQuery))) {
      return true;
    }
    return false;
  });
}

/**
 * Returns a single emoticon by its package id (e.g. "emo-0"), or undefined.
 */
export function getById(id: string): Emoticon | undefined {
  const trimmed = id.trim();
  return emoticons.find((e) => e.id === trimmed);
}

/**
 * Returns the entire static dataset of emoticons.
 * @returns Emoticon[]
 */
export function getAll(): Emoticon[] {
  return emoticons;
}
