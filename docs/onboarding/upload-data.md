---
sidebar_position: 4
---

# Uploading Data

First, make sure you know where your data should go. Most data have a pre-designated folder, and data are organized by assay and then the level of data. You can often create subfolders if you prefer further organization by batches.

### Using the UI
The UI is only recommended for smaller numbers of files and files under ~100Mb in size. In the designated folder, go to to the Folder Tools menu to see upload options. General documentation for the UI can be found here(opens in a new tab).

### Programmatic clients
This is suitable for larger and more numerous files and allows for more efficient and streamlined uploading. Three clients exist: the command line tool, Python script, or R. For all options refer to the documentation here(opens in a new tab).

### Most typical workflow
The command-line workflow should be familiar to you if you are a bioinformatician/data engineer/data scientist. If you need help, please contact the DCC.

### For the most typical and robust workflow, here are the steps with the Python command-line client:

- Install Python package from PyPI: https://pypi.org/project/synapseclient/(opens in a new tab). This will also automatically install the command line utility. Test out that the command line utility is working by typing synapse help and feel free to review docs(opens in a new tab) for the Python CLI client.
- For large uploads, it is best to create an access token, if you haven't already through the earlier Account Setup guidance. Go to your Account profile > Account Settings > Personal Access Tokens > Create new token.
- For convenience, copy and paste the token into a .synapseConfig text file. This text file looks like:
[authentication]
authtoken = sometokenstringxxxxxxxxxxxxxxxxxx
First, you need to create a list of files to transfer (called a manifest). The parent-id is the Synapse folder you are trying to upload files to.
synapse manifest --parent-id syn12345678 --manifest-file manifest.txt PATH_TO_DIR_WITH_FILES

At this step, if you are not a Certified User, the tool will output a message for this issue. Review and complete the Certified User portion of Account Setup before proceeding.

Successful execution should create a manifest file manifest.txt for the tool to use. Now make sure that .synapseConfig is present locally to provide authentication. You can now do:
synapse sync manifest.txt

There are options for retries if you might have poor connection, e.g.

synapse sync --retries 3 manifest.txt

One-off uploads
For just a few files (but maybe still very large-size files) where you don't need to create a list of files, a more convenient command might be:

synapse store my_image.tiff --parentId syn12345678

Alternative methods
Under rare unique circumstances, the DCC can explore the following options:

Receiving data via physical hard drive
Utilizing Globus transfers (if really needed)
Transferring from a custom S3 bucket



4. Data release

Once data has been uploaded and annotated, they can be reviewed for any issues, assigned a DOI (especially to use in a publication), and shared in other apps or made public. However, this does not usually happen right after data upload because of the embargo/holding period where it has to be confirmed that data can be moved to the next phase.

Bring data to cBioPortal, CELLxGENE, etc.
The DCC will coordinate on this manually once data is available in Synapse.

Adding a DOI
This can be done to include in a publication by you directly or with help from DCC.