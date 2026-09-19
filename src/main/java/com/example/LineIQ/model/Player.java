package com.example.LineIQ.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.time.LocalDate;
import java.time.Period;
import java.time.format.DateTimeParseException;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Player{

    private Long playerId;
    private Name firstName;
    private Name lastName;
    private String position;
    private Integer sweaterNumber;
    private String currentTeamAbbrev;
    private String birthDate;   
    private String teamLogo;
    private Integer age;
    private CareerTotals careerTotals;

    public Player(Long playerId, Name firstName, Name lastName, String position, Integer number, String currentTeamAbbrev, String birthDate, String teamLogo, CareerTotals careerTotals) {
        this.playerId = playerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.sweaterNumber = number;
        this.currentTeamAbbrev = currentTeamAbbrev;
        this.birthDate = birthDate;
        this.teamLogo = teamLogo;
        this.age = convertBirthDateToAge();
        this.careerTotals = careerTotals;
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

    public String getCurrentTeamAbbrev()
    {
        return currentTeamAbbrev;
    }

    public String getBirthDate()
    {
        return birthDate;
    }

    public String getTeamLogo()
    {
        return teamLogo;
    }

    public Integer getAge()
    {
        return age;
    }

    public CareerTotals getCareerTotals()
    {
        return careerTotals;
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

    public void setCurrentTeamAbbrev(String currentTeamAbbrev)
    {
        this.currentTeamAbbrev = currentTeamAbbrev;
    }

    public void setBirthDate(String birthDate)
    {
        this.birthDate = birthDate;
    }

    public void setTeamLogo(String teamLogo)
    {
        this.teamLogo = teamLogo;
    }

    public void setAge(Integer age)
    {
        this.age = age;
    }
    
    public void setCareerTotals(CareerTotals careerTotals)
    {
        this.careerTotals = careerTotals;
    }
    
    public Integer convertBirthDateToAge()
    {
        if (birthDate == null || birthDate.isEmpty()) {
            return null;
        }

        try {
            LocalDate birth = LocalDate.parse(birthDate);
            LocalDate today = LocalDate.now();

            return Period.between(birth, today).getYears();

        } catch (DateTimeParseException e) {
            return null;
        }
    }
}