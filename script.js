const getAllElements = document.getElementById("get_all_elements");
const clearBtn = document.getElementById("clear_btn");
const callHistory = document.getElementById("call_history");

let heard = 1;
let copy = 1;

for (element of getAllElements.children) {
  const cartHeartIcon = element.querySelector(".flex .fa-heart");
  const copyBtn = element.querySelector(".btn-neutral");
  const hotlineNumber = element.querySelector(".shadow-sm .text-4xl");
  const callBtn = element.querySelector(".shadow-sm .btn-success");
  const coinCount = document.getElementById("coin_count");
  const hotlineTitle = element.querySelector(".hotline_title");
  const holineNumber = element.querySelector(".hotline_number");

  // heder hart count
  cartHeartIcon.addEventListener("click", function () {
    return (document.getElementById("header_heart_count").innerText = heard++);
  });

  // call event
  callBtn.addEventListener("click", function () {
    if (coinCount.innerText <= 0) {
      alert(`❌ You don't have coins so you can't make calls.`);
      return;
    }

    document.getElementById("coin_count").innerText =
      Number(coinCount.innerText) - 20;
    const callHistory = document.getElementById("call_history");

    const date = new Date();
    const div = document.createElement("div");

    div.innerHTML = `
    <div class="flex justify-between items-center  w-full mb-4 rounded-md p-4 mt-4 shadow-md">
      <div>
        <h4 class="text-xl font-medium">${hotlineTitle.innerText}</h4>
        <p class="mt-2 font-medium'">${holineNumber.innerText}</p>
      </div>
      <div>
      <h5 class="">${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</h5>
      </div>
    </div>
    `;
    callHistory.appendChild(div);
    return alert(
      `📞 Calling Emergency Service Number: ${holineNumber.innerText} `
    );
  });

  // copy event
  copyBtn.addEventListener("click", function () {
    document.getElementById("copy_count").innerText = copy++;

    if (hotlineNumber) {
      navigator.clipboard.writeText(hotlineNumber.innerText);
      alert(`The number is copied: ${hotlineNumber.innerText}`);
    }
  });
}

clearBtn.addEventListener("click", function () {
  callHistory.innerHTML = " ";
});
