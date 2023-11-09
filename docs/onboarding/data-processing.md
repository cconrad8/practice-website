---
sidebar_position: 5
---

# Data Organization

Data is organized by its assay type and, logically, its processed type in folders. 
Each top-level folder and all of its subfolders must contain data of the same type (see details below).

The DCC will create empty, common top-level folders as well as subfolders for the expected levels of data. 
This depends on whether both raw or processed data are expected. 
Sometimes only raw data or only processed data is expected. 
If only one level of data is expected, everything is "collapsed" into only one folder and there are no subfolders.
Subfolders must be of the same data type and level as the root folder they are contained. 

```plaintext
└── single_cell_RNA_seq
    ├── single_cell_RNA_seq_level1
        ├── fileA.fastq
        ├── fileB.fastq
        ├── fileC.fastq
        └── fileD.fastq
    ├── single_cell_RNA_seq_level2
        ├── fileA.bam
        ├── fileB.bam
        ├── fileC.bam
        └── fileD.bam
    ├── single_cell_RNA_seq_level3
        ├── raw_counts.txt
        ├── normalized_counts.txt
    ├── single_cell_RNA_seq_level4
        ├── t-SNE.txt
```

By understanding the data generation process, the Data Coordination Center (DCC) can effectively collaborate with each team to address the following questions:

- What are the different types of data that will be generated, and how can the data artifacts from this workflow be optimally handled and managed?
- Are there any recommendations that can be provided to ensure a smooth workflow and avoid potential issues in the downstream analysis?
- What additional resources can the DCC offer, if available?

### Data Processing by the Project Team

Depending on their funded aims, project teams may have specialized data workflows, which can include:

- Generating sequencing data and deriving data using multiple variant calling pipelines.
- Producing high-resolution images and extracting summary features from images.
- Combining different types of data.

During the onboarding process, it is essential to discuss the anticipated workflow, especially if it is complex or deviates from the standard. Project teams should provide information or documentation regarding their workflow.

### Data Processing by the DCC

In addition to the project team's data processing, the DCC also performs data processing on the uploaded data in Synapse. This processing includes:

- Quality control assessments.
- File format conversions.
- Other necessary data transformations to facilitate data loading and sharing in cBioPortal or other analysis applications.

