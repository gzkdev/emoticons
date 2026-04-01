import { describe, it, expect } from 'vitest';
import {
  random,
  randomObject,
  getByTag,
  search,
  getAll,
  count,
} from '../src/index.js';

describe('Emoticons Library', () => {
  it('should return a random string', () => {
    const val = random();
    expect(val).toBeTypeOf('string');
    expect(val.length).toBeGreaterThan(0);
  });

  it('should return a random object', () => {
    const obj = randomObject();
    expect(obj).toHaveProperty('value');
    expect(obj.value).toBeTypeOf('string');
  });

  it('getAll should return the full array', () => {
    const all = getAll();
    expect(Array.isArray(all)).toBe(true);
    expect(all.length).toBeGreaterThan(100);
    expect(all.length).toBe(count);
  });

  it('search should find matching emoticons', () => {
    const results = search('face');
    // Assuming we have at least cool-ascii-faces that have 'face' in their tags/meaning
    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBeGreaterThan(0);

    // Test empty search
    expect(search('')).toEqual([]);

    // Test non-existent search
    expect(search('thisisastringthatwillnotbefoundatall')).toEqual([]);
  });

  it('getByTag should find exact tags', () => {
    const results = getByTag('face');
    expect(Array.isArray(results)).toBe(true);
    // Many emoticons should have the tag 'face'
    if (results.length > 0) {
      expect(results[0].tags).toContain('face');
    }
  });
});
