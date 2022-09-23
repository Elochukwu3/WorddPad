
const sectionDisplay = document.querySelector(".sect2-container")
const htmlContent =
 
   `<div class="pasteCont">
                        <div>
                            <p id="pointer"><i class="fas fa-clipboard " style="font-size: 2em; color: goldenrod;"
                                    id="pointer"></i></p>
                            <p>Paste</p>
                        </div>
                        <div>
                            <p id="pointer"> <span><i class="fas fa-cut" style="color: rgb(189, 224, 237);"></i></span>
                                cut</p>
                            <p id="pointer" class = "copy"><span><i class="far fa-copy" style="color: rgb(189, 224, 237);"></i></span>
                                copy</p>
                        </div>
                    </div>
                    <div style="border-right: 1px solid grey;">
                        <div style="width: 100%;" class="characterSectHolder">
                            <div class="selectSect">
                                <div class="selectTag">
                                    <select name="" id="fontStyles">
                                        <option value="font" disabled selected>Font style</option>
                                        <option value="calibri">Calibri</option>
                                        <option value="Bell MT">Bell MT</option>
                                        <option value="sanserif">Sanserif</option>
                                        <option value="cursive">cursive</option>
                                        <option value="Cambria, Cochin, Georgia, Times, 'Times New Roman', serif">Cambri
                                        </option>
                                        <option value="fantasy">Fantasy</option>
                                        <option value="Times New Roman', Times, serif">TM Roman</option>
                                        <option value="monospace">monospace</option>
                                        <option value="Arial, Helvetica, sans-serif">Arial</option>
                                        <option value="Verdana, Geneva, Tahoma, sans-serif">Verdana,GT</option>
                                        <option value="Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif">
                                            Frank,GMA</option>
                                    </select>
                                    <select name="" id="fontValue">
                                        <!-- <option value="fontSize" disabled selected>size</option> -->
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="12">12</option>
                                        <option value="14">14</option>
                                        <option value="13">13</option>
                                        <option value="16">16</option>
                                        <option value="18">18</option>
                                        <option value="20">20</option>
                                        <option value="22">22</option>
                                        <option value="24">24</option>
                                        <option value="26">26</option>
                                        <option value="30">30</option>
                                        <option value="32">32</option>
                                        <option value="34">34</option>
                                        <option value="36">36</option>
                                        <option value="40">40</option>
                                        <option value="54">54</option>
                                    </select>
                                </div>
                                <div class="ATag">
                                    <p id="pointer">A</p>
                                    <p id="pointer">A</p>
                                </div>
                            </div>
                            <div class="characters" id="pointer">
                                <div class="bod" style="padding: .2em .2em;">
                                    <b>B</b>
                                </div>
                                <div class="itally" id="pointer">
                                    <i>I</i>
                                </div>
                                <div class="underine" id="pointer">
                                    <u>U</u>
                                </div>
                                <div class="strike" id="pointer">
                                    <strike>abc</strike>
                                </div>
                                <div class="sup" id="pointer">
                                    A<sup>a</sup>
                                </div>
                                <div class="sub" id="pointer">
                                    A<sub>a</sub>
                                </div>
                                <div class="colo" id="pointer" style="position: relative;">
                                    <b>A</b>
                                    <input type=color id="colorInput">
                                </div>
                                <div class="backG" id="pointer" style="position: relative;">
                                    <b>A</b>
                                    <input type=color id="colorInput">
                                </div>
                            </div>
                            <div class="foot">
                                Font
                            </div>
                        </div>
                    </div>
                    <!-- align atinee -->
                    <div class="alignContainer">
                        <div class="alignItems">
                            <p><i class="fas fa-align-left left" id="pointer"></i></p>
                            <p><i class="fas fa-align-center center" id="pointer"></i></p>
                            <p><i class="fas fa-align-right right" id="pointer"></i></p>
                            <p><i class="fas fa-align-justify justify" id="pointer"></i></p>
                        </div>
                        <p class="foot">Paragraph</p>
                    </div>

`

let displayOne = htmlContent;
sectionDisplay.innerHTML = displayOne

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
document.querySelector(".copy").addEventListener("click", ()=>{
  let textVal = textArea.value
  navigator.clipboard.writeText(textVal)
})