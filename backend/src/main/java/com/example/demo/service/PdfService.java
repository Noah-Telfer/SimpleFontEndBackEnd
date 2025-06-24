package com.example.demo.service;

import org.springframework.stereotype.Service;

import com.example.demo.dto.PdfRequest;
import com.example.demo.dto.PdfResponse;
import com.example.demo.dto.PdfSummary;
import com.example.demo.model.PdfDocument;
import com.example.demo.repository.PdfRepository;
import java.util.Optional;
import java.util.List;
import java.util.Date;


@Service
public class PdfService {
    private final PdfRepository pdfRepository;


    // Methods used by the /pdf get endpoint
        public List<PdfSummary> getAllPdfSummaries() {
        // Fetch all PDF summaries from DB or storage
        // Example static list:
        return pdfRepository.findAllSummaries()
            .stream()
            .map(projection -> new PdfSummary(
                projection.getId(),
                projection.getTitle(),
                projection.getDescription(),
                projection.getAuthor(),
                projection.getCreateDateAndTime()
                , projection.getUpdateDateAndTime()
            ))
            .toList();
    }

    // Method used by the /pdf get endpoint with id
    public PdfResponse getPdf(String pdfId) {
        
        // Fetch PDF and encode as base64
        PdfResponse response = new PdfResponse();
        // Need to confirm ID is Valid
        PdfDocument pdfDocument = pdfRepository.findById(pdfId)
            .orElseThrow(() -> new IllegalArgumentException("PDF with ID " + pdfId + " not found"));
        // If valid ID then fetch the PDF details from DB or storage
        
            response.setId(pdfDocument.getId());
            response.setTitle(pdfDocument.getTitle());
            response.setAuthor(pdfDocument.getAuthor());
            response.setDescription(pdfDocument.getDescription());
            response.setBase64(pdfDocument.getBase64Content());
            response.setCreateDateAndTime(pdfDocument.getCreateDateAndTime());
            response.setUpdateDateAndTime(pdfDocument.getUpdateDateAndTime());
        

        return response;
    }


    // Method used by the /pdf post endpoint
    // This method creates a new PDF document based on the provided PdfRequest
    public PdfDocument createPdf(PdfRequest pdfRequest) {
        PdfDocument pdf = new PdfDocument();
        pdf = pdf.toPdfDocument(pdfRequest);
        Date now = new Date();
        pdf.setCreateDateAndTime(now);
        pdf.setUpdateDateAndTime(now);
        return pdfRepository.save(pdf);
    }

    // Method used by the /pdf?id= post endpoint
    public PdfDocument updatePdf(String id, PdfRequest pdfRequest) {
        Optional<PdfDocument> optionalPdf = pdfRepository.findById(id);
        if (optionalPdf.isPresent()) {
            PdfDocument pdf = optionalPdf.get();
            pdf.setTitle(pdfRequest.getTitle());
            pdf.setAuthor(pdfRequest.getAuthor());
            pdf.setDescription(pdfRequest.getDescription());
            pdf.setBase64Content(pdfRequest.getBase64Content());
            pdf.setUpdateDateAndTime(new Date());
            return pdfRepository.save(pdf);
        } else {
            throw new IllegalArgumentException("PDF with ID " + id + " not found");
        }
    }

    // Dependency injection for PdfRepository
    // This constructor is used by Spring to inject the PdfRepository bean
    public PdfService(PdfRepository pdfRepository) {
        this.pdfRepository = pdfRepository;
    }

    // Additional methods for managing PDF documents
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

    public boolean existsByTitle(String title) {
        return !pdfRepository.findByTitleContainingIgnoreCase(title).isEmpty();
    }
}
