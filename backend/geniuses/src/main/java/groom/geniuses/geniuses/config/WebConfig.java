package groom.geniuses.geniuses.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
    public static final String DOMAIN = "http://localhost:3000"; // 로컬용
    //    public static final String DOMAIN = "[도메인]"; // 배포용

    public static final String HOME = DOMAIN;
    public static final String LOGIN = DOMAIN + "/login";
    public static final String SIGNUP = DOMAIN + "/signup";
    public static final String OAUTH2_GOOGLE = "/oauth2/authorization/google";
    public static final String OAUTH2_KAKAO = "/oauth2/authorization/kakao";
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000", "http://localhost:8080", DOMAIN) // 허용할 출처
                .allowedMethods("GET", "POST", "PATCH", "PUT", "DELETE") // 허용할 HTTP method
                .allowedHeaders("Authorization", "RefreshToken", "Content-Type")
                .allowCredentials(true) // 쿠키 인증 요청 허용
                .maxAge(3000); // 원하는 시간만큼 pre-flight 리퀘스트를 캐싱
    }
}
