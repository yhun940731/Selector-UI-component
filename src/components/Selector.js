import React, { useCallback, useState } from "react";
import "./Selector.scss";

export default function Selector({
  list,
  placeholder,
  selected,
  onChange,
  onSubmit,
}) {
  const [listRender, setListRender] = useState(false);
  const [item, setItem] = useState(null);

  const onClickBar = useCallback(() => {
    setListRender(!listRender);
  }, [listRender]);

  const onClickItem = (e) => {
    if (!e.target.nodeName == "LI") return;
    onSubmit(e.currentTarget.id);
    setListRender(false);
  };

  return (
    <div className="selector-container">
      <div className="selector-bar">
        <button className="selector-button" onClick={onClickBar}>
          <span className="selector-placeholder">
            {selected ? selected : placeholder}
          </span>
          <i className="selector-icon">^</i>
        </button>
      </div>
      {listRender ? (
        <div className="list-container">
          <div className="list">
            <ul className="items">
              {list.map((item, index) => {
                return (
                  <li
                    key={index}
                    id={item}
                    className="item"
                    onClick={onClickItem}
                  >
                    <button type="button" className="item-button">
                      <div>{item}</div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
