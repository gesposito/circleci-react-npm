# Showcase featuring

CircleCI, React (storybook), NPM

## CircleCI

[![CircleCI](https://circleci.com/gh/gesposito/circleci-react-npm/tree/master.svg?style=svg&circle-token=50bea4e6922d63ef88b6c04087786c9f4ba9b30d)](https://circleci.com/gh/gesposito/circleci-react-npm/tree/master)

## [master](https://github.com/gesposito/circleci-react-npm/tree/master)

Push changes to `master` branch and CircleCI will kick in.

### GitHub Pages (Storybook from `stories/`)

Update GitHub Pages with CircleCI on push.

[circleci-react-npm](https://gesposito.github.io/circleci-react-npm/)

## [tags](https://github.com/gesposito/circleci-react-npm/releases)

Create a Git Tag (with a GitHub Release and changelog) through [release](https://github.com/zeit/release):

```
npx release patch
```
and CircleCI will kick in.

### NPM publish (library from `src/`)

Update NPM package with CircleCI on push to Git Tag.

[circleci-react-npm](https://www.npmjs.com/package/circleci-react-npm)

