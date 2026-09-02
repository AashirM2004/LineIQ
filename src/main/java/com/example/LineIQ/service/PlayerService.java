package com.example.LineIQ.service;

import org.springframework.stereotype.Service;

@Service
public class PlayerService {
    private final NhlApiClient client;
    
    public PlayerService(NhlApiClient client) {
        this.client = client;
    }
    
    public List<Player> getPlayers() {
        return client.fetchPlayers();
    }

}
