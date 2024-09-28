

 const Newsitems = ({title , description , src , url}) => {      //we have passed props in()
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px" , display: "flex", flexDirection: "column"}}>
  <img src={src} style={{height: "200px", width: "328px"}}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0, 50)}</h5>
    <p className="card-text">{description?description.slice(0, 90): "News can't be fetched completely due to technical error!" }</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>
  )
}

export default Newsitems
