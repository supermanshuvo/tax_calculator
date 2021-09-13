import { useReducer,useCallback,useEffect,useState} from "react"
import { useForm } from "react-hook-form";

export const InComeDetails = (props) => {
  // const inComeDetailsInit = {
  //   basicmAmount: 0,
  //   basiclAmount: 0,
  //   housingmAmount: 0,
  //   housinglAmount: 0,
  //   medicalmAmount: 0,
  //   medicallAmount: 0,
  //   conveyancemAmount: 0,
  //   conveyancelAmount: 0,
  //   livingmAmount: 0,
  //   livinglAmount: 0,
  //   providentFundyAmount: 0,
  //   providentFundlAmount: 0,
  //   bonusyAmount: 0,
  //   bonuslAmount: 0,
  //   specialAmountmAmount: 0,
  //   specialAmountlAmount: 0,
  //   othersmAmount: 0,
  //   otherslAmount: 0,
  // };
  // const reducerFunc = (state, newState) => ({ ...state, ...newState });
  // const [totalTaxableIncome, setTotalTaxableIncome] = useState(0);
  // const { handleSubmit, register } = useForm();

  // const [inComeDetailsState, setIncomeDetails] = useReducer(
  //   reducerFunc,
  //   inComeDetailsInit
  // );
  // const specialYoccurrance = 6,
  //   othersYoccurrance = 2;

  // const calculateTaxable = (mAmount, lAmount, yOccurrance = 12) => {
  //   const value =
  //     mAmount * yOccurrance - lAmount > 0 ? mAmount * yOccurrance - lAmount : 0;
  //   return value;
  // };

  // const calculateTaxableIncome = () => {
  //   const totalTaxable =
  //     calculateTaxable(
  //       inComeDetailsState.basicmAmount,
  //       inComeDetailsState.basiclAmount
  //     ) +
  //     calculateTaxable(
  //       inComeDetailsState.housingmAmount,
  //       inComeDetailsState.housinglAmount
  //     ) +
  //     calculateTaxable(
  //       inComeDetailsState.medicalmAmount,
  //       inComeDetailsState.medicallAmount
  //     ) +
  //     calculateTaxable(
  //       inComeDetailsState.conveyancemAmount,
  //       inComeDetailsState.conveyancelAmount
  //     ) +
  //     calculateTaxable(
  //       inComeDetailsState.livingmAmount,
  //       inComeDetailsState.livinglAmount
  //     ) +
  //     calculateTaxable(
  //       inComeDetailsState.providentFundyAmount,
  //       inComeDetailsState.providentFundlAmount,
  //       1
  //     ) +
  //     calculateTaxable(
  //       inComeDetailsState.bonusyAmount,
  //       inComeDetailsState.bonuslAmount,
  //       1
  //     ) +
  //     calculateTaxable(
  //       inComeDetailsState.specialAmountmAmount,
  //       inComeDetailsState.specialAmountlAmount,
  //       specialYoccurrance
  //     ) +
  //     calculateTaxable(
  //       inComeDetailsState.othersmAmount,
  //       inComeDetailsState.otherslAmount,
  //       othersYoccurrance
  //     );
  //   return totalTaxable;
  // };

  // useEffect(() => {
  //   setTotalTaxableIncome(calculateTaxableIncome());
  // });

  // const handleChange = (evnt) => {
  //   const name = evnt.target.name;
  //   const newValue = Number(evnt.target.value);
  //   setIncomeDetails({ [name]: newValue });
  //   //calculateTaxableIncome()
  // };
  const { handleSubmit, register } = useForm();

  const handleFormData = (formData) => {
    props.handleStates(formData, true, props.category);
  }
      
return (
    <>
      <div className="container all_options_div mt-5">
        <p>This is {props.category} Div</p>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-11">
              <form onSubmit={handleSubmit(handleFormData)}>
                {/* field-no : 1 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Basic Amount</label>
                    <input {...register("basicAmount")}
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1 less">Less Amount</label>
                    <input {...register("basicLAmount")}
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* field-no : 2 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputPassword1">Housing amount</label>
                    <input {...register("housingAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input {...register("housingLAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* field-no : 3 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputPassword1">Medical amount</label>
                    <input {...register("medicalAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">
                      medical Less amount
                    </label>
                    <input {...register("medicalLAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* field-no : 4 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputPassword1">living amount</label>
                    <input {...register("livingAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input {...register("LivingLAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                </div>

                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputPassword1">
                      Yearly Conveyance
                    </label>
                    <input {...register("conveyanceAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"/>
                    </div>

                    <div className="form-group">
                      <label for="exampleInputPassword1">Less amount</label>
                      <input {...register("ConveyanceLAmount")}
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="0"/>
                    </div>
                    </div>

                {/* field-no : 5 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputPassword1">
                      Yearly providient fund
                    </label>
                    <input {...register("pfAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input {...register("pfLAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* field-no : 7 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputPassword1">Yearly bonus</label>
                    <input {...register("bonusAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input {...register("bonusLAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* field-no : 8 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputPassword1">special Amount</label>
                    <input {...register("specialAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less Amount</label>
                    <input {...register("specialLAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* field-no : 9 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputPassword1">Car maintainence</label>

                    <input {...register("carMAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input {...register("carLAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* field-no : 10 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputPassword1">others</label>
                    <input {...register("othersAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input {...register("othersLAmount")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* field-no : 6 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputPassword1">provedient month</label>
                    <input {...register("pvMonths")}
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-4 col-11">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">amount</th>
                    <th scope="col">Tax %</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">first tk</th>
                    <td>{props.firstAmount}</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <th scope="row">next tk</th>
                    <td>100000</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <th scope="row">next tk</th>
                    <td>300000</td>
                    <td>10</td>
                  </tr>
                  <tr>
                    <th scope="row">next tk</th>
                    <td>400000</td>
                    <td>15</td>
                  </tr>
                  <tr>
                    <th scope="row">next tk</th>
                    <td>500000</td>
                    <td>20</td>
                  </tr>
                  <tr>
                    <th scope="row">next tk</th>
                    <td>rest of all</td>
                    <td>25</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
