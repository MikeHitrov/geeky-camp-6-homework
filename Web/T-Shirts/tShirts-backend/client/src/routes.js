import Home from './components/Home'
import Edit from './components/Edit';


export default [
    { path: '/', exact: true, component: Home },
    { path: '/edit', component: Edit}
];