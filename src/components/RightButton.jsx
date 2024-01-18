const RightButton = ({ onClick }) => {
  return <button className="right-btn btn" onClick={() => onClick()}><i className="fa fa-angle-right"></i></button>
}

export default RightButton;