document.addEventListener('DOMContentLoaded', function() {
    var imageContainer = document.getElementById('imageContainer');
    var displayedImage = document.getElementById('displayedImage');
    var body = document.body;
    var confirmationPopup = document.getElementById('confirmationPopup');
    var confirmButton = document.getElementById('confirmButton');
    var cancelButton = document.getElementById('cancelButton');
    var popupMessage = document.getElementById('popupMessage');
    var inputField = document.getElementById('textInput');
    var warningMessage = document.getElementById('warningMessage');

    // ページ読み込み時にQ5.pngを表示
    displayedImage.src = 'images/Q5.png';
    imageContainer.style.display = 'block'; // 画像を表示
    setTimeout(() => {
        displayedImage.style.opacity = 1; // 画像をフェードイン
    }, 10); // 小さな遅延を設定し、トランジションが適用されるようにします
    body.style.backgroundColor = 'black'; // 初期背景色を黒に設定

    // 確認ポップアップのボタン処理
    confirmButton.addEventListener('click', function() {
        var input = inputField.value;
        processInput(input);
        confirmationPopup.style.display = 'none'; // ポップアップを非表示
    });

    cancelButton.addEventListener('click', function() {
        confirmationPopup.style.display = 'none'; // ポップアップを非表示
        inputField.value = ''; // 入力欄の文字をリセット
    });

    document.querySelector('button').addEventListener('click', function() {
        checkInput();
    });
});

function checkInput() {
    var input = document.getElementById('textInput').value;
    var warningMessage = document.getElementById('warningMessage');
    var confirmationPopup = document.getElementById('confirmationPopup');
    var popupMessage = document.getElementById('popupMessage');

    // 全角数字を半角数字に変換する関数
    function normalizeToHalfWidth(str) {
        return str.replace(/[\uFF10-\uFF19]/g, function(c) {
            return String.fromCharCode(c.charCodeAt(0) - 0xFEE0);
        });
    }

    // 全角数字を半角数字に変換
    var normalizedInput = normalizeToHalfWidth(input);

    // 数字または特定の文字列をチェック
    if (/^\d+$/.test(normalizedInput) || normalizedInput === 'tshirt' || normalizedInput === 'rta') {
        var imageNumber = parseInt(normalizedInput, 10);

        // 確認ポップアップのメッセージを設定
        popupMessage.textContent = `本当に「${normalizedInput}」を送信しますか？ \n ※ただし送信できるのは 一度きり です`;
        confirmationPopup.style.display = 'flex'; // ポップアップを表示
    } else {
        // 数字以外の入力の場合のみ警告メッセージを表示
        warningMessage.textContent = '数字を入力してください。';
        warningMessage.style.opacity = 1; // 警告メッセージを表示

        // 1秒後に警告メッセージをフェードアウト
        setTimeout(() => {
            warningMessage.style.opacity = 0; // 1秒後にフェードアウト
        }, 1000);

        // 画像を表示したままにする
        document.getElementById('imageContainer').style.display = 'block';

        // 入力欄の文字をリセット
        document.getElementById('textInput').value = '';
    }
}

function processInput(input) {
    var imageContainer = document.getElementById('imageContainer');
    var displayedImage = document.getElementById('displayedImage');
    var body = document.body;

    // 全角数字を半角数字に変換する関数
    function normalizeToHalfWidth(str) {
        return str.replace(/[\uFF10-\uFF19]/g, function(c) {
            return String.fromCharCode(c.charCodeAt(0) - 0xFEE0);
        });
    }

    // 全角数字を半角数字に変換
    var normalizedInput = normalizeToHalfWidth(input);

    // 数字または特定の文字列をチェック
    if (/^\d+$/.test(normalizedInput)) {
        var imageNumber = parseInt(normalizedInput, 10);

        // 画像と背景色を設定
        if (imageNumber === 5) {
            displayedImage.src = 'images/Clear.png'; // 5の場合は Clear.png
            body.style.backgroundColor = 'white'; // 背景色を白に
        } else {
            displayedImage.src = 'images/Game Over.png'; // その他の数字は Game Over.png
            body.style.backgroundColor = '#686868'; // 背景色を #686868 に変更
        }

        // 画像を表示し、フェードイン
        imageContainer.style.display = 'block'; // 画像を表示
        displayedImage.style.opacity = 0; // 初期状態で透明に
        setTimeout(() => {
            displayedImage.style.opacity = 1; // 画像をフェードイン
        }, 10); // 小さな遅延を設定し、トランジションが適用されるようにします
    } else if (normalizedInput === 'tshirt') {
        displayedImage.src = 'images/tshirt.png'; // tshirtの場合の画像
        body.style.backgroundColor = 'lightblue'; // 背景色をライトブルーに
        fadeInImage(imageContainer, displayedImage);
    } else if (normalizedInput === 'rta') {
        displayedImage.src = 'images/rta.png'; // rtaの場合の画像
        body.style.backgroundColor = 'lightgreen'; // 背景色をライトグリーンに
        fadeInImage(imageContainer, displayedImage);
    } else {
        // 数字または指定の文字列でない場合は警告を表示
        var warningMessage = document.getElementById('warningMessage');
        warningMessage.textContent = '数字を入力してください';
        warningMessage.style.opacity = 1; // 警告メッセージを表示

        // 画像を表示したままにする
        imageContainer.style.display = 'block';
    }
}

function fadeInImage(imageContainer, displayedImage) {
    imageContainer.style.display = 'block'; // 画像を表示
    displayedImage.style.opacity = 0; // 初期状態で透明に
    setTimeout(() => {
        displayedImage.style.opacity = 1; // 画像をフェードイン
    }, 10); // 小さな遅延を設定し、トランジションが適用されるようにします
}
