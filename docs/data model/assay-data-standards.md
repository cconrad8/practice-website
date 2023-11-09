---
sidebar_position: 2
---

# Assay Data Standards

## Describing Assay Data

### File-level Metadata

Assay-specific metadata is collected for uploaded data files. 
Metadata needed for sequencing `.fastq` files from a sequencing assay is different from metadata for `.tiff` files from an imaging assay -- therefore a different metadata template is provided for each of these data types. 

Moreover, even with the same assay, the output from different levels of processing will require different metadata templates. 
The "raw" sequencing `.fastq` data from RNA-seq require somewhat different annotations than the summarized expression data. 

Our concept of data levels is highly derived from the [Genomics Data Commons data levels](https://gdc.cancer.gov/resources-tcga-users/tcga-code-tables/data-levels). 

### Dataset-level Metadata

The files are grouped together and shared as a dataset. 
A dataset is later published and catalogued in the portal once the team is ready to release the data (i.e. once the paper has been published). 
