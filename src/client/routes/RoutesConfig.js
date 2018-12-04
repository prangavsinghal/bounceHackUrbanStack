import Approve from './Approve/approve.js'
import Upload from './Upload/upload.js'
import Search from './Search/search.js'
const routesConfig = [
  {
    path: "/",
    show:true,
    exact:true,
    component: Search
  },
  {
    path: "/upload",
    show:true,
    exact:true,
    component: Upload,
  },
  {
    path: "/Approve",
    show:true,
    exact:true,
    component: Approve,
  }
];

export default routesConfig;