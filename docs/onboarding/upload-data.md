---
sidebar_position: 4
---

# Uploading Data

Before you begin, identify the destination for your data. Most data are organized in pre-assigned folders based on assay and data levels. You can create subfolders for additional organization, especially for batch-specific data.

#### Using Synapse User Interface (UI)

The UI is suitable for smaller files less than 100MB. In the designated folder, access the Folder Tools menu for upload options. Refer to the general UI documentation for details.

#### Programmatic Clients

For larger and numerous files, use programmatic clients for efficient uploading. Options include the command-line tool, Python script, or R. Find detailed documentation for each option. Reach out to the DCC for assistance.

#### Typical Workflow with Python Command-Line Client

1. **Install Python Package**: Install the Synapse Python package from [PyPI](https://pypi.org/project/synapseclient/). This will also automatically install the command line utility. Test out that the command line utility is working by typing `synapse help` and feel free to review [docs](https://python-docs.synapse.org/build/html/index.html) for the Python CLI client.

2. **Create Access Token**: For large uploads, it is best to create an access token. Go to your Account profile > Account Settings > Personal Access Tokens > Create new token.

3. **Create Configuration File**: For convenience, copy and paste the token into a `.synapseConfig` text file:

    ```plaintext
    [authentication]
    authtoken = sometokenstringxxxxxxxxxxxxxxxxxx
    ```

4. **Create Manifest File**: Create a list of files to transfer (called a manifest). The parent-id is the Synapse folder you are trying to upload files to:

    ```bash
    synapse manifest --parent-id syn12345678 --manifest-file manifest.txt PATH_TO_DIR_WITH_FILES
    ```

5. **Certified User Check**: If you are not a Certified User, the tool will output a message. Review and complete the Certified User portion of Account Setup before proceeding.

6. **Execute Sync Command**: Successful execution should create a manifest file `manifest.txt`. Ensure that `.synapseConfig` is present locally to provide authentication:

    ```bash
    synapse sync manifest.txt
    ```

    Options for retries in case of a poor connection:

    ```bash
    synapse sync --retries 3 manifest.txt
    ```

#### One-off Uploads

For just a few files, a more convenient command might be:

```bash
synapse store my_image.tiff --parentId syn12345678
```

#### Alternative Methods

Under rare unique circumstances, the DCC can explore the following options:

- Receiving data via physical hard drive
- Utilizing Globus transfers (if really needed)
- Transferring from a custom S3 bucket

Feel free to adjust or customize it according to your needs!