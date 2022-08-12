import stark from "../../../assets/images/stark.jpeg";
const ItemLeft = () => {
  return (
    <div className="left">
      <div className="edit">Edit</div>
      <h1 className="title">Information</h1>
      <div className="item">
        <img src={stark} className="itemImg" alt="Eddard Stark" />
        <div className="details">
          <h1 className="itemTitle">Ned Stark</h1>
          <div className="detailItem">
            <span className="itemKey">Email:</span>
            <span className="itemValue">ned.stark@gmail.com</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Phone:</span>
            <span className="itemValue">+1 5641 892 120</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Address:</span>
            <span className="itemValue">Elton St.361 Garden Yd.NewYork.</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Country:</span>
            <span className="itemValue">USA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemLeft;
