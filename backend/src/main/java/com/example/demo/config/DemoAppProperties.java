package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.boot.context.properties.ConfigurationProperties;


@Configuration
@ConfigurationProperties(prefix = "myapp.project")

public class DemoAppProperties {

    private String title;
    private int maxSizeMb;

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public int getMaxSizeMb() { return maxSizeMb; }
    public void setMaxSizeMb(int maxSizeMb) { this.maxSizeMb = maxSizeMb; }
}
