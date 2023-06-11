package com.system.seletinha.endpoint.controller;


import com.system.seletinha.endpoint.service.AuthenticationService;
import com.system.seletinha.models.AuthenticationRegisterRequest;
import com.system.seletinha.models.AuthenticationResponse;
import com.system.seletinha.models.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    @PostMapping("/signup")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(service.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRegisterRequest request) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}