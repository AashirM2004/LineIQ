package com.example.LineIQ.model;

public class Player{

    private String firstName;
    private String lastName;
    private String position;
    private int goals;
    private int assists;
    private int points;
    private int number;


    public Player(String firstName, String lastName, String position, int goals, int assists, int points, int number)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.goals = goals;
        this.assists = assists;
        this.points = points;
        this.number = number;
    }

    public String getFirstName()
    {
        return firstName;
    }

    public String getLastName()
    {
        return lastName;
    }

    public String getPosition()
    {
        return position;
    }

    public int getGoals()
    {
        return goals;
    }

    public int getAssists()
    {
        return assists;
    }

    public int getPoints()
    {
        return points;
    }

    public int getNumber()
    {
        return number;
    }

    public void setFirstName(String firstName)
    {
        this.firstName = firstName;
    }

    public void setLastName(String lastName)
    {
        this.lastName = lastName;
    }

    public void setPosition(String position)
    {
        this.position = position;
    }

    public void setGoals(int goals)
    {
        this.goals = goals;
    }

    public void setAssists(int assists)
    {
        this.assists = assists;
    }

    public void setPoints(int points)
    {
        this.points = points;
    }

    public void setNumber(int number)
    {
        this.number = number;
    }
}