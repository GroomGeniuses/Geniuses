package groom.geniuses.geniuses.dao.post;

import groom.geniuses.geniuses.dao.user.Member;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "interest")
@Getter
@Setter
public class Interest {

    @Id
    private String interestId;

    private String interestAt;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Member user;

    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;

}