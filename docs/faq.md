---
sidebar_position: 4
---

# Frequently Asked Questions

<details open>
<summary>Data Sharing 📤 </summary>

- [Why Share Data?](#why-share-data)
- [Data Storage](#data-storage)
- [Data Sharing](#data-sharing)
- [About cBioportal](#about-cbioportal)
- [Using Synapse/Sage Bionetworks Resources](#using-synapse-sage-bionetworks-resources)

</details>

<details>
<summary> More ⬇️ </summary>

- [Data Models](#data-models)
- [What is Metadata?](#what-is-metadata)
- [Submitting Issues Regarding the Data Model](#submitting-issues-regarding-the-data-model)
- [Acronyms](#acronyms)

</details>

### Why Share Data?

**Q:** Why is data sharing important?

**A:** Data sharing is crucial for several reasons:

1. Building connections within the scientific community.
2. Providing a remote repository of data for future researchers.
3. Increasing the visibility of your research.
4. Saving time and advancing scientific discovery.
5. Meeting the requirements of many grants and journals that now require open access to data.

### Data Storage

**Q:** Where is my data stored?

**A:** Your data is stored on [Synapse](https://www.synapse.org/), where you can organize it by specific assays.

### Data Sharing

**Q:** Can I share data before my research paper is published?

**A:** Yes, you have the option to upload your data and keep it privately stored until your research paper is published.

**Q:** What type of data should I share?

**A:** Share data such as omics data, imaging data, clinical data, or any other data that is important for your experiments. Include protocols that allow others to replicate your experiments. If you're unsure, feel free to contact the DCC.

### About cBioportal

**Q:** What is cBioportal?

**A:** cBioportal is an open-source platform that helps visualize molecular and clinical data attributes for specific datasets on Synapse.

### Using Synapse/Sage Bionetworks Resources

**Q:** Can I use Synapse/Sage Bionetworks resources to fulfill the NIH data sharing plan requirements?

**A:** Yes, you can use Synapse/Sage Bionetworks resources to meet the NIH data sharing plan requirements.

### Data Models

**Q:** What is a data model?

**A:** A data model organizes data elements and standardizes how they relate to each other. It explicitly determines the structure of the data. For more information, see [Princeton University's explanation](https://cedar.princeton.edu/understanding-data/what-data-model).

**Q:** Where does the Gray Foundation's data model come from?

**A:** The Gray Foundation's data model is derived from several data standards, such as the [Genomics Data Commons](https://gdc.cancer.gov/about-data/data-standards), but it has also been adapted to fit the needs of the consortium. It outlines, defines, and standardizes how data, like clinical data, are represented and how they relate to each other. For example, how a patient's diagnosis is related to their therapy. One critical relation is between clinical data and generated data, where most generated data in the Gray Foundation need to be linked to the original patients for useful analysis.

### What is Metadata?

**Q:** Is metadata the same as a data model? 

**A:** Metadata is additional standardized information included alongside data to provide context—it's like data about the data. Metadata makes data in the portal searchable, discoverable, accessible, reusable, and understandable to others, even those who were not involved in generating the data. Metadata can be descriptive, administrative (like provenance information), or research-based (like information about the data sampling and handling). For more details, check out the [AD Knowledge Portal Glossary](https://sagebionetworks.jira.com/wiki/spaces/APD/pages/2062254225/Glossary).

### Submitting Issues Regarding the Data Model

**Q:** How can I submit issues related to the data model?

**A:** For questions, discussions, suggestions, or bug reports related to the data model, it's preferred that members [submit an issue at our source repository](https://github.com/gf-dcc/data-model/issues/new). Note that this requires a GitHub account.

### Acronyms

**Q:** What do these acronyms mean?

**A:** Here are some acronyms and their meanings:

- **ACL:** Access Control List (a list of users and teams that control the permissions to an entity).
- **AR:** Access Requirement or Access Restriction (a condition for data access that must be met).
- **BAM:** Bidirectional Associative Memory.
- **BCR:** Biospecimen Core Resource.
- **CNV:** Copy Number Variation.
- **DCC:** Data Coordinating Center.
- **eRA:** Electronic Research Administration.
- **MAGE-TAB:** Microarray Gene Expression - Tabular format.
- **PHI:** Protected Health Information.
- **TARGET:** Therapeutically Applicable Research to Generate Effective Treatments.
- **t-SNE:** t-distributed stochastic neighbor embedding.
- **TSV:** Tab Separated Values.
- **VCFS:** Version Controlled File System.