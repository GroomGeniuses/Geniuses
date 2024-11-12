package groom.geniuses.geniuses.dao.post;

import groom.geniuses.geniuses.dao.user.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Member, String> {

}