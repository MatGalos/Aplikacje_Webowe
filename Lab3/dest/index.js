(()=>{"use strict";var e={802:(e,t,r)=>{t.__esModule=!0;var l=r(333),n=function(){function e(e){var t=this;this.currentSymbol=1,this.cells=new Array(e);for(var r=document.getElementById("tictactoe"),n=0,i=0;i<e;i++)for(var s=r.insertRow(i),u=function(e){var r=s.insertCell(e);r.className="cell";var i=new l.default(r);a.cells[n]=i,r.addEventListener("click",(function(){return t.makeMove(i)}),!1),n++},a=this,o=0;o<e;o++)u(o)}return e.prototype.makeMove=function(e){e.setCellValue(this.currentSymbol)&&(this.currentSymbol*=-1)},e}();t.default=n},333:(e,t)=>{t.__esModule=!0;var r=function(){function e(e){this.htmlElement=e}return e.prototype.setCellValue=function(e){if(1===this.cellValue||-1===this.cellValue)return!1;switch(this.cellValue=e,this.cellValue){case-1:this.htmlElement.innerHTML="O";break;case 1:this.htmlElement.innerHTML="X"}return!0},e}();t.default=r}},t={};new(function r(l){var n=t[l];if(void 0!==n)return n.exports;var i=t[l]={exports:{}};return e[l](i,i.exports,r),i.exports}(802).default)(3)})();