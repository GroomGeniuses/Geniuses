package groom.geniuses.geniuses.dto.member;

public class UserDto {

    private String userName;
    private String introduce;

    public UserDto(String userName, String introduce) {
        this.userName = userName;
        this.introduce = introduce;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getIntroduce() {
        return introduce;
    }

    public void setIntroduce(String introduce) {
        this.introduce = introduce;
    }
}
