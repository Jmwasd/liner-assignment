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
 
<img src="file:///var/folders/q7/wbwmyfmd5g51pcvptbm9k3gr0000gn/T/TemporaryItems/NSIRD_screencaptureui_jx5HGz/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-08%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.51.42.png" width="700" heigh="370">

