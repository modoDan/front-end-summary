 import { cube } from './math'
 import './hello'
 import data from '../json/data.json'
 document.write("entry.js is work"+ '<br/>');
 document.write(cube(2) + '<br/>');
 document.write(JSON.stringify(data) + '<br/>')

 //正式使用Webpack编译js
 //webpack {entry file} -o {destination for bundled file}
 //如：webpack src/js/entry.js -o dist/bundle.js