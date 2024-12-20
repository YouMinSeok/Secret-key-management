1. 프로젝트 구조

SECRET-KEY-FILE-MANAGER-MAIN
├── models/                # 데이터베이스 모델 폴더
│   └── File.js            # 파일 데이터베이스 스키마 정의
├── public/                # 정적 리소스 폴더
│   ├── css/               # 스타일시트 폴더
│   │   ├── Q&A.css        # Q&A 페이지 스타일
│   │   └── styles.css     # 메인 스타일
│   ├── js/                # 클라이언트 JavaScript 폴더
│   │   └── main.js        # 메인 스크립트
│   └── uploads/           # 업로드된 파일 저장 경로
├── routes/                # 라우터 폴더
│   ├── assignKey.js       # 비밀키 할당 라우터
│   ├── files.js           # 파일 검색 및 다운로드 라우터
│   ├── index.js           # 메인 페이지 라우터
│   ├── Q&A.js             # Q&A 라우터
│   └── upload.js          # 파일 업로드 라우터
├── views/                 # EJS 템플릿 폴더
│   ├── error.ejs          # 오류 페이지 템플릿
│   ├── files.ejs          # 파일 검색 결과 페이지
│   ├── index.ejs          # 메인 페이지 템플릿
│   ├── layout.ejs         # 기본 레이아웃 템플릿
│   ├── Q&A.ejs            # Q&A 페이지 템플릿
│   └── upload.ejs         # 파일 업로드 완료 템플릿
├── .env                   # 환경 변수 파일
├── app.js                 # 메인 서버 파일
├── package.json           # 프로젝트 및 의존성 정보
├── package-lock.json      # 의존성 고정 파일
└── README.md              # 프로젝트 설명 파일



 2. 프로젝트를 실행하기 위한 필요한 모든 의존성

{
  "dependencies": {
    "body-parser": "^1.20.3",
    "cookie-parser": "^1.4.7",
    "crypto-js": "^4.2.0",
    "dotenv": "^16.4.5",
    "ejs": "^3.1.10",
    "express": "^4.21.1",
    "materialize-css": "^1.0.0",
    "mongoose": "^8.8.2",
    "multer": "^1.4.5-lts.1",
    "path": "^0.12.7",
    "uuid": "^11.0.3"
  }
}

npm install 모든 의존성 설치 시작 

3. 서버 실행 명령어

node app.js

4. 브라우저 접속
http://localhost:3000
 


5. 주요 라우트
HTTP  메서드 경로설명

GET  /	                     메인 페이지
POST /upload	             파일 업로드
POST /files	                 비밀키로 파일 검색
GET	/files/download/:id	     파일 다운로드
POST /assign-key	         기존 파일에 비밀키 할당
GET /Q&A	                 Q&A 페이지

6. 

주요 기능

<파일 업로드>

파일을 업로드할 수 있으며, 업로드 시 비밀키를  입력할 수 있습니다.

<파일 검색>

비밀키를 입력하여 해당 비밀키와 연결된 파일을 검색할 수 있습니다.

<파일 다운로드>

검색된 파일은 다운로드 버튼을 클릭하여 다운로드할 수 있습니다.

<비밀키 할당>

업로드된 파일에 새로운 비밀키를 추가로 할당할 수 있습니다.

<Q&A 페이지>

Q&A 템플릿을 통해 업로드된 파일과 관련된 정보를 관리할 수 있습니다.


7. 
테스트 환경

VScode 환경
운영 체제: Windows 10/11
Node.js 버전: v20.16.0
mongoose@8.8.2 버전: 

사용 프로그래밍 언어 = 자바스크립트

EJS 템플릿 엔진 = HTML 확장성 