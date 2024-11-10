package groom.geniuses.geniuses.service.member;

import groom.geniuses.geniuses.dto.member.UserDto;
import groom.geniuses.geniuses.dao.member.User;
import groom.geniuses.geniuses.dao.user.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

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

    // 프로필 이미지 업로드
    public boolean updateImage(Long userId, MultipartFile file) {
        User user = memberRepository.findById(userId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "사용자를 찾을 수 없습니다.")
        );

        try {
            // 이미지 파일 디렉토리
            String uploadDir = "uploads/profile_images/"; // 서버 내에 저장할 디렉토리
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs(); // 디렉토리가 없으면 생성
            }

            // 파일 이름 중복 방지
            String originalFilename = file.getOriginalFilename();
            String fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
            String newFileName = UUID.randomUUID().toString() + fileExtension;

            // 파일 저장 경로 설정
            Path path = Paths.get(uploadDir + newFileName);
            file.transferTo(path.toFile());

            // 저장된 이미지 URL을 데이터베이스에 업데이트
            String imageUrl = "/uploads/profile_images/" + newFileName;
            user.setProfileImageUrl(imageUrl);

            // 사용자 정보 저장
            memberRepository.save(user);

            return true;
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "파일 저장 오류");
        }
    }
}
