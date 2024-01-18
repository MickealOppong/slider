const LeftButton = ({ onClick }) => {
  return <button className="left-btn btn" onClick={() => onClick()}><i className="fa fa-angle-left"></i></button>
}

export default LeftButton;