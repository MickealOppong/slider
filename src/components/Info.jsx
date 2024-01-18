const Info = ({ price, country, city, category, description }) => {
  return <div className="info">
    <p className="price">&#36;{price}</p>
    <span className="location"><i className="fa fa-map"></i>{country},{city}</span>
    <p className="category">{category}</p>
    <div className="content">
      <p className="desc">{description}</p>
    </div>
  </div>
}

export default Info;