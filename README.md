# Fart

<p align="center">
    <img src="https://user-images.githubusercontent.com/17317792/83329089-e69e3980-a2b9-11ea-9a4a-82d4080a3d76.png" alt="fart">
</p>

## Live @ https://rohangautam.github.io/fart/ !

## What it does

It syncs fart noises to syllables of words. Yep. A journey the text takes:

- It's typed by the user
- The fart button is pressed
- It get transformed into farts based on the syllables it has. For example, `hello you!` becomes `toot-toot toot!` (`hello` has two syllables, and `you` has one)

## Run:

1. `npm install`
2. `ng serve --open`

#### References

- In `node_modules/normalize_strings/index.js`, change `./charmap` to `./charmap.json`. It does feel sketchy to modify the source in the `node_modules` folder, but it's an [Active pull request](https://github.com/tehsis/normalize/pull/7/commits/4cde679f8549bac9e704e5ac79434179032d644d) and the library owner seems to have forgotten about it.

- [cut audio clips](https://clideo.com/cut-audio)
- [fart sound used](https://freesound.org/people/DSISStudios/sounds/241000/)
- [play audio](https://stackoverflow.com/a/47067623)
- Build : `ng build --prod --output-path docs --base-href "https://rohangautam.github.io/fart/"`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
