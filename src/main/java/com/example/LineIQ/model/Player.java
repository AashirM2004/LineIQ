package com.example.LineIQ.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Player{

    private Long playerId;
    private Name firstName;
    private Name lastName;
    private String position;
    private Integer sweaterNumber;

    public Player(Long playerId, Name firstName, Name lastName, String position, Integer number) {
        this.playerId = playerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.sweaterNumber = number;
    }

    public Long getPlayerId()
    {
        return playerId;
    }

    public String getFirstName()
    {
        return firstName.getDefault();
    }

    public String getLastName()
    {
        return lastName.getDefault();
    }

    public String getPosition()
    {
        return position;
    }

    public Integer getSweaterNumber()
    {
        return sweaterNumber;
    }

    public void setPlayerId(Long playerId)
    {
        this.playerId = playerId;
    }

    public void setFirstName(String firstName)
    {
        this.firstName.setDefault(firstName);
    }

    public void setLastName(String lastName)
    {
        this.lastName.setDefault(lastName);;
    }

    public void setPosition(String position)
    {
        this.position = position;
    }

    public void setSweaterNumber(Integer number)
    {
        this.sweaterNumber = number;
    }
}