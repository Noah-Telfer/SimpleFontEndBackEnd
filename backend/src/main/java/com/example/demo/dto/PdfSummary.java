package com.example.demo.dto;

import java.util.Date;

public class PdfSummary {
    private String id;
    private String description;
    private String title;
    private String author;  
    private Date createDateAndTime;  
    private Date  updateDateAndTime;  
    
    public PdfSummary(String id, String description, String title, String author, Date createDateAndTime, Date updateDateAndTime) {
        this.id = id;
        this.description = description;
        this.title = title;
        this.author = author;
        this.createDateAndTime = createDateAndTime;
        this.updateDateAndTime = updateDateAndTime;
    }

    // getters and setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }
    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }
    public String getAuthor() { return author; }
    public void setAuthor(String author) { this.author = author; }
    public Date getCreateDateAndTime() { return createDateAndTime; }
    public void setCreateDateAndTime(Date createDateAndTime) { this.createDateAndTime = createDateAndTime; }
    public Date getUpdateDateAndTime() { return updateDateAndTime; }
    public void setUpdateDateAndTime(Date updateDateAndTime) { this.updateDateAndTime = updateDateAndTime; }


}