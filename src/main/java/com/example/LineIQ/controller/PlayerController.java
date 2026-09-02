package com.example.LineIQ.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.LineIQ.model.Player;
import com.example.LineIQ.service.PlayerService;

@RestController
public class PlayerController {
 private final PlayerService service;

    public PlayerController(PlayerService service) {
        this.service = service;
    }  

    @GetMapping("/players")
    public List<Player> getPlayers() {
        return service.getPlayers();
    }   
    
}
