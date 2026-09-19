package com.example.LineIQ.client;

import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;
import org.springframework.core.ParameterizedTypeReference;
import java.util.List;

import com.example.LineIQ.model.Player;
import com.example.LineIQ.model.PlayerSearch;
import com.example.LineIQ.model.RegularSeason;
import com.example.LineIQ.dto.NhlPlayerResponse;

@Component
public class NhlApiClient {

private final RestClient restClient;
private final RestClient searchClient;
private final String baseUrl = "https://api-web.nhle.com/v1/"; // Probably should be stored better
private final String searchUrl = "https://search.d3.nhle.com/api/v1"; 

    public NhlApiClient(RestClient.Builder builder) {
        this.restClient = builder
                         .baseUrl(this.baseUrl) 
                         .build();
        this.searchClient = builder
                         .baseUrl(this.searchUrl)
                         .build();
    }

    public Player fetchPlayerViaID(Long id) {

    NhlPlayerResponse response = restClient.get()
        .uri("/player/" + id + "/landing")
        .retrieve()
        .body(NhlPlayerResponse.class);

    return new Player(
        response.getPlayerId(),
        response.getFirstName(),
        response.getLastName(),
        response.getPosition(),
        response.getSweaterNumber(),
        response.getCurrentTeamAbbrev(),
        response.getBirthDate(),
        response.getTeamLogo(),
        response.getCareerTotals()
    );
}

    public List<PlayerSearch> fetchPlayerViaSearch(String name) {
        return searchClient.get()
            .uri(uriBuilder -> uriBuilder
                    .path("/search/player")
                    .queryParam("culture", "en-us")
                    .queryParam("limit", 10)
                    .queryParam("q", name)
                    .build())
            .retrieve()
            .body(new ParameterizedTypeReference<List<PlayerSearch>>() {});
    }

}
