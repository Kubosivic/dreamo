document.getElementById('save-dream').addEventListener('click', function() {
    const dreamText = document.getElementById('dream-text').value;
    
    // 夢を保存する（データベースに保存）
    saveDream(dreamText);

    // AIによってイラストを生成
    generateImage(dreamText);
});

function saveDream(dreamText) {
    // データベースへ保存する処理（ここでは仮の処理）
    console.log('夢を保存:', dreamText);
}

function generateImage(dreamText) {
    // 夢のテキストを基にAIでイラストを生成（仮の処理）
    const imageUrl = 'https://example.com/dream-image.jpg'; // 仮の画像URL

    // 生成されたイラストを表示
    document.getElementById('dream-image').src = imageUrl;
}
