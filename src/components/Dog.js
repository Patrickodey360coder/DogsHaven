import React from 'react'
import { Link } from 'react-router-dom'

function Dog({id, name, bred_for, breed_group, life_span, temprament, origin, image}) {
  return (
      <div className="col">
        <div className="card shadow-sm">
          <img className="bd-placeholder-img card-img-top" width="100%" height="225"  src={image.url}  alt={name}/>
          <div className="card-body">
            <h5 className="card-text">{name}</h5>
            <p className="card-text">Breed: {breed_group}</p>
            <p className="card-text">Bred for: {bred_for}</p>
            <div className="d-flex justify-content-between align-items-center">
              <Link to={`/dogs/${id}`} className="btn btn-sm btn-outline-secondary">View</Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Dog
