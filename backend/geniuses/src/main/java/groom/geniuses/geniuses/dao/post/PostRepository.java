package groom.geniuses.geniuses.dao.post;

import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRepository extends JpaRepository<Post, String> {

    List<Post> findAllByOrderByPostAtDesc(Pageable pageable);

    Post findByPostId(String postId);
}