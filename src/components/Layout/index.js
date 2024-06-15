import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        {/* Visual representation of opening HTML and body tags */}
        <span className="tags top-tags">
          &lt;html&gt;<br />&lt;body&gt;
        </span>

        {/* Your main content outlet */}
        <Outlet />

        {/* Visual representation of closing body and HTML tags */}
        <span className="tags bottom-tags">
           &lt;/body&gt;<br />
          &lt;/html&gt;
        </span>
      </div>
    </div>
  )
}

export default Layout