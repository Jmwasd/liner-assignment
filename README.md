# liner-assignment


![Uploading 스크린샷 2021-03-08 오후 7.29.28.png…]()
 users table
- userId : 고유 번호

pages table 
1. user_userId : 관계설정 field
2. pageId : 고유 번호
3. pageUrl : 페이지 URL

 text table
1. pages_pageId : 관계설정 field
2. text : 코멘트
3. highlightId : 테마 번호 + 색 번호
- Ex) 3번 테마의 2번 색 -> highlightId : 32

 color table
- pages_highlightId : 관계설정 field
- colorHex :  하이라이트 컬러
- theme : 테마 번호


유저 한명이 여러 page에 하이라이트 정보 등록 가능(users : pages = 1 : N)

한 개의 page에서 여러 text 등록 가능(pages : text = 1 : N)

한 개의 text에서 여러 color 등록 가능(text : color = 1 : N)
￼
개선할 사항
- 한 명의 유저가 여러 컬러를 저장할 수 있고, 한 개의 컬러가 여러명의 유저를 포함할 수 있기 떄문에 N:M관계 설정이 가능할 것으로 보임

N:M관계 설정을 통해 얻을 수 있는 이점
- 테이블 개수를 줄일 수 있고, 더욱 간단한 쿼리문 작성가능.

