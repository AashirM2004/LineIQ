package com.example.LineIQ.client;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component
public class NhlApiClient {

private final RestClient restClient;
private final String baseUrl = "https://api-web.nhle.com/v1/"; // Probably should be stored better

    public NhlApiClient(RestClient.Builder builder) {
        this.restClient = builder
                         .baseUrl(this.baseUrl) 
                         .build();
    }



    
}
