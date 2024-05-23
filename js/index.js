function moveToRight(wordItem) {
    var word1 = wordItem;
    var container = document.querySelector(".container");
    var containerWidth = container.offsetWidth;
    var divWidth = word1.offsetWidth;
    var currentLeft = word1.offsetLeft;
    var maxLeft = containerWidth;

    if (currentLeft < maxLeft) {
        currentLeft += 1;
    } else {
        currentLeft = 0;
    }

    word1.style.left = currentLeft + 'px';
}

document.onkeydown = function(e) {
    if (e.key == "Enter") {
        checkEnter();
    }
}

var hiragana = [
    'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く', 'け', 'こ', 
    'さ', 'し', 'す', 'せ', 'そ', 'た', 'ち', 'つ', 'て', 'と', 
    'な', 'に', 'ぬ', 'ね', 'の', 'は', 'ひ', 'ふ', 'へ', 'ほ', 
    'ま', 'み', 'む', 'め', 'も', 'や', 'ゆ', 'よ', 
    'ら', 'り', 'る', 'れ', 'ろ', 'わ', 'を', 'ん'
]
var katakana = [
    'ア', 'イ', 'オ', 'ウ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 
    'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 
    'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 
    'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 
    'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン'
]

var hiradi = [
    'が', 'ぎ', 'ぐ', 'げ', 'ご', 
    'ざ', 'じ', 'ず', 'ぜ', 'ぞ', 
    'だ', 'ぢ', 'ず', 'ぜ', 'ぞ', 
    'ば', 'び', 'ぶ', 'べ', 'ぼ', 
    'ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'
]

var trans = [
    'きゃ', 'きゅ', 'きょ', 
    'ぎゃ', 'ぎゅ', 'ぎょ', 
    'しゃ', 'しゅ', 'しょ', 
    'じゃ', 'じゅ', 'じょ', 
    'ちゃ', 'ちゅ', 'ちゅ', 
    'にゃ', 'にゅ', 'にょ', 
    'ひゃ', 'ひゅ', 'ひょ', 
    'びゃ', 'びゅ', 'びょ', 
    'ぴゃ', 'ぴゅ', 'ぴょ', 
    'みゃ', 'みゅ', 'みょ', 
    'りゃ', 'りゅ', 'りょ'
]

var charArray = hiragana;
function getIdx() {
    return Math.floor(Math.random() * charArray.length);
}

function checkEnter() {
    var enterBox = document.querySelector(".keyin>#userWord");
    var keyin = enterBox.value;
    let w1 = document.querySelector("#word1");
    let w2 = document.querySelector("#word2");
    let w3 = document.querySelector("#word3");
    var w1Word = w1.innerText;
    var w2Word = w2.innerText;
    var w3Word = w3.innerText;

    if (w1Word == keyin) {
        w1.innerText = charArray[getIdx()];
        w1.style.left = '0px';
        enterBox.value = "";
    }
    if (w2Word == keyin) {
        w2.innerText = charArray[getIdx()];
        w2.style.left = '0px';
        enterBox.value = "";
    }

    if (w3Word == keyin) {
        w3.innerText = charArray[getIdx()];
        w3.style.left = '0px';
        enterBox.value = "";
    }
}

function main() {

    var w1 = document.querySelector("#word1");
    var w2 = document.querySelector("#word2");
    var w3 = document.querySelector("#word3");
    
    w1.innerText = charArray[getIdx()];
    w2.innerText = charArray[getIdx()];
    w3.innerText = charArray[getIdx()];
    
    var si1 = setInterval(() => {moveToRight(w1)}, 10);
    var si2 = setInterval(() => {moveToRight(w2)}, 20);
    var si3 = setInterval(() => {moveToRight(w3)}, 30);
}

main();

function showoption() {
    var option = document.querySelector(".option");
    option.style.display = "block";
}

function hideoption() {
    var option = document.querySelector(".option");
    option.style.display = "none";
    charArray = [];
    if (document.querySelector('[name="hiragana"]').checked) {
        charArray = charArray.concat(hiragana);
    }
    if (document.querySelector('[name="katakana"]').checked) {
        charArray = charArray.concat(katakana);
    }
    if (document.querySelector('[name="hiradi"]').checked) {
        charArray = charArray.concat(hiradi)
    }
    if (document.querySelector('[name="trans"]').checked) {
        charArray = charArray.concat(trans)
    }    
}