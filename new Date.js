// new Date

// console.log(new Date());

// const now = new Date();
// let today = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
// let month = now.getMonth();
// let year = now.getFullYear();

// console.log('Today:', today);
// console.log('Month:', month);
// console.log('Year:', year);

// time

// const hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
// const minute =
//   now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
// const second =
//   now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
// console.log(`${hour}:${minute}:${second}`);

// Topshiriq:)

const dateEl = document.querySelector("#dateEl");
const time = document.querySelector("#time");

function getTime() {
  let now = new Date();

  let date = now.getDate() < 10 ? "0" + now.getDate() : now.getDate();
  let month_title = now.getMonth();
  let year = now.getFullYear();
  let hour = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  let minutes =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  let second =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
  const months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "August",
    "Iyul",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  dateEl.textContent = `${date} ${months[month_title]}, ${year}`;
  time.textContent = `${hour}:${minutes}:${second}`;
}
setInterval(getTime, 1000);
