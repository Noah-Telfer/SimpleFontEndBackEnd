package com.example.demo.controller;


import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.dto.PdfResponse;
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
}

