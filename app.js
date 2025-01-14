require('dotenv').config(); // 환경 변수 로드

const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const fs = require('fs');

// 포트 설정
const PORT = process.env.PORT || 3000;

// 뷰 엔진 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 미들웨어 설정
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // JSON 요청을 파싱
app.use(cookieParser());

// 업로드 폴더가 없으면 생성
const uploadDir = path.join(__dirname, 'public/uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// MongoDB 연결
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB에 연결되었습니다.');
  })
  .catch((error) => {
    console.error('MongoDB 연결 에러:', error);
  });

// 라우터 설정
const indexRouter = require('./routes/index');
const uploadRouter = require('./routes/upload');
const filesRouter = require('./routes/files');
const assignKeyRouter = require('./routes/assignKey');
const QARouter = require('./routes/Q&A'); // Q&A 라우터 추가

app.use('/', indexRouter); // 메인 페이지
app.use('/upload', uploadRouter); // 파일 업로드
app.use('/files', filesRouter); // 파일 조회 및 다운로드
app.use('/assign-key', assignKeyRouter); // 비밀키 할당
app.use('/Q&A', QARouter); // Q&A 경로를 명확히 설정

// 서버 실행
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
