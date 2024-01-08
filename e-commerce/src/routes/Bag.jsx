import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const items = useSelector((store) => store.items);
  const bagItems = useSelector((store) => store.bag);
  const finalItem = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id);
    return itemIndex >= 0;
  });

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItem.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};
export default Bag;
