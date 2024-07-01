import './style.css'
import javascriptLogo from './javascript.svg'
import {BreakingBadComponent} from './src/breaking-bad/BreakingBadComponent'
import { UserAppComponent } from './src/users/UserAppComponent';

document.querySelector('#app').innerHTML = `
  <div>
 
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    
  </div>
`
const element = document.querySelector('.card');

//BreakingBadComponent(element);
UserAppComponent(element)
