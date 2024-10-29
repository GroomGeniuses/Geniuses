package groom.geniuses.geniuses.controller.user;

import groom.geniuses.geniuses.config.WebConfig;
import groom.geniuses.geniuses.dto.user.JoinRequest;
import groom.geniuses.geniuses.service.user.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.regex.Pattern;

@Controller
@RequiredArgsConstructor
@RequestMapping("/api/auth")
@Slf4j
public class LoginController {
    private final MemberService memberService;
    @GetMapping("/signup")
    public String joinPage() {
        log.info("GET - /api/auth/signup");
        String redirect = "redirect:" + WebConfig.SIGNUP;
        return redirect;
    }
    @ResponseBody
    @PostMapping("/signup")
    public ResponseEntity<?> join(@Valid @ModelAttribute JoinRequest joinRequest, BindingResult bindingResult, Model model) {
        log.info("POST - /api/auth/signup");
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(URI.create(WebConfig.SIGNUP));
        // ID 중복 여부 확인
        if (memberService.checkLoginIdDuplicate(joinRequest.getLoginId())) {
//            return "ID가 존재합니다.";
            return new ResponseEntity<>(headers, HttpStatus.MOVED_PERMANENTLY);
        }
        // 비밀번호 = 비밀번호 체크 여부 확인
        if (!joinRequest.getPassword().equals(joinRequest.getPasswordCheck())) {
//            return "비밀번호가 일치하지 않습니다.";
            return new ResponseEntity<>(headers, HttpStatus.MOVED_PERMANENTLY);
        }
        // id email 형식인지 체크
        String emailRegex = "^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$";
        if(!Pattern.compile(emailRegex).matcher(joinRequest.getLoginId()).matches()){
//            return "ID가 email 형식이 아닙니다.";
            return new ResponseEntity<>(headers, HttpStatus.MOVED_PERMANENTLY);
        }
        // 에러가 존재하지 않을 시 joinRequest 통해서 회원가입 완료
        memberService.securityJoin(joinRequest);
        // 회원가입 시 홈 화면으로 이동
        headers.setLocation(URI.create(WebConfig.LOGIN));
        return new ResponseEntity<>(headers, HttpStatus.MOVED_PERMANENTLY);
//        return "redirect:" + WebConfig.DOMAIN;
    }
    @GetMapping("login/google")
    public String googleLogin() {
        String redirect = "redirect:" + WebConfig.OAUTH2_GOOGLE;
        log.info("GET - /api/auth/login/oauth2/google - google login\nredirect : {}", redirect);
        return redirect;
    }
    @GetMapping("login/kakao")
    public String kakaoLogin() {
        String redirect = "redirect:" + WebConfig.OAUTH2_KAKAO;
        log.info("GET - /api/auth/login/oauth2/kakao - kakao login\nredirect : {}", redirect);
        return redirect;
    }
}