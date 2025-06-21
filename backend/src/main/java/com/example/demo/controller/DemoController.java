package com.example.demo.controller;


import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.dto.PdfResponse;
import com.example.demo.dto.PdfRequest;
import com.example.demo.dto.PdfSummary;
import com.example.demo.service.PdfService;
import java.util.List;


@RestController
@RequestMapping("/api")
public class DemoController {

    private final PdfService pdfService;

    @Autowired
    public DemoController(PdfService pdfService) {
        this.pdfService = pdfService;
    }

    @GetMapping("/pdf")
    public Object getPDFFile(@RequestParam(value = "id", required = false) String pdfId) {
        if (pdfId != null && !pdfId.isEmpty()) {
            return pdfService.getPdf(pdfId); // returns PdfResponse
        } else {
            return pdfService.getAllPdfSummaries(); // returns List<PdfSummary>
        }
    }

    @PostMapping("/pdf")
    public String postMethodName(
        @RequestParam(value = "id", required = false) String id,
        @RequestBody PdfRequest pdfRequest
        ) {
        //TODO: process POST request
        
        if (pdfRequest == null) {
            return "Invalid request";
        }
        // Here you would typically save the PDF request to a database or process it
        // For now, we will just return a success message   
        return pdfService.createPdf(pdfRequest).getId(); // returns the ID of the created PDF document
    }
    
}

