---
title: "AI Models: From Extractive to Shared"
description: A matrix of 17 released AI models and two proposals, placed by the licence of their weights and by how they treat the sources of their training data.
---
# AI Models: From Extractive to Shared

*Public analysis for Sovereign Source — 25 November 2026*

**An open licence tells you what you can do with a model. It does not tell you how the model treated the people whose work trained it.** This article puts 17 released models and two proposals on one matrix that shows the two questions together.

No released model is in the top row. The only entry there is our own proposal, and it is not a model.

<figure class="article-figure" style="max-width: 36rem; margin: 2.5rem auto 3rem;">
  <img src="../assets/infographics/ai-model-matrix-extractive-to-shared.png" width="1122" height="1402" loading="lazy" decoding="async" alt="A matrix of AI models. Columns show the licence of the weights: open source licence, open weights with another licence, and frontier models with closed weights. Rows show the treatment of sources. Shared: Sovereign Source SI, a proposal. Permitted and recorded: Comma v0.1, KL3M, Pleias 1.0 and the CommonLLM proposal. Partly open or partly paid: OLMo 2, IBM Granite, gpt-oss, Gemma 4, Mistral Small 4, Nemotron 3 Ultra, Llama 4, Muse Spark Open, OpenAI GPT, Google Gemini and Anthropic Claude. Not disclosed: Qwen3, DeepSeek and xAI Grok.">
  <figcaption>The matrix on 25 November 2026. A dashed box is a proposal. <a href="../assets/infographics/ai-model-matrix-extractive-to-shared.png">View the full-size matrix</a>.</figcaption>
</figure>

## The two questions

**Across: what is the licence of the weights?** The first column has models with an open source licence, such as Apache-2.0, MIT or CC BY. The second column has models with public weights and a different licence. The third column has frontier models with closed weights.

**Up: how does the model treat its sources?** We use "extractive" for a model that takes knowledge and gives nothing back to the people who made it. We use "shared" for a model that has permission, shows its sources and pays contributors. [Superintelligence Should Be a Win for Humans and Machines](SUPERINTELLIGENCE_SHARED_PROSPERITY_ARTICLE.md) explains these two terms.

Each row has one rule. A rule uses only facts that the public can check.

| Row | Rule |
| --- | --- |
| Shared | Permitted data, public source records, and a method to pay contributors |
| Permitted and recorded | Only permitted data, with public source records |
| Partly open or partly paid | Public training data or a dataset list, or disclosed payments to some content owners |
| Not disclosed | Training data not published, and no content contract found in our check |

## The evidence for each model

### Shared

| Model | Licence | Basis |
| --- | --- | --- |
| Sovereign Source SI (proposal) | Not selected | A demonstration calculates rewards by licence. It is not a model and makes no payment. [Source code article](MACBETH_CONTENT_REWARDS_SOURCE_CODE_ARTICLE.md) |

### Permitted and recorded

