package com.example.demo.repository;
import com.example.demo.model.PdfDocument;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.demo.projection.PdfSummaryProjection;


public interface PdfRepository extends MongoRepository<PdfDocument, String> {
    
    @Query(value = "{}", fields = "{ 'id' : 1, 'description' : 1, 'title' : 1, 'author' : 1, 'createDateAndTime' : 1, 'updateDateAndTime' : 1 }")
    List<PdfSummaryProjection> findAllSummaries();
    
    List<PdfDocument> findByTitleContainingIgnoreCase(String title);

    
}
