# Cycle Track todo-app

Based on Preact and [Parcel Bundler].

## What's inside?

* `preact`
* `parcel-bundler`

> DON'T FORGET about safe write in ide [https://en.parceljs.org/hmr.html#safe-write](https://en.parceljs.org/hmr.html#safe-write) DOH!

### Setup

```
npm i
```

### Usage

#### Run it

Use following command and open `http://localhost:1337`. When you edit `index.js` and save your changes. Parcel will automatically rebuild all files
```
npm start
```

#### Building for Production

Use following command when you want to compile your JS and copy your `index.html` to the `dist` folder you can then deploy.

```
npm run build
```

#### Unit testing

Use following command when you want to compile your JS and copy your `index.html` to the `dist` folder you can then deploy.

```
npm run test
```


### Notes

#### HTML

If you want to move `index.html`, make sure to update the `start` and `build` npm scripts in `package.json` with the new relative path to the file.

#### CSS

[Parcel uses PostCSS plugins to manage CSS assets](https://parceljs.org/transforms.html#postcss). You can find and modify PostCSS configuration by editing `.postcssrc` file.

#### Deployment

Keep in mind that Parcel builds the app into a `dist` directory. 
If you want to change the destination for build, add `--out-dir build` to both `start` and `build` npm tasks in `package.json`.

### License

MIT idudiq 2018

<!-- Links -->
[PostCSS]: http://postcss.org/
[Parcel Bundler]: https://parceljs.org
[repository]: https://github.com/facebookincubator/create-react-app
