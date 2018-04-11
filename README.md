# Showcase featuring

CircleCI, React (storybook), NPM

## CircleCI

[![CircleCI](https://circleci.com/gh/gesposito/circleci-react-npm.svg?style=svg)](https://circleci.com/gh/gesposito/circleci-react-npm)

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

