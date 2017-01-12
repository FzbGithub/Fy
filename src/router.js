/**
 * Created by sks on 2017/1/6.
 */
import Main from "./components/main.vue";
const Foo= {
    template:"<div>Foo tempplate</div>"
};
const Bar= {
    template:"<div>Bar template</div>"
};

const routes= [
    {path:'/main', component: Main},
    {path:'/foo',component:Foo},
    {path:'/bar',component:Bar}
];

export default routes;