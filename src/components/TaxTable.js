
import { useEffect, useState } from "react";
import { taxConfig } from "../configData.js";


export const TaxTable = (props) => {
  const [taxArray, setTaxArray] = useState(taxConfig.taxRules.general);
  const [category,changeCategory] = useState(props.category)

  useEffect(() => {
    let taxArrayVar = [];

      category === "general"
      ? (taxArrayVar = taxConfig.taxRules.general)
      : category === "disabled"
      ? (taxArrayVar = taxConfig.taxRules.disabled)
      : category === "freedomFighters"
      ? (taxArrayVar = taxConfig.taxRules.freedomFighters)
      : (taxArrayVar = taxConfig.taxRules.oldAge);

    setTaxArray(taxArrayVar);
  }, [props,category]);

  // const changeCategory = (el)=>{
  //   let newCategory = el.target.value
  //   changeCategory(newCategory);
  // }

  return (
    <>
    <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label>Choose Category  </label>
                    <select
                      className="form-control"
                      type="number"
                      onChange={(ev)=>changeCategory(ev.target.value)}
                      defaultValue={props.category}
                    >
                      <option value="general">General</option>
                      <option value="oldAge">Female/OldAge(65+)</option>
                      <option value="freedomFighters">
                        Gazetted Freedom Fighters
                      </option>
                      <option value="disabled">Disabled</option>
                    </select>
                  </div>  
          </div>
 
    <div className="taxRule">
      <div className="table-responsive">
      <h3 className="salery_range">
        Tax Rules for{" "}
        {category === "oldAge"
          ? category + "/ Female"
          : category}
      </h3>
        <table className="table  table-bordered border-dark ">
          <thead>
            <tr>
              <th scope="col">Step</th>
              <th scope="col">amount</th>
              <th scope="col">Tax %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>first tk</th>
              <td>{taxArray[0]}</td>
              <td>0</td>
            </tr>
            <tr>
              <th>next tk</th>
              <td>{taxArray[1]}</td>
              <td>5</td>
            </tr>
            <tr>
              <th>next tk</th>
              <td>{taxArray[2]}</td>
              <td>10</td>
            </tr>
            <tr>
              <th>next tk</th>
              <td>{taxArray[3]}</td>
              <td>15</td>
            </tr>
            <tr>
              <th>next tk</th>
              <td>{taxArray[4]}</td>
              <td>20</td>
            </tr>
            <tr>
              <th>next tk</th>
              <td>rest of all</td>
              <td>25</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};
