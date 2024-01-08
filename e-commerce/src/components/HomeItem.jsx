import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispach = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;
  console.log(elementFound);

  const handleAddToBag = () => {
    dispach(bagAction.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispach(bagAction.removeFromBag(item.id));
  };

  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
          <button
            type="button"
            className="btn btn-danger btn-add-bag"
            onClick={handleRemoveFromBag}
          >
            <MdDelete /> Remove
          </button>
        ) : (
          <button
            type="button"
            className="btn btn-success btn-add-bag"
            onClick={handleAddToBag}
          >
            <IoMdAddCircle /> Add To Bag
          </button>
        )}
      </div>
    </>
  );
};
export default HomeItem;
