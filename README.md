# Showcase featuring

CircleCI, React (Storybook), NPM

## CircleCI

[![CircleCI](https://circleci.com/gh/gesposito/circleci-react-npm/tree/master.svg?style=svg&circle-token=50bea4e6922d63ef88b6c04087786c9f4ba9b30d)](https://circleci.com/gh/gesposito/circleci-react-npm/tree/master)

## [master](https://github.com/gesposito/circleci-react-npm/tree/master)

Push changes to `master` branch and CircleCI will kick in.

### GitHub Pages (Storybook from `stories/`)

CircleCI updates GitHub Pages on push.

[circleci-react-npm](https://gesposito.github.io/circleci-react-npm/)

## [tags](https://github.com/gesposito/circleci-react-npm/releases)

Create a Git Tag (with a GitHub Release and changelog) through [release](https://github.com/zeit/release):

```sh
npx release patch
```
and CircleCI will kick in.

### GitHub Release assets (from `dist/`)

CircleCI uploads library build output to GitHub Release (Git Tag) on push to Git Tag.

[tag/0.0.16](https://github.com/gesposito/circleci-react-npm/releases/tag/0.0.16)

### NPM publish (library from `src/`)

CircleCI publishes NPM package on push to Git Tag.

[circleci-react-npm](https://www.npmjs.com/package/circleci-react-npm)

