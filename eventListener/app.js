const ROOT = document.getElementById("root");

ROOT.addEventListener("click", console.log);
ROOT.addEventListener("click", () => console.log("second!!!"));
ROOT.removeEventListener("click", console.log);
