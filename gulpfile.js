/**
 * Created by wndwl on 2016/11/17.
 */
var gulp = require('gulp');
var del = require('del');
var usemin = require('gulp-usemin');
var rev = require('gulp-rev');
var uglify = require('gulp-uglify');

gulp.task('dist', function() {
    del('./dist').then(function () {
        //合并js、css
        (function () {
            return gulp.src('src/index.html')
                .pipe(usemin({
                    css : [rev()],
                    js : [rev()]
                }))
                .pipe(gulp.dest('dist/'));
        })();
        //转移views文件夹
        (function () {
            return gulp.src(['src/views/**/*.html'])
                .pipe(gulp.dest('dist/views'));
        })();
        //转移plugin文件夹
        (function () {
            return gulp.src(['src/plugin/**/*'])
                .pipe(gulp.dest('dist/plugin'));
        })();
        //转移图片
        (function () {
            return gulp.src(['src/image/**/*'])
                .pipe(gulp.dest('dist/image'))
        })();
        //转移指令
        (function () {
            return gulp.src(['src/components/*.html'])
                .pipe(gulp.dest('dist/components'))
        })()
    });
});