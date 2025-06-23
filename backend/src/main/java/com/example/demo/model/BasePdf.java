package com.example.demo.model;


public class BasePdf {
    private String id;
    private String title;
    private String author;
    private String description;
    private String base64Content;
    private String createDateAndTime;
    private String updateDateAndTime;

        public BasePdf() {}
    
        public BasePdf(String id, String title, String author, String description, String base64Content, String createDateAndTime, String updateDateAndTime) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.description = description;
        this.base64Content = base64Content;
        this.createDateAndTime = createDateAndTime;
        this.updateDateAndTime = updateDateAndTime;
    }

    // Getters and Setters
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
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
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getBase64Content() {
        return base64Content;
    }
    public void setBase64Content(String base64Content) {
        this.base64Content = base64Content;
    }
    public String getCreateDateAndTime() {
        return createDateAndTime;
    }
    public void setCreateDateAndTime(String createDateAndTime) {
        this.createDateAndTime = createDateAndTime;
    }
    public String getUpdateDateAndTime() {
        return updateDateAndTime;
    }
    public void setUpdateDateAndTime(String updateDateAndTime) {
        this.updateDateAndTime = updateDateAndTime;
    }
}