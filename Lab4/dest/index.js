(()=>{"use strict";var e,t,r,n,i={62:(e,t)=>{var r;t.__esModule=!0,t.Games=void 0,(r=t.Games||(t.Games={}))[r.TicTacToe=1]="TicTacToe",r[r.RockPaperScissors=2]="RockPaperScissors"},462:(e,t,r)=>{t.__esModule=!0;var n=r(94),i=function(){function e(e){var t=this;this.currentSymbol=1,this.cells=new Array(e),this.tableSize=e;for(var r=document.getElementById("tictactoe"),i=0,l=0;l<e;l++)for(var o=r.insertRow(l),a=function(e){var r=o.insertCell(e);r.className="cell";var a=new n.default(r,l,e);c.cells[i]=a,r.addEventListener("click",(function(){return t.makeMove(a)}),!1),i++},c=this,s=0;s<e;s++)a(s)}return e.prototype.setHeaderValue=function(e){var t=document.getElementById("header"),r="";switch(e){case 1:r="Current Move: Cross";break;case-1:r="Current Move: Circle";break;case 10:r="Winner is Cross";break;case-10:r="Winner is Circle";break;case 0:r="Draw!"}t.innerHTML=r},e.prototype.makeMove=function(e){if(e.setCellValue(this.currentSymbol)){if(this.checkForGameFinish())return;this.currentSymbol*=-1,this.setHeaderValue(this.currentSymbol)}},e.prototype.checkForGameFinish=function(){var e=this.tableSize;return this.rowCheck(e)||this.columnCheck(e)||this.diagonalCheck(e)?(this.setHeaderValue(10*this.currentSymbol),!0):!!this.tieCheck(e)&&(this.setHeaderValue(0),!0)},e.prototype.rowCheck=function(e){var t=this.cellsWithActualSymbol(),r=[];if(t.length<e)return!1;for(var n=0;n<e;n++){for(var i=0,l=0;l<e;l++)for(var o=0,a=t;o<a.length;o++){var c=a[o];c.colPos===l&&c.rowPos===n&&(i++,r.push(c))}if(i===e)return!0;r.length=0}return!1},e.prototype.columnCheck=function(e){var t=this.cellsWithActualSymbol(),r=[];if(t.length<e)return!1;for(var n=0;n<e;n++){for(var i=0,l=0;l<e;l++)for(var o=0,a=t;o<a.length;o++){var c=a[o];c.colPos===n&&c.rowPos===l&&(i++,r.push(c))}if(i===e)return!0;r.length=0}return!1},e.prototype.diagonalCheck=function(e){var t=this.cellsWithActualSymbol(),r=[];if(t.length<e)return!1;for(var n=0,i=0;i<e;i++)for(var l=0,o=t;l<o.length;l++)(s=o[l]).rowPos===i&&s.colPos===i&&(n++,r.push(s));if(n===e)return!0;for(n=0,r.length=0,i=0;i<e;i++)for(var a=0,c=t;a<c.length;a++){var s;(s=c[a]).colPos===e-1-i&&s.rowPos===i&&(n++,r.push(s))}return n===e},e.prototype.tieCheck=function(e){return 0===this.cells.filter((function(e){return null==e.cellValue||isNaN(e.cellValue)})).length},e.prototype.cellsWithActualSymbol=function(){for(var e=[],t=0,r=this.cells;t<r.length;t++){var n=r[t];n.cellValue===this.currentSymbol&&e.push(n)}return e},e}();t.default=i},94:(e,t)=>{t.__esModule=!0;var r=function(){function e(e,t,r){this.htmlElement=e,this.rowPos=t,this.colPos=r,this.cellId=""+t+r}return e.prototype.setCellValue=function(e){return 1!==this.cellValue&&-1!==this.cellValue&&(this.cellValue=e,this.setCellInnerHtml(),!0)},e.prototype.refreshCellValue=function(e){this.cellValue=e,this.setCellInnerHtml()},e.prototype.setCellInnerHtml=function(){switch(this.cellValue){case-1:this.htmlElement.innerHTML="O";break;case 1:this.htmlElement.innerHTML="X";break;default:this.htmlElement.innerHTML=""}},e}();t.default=r},806:(e,t,r)=>{t.__esModule=!0,t.TicTacToe=void 0;var n=r(462),i=function(){function e(){this.name="Tic Tac Toe"}return e.prototype.getGameElement=function(){var e=document.createElement("div"),t=document.createElement("div");t.setAttribute("id","tttHeader");var r=document.createElement("table");return r.setAttribute("id","tictactoe"),e.appendChild(t),e.appendChild(r),new n.default(3),e},e}();t.TicTacToe=i}},l={};function o(e){var t=l[e];if(void 0!==t)return t.exports;var r=l[e]={exports:{}};return i[e](r,r.exports,o),r.exports}e=o(62),t=o(806),r=function(){function t(){this.initMenu()}return t.prototype.initMenu=function(){var t=document.createElement("div"),r=document.createElement("div"),i=document.createElement("ul"),l=document.createElement("div");t.setAttribute("id","menu"),r.setAttribute("id","gameContainer");for(var o=function(e){if(isNaN(Number(e)))return"continue";var t=n.getGame(Number(e)),l=document.createElement("li");l.addEventListener("click",(function(){r.innerHTML="",r.appendChild(t.getGameElement())})),i.appendChild(l)},a=0,c=Object.keys(e.Games);a<c.length;a++)o(c[a]);var s=document.createElement("p");s.innerHTML="Avalible Games:",l.appendChild(s),t.appendChild(l),t.appendChild(i);var u=document.createElement("main");u.className="mainContainer",u.appendChild(t),u.appendChild(r),document.body.appendChild(u)},t}(),n=new(function(){function r(){}return r.prototype.getGame=function(r){switch(r){case e.Games.TicTacToe:default:return new t.TicTacToe}},r}()),new r})();