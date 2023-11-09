---
sidebar_position: 2
---
# Data Access

The data access for Gray Foundation aligns with the general data access types described for the Synapse platform. You can find more details about these access types [here](https://help.synapse.org/docs/Data-Access-Types.2014904611.html).

## Data Access Tags in the Portal

<details>
<summary> Phase 1 Datasets </summary>

##### "PRIVATE"

Phase 1 datasets will most likely not be visible in the portal. If they do appear, the pink "PRIVATE" tag will indicate that the data exists on Synapse but is still undergoing compilation/analysis. At the moment, there is no intention to share this data, so please refrain from contacting the team regarding its availability.

</details>

<details>
<summary> Phase 2 Datasets </summary>

##### "COLLABORATIVE ONLY"

Phase 2 datasets may be visible in the portal but will be labeled as "COLLABORATIVE ACCESS ONLY". Researchers interested in collaboration will need to request access by contacting the Team PI.
- Data is private and can only be downloaded by individuals or teams explicitly granted permission.
- Admins (PIs and Data Leads) for the team's repository can grant view or download access by adding individuals or teams to the folder or project. This allows data to be shared for collaboration without moving it to Phase 3.
- In conversation, this data may also be referred to as being "under embargo".

</details>

<details>
<summary> Phase 3 Datasets </summary>

Phase 3 datasets often consist of data released concurrently with or after publication, although certain access conditions may still apply. Within Phase 3, data is classified into several access categories:

##### "CONTROLLED ACCESS"

- Registered Synapse users can download this data after fulfilling additional requirements such as accepting Conditions of Use, submitting a statement, or obtaining approval from governance.
- For certain controls, even individuals on the Access Control List with download permissions will need to complete the required action to download data, as these controls are implemented through a different data access layer.
- This typically applies to raw sequencing data.

##### "PUBLIC"
- The data can be viewed by anyone on the web, but only registered Synapse users can download it. There are no restrictions or additional steps required for downloading.
- This usually applies to processed data such as summarized gene expression and cell and tissue images.

##### "OPEN"
- Anyone on the web can view and download this data without requiring an account.
- This usually applies to metadata.

</details>

_For more information regarding Synapse governance, please visit [Synapse Help](https://help.synapse.org/docs/Synapse-Governance.2004255211.html)_