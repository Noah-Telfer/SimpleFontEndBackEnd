package com.example.demo;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
    @GetMapping("/")
    public String home() {
        return "Backend is working!";
    }

    @GetMapping("/api/hello")
    public String hello() {
        return "Hello from the backend!";
    }
}

