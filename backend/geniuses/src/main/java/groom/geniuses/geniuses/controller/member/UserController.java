package groom.geniuses.geniuses.controller.member;

import groom.geniuses.geniuses.dto.member.UserDto;
import groom.geniuses.geniusesm.service.member.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/MemberPage")
public class UserController {

    @Autowired
    private UserService userService;

    // 사용자 정보 가져오기
    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUser(@PathVariable Long userId) {
        UserDto user = userService.getUserById(userId);
        if (user != null) {
            return ResponseEntity.ok(user); // 사용자 정보를 반환
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); // 사용자 없음
        }
    }

    // 사용자 정보 수정하기
    @PutMapping("/{userId}")
    public ResponseEntity<Void> updateUser(@PathVariable Long userId, @RequestBody UserDto userDto) {
        boolean updated = userService.updateUser(userId, userDto);
        if (updated) {
            return ResponseEntity.ok().build(); // 수정 성공
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build(); // 수정 실패
        }
    }
}
