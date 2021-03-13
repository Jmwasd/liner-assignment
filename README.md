# liner-assignment


1.  users table
- id : 기본 값(auto increase)
- theme_id : 유저가 등록한 테마(기본 값은 1번 테마로 지정) 

2. pages table 
- Id : 기본 키
- userId :  페이지에 등록 된 유저 번호
- pageUrl : 페이지 URL

3. highlights table
- highlightId : 기본 값(auto increase)
- userId : 유저를 구분하기 위한 필드
- pageId : 등록 페이지 고유 번호
- colorHex : 하이라이트 
- text : 코멘트

 4. themes table
- Id : 기본 값(auto increase)
- colorNumber :  해당 테마의 번호
- colorHex : 하이라이트
- theme : 테마 번호
 
유저 한명이 여러 page에 하이라이트 정보 등록 가능(users : pages = 1 : N)

한 개의 page에서 여러 text 등록 가능(pages : highlights = 1 : N)

유저 한명이 선택할 수 있는 테마 종류 1가지 (users : themes = 1 : 1)


![스크린샷 2021-03-13 오후 1 48 46](https://user-images.githubusercontent.com/66477332/111019483-dac3d400-8402-11eb-8d64-f95c42d10655.png)

Create
- Pages table에 등록된 url이 있는지 확인 후 highlights table에 입력 받은 정보를 저장했습니다.

Read
- 패이지 내 하이라이트 정보(3번 과제)와 유저가 하이라이트한 정보와 페이지(4번 과제)를 입력 받은 정보를 이용해 조건문으로 나눠 각각 출력값이 달라지게 구현했습니다.

Update
- 입력 값인 themeId를 이용해 출력값이 달라지게 구현했고, 함수를 만들어 코드를 간결하게 작성했습니다.

Delete
- 유저가 등록한 page에 모든 highlight를 삭제했을 경우 해당 page도 삭제가 되도록 구현했습니다.

