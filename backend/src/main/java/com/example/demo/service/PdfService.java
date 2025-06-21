package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dto.PdfRequest;
import com.example.demo.dto.PdfResponse;
import com.example.demo.dto.PdfSummary;
import com.example.demo.model.PdfDocument;
import com.example.demo.repository.PdfRepository;
import java.util.Optional;
import java.util.List;
import java.util.Arrays;
import java.util.Date;


@Service
public class PdfService {
    private final PdfRepository pdfRepository;


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


    public PdfDocument createPdf(PdfRequest pdfRequest) {
        PdfDocument pdf = new PdfDocument();
        pdf = pdf.toPdfDocument(pdfRequest);
        Date now = new Date();
        pdf.setCreateDateAndTime(now);
        pdf.setUpdateDateAndTime(now);
        return pdfRepository.save(pdf);
    }

    public PdfService(PdfRepository pdfRepository) {
        this.pdfRepository = pdfRepository;
    }

    public PdfDocument save(PdfDocument pdf) {
        return pdfRepository.save(pdf);
    }

    public Optional<PdfDocument> findById(String id) {
        return pdfRepository.findById(id);
    }

    public List<PdfDocument> findAll() {
        return pdfRepository.findAll();
    }

    public void deleteById(String id) {
        pdfRepository.deleteById(id);
    }
}
