module.exports = {
  images: false,
  fonts: false,
  static: true,
  svgSprite: false,
  ghPages: true,

  html: {
    // htmlmin: {}
  },

  stylesheets: {
    autoprefixer: {
      browsers: ['last 3 versions'],
    },
    sass: {
      // includePaths: ['./node_modules', 'node_modules'],
      outputStyle: 'compressed',
    },
  },

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ['./app.js'],
    },
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public',
    },
  },

  production: {
    rev: true,
  },
};
