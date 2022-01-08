const express = require('express');
const path = require('path');

const app = express();

const http = require('http').createServer(app);

http.listen(8080, function() {
    console.log('listening on 8080');
});

app.use(express.static(path.join(__dirname, 'react-project/build')));

app.get('/', function(req, res){
    res.sendFile(__dirname, 'react-project/build/index.html')
});

//리액트의 라우팅 기능을 사용할 예정임 그러니 서버에서는 URL 창으로 접속했을시 접근이 가능하도록 * 루트를 잡자! 
//즉, 서버에서는 라우터 기능을 하지않아도 됨. DB 연결해서 데이터 바인딩 하는 역할만 하면 됨. 서버역할 축소..
app.get('*', function(req, res){
    res.sendFile(__dirname, 'react-project/build/index.html')
});

