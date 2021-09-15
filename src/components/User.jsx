import React from "react";

const User = ({ category, data }) => {
  return (
    <>
      <div className="container all_options_div mt-5">
        <p>This is {category} Div</p>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-11">
              <form>
                {/* field-no : 1 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputEmail1">Basic Amount</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                  <div className="form-group">
                    <label for="exampleInputEmail1 less">Less Amount</label>
                    <input
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
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input
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
                    <label for="exampleInputPassword1">Less amount</label>
                    <input
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
                    <input
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
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>
                </div>

                {/* field-no : 5 */}
                <div className="d-flex justify-content-between ">
                  <div className="form-group">
                    <label for="exampleInputPassword1">
                      Yearly providient fund
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input
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
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input
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
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less Amount</label>
                    <input
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

                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input
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
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input
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
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="0"
                    />
                  </div>

                  <div className="form-group">
                    <label for="exampleInputPassword1">Less amount</label>
                    <input
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
                    <td>300000</td>
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

export default User;
