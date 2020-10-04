import ReactDOM from 'react-dom'
import { Test } from "src/Test";

window.addEventListener('load', () => {
	ReactDOM.hydrate(<Test />, document.getElementById('root'))
})
