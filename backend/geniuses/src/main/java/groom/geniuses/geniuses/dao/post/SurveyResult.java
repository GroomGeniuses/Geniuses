package groom.geniuses.geniuses.dao.post;

import groom.geniuses.geniuses.dao.user.Member;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "survey_result")
@Getter
@Setter
public class SurveyResult {

    @Id
    private String applicantId;

    private String answer;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private Member user;

    @ManyToOne
    @JoinColumn(name = "survey_id", nullable = false)
    private Survey survey;

    private String surveyResult;
}