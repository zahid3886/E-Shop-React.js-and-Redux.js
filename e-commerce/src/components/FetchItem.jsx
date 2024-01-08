import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { itemsAction } from "../store/itemsSlice";

const FetchItem = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(itemsAction.addInitialState(items));
      });

    return () => {
      controller.abort();
    };
  }, []);

  return <></>;
};
export default FetchItem;
