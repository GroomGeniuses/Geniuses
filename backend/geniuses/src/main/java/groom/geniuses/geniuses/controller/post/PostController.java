package groom.geniuses.geniuses.controller.post;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import groom.geniuses.geniuses.dao.post.Post;
import groom.geniuses.geniuses.dto.post.PostBoardDTO;
import groom.geniuses.geniuses.dto.post.PostDTO;
import groom.geniuses.geniuses.service.post.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;


@RestController
@RequestMapping("/api/post")
public class PostController {

    private final ObjectMapper objectMapper;

    private final PostService postService;

    public PostController(ObjectMapper objectMapper, PostService postService) {
        this.objectMapper = objectMapper;
        this.postService = postService;
    }

    // /api/post
    // 글 목록 가져오기
    @GetMapping("")
    public PostBoardDTO fetchPostList(@RequestBody String json) throws JsonProcessingException {

        Map<String, Object> body = objectMapper.readValue(json, Map.class);

        int page = 0;
        int pageSize = 20;

        if (body.containsKey("page")) {
            page = (Integer) body.get("page");
        }
        if (body.containsKey("pageSize")) {
            pageSize = (Integer) body.get("pageSize");
        }

        return postService.getPostBoard(page, pageSize);
    }

    @GetMapping("post/{postId}")
    public PostDTO getPostByPostId(@PathVariable String postId) throws Exception {
        return postService.getPostByPostId(postId);
    }

    @PostMapping("post")
    public String createPost(@RequestBody PostDTO postDTO) {
        Post createdPost = postService.createPost(postDTO);
        return createdPost.getPostId();
    }

    @PutMapping("post/{postId}")
    public void updatePost(@PathVariable String postId, @RequestBody PostDTO postDTO) {
        Post updatePost = postService.updatePost(postId, postDTO);
    }

    @DeleteMapping("post/{postId}")
    public void deletePost(@PathVariable String postId) {
        postService.deletePost(postId);
    }

}
