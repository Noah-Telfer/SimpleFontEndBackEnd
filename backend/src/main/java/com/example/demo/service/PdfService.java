package com.example.demo.service;

import org.springframework.stereotype.Service;
import com.example.demo.dto.PdfResponse;
import com.example.demo.dto.PdfSummary;
import java.util.List;
import java.util.Arrays;

@Service
public class PdfService {
    public PdfResponse getPdf(String pdfId) {
        // Fetch PDF and encode as base64
        PdfResponse response = new PdfResponse();
        // Need to confirm ID is Valid

        // If valid ID then fetch the PDF details from DB or storage

        // Set the response details based on the fetched PDF
        response.setBase64("..."); // actual base64
        
        return response;
    }

    public List<PdfSummary> getAllPdfSummaries() {
        // Fetch all PDF summaries from DB or storage
        // Example static list:
        return Arrays.asList(
            new PdfSummary() {{ setId("1"); setDescription("First PDF"); }},
            new PdfSummary() {{ setId("2"); setDescription("Second PDF"); }}
        );
    }
}
