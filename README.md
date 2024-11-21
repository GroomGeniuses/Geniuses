# Geniuses

## 📆 프로젝트 진행 기간
 - 2024.10.16(수) ~ 2024.11.12(화)  
 - Groom 풀스택 8회차 Project

<br>

## 📖 기획 배경
- ### **두뇌 서바이벌 수요자를 위한 커뮤니티**

<br>

## ✔ 주요 기능

- ### 로그인
- ### 게시글 작성 및 참여신청
- ### 공유

<br>

## 🛠️ 주요 기술

**Frontend**
- Visual Studio Code IDE
- Node.js LTS(18.17.0, npm 9.6.7)
- Javascript
- React 18.3.1
- React Redux 9.1.2
- Redux toolkit 2.3.0
- React-Router 6.27.0

**Backend**
- IntelliJ IDE
- JDK 17
- Springboot 3.3.4
- MySQL

**CI/CD**
- AWS
- NGINX
- Docker

<br>

## 🗂️ 프로젝트 파일 구조
### Frontend
```
📦frontend
 ┣ 📂public
 ┣ 📂src
 ┃ ┣ 📂_slices
 ┃ ┣ 📂_store
 ┃ ┃ ┗ 📜store.js
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂login
 ┃ ┃ ┣ 📂main
 ┃ ┃ ┣ 📂memberPage
 ┃ ┃ ┣ 📂signup
 ┃ ┃ ┗ 📜Header.js
 ┃ ┣ 📂pages
 ┃ ┃ ┣ 📜Login.js
 ┃ ┃ ┣ 📜Main.js
 ┃ ┃ ┣ 📜MemberPage.js
 ┃ ┃ ┗ 📜Signup.js
 ┃ ┣ 📜App.css
 ┃ ┣ 📜App.js
 ┃ ┣ 📜index.css
 ┃ ┗ 📜index.js
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierrc.json
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜README.md
```

### Backend
```
📦backend
 ┣ 📂src
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📂java
 ┃ ┃ ┃ ┣ 📂groom
 ┃ ┃ ┃ ┃ ┣ 📂geniuses
 ┃ ┃ ┃ ┃ ┃ ┣ 📂geniuses
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂common
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂config
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dao
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dtc
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂service
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📜GeniusesApplication.java
 ┃ ┃ ┗ 📂resources
 ┃ ┃ ┃  ┗ 📂static
 ┃ ┃ ┃  ┣ 📂templates
 ┃ ┃ ┃  ┣ 📜application.properties
 ┃ ┃ ┃  ┗ 📜application.yml
 ┣ 📜.gitignore
 ┣ 📜build.gradle
 ┣ 📜gradlew
 ┣ 📜gradlew.bat
 ┗ 📜settings.gradle
```

<br>

## ✔ 팀원 역할 분배
### 박민호
  - Team Leader
  - FE
  - BE
    - 로그인
    - 회원가입
  - CI/CD

### 방대혁
  - FE / BE
    - 메인
    - 마이 페이지

### 최정민
  - BE
    - 게시글 목록
    - 게시글 작성
    - 참여신청
    - DB
  - BE
    - 사용자페이지

<br>
