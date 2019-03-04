/**
 * 
 */

var links = {
	"네이버": "https://www.naver.com",
	"다음": "https://www.daum.net",
	"구글": "https://www.google.com"
};

var str = "네이버와\n 다음은 한국의 대표적인 포털사이트입니다.\n 구글은 미국의 포털사이트입니다.";
//console.log(str);

var filter = Object.keys(links).join('|');

var reg = new RegExp(filter, "g");

var result = str.replace(reg, function (site){
	return `<a href="${links[site]}" target="_blank">${site}</a>`;
});
console.log(result);