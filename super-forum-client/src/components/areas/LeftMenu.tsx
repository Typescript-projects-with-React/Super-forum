import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import "./LeftMenu.css";
import Category from "../../models/Category";
import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import {AppState} from "../../store/AppState";
import {Simulate} from "react-dom/test-utils";





const LeftMenu = () => {
  const categoriesState = useSelector((state: AppState) =>state.categories);

  const { width } = useWindowDimensions();
  const [categories, setCategories] = useState<JSX.Element>(
    <div>Left Menu</div>
  );

  useEffect(() => {
    if (categoriesState) {
      console.log(categoriesState);
      const cats = categoriesState.map((cat: Category) => {
        return (
            <li key={cat.id}>
              <Link to={`/categorythreads/${cat.id}`}>{cat.name}</Link>
            </li>
        );
      });
      setCategories(<ul className="category">{cats}</ul>);
    }
  }, [categoriesState]);


  if (width <= 768) {
    return null;
  }
  return <div className="leftmenu">{categories}</div>;
};
export default LeftMenu;
