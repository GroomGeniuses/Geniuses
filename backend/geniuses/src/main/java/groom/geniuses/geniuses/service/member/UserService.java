package groom.geniuses.geniuses.service.member;

import groom.geniuses.geniuses.dto.member.UserDto;
import groom.geniuses.geniuses.dao.member.User;
import groom.geniuses.geniuses.dao.user.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

@Service
public class UserService {

    @Autowired
    private MemberRepository memberRepository;

    // 사용자 정보 가져오기
    public UserDto getUserById(Long userId) {
        User user = memberRepository.findById(userId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "사용자를 찾을 수 없습니다.")
        );

        return new UserDto(user.getUserName(), user.getIntroduce());
    }

    // 사용자 정보 수정하기
    public boolean updateUser(Long userId, UserDto userDto) {
        User user = memberRepository.findById(userId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "사용자를 찾을 수 없습니다.")
        );

        user.setUserName(userDto.getUserName());
        user.setIntroduce(userDto.getIntroduce());

        memberRepository.save(user);

        return true;
    }
}
