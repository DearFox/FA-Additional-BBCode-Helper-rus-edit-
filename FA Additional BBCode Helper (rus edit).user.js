// ==UserScript==
// @name         FA Additional BBCode Helper (rus edit)
// @namespace    FurAffinity
// @version      0.2
// @description  Adds clickable functionality to common BBCode inputs
// @author       (JaysonHusky) edition by DearFox
// @match        https://www.furaffinity.net/controls/journal/*
// @match        https://www.furaffinity.net/controls/profile/
// @grant        none
// @require      https://code.jquery.com/jquery-latest.js
// ==/UserScript==
(function() {
    'use strict';
    var TemplateStyle=$('body').attr('data-static-path');
     // Add Special Stylesheet for keywords
	var JaysBBCodeCSS=document.createElement('style');
	var jayBBCodeStyle=document.createTextNode(`
	#abhjh{
		border-radius:3px;
		background:rgba(1,0,0,0.1);
		margin-right:5px;
		padding:3px;
	}
	a#whatsthis{
		float:right;
		clear:right;
		font-size:10px;
	}
	.helpcur{
		cursor:help;
	}
	table#additionalbbcodes{
		width:100%;
	}
	a.additionalbbcodeclicker{
		cursor:pointer;
		margin-right; 10px;
	}
	table#additionalbbcodes tr{
		border-bottom: 1px dotted grey;
	}
	table#additionalbbcodes td.clickable{
		background: transparent;
		transition: 1s all;
		text-align:center;
	}
	table#additionalbbcodes td.clickable:hover{
		background: grey;
		transition: 1s all;
	}
	#abhjhbox{
		font-size:11px;
		display:block;
		margin:10px;
	}
	`);
	JaysBBCodeCSS.appendChild(jayBBCodeStyle);
	document.getElementsByTagName('body')[0].appendChild(JaysBBCodeCSS);
	var pathx=window.location.pathname;
		if(~pathx.indexOf("/controls/profile/")){
            $('.p10b h4').after(`
		<div id="abhjh">
			<h3>&nbsp;&nbsp;Помошник с кодом оформления</h3>
			<br/>
			<table id="additionalbbcodes">
				<tr>
					<td><b>Стиль</b></td>
					<td width="10px"></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[b]','[/b]');">Жирный</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[i]','[/i]');">Наклоненый</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[u]','[/u]');">Подчеркнутый</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[left]','[/left]');">Выровнять по левому краю</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[center]','[/center]');">Выровнять по центру</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[right]','[/right]');">Выровнять по правому краю</a></td>
				</tr>
				<tr>
					<td><b>Ссылки</b></td>
					<td width="10px"></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[url]','[/url]');">URL (простая ссылка)</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[url=INSERT_URL_TO_LINK_HERE]','[/url]');">URL (пользовательская ссылка)</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,':icon',':');">Имя пользователя и Иконка</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,':link',':');">Только имя пользователя</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,':','icon:');">Только иконка</a></td>
				</tr>
				<tr>
					<td><b>Оформление</b></td>
					<td width="10px"></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[color=white]','[/color]');">Цвет</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[quote]','[/quote]');">Цитата</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[s]','[/s]');">Перечеркнутый</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[sup]','[/sup]');">Верхний мини текст</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[sub]','[/sub]');">Нижний мини текст</a></td>
				</tr>
			</table>
			<span id="abhjhbox">Русская адаптация скрипта под названием "Additional BBCode Helper" перевел и улучшил DearFox.<br/><b>Вы должны выделить текст, который хотите «обернуть» в теги, прежде чем использовать нужный тег.</b><br/>Параметр цвета по умолчанию будет белым, вы можете заменить его на ЛЮБОЙ допустимый цвет.(для HEX используйте "#" в начале,: например #000000 - даст черный)</span>
		</div>
		<br/>
	`);
        }
    else{
        $('form .floatleft').append(`
		<br/><br/>
		<div id="abhjh">
			<h3>&nbsp;&nbsp;Помошник с кодом оформления</h3>
			<br/>
			<table id="additionalbbcodes">
				<tr>
					<td><b>Ссылки</b></td>
					<td width="10px"></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[url]','[/url]');">URL (простая ссылка)</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[url=INSERT_URL_TO_LINK_HERE]','[/url]');">URL (пользовательская ссылка)</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,':icon',':');">Имя пользователя и Иконка</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,':link',':');">Только имя пользователя</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,':','icon:');">Только иконка</a></td>
				</tr>
				<tr>
					<td><b>Оформление</b></td>
					<td width="10px"></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[color=white]','[/color]');">Цвет</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[quote]','[/quote]');">Цитата</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[s]','[/s]');">Перечеркнутый</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[sup]','[/sup]');">Верхний мини текст</a></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[sub]','[/sub]');">Нижний мини текст</a></td>
				</tr>
				<tr>
					<td><b>Медиа</b></td>
					<td width="10px"></td>
					<td class="clickable"><a class="additionalbbcodeclicker" onclick="performInsert(this,'[yt]','[/yt]');">YouTube</a></td>
				</tr>
			</table>
			<span id="abhjhbox">Additional BBCode Helper is a add-on to add clickable functionality to the most commonly used BBCode on FurAffinity.<br/><b>You must highlight the text you want to "wrap" in the tags before clicking the tag you want.</b><br/>The color option will default to white, you can replace it with ANY valid color.</span>
		</div>
		<br/>
	`);
    }
})();
