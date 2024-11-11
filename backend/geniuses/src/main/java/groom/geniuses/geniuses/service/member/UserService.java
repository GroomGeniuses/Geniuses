package groom.geniuses.geniuses.service.member;

import groom.geniuses.geniuses.dto.member.UserDto;
import groom.geniuses.geniuses.dao.user.Member;
import groom.geniuses.geniuses.dao.user.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class UserService {

    @Autowired
    private MemberRepository memberRepository;

    // 사용자 정보 가져오기
    public UserDto getUserById(String userId) {
        Member member = memberRepository.findById(userId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "사용자를 찾을 수 없습니다.")
        );

        return new UserDto(member.getUserId(), member.getUserName(), member.getIntroduce(), member.getImage());
    }

    // 사용자 정보 수정하기
    public boolean updateUser(String userId, UserDto userDto) {
        Member member = memberRepository.findById(userId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "사용자를 찾을 수 없습니다.")
        );

        member.setUserName(userDto.getUserName());
        member.setIntroduce(userDto.getIntroduce());
        member.setImage(userDto.getImage());

        memberRepository.save(member);

        return true;
    }

    // 프로필 이미지 업로드
    public boolean updateImage(String userId, MultipartFile file) {
        Member member = memberRepository.findById(userId).orElseThrow(() ->
                new ResponseStatusException(HttpStatus.NOT_FOUND, "사용자를 찾을 수 없습니다.")
        );

        try {
            String uploadDir = System.getProperty("user.dir") + "/uploads/profile_images/";
            File directory = new File(uploadDir);

            // 디렉토리 생성 여부 확인
            if (!directory.exists()) {
                boolean directoryCreated = directory.mkdirs();
                if (directoryCreated) {
                    System.out.println("디렉토리 생성 성공");
                } else {
                    System.out.println("디렉토리 생성 실패");
                }
            }

            // 파일 중복 방지
            String originalFilename = file.getOriginalFilename();
            String fileExtension = originalFilename.substring(originalFilename.lastIndexOf("."));
            String newFileName = UUID.randomUUID().toString() + fileExtension;

            // 파일 저장 경로
            Path path = Paths.get(uploadDir + newFileName);
            file.transferTo(path.toFile());

            // 이미지 업데이트
            String imageUrl = "/uploads/profile_images/" + newFileName;
            member.setImage(imageUrl);

            memberRepository.save(member);

            return true;
        } catch (IOException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "파일 저장 오류");
        }
    }

}
