(function () {
  const customerImage = document.querySelector("#customer-img");
  const customerName = document.querySelector("#customer-name");
  const customerText = document.querySelector("#customer-text");

  const btn = document.querySelectorAll(".btn");
  let index = 0;
  const customers = [];

  function Customer(img, name, text) {
    this.img = img;
    this.name = name;
    this.text = text;
  }

  function createCustomer(img, name, text) {
    let Img = `./img/${img}.jpg`;
    let customer = new Customer(Img, name, text);

    customers.push(customer);
  }

  createCustomer(
    0,
    "Abhishek",
    " Abhishek is a web developer and he want a built carrer in web development and want to join a mnc company. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni inventore itaque blanditiis aperiam est consectetur commodi sunt ut praesentium autem."
  );

  createCustomer(
    1,
    "Badal Singh",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni inventore itaque blanditiis aperiam est consectetur commodi sunt ut praesentium autem."
  );

  createCustomer(
    2,
    "Metronaut",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni inventore itaque blanditiis aperiam est consectetur commodi sunt ut praesentium autem."
  );

  createCustomer(
    3,
    "Alena",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni inventore itaque blanditiis aperiam est consectetur commodi sunt ut praesentium autem."
  );

  createCustomer(
    4,
    "TejBhadur",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni inventore itaque blanditiis aperiam est consectetur commodi sunt ut praesentium autem."
  );

  btn.forEach(function (button) {
    button,
      addEventListener("click", function (e) {
        if (e.target.parentElement.classList.contains("prevBtn")) {
          if (index === 0) {
            index = customers.length;
          }

          index--;
          customerImage.src = customers[index].img;
          customerName.textContent = customers[index].name;
          customerText.textContent = customers[index].text;
        }

        if (e.target.parentElement.classList.contains("nextBtn")) {
          index++;
          if (index === customers.length) {
            index = 0;
          }

          customerImage.src = customers[index].img;
          customerName.textContent = customers[index].name;
          customerText.textContent = customers[index].text;
        }
      });
  });
})();
