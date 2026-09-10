package com.example.LineIQ.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


import com.example.LineIQ.model.Player;
import com.example.LineIQ.service.PlayerService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class PlayerController {
 private final PlayerService service;

    public PlayerController(PlayerService service) {
        this.service = service;
    }  

    @GetMapping("/player/{id}")
    public Player getPlayer(@PathVariable Long id) {
        return service.getPlayer(id);
    }   
    
}
