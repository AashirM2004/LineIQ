package com.example.LineIQ.service;

import org.springframework.stereotype.Service;
import java.util.List;

import com.example.LineIQ.client.NhlApiClient;
import com.example.LineIQ.model.Player;
import com.example.LineIQ.model.PlayerSearch;

@Service
public class PlayerService {
    private final NhlApiClient client;
    
    public PlayerService(NhlApiClient client) {
        this.client = client;
    }
    
    public Player getPlayerViaID(Long id) {
        return client.fetchPlayerViaID(id);
    }

    public List<PlayerSearch> getPlayerViaSearch(String name) {
        return client.fetchPlayerViaSearch(name);
    }

}