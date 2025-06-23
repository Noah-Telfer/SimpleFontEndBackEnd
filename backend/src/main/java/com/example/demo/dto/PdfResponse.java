package com.example.demo.dto;

import java.util.Date;

public class PdfResponse {
    private String base64;
    private String id;
    private String description;
    private String title;
    private String author;
    private Date createDateAndTime;
    private Date updateDateAndTime;  
    

    
    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
    public Date getCreateDateAndTime() {
        return createDateAndTime;
    }

    public void setCreateDateAndTime(Date createDateAndTime) {
        this.createDateAndTime = createDateAndTime;
    }

    public Date getUpdateDateAndTime() {
        return updateDateAndTime;
    }
    
    public void setUpdateDateAndTime(Date updateDateAndTime) {
        this.updateDateAndTime = updateDateAndTime;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    public String getBase64() {
        return base64;
    }

    public void setBase64(String base64) {
        this.base64 = base64;
    }
}