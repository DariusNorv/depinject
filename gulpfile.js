var gulp = require('gulp');
var gulpDocumentation = require('gulp-documentation')

gulp.task('doc', () => {
	return gulp.src('./app/index.js')
		.pipe(gulpDocumentation('md', {
			filename: 'README.md'
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('default', ['doc'])
