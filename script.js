"use strict";

document.querySelector("#display").value = "";

document.querySelector("#one").addEventListener("click", function () {
  document.querySelector("#display").value += "1";
});

document.querySelector("#two").addEventListener("click", function () {
  document.querySelector("#display").value += "2";
});

document.querySelector("#three").addEventListener("click", function () {
  document.querySelector("#display").value += "3";
});

document.querySelector("#four").addEventListener("click", function () {
  document.querySelector("#display").value += "4";
});

document.querySelector("#five").addEventListener("click", function () {
  document.querySelector("#display").value += "5";
});

document.querySelector("#six").addEventListener("click", function () {
  document.querySelector("#display").value += "6";
});

document.querySelector("#seven").addEventListener("click", function () {
  document.querySelector("#display").value += "7";
});

document.querySelector("#eight").addEventListener("click", function () {
  document.querySelector("#display").value += "8";
});

document.querySelector("#nine").addEventListener("click", function () {
  document.querySelector("#display").value += "9";
});

document.querySelector("#zero").addEventListener("click", function () {
  document.querySelector("#display").value += "0";
});

document.querySelector("#plus").addEventListener("click", function () {
  document.querySelector("#display").value += "+";
});

document.querySelector("#minus").addEventListener("click", function () {
  document.querySelector("#display").value += "-";
});

document.querySelector("#times").addEventListener("click", function () {
  document.querySelector("#display").value += "*";
});

document.querySelector("#divide").addEventListener("click", function () {
  document.querySelector("#display").value += "/";
});

document.querySelector("#dzero").addEventListener("click", function () {
  document.querySelector("#display").value += "00";
});

document.querySelector("#dot").addEventListener("click", function () {
  document.querySelector("#display").value += ".";
});

document.querySelector("#ac").addEventListener("click", function () {
  document.querySelector("#display").value = "";
});

document.querySelector("#dc").addEventListener("click", function () {
  document.querySelector("#display").value = document
    .querySelector("#display")
    .value.toString()
    .slice(0, -1);
});

document.querySelector("#equal").addEventListener("click", function () {
  document.querySelector("#display").value = eval(
    document.querySelector("#display").value
  );
});
