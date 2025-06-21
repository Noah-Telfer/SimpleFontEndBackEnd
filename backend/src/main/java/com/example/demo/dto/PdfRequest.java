package com.example.demo.dto;

public class PdfRequest {
    private String documentName;
    private String documentDescription;
    private String content;
    private String author;

    public PdfRequest() {
    }

    public PdfRequest(String documentName, String content, String author) {
        this.documentName = documentName;
        this.content = content;
        this.author = author;
    }

    public String getDocumentName() {
        return documentName;
    }

    public void setDocumentName(String documentName) {
        this.documentName = documentName;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}