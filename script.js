const offerList = [
  {
    id: 1,
    off: 30,
    price: "$18.00 USD",
    buyGet: "Buy 1 Get 2",
    isPopular: false,
  },

  {
    id: 2,
    off: 30,
    price: "$24.00 USD",
    buyGet: "Buy 2 Get 4",
    isPopular: true,
  },
  {
    id: 3,
    off: 10,
    price: "$36.00 USD",
    buyGet: "Buy 3 Get 6",
    isPopular: false,
  },
];
sizes = ["S", "M", "XL", "XXL"];
colors = ["black", "red", "blue", "orange"];

let sizeHtml = "";
for (let s of sizes) {
  sizeHtml += `<option value="${s}">${s}</option>`;
}
let colorHtml = "";
for (let c of colors) {
  colorHtml += `<option value="${c}">${c}</option>`;
}
const offers = document.getElementById("offerList");
function offerUpdate(checkedId) {
  let offerHtml = "";
  offers.innerHTML = "";

  for (let offer of offerList) {
    if (offer.id == checkedId) {
      offerHtml += `<div class="card">
                      <div class="d-flex">
                          <div class="me-3">
                              <input type="radio" name="offer" checked>
                          </div>
                          <div>
                              <div>
                                  <span>${offer.buyGet}</span>
                                  <span class="card-off">${
                                    offer.off
                                  }% Off</span>
                              </div>
                              <div>
                                  <span class="fw-bolder">${offer.price}</span>
                                  <del class="del-price">$10.00 USD </del>
                              </div>
                          </div>
                          <div class="popular-offer text-red-1 ms-5">${
                            offer.isPopular ? "Most Popular" : ""
                          }
                              </div>
                      </div>
                      <div class="ms-3">
                          <table>
                              <tr>
                                  <td></td>
                                  <td>Size</td>
                                  <td>Colour</td>
                              </tr>
                              <tr>
                                  <td>#1</td>
                                  <td> <select class="form-select form-select-sm">${sizeHtml}</select> </td>
                                  <td> <select class="form-select form-select-sm">${colorHtml}</select> </td>
                              </tr>
                              <tr>
                                  <td>#2</td>
                                   <td> <select class="form-select form-select-sm">${sizeHtml}</select> </td>
                                  <td> <select class="form-select form-select-sm">${colorHtml}</select> </td>
                              </tr>
                          </table>
                      </div>
                  </div>`;
    } else {
      offerHtml += `   <div class="offer mt-3 mb-3 d-flex" onclick="checkHandler(${
        offer.id
      })">
                          <div class="off-price">
                              <div>
                                  <div>${offer.off}%</div>
                                  <div>Off</div>
                              </div>
                          </div>
                          <div class="des-price">
                              <div class="d-flex" >
                                  <div class="ms-3 me-3 des-price-radio">
                                      <input type="radio" name="offer" value="${
                                        offer.id
                                      }" >
                                  </div>
                                  <div class="d-flex justify-content-center align-items-center">
                                      <div>
                                          <span>${offer.buyGet}</span>
                                          <div class="price">
                                              <b>${offer.price}</b>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="popular-offer text-red-1">${
                                offer.isPopular ? "Most Popular" : ""
                              }
                              </div>
                          </div>
                      </div>`;
    }
  }
  offers.innerHTML = offerHtml;
}
offerUpdate(offerList.length);

function checkHandler(id) {
  offerUpdate(id);
}
