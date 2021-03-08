# liner-assignment

1. users table
 - userId : 유저 한 명이 가질 수 있는 고유 번호

2. pages table 
 - user_userId : 관계설정 field
 - pageId : 페이지를 구분하기 위한 고유 번호
 - pageUrl : 페이지 URL

3. texts table
 - pages_pageId : 관계설정 field
 - text : 코멘트
 - highlightId : 테마 번호 + 색 번호 ex) 3번 테마의 2번 색 -> highlightId : 32

4. colors table
 - pages_highlightId : 관계설정 field
 - colorHex :  하이라이트 컬러
 - theme : 테마 번호
 

유저 한명이 여러 page에 하이라이트 정보 등록 가능(users : pages = 1 : N)

한 개의 page에서 여러 text 등록 가능(pages : text = 1 : N)

한 개의 text에서 여러 color 등록 가능(text : color = 1 : N)


![스크린샷 2021-03-08 오후 10 28 19](https://user-images.githubusercontent.com/66477332/110327668-9a103780-805d-11eb-92a4-ec49f2843078.png)

개선할 사항
- 한 명의 유저가 여러 컬러를 저장할 수 있고, 한 개의 컬러가 여러명의 유저를 포함할 수 있기 때문에 users : color = N:M 관계 설정이 가능할 것으로 보여집니다.
