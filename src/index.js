import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

document.querySelectorAll("a").forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.style.color = "white";
  });
});
document.querySelectorAll("a").forEach((element) => {
  element.addEventListener("dblclick", (e) => {
    e.target.style.color = "blue";
  });
});

const imgDiv = document.createElement("div");
const img1 = document.createElement("img");
const img2 = document.createElement("img");
const img3 = document.createElement("img");

img1.src = "https://picsum.photos/id/65/1000/500";
img2.src = "https://picsum.photos/id/28/1000/500";
img3.src = "https://picsum.photos/id/54/1000/500";

img1.style.width = "100px";
img2.style.width = "100px";
img3.style.width = "100px";

img1.id = "img1source";
img2.id = "img2source";
img3.id = "img3source";

imgDiv.appendChild(img1);
imgDiv.appendChild(img2);
imgDiv.appendChild(img3);

const navigation = document.querySelector(".main-navigation");
navigation.append(imgDiv);

const imgIntro = document.querySelector(".intro img");
imgIntro.id = "imgTarget";

img1.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", event.target.id)
);

img2.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", event.target.id)
);

img3.addEventListener("dragstart", (event) =>
  event.dataTransfer.setData("text/plain", event.target.id)
);

imgIntro.addEventListener("dragover", (event) => {
  event.preventDefault();
});

imgIntro.addEventListener("drop", (event) => {
  event.preventDefault();
  const sourceID = event.dataTransfer.getData("text/plain");
  const sourceElement = document.getElementById(sourceID);
  const targetSrc = event.target.src;
  event.target.src = sourceElement.src;
  sourceElement.src = targetSrc;
  sourceElement.style.width = "100px";
  sourceElement.style.height = "50px";
  event.target.style.width = "800px";
  event.target.style.height = "240px";
});
