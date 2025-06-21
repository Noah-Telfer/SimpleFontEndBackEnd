package com.example.demo.dto;

import com.example.demo.model.BasePdf;;

public class PdfRequest extends BasePdf {
    // You can add request-specific fields or methods here if needed

    public PdfRequest() {
        super();
    }

    public PdfRequest( String title, String author, String description, String base64Content) {
        this.setTitle(title);
        this.setAuthor(author);
        this.setDescription(description);
        this.setBase64Content(base64Content);
    }
}