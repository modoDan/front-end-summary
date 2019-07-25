//1.引入gulp模块
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//2.定义默认任务
//合并js,css文件之后压缩代码
//js
function minifyjs(){
	//将你的任务的任务代码放在这
	return gulp.src('src/js/*.js') //操作的源文件
		.pipe(concat('built.js')) //合并到临时文件
		.pipe(gulp.dest('dist/js')) //生成到目标文件夹
		.pipe(rename({suffix:'.min'})) //重命名
		.pipe(uglify()) //压缩
		.pipe(gulp.dest('dist/js'));
}
gulp.task('minifyjs',minifyjs);
//3.异步执行
gulp.task('default',gulp.parallel(minifyjs)) ;
