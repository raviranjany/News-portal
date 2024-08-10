
const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"data-bs-theme="dark" >
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link"onClick={()=>setCategory("sports")} >Sports</div>
        </li>
        <li className="nav-item">
          <div class="nav-link"onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>

      </ul>


      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="News Search" aria-label="Search" />

        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar

