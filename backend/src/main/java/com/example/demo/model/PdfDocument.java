package com.example.demo.model;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.example.demo.dto.PdfRequest;

@Document(collection = "pdfs")
public class PdfDocument {
    @Id
    private String id;
    private String title;
    private String author;
    private String description;
    private String base64Content;
    private Date createDateAndTime;
    private Date updateDateAndTime;
    // getters and setters
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

    public PdfDocument toPdfDocument(PdfRequest request) {
        PdfDocument doc = new PdfDocument();
        doc.setTitle(request.getTitle());
        doc.setAuthor(request.getAuthor());
        doc.setDescription(request.getDescription());
        doc.setBase64Content(request.getBase64Content());
        // Set timestamps, id, etc. as needed
        return doc;
}
}