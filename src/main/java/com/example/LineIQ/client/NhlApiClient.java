package com.example.LineIQ.client;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

import com.example.LineIQ.model.Player;

@Component
public class NhlApiClient {

private final RestClient restClient;
private final String baseUrl = "https://api-web.nhle.com/v1/"; // Probably should be stored better

    public NhlApiClient(RestClient.Builder builder) {
        this.restClient = builder
                         .baseUrl(this.baseUrl) 
                         .build();
    }

    public String fetchPlayer() {
    return restClient.get()
            .uri("/player/8477939/landing")
            .retrieve()
            .body(String.class);
}
    
}
