package com.example.demo.repository;
import com.example.demo.model.PdfDocument;
import org.springframework.data.mongodb.repository.MongoRepository; 

public interface PdfRepository extends MongoRepository<PdfDocument, String> {

    // Custom query methods can be defined here if needed
    // For example, to find PDFs by author or title

    // Example:
    // List<Pdf> findByAuthor(String author);
    // List<Pdf> findByTitleContaining(String title);
    
    // No additional methods are required for basic CRUD operations
    
}
