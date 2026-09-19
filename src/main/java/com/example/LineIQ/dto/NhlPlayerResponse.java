package com.example.LineIQ.dto;

import com.example.LineIQ.model.CareerTotals;
import com.example.LineIQ.model.Name;
import com.example.LineIQ.model.RegularSeason;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class NhlPlayerResponse {

    private Long playerId;

    private Name firstName;

    private Name lastName;

    private String position;

    private Integer sweaterNumber;

    private String currentTeamAbbrev;

    private String birthDate;

    private String teamLogo;

    private CareerTotals careerTotals;

    private RegularSeason regularSeason;

    public Long getPlayerId() {
        return playerId;
    }

    public Name getFirstName() {
        return firstName;
    }

    public Name getLastName() {
        return lastName;
    }

    public String getPosition() {
        return position;
    }

    public Integer getSweaterNumber() {
        return sweaterNumber;
    }

    public String getCurrentTeamAbbrev() {
        return currentTeamAbbrev;
    }

    public String getBirthDate() {
        return birthDate;
    }

    public String getTeamLogo() {
        return teamLogo;
    }

    public CareerTotals getCareerTotals() {
        return careerTotals;
    }

    public RegularSeason getRegularSeason() {
        return regularSeason;
    }
}
