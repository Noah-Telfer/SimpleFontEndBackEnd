package com.example.demo.dto;

import com.example.demo.model.BasePdf;
import jakarta.validation.constraints.*;

public class PdfRequest extends BasePdf {
    // You can add request-specific fields or methods here if needed
    @NotNull
    public String getTitle() {
        return super.getTitle();
    }

    @NotNull
    public String getAuthor() {
        return super.getAuthor();
    }

    @NotNull
    public String getBase64Content() {
        return super.getBase64Content();
    }

    @NotNull
    public String getDescription() {
        return super.getDescription();
    }

    public PdfRequest( String title, String author, String description, String base64Content) {
        this.setTitle(title);
        this.setAuthor(author);
        this.setDescription(description);
        this.setBase64Content(base64Content);
    }
}