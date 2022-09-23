let textArea = document.getElementById("write-area");
let bold = document.querySelector(".bod");
let itax = document.querySelector(".itally");
let underLine = document.querySelector(".underine");
let leftAlignment = document.querySelector(".left");
let rightAlignment = document.querySelector(".right");
let centerAlignment = document.querySelector(".center");
let justifyAlignment = document.querySelector(".justify");
let fontValue = document.querySelector("#fontValue");
let fontStyles = document.querySelector("#fontStyles");
let fontColor = document.querySelector(".colo");
let backG = document.querySelector(".backG");
let strike = document.querySelector(".strike");
let saveBtn = document.querySelector(".save");
let folderDisplay = document.querySelector(".folder-display");
let openBtn = document.querySelector(".Open");
let recentFiles = document.querySelector(".appendRecent");
let recents = [];
const contentStyles = {};
let boldeName = "bold",
  talleName = "italic",
  underLineName = "underline",
  alinCenter = "center",
  alinLeft = "left",
  alinRight = "right",
  alinJustify = "justify";
lineThrough = "line-through";

let styleTypes = [
  "fontWeight",
  "fontStyle",
  "textTransform",
  "textDecoration",
  "textAlign",
  "fontSize",
  "fontFamily",
  "color",
  "background",
];
let px = "px";
changeSelect(fontValue, styleTypes[5], px);
changeSelect(fontStyles, styleTypes[6]);
changeSelect(fontColor, styleTypes[7]);
changeSelect(backG, styleTypes[8]);
function changeSelect(d, styleTypes, px) {
  d.addEventListener("change", (e) => {
    c = e.target.value;
    if (px) {
      textArea.style[styleTypes] = `${c}${px}`;
      contentStyles[styleTypes] = `${c}${px}`;
    } else {
      textArea.style[styleTypes] = c;
      contentStyles[styleTypes] = c;
    }
  });
}

function changeTExt(bold, b, styleTypes) {
  bold.addEventListener("click", () => {
    bold.classList.toggle("change");
    if (bold.classList.contains("change")) {
      console.log("change");
      textArea.style[styleTypes] = b;
      contentStyles[styleTypes] = b;
    } else {
      contentStyles[styleTypes] = null;
      textArea.style[styleTypes] = null;
    }
  });
  //   bold.classList.remove("hove")
}
changeTExt(bold, boldeName, styleTypes[0]);
changeTExt(itax, talleName, styleTypes[1]);
changeTExt(underLine, underLineName, styleTypes[3]);
changeTExt(leftAlignment, alinLeft, styleTypes[4]);
changeTExt(rightAlignment, alinRight, styleTypes[4]);
changeTExt(centerAlignment, alinCenter, styleTypes[4]);
changeTExt(justifyAlignment, alinJustify, styleTypes[4]);
changeTExt(strike, lineThrough, styleTypes[3]);

function saveChange() {
  let formatArr = [];
  let textV = {
    texContent: textArea.value,
  };
  formatArr.push(contentStyles, textV);
  let namePromt;
  if (folderDisplay.textContent == "Document") {
    namePromt = prompt("input file name");
    if (namePromt !== null && namePromt !== "") {
      folderDisplay.textContent = namePromt;
      localStorage.setItem(namePromt, JSON.stringify(formatArr));
      recents.push(namePromt);
    } else {
    }
  } else {
    namePromt = folderDisplay.textContent;
    folderDisplay.textContent = namePromt;
    localStorage.setItem(namePromt, JSON.stringify(formatArr));
  }
}
saveBtn.addEventListener("click", saveChange);
openBtn.addEventListener("click", () => {
  namePromt = prompt("input file name");
  let savedItems = JSON.parse(localStorage.getItem(namePromt));

  if (!localStorage || savedItems == "" || namePromt == "") {
    alert("Hey you don't have a saved file, Try Saving one and open");
  } else {
    const mapStyle = savedItems.map((m) => {
      return m.texContent;
    });
    textArea.value = mapStyle.join("");
    let s = savedItems[0];
    console.log(s);
    textArea.style.fontSize = s.fontSize;
    textArea.style.fontFamily = s.fontFamily;
    textArea.style.textDecoration = s.textDecoration;
    textArea.style.textAlign = s.textAlign;
    textArea.style.color = s.color;
    textArea.style.background = s.background;
  }
});
recentFiles.innerHTML = "";
for (let index = 0; index < localStorage.length; index++) {
  element = localStorage.key(index);
  let ptag = document.createElement("li");
  //   ptag.classList.add("")
  ptag.textContent = element;
  recentFiles.appendChild(ptag);
}
