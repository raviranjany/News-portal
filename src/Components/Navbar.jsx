
const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary"data-bs-theme="dark" >
  <div className="container-fluid">
    <a className="navbar-brand" ><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("technology")}>Technology</div>
        </li>
        <li class="nav-item">
          <div class="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li class="nav-item">
          <div class="nav-link"onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li class="nav-item">
          <div class="nav-link"onClick={()=>setCategory("sports")} >Sports</div>
        </li>
        <li class="nav-item">
          <div class="nav-link"onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>

      </ul>


      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar
