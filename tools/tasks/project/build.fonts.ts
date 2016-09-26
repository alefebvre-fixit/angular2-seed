import * as gulp from 'gulp';
import Config from '../../config';

export = () => {
      console.log("Hello! I'm working on fonts ;)");
      console.log(Config.FONTS_SRC);
      console.log(Config.APP_DEST);

return gulp.src(Config.FONTS_SRC)
      .pipe(gulp.dest(Config.APP_DEST));
};