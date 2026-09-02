package com.example.LineIQ.service;

import org.springframework.stereotype.Service;

import com.example.LineIQ.client.NhlApiClient;
import com.example.LineIQ.model.Player;

@Service
public class PlayerService {
    private final NhlApiClient client;
    
    public PlayerService(NhlApiClient client) {
        this.client = client;
    }
    
    public String getPlayer() {
        return client.fetchPlayer();
    }

}
