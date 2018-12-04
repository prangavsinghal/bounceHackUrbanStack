import Approve from './Approve/approve.js'
import Upload from './Upload/upload.js'
import Search from './Search/search.js'
const routesConfig = [
  {
    path: "/",
    exact:true,
    component: Search
  },
  {
    path: "/upload",
    exact:true,
    component: Upload,
  },
  {
    path: "/Approve",
    exact:true,
    component: Approve,
  }
];

export default routesConfig;