| Model | Licence | Basis |
| --- | --- | --- |
| Comma v0.1 | Apache-2.0 | Trained on the Common Pile, which holds only public domain and openly licensed text. [Paper](https://arxiv.org/abs/2506.05209) · [Model card](https://huggingface.co/common-pile/comma-v0.1-1t) |
| KL3M | CC BY 4.0 | Its developers state that the training data is in the public domain. It was the first language model with the Fairly Trained certificate. [Model card](https://huggingface.co/alea-institute/kl3m-003-1.7b) · [Fairly Trained](https://www.fairlytrained.org/blog/newly-certified-models-march-24) |
| Pleias 1.0 | Apache-2.0 | Trained on Common Corpus, which holds public domain and openly licensed text. [Paper](https://arxiv.org/html/2506.01732v3) |
| CommonLLM (proposal) | Not selected | A plan to use only the open part of Common Crawl in the first model. No model exists. [Proposal](COMMONLLM_COMMON_CRAWL_OPEN_SOURCE_LLM_ARTICLE.md) |

### Partly open or partly paid

| Model | Licence | Basis |
| --- | --- | --- |
| OLMo 2 | Apache-2.0 | All training data is public, and a tool shows where an answer appears in that data. The data includes web text without a permission record. [Paper](https://arxiv.org/html/2504.07096v1) |
| IBM Granite | Apache-2.0 | IBM lists its data sources and describes a clearance procedure. It does not publish the data. [IBM](https://www.ibm.com/granite/trust) |
| gpt-oss | Apache-2.0 | OpenAI does not publish the training data. OpenAI has about 20 contracts with publishers. [Repository](https://github.com/openai/gpt-oss) · [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) |
| Gemma 4 | Apache-2.0 | Google does not publish the training data. Google has contracts with publishers. [Google](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) · [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) |
| Mistral Small 4 | Apache-2.0 | Mistral has one contract, with the news agency AFP, for answers in its assistant. [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) |
| Nemotron 3 Ultra | OpenMDW-1.1 | NVIDIA publishes "major portions" of the training data. Some data is gated or private. [Model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) |
| Llama 4 | Llama 4 Community License | Meta does not publish the training data. Meta has contracts with News Corp, Reuters and other publishers. [Index entry](https://osai-index.eu/model/llama-4/) · [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) |
| Muse Spark Open | Muse Model License | The same company and the same contracts as Llama 4. [Licence](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B/blob/main/LICENSE.md) |
| OpenAI GPT | Closed | About 20 contracts with publishers. [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) |
| Google Gemini | Closed | Contracts with publishers, including the Associated Press. [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) |
| Anthropic Claude | Closed | No publisher contract is in the list. A court approved a settlement of $1.5 billion with authors on 20 July 2026. [Authors Guild](https://authorsguild.org/news/court-grants-final-approval-anthropic-copyright-settlement/) |

### Not disclosed

| Model | Licence | Basis |
| --- | --- | --- |
| Qwen3 | Apache-2.0 | We found no published training data and no content contract. |
| DeepSeek | MIT | We found no published training data and no content contract. |
| xAI Grok | Closed | We found no published training data and no content contract. |

"Not found" is a statement about our check, not proof that nothing exists. The contract list that we used had its last update on 2 November 2026.

## What the matrix shows

- **No released model is shared.** No model in this matrix has a method to pay the people whose work trained it.
- **The models with permitted data are small.** Comma v0.1 has 7 billion parameters. KL3M and Pleias are smaller. Each has an open source licence.
- **An open licence and fair treatment of sources are different things.** Qwen3 and DeepSeek have open source licences and are in the bottom row. The frontier models have closed weights and are one row higher.
- **Payment today is a contract between large companies.** The contracts pay publishers, not individual writers. Most of them cover answers in a product and do not state that they cover model training.

## Limits of this matrix

- **It uses public facts only.** A company can have contracts that it did not announce.
- **A contract with some publishers is not permission for all training data.** The middle row is wide for this reason.
- **A settlement is not a voluntary payment.** We put Anthropic Claude in the middle row because authors receive money. A reader can disagree with that placement.
- **A model family has many versions.** Some versions of Qwen and Mistral have other licences. We name one version where we can.
- **The top two rows include our own proposals.** They are plans. They have dashed boxes in the matrix.
- **It is not a measure of quality.** A model in a high row can be less capable than a model in a low row.

## How a model moves up

1. Publish the list of training data sources.
2. Use data with permission, and record the permission for each source.
3. Pay contributors by a rule that they can check.

## Corrections

If a placement is wrong, tell us. Open a pull request in the [public repository of this site](https://github.com/niccolox/sovsrc-si-public) with a link to the public fact. We will correct the matrix and record the date.

*This is our assessment of public facts on 25 November 2026. It is not a legal finding and not a statement about the conduct of a company. Sovereign Source is not affiliated with a company in this matrix. Sovereign Source remains a research initiative.*

*Related reading: [Nemotron 3 Ultra, OpenWALDO, Sovereign Source SI and CommonLLM Side by Side](NEMOTRON_OPENWALDO_SOVEREIGN_SOURCE_COMMONLLM_COMPARISON_ARTICLE.md), [CommonLLM proposal](COMMONLLM_COMMON_CRAWL_OPEN_SOURCE_LLM_ARTICLE.md), and [Sovereign Source principles](PUBLIC_OVERVIEW.md).*
