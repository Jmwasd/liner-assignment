# liner-assignment

1. users table
 - userId : 고유 번호

2. pages table 
 - user_userId : 관계설정 field
 - pageId : 고유 번호
 - pageUrl : 페이지 URL

3. texts table
 - pages_pageId : 관계설정 field
 - text : 코멘트
 - highlightId : 테마 번호 + 색 번호 ex) 3번 테마의 2번 색 -> highlightId : 32

4. colors table
 - pages_highlightId : 관계설정 field
 - colorHex :  하이라이트 컬러
 - theme : 테마 번호
 
![](file:///var/folders/q7/wbwmyfmd5g51pcvptbm9k3gr0000gn/T/TemporaryItems/NSIRD_screencaptureui_jx5HGz/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.51.42.png)


유저 한명이 여러 page에 하이라이트 정보 등록 가능(users : pages = 1 : N)

한 개의 page에서 여러 text 등록 가능(pages : texts = 1 : N)

한 개의 texts에서 여러 colors 등록 가능(text : colors = 1 : N)

Link
￼
개선할 사항
- 한 명의 유저가 여러 컬러를 저장할 수 있고, 한 개의 컬러가 여러명의 유저를 포함할 수 있기 떄문에 N:M관계 설정이 가능할 것으로 보임

N:M관계 설정을 통해 얻을 수 있는 이점
- 테이블 개수를 줄일 수 있고, 더욱 간단한 쿼리문 작성가능.
