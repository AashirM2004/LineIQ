package com.example.LineIQ.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Name {

    @JsonProperty("default")
    private String defaultName;

    public String getDefault() {
        return defaultName;
    }

    public void setDefault(String defaultName) {
        this.defaultName = defaultName;
    }
}