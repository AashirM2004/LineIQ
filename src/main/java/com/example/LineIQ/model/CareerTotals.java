package com.example.LineIQ.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class CareerTotals {

    private RegularSeason regularSeason;

    public RegularSeason getRegularSeason() {
        return regularSeason;
    }

    public void setRegularSeason(RegularSeason regularSeason) {
        this.regularSeason = regularSeason;
    }
}