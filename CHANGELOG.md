# @gzkdev/emoticons

## 2.0.0

### Major Changes

- Add a stable `id` field on every emoticon (`emo-0` through `emo-n`), export `getById`, and extend `search` to match id and value as well as meaning and tags. **Breaking:** the `Emoticon` type now requires `id`.

  Include a Next.js docs app under `docs/` with a searchable landing page for the dataset.

## 1.0.0

### Major Changes

- 8165c8a: Promote library to v1 major release.

## 0.2.0

### Minor Changes

- a1aec66: Initial release of the emoticons library.
