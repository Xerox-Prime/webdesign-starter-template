import postcssPresetEnv from 'postcss-preset-env';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [
    autoprefixer,
    postcssPresetEnv({
      stage: 2,
      //browsers: 'last 3 versions',
    }),
  ],
};
