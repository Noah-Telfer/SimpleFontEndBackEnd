package com.example.demo.projection;

import java.util.Date;

public interface PdfSummaryProjection {
    String getId();
    String getDescription();
    String getTitle();
    String getAuthor();
    Date getCreateDateAndTime();
    Date getUpdateDateAndTime();
}

