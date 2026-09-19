package com.example.LineIQ.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class RegularSeason {

    private Integer gamesPlayed;
    private Integer goals;
    private Integer assists;
    private Integer points;

    public Integer getGamesPlayed() {
        return gamesPlayed;
    }

    public Integer getGoals() {
        return goals;
    }

    public Integer getAssists() {
        return assists;
    }

    public Integer getPoints() {
        return points;
    }

    public void setGamesPlayed(Integer gamesPlayed) {
        this.gamesPlayed = gamesPlayed;
    }

    public void setGoals(Integer goals) {
        this.goals = goals;
    }

    public void setAssists(Integer assists) {
        this.assists = assists;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }
}