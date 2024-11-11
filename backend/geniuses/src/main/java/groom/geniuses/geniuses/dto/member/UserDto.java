package groom.geniuses.geniuses.dto.member;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserDto {

    private String userId;
    private String userName;
    private String introduce;
    private String image;

    public UserDto(String userId, String userName, String introduce, String image) {
        this.userId = userId;
        this.userName = userName;
        this.introduce = introduce;
        this.image = image;
    }

}
