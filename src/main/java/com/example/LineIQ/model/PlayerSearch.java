package com.example.LineIQ.model;


public class PlayerSearch {
    private String playerId;
    private String name;
    private String positionCode;
    private String teamAbbrev;
    private Integer sweaterNumber;
    private Boolean active;


    public String getPlayerId() {
        return playerId;
    }

    public String getName() {
        return name;
    }

    public  String getPositionCode() {
        return positionCode;
    }

    public String getTeamAbbrev() {
        return teamAbbrev;
    }

    public Integer getSweaterNumber() {
        return sweaterNumber;
    }

    public Boolean getIsActive() {
        return active;
    }

    public void setPlayerId(String playerId) {
        this.playerId = playerId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPositionCode(String positionCode) {
        this.positionCode = positionCode;
    }

    public void setTeamAbbrev(String teamAbbrev) {
        this.teamAbbrev = teamAbbrev;
    }

    public void setSweaterNumber(Integer sweaterNumber) {
        this.sweaterNumber = sweaterNumber;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }
}
