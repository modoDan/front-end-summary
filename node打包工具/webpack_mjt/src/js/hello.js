// CSS modules技术,相同的类名也不会造成不同组件之间的污染
import styles from '../css/style.css'
console.log(styles)
document.write(`<div id=${styles.box1}></div><div id=${styles.box2}></div>`);