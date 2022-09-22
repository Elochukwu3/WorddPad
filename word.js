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
let boldeName = "bold",
  talleName = "italic",
  underLineName = "underline",
  alinCenter = "center",
  alinLeft = "left",
  alinRight = "right",
  alinJustify = "justify";
let styleTypes = [
  "fontWeight",
  "fontStyle",
  "textTransform",
  "textDecoration",
  "textAlign",
  "fontSize",
  "fontFamily"
];
let px = "px"
changeSelect(fontValue, styleTypes[5], px)
changeSelect(fontStyles, styleTypes[6])
function changeSelect(d, styleTypes, px) {
    d.addEventListener("change", ()=> {
        c = d.value; 
        if (px) {
            textArea.style[styleTypes] = `${c}${px}`;   
        }else{
        textArea.style[styleTypes] = c;
        }
         
    });  
};

function changeTExt(bold, b, styleTypes) {
  bold.addEventListener("click", () => {
    // bold.classList.add("hove")
    textArea.style[styleTypes] = b;
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
