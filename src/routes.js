import { About } from "./components/About"
import { Courses } from "./components/Courses"
import { Dashboard } from "./components/Dashboard"
import { Home } from "./components/Home"
import { MainCourse } from "./components/MainCourse"
import { Panel } from "./components/Panel"
import { PrivatePage } from "./components/PrivatePage"
import { Setting } from "./components/Setting"

let routes = [
    { path:"/",  element:<Home />},
   {  path:"/courses", element: <Courses />},
    { path:"/course/:id" , element:<MainCourse />},
    {path:"/about/*",  element:<About /> , children:[
        {path:"setting", element:<Setting />},
        {path:"dashboard", element:<Dashboard />}
    ]
},
{ path:"/*" , element:<PrivatePage />, children:[
    {path:"panel", element:<Panel />},

]},

]
export default routes