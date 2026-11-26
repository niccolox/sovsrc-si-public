---
title: "AI Models: From Extractive to Shared"
description: A matrix of 17 released AI models and two proposals, placed by the licence of their weights and by how they treat the sources of their training data.
---
# AI Models: From Extractive to Shared

*Public analysis for Sovereign Source — 25 November 2026*

**An open licence tells you what you can do with a model. It does not tell you how the model treated the people whose work trained it.** This article puts 17 released models and two proposals on one matrix that shows the two questions together.

No released model is in the top row. The only entry there is our own proposal, and it is not a model.

<figure class="article-figure" style="max-width: none; width: 100%; margin: 2.5rem 0 3rem;">
  <img src="../assets/infographics/ai-model-matrix-extractive-to-shared.png" style="display: block; width: 100%; height: auto;" width="1122" height="1402" loading="lazy" decoding="async" alt="A matrix of AI models. Columns show the licence of the weights: open source licence, open weights with another licence, and frontier models with closed weights. Rows show the treatment of sources. Shared: Sovereign Source SI, a proposal. Permitted and recorded: Comma v0.1, KL3M, Pleias 1.0 and the CommonLLM proposal. Partly open or partly paid: OLMo 2, IBM Granite, gpt-oss, Gemma 4, Mistral Small 4, Nemotron 3 Ultra, Llama 4, Muse Spark Open, OpenAI GPT, Google Gemini and Anthropic Claude. Not disclosed: Qwen3, DeepSeek and xAI Grok.">
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

Each row of these tables has links to its sources. The full list is at the end of this article.

### Shared

| Model | Licence | Basis | Sources |
| --- | --- | --- | --- |
| Sovereign Source SI (proposal) | Not selected | A demonstration calculates rewards by licence. It is not a model and makes no payment. | [Source code article](MACBETH_CONTENT_REWARDS_SOURCE_CODE_ARTICLE.md) · [Code](https://github.com/niccolox/sovsrc.si.core) · [Demonstration](https://hello.sovsrc.si/ui) |

### Permitted and recorded

| Model | Licence | Basis | Sources |
| --- | --- | --- | --- |
| Comma v0.1 | Apache-2.0 | Trained on the Common Pile, which holds only public domain and openly licensed text. | [Paper](https://arxiv.org/abs/2506.05209) · [Model card](https://huggingface.co/common-pile/comma-v0.1-1t) |
| KL3M | CC BY 4.0 | Its developers state that the training data is in the public domain. It was the first language model with the Fairly Trained certificate. | [Model card](https://huggingface.co/alea-institute/kl3m-003-1.7b) · [Fairly Trained](https://www.fairlytrained.org/blog/newly-certified-models-march-24) |
| Pleias 1.0 | Apache-2.0 | Trained on Common Corpus, which holds public domain and openly licensed text. | [Paper](https://arxiv.org/abs/2506.01732) · [Model card](https://huggingface.co/PleIAs/Pleias-1.2b-Preview) |
| CommonLLM (proposal) | Not selected | A plan to use only the open part of Common Crawl in the first model. No model exists. | [Proposal](COMMONLLM_COMMON_CRAWL_OPEN_SOURCE_LLM_ARTICLE.md) |

### Partly open or partly paid

| Model | Licence | Basis | Sources |
| --- | --- | --- | --- |
| OLMo 2 | Apache-2.0 | All training data is public, and a tool shows where an answer appears in that data. The data includes web text without a permission record. | [Model card](https://huggingface.co/allenai/OLMo-2-1124-7B) · [Trace tool paper](https://arxiv.org/html/2504.07096v1) · [Ai2 article](https://allenai.org/blog/olmotrace) |
| IBM Granite | Apache-2.0 | IBM lists its data sources and describes a clearance procedure. It does not publish the data. | [IBM](https://www.ibm.com/granite/trust) · [Red Hat data report](https://www.redhat.com/en/blog/ibms-granite-foundation-model-detailed-look-its-training-data) · [Independent data review](https://kili-technology.com/blog/data-story-ibm-granite-4-2) |
| gpt-oss | Apache-2.0 | OpenAI does not publish the training data. OpenAI has about 20 contracts with publishers. | [Model card](https://huggingface.co/openai/gpt-oss-120b) · [OpenAI model card](https://openai.com/index/gpt-oss-model-card/) · [Repository](https://github.com/openai/gpt-oss) · [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) |
| Gemma 4 | Apache-2.0 | Google does not publish the training data. Google has contracts with publishers. | [Google](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) · [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) |
| Mistral Small 4 | Apache-2.0 | Mistral has one contract, with the news agency AFP, for answers in its assistant. | [Model card](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603) · [AFP contract report](https://thenextweb.com/news/genai-deals-with-news-giants-increase-as-mistral-partners-with-afp) · [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) |
| Nemotron 3 Ultra | OpenMDW-1.1 | NVIDIA publishes "major portions" of the training data. Some data is gated or private. | [Model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) · [Licence text](https://raw.githubusercontent.com/OpenMDW/OpenMDW/refs/heads/main/1.1/LICENSE.OpenMDW-1.1) |
| Llama 4 | Llama 4 Community License | Meta does not publish the training data. Meta has contracts with News Corp, Reuters and other publishers. | [Licence text](https://www.llama.com/llama4/license/) · [Index entry](https://osai-index.eu/model/llama-4/) · [Digiday](https://digiday.com/media/meta-enters-ai-licensing-fray-striking-deals-with-people-inc-usa-today-co-and-more/) · [TechCrunch](https://techcrunch.com/2025/12/05/meta-signs-commercial-ai-data-agreements-with-publishers-to-offer-real-time-news-on-meta-ai) · [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) |
| Muse Spark Open | Muse Model License | The same company and the same contracts as Llama 4. | [Meta announcement](https://research.meta.ai/blog/muse-spark-open) · [Licence text](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B/blob/main/LICENSE.md) · [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) |
| OpenAI GPT | Closed | About 20 contracts with publishers. | [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) · [Contract map](https://llmpulse.ai/blog/ai-content-licensing-deals/) |
| Google Gemini | Closed | Contracts with publishers, including the Associated Press. | [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) · [Contract map](https://llmpulse.ai/blog/ai-content-licensing-deals/) |
| Anthropic Claude | Closed | No publisher contract is in the list. A court approved a settlement of $1.5 billion with authors on 20 July 2026. | [Authors Guild](https://authorsguild.org/news/court-grants-final-approval-anthropic-copyright-settlement/) · [Writer Beware](https://writerbeware.blog/2026/07/23/anthropic-settlement-update-final-settlement-approved/) · [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) |

### Not disclosed

| Model | Licence | Basis | Sources |
| --- | --- | --- | --- |
| Qwen3 | Apache-2.0 | The model card gives no training data list. The contract list shows no contract for Alibaba. | [Model card](https://huggingface.co/Qwen/Qwen3-235B-A22B) · [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) · [Licence comparison](https://sysart.consulting/knowledge-hub/open-weight-model-licenses/) |
| DeepSeek | MIT | The model card gives no training data list. The contract list shows no contract for DeepSeek. | [Model card](https://huggingface.co/deepseek-ai/DeepSeek-R1) · [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) · [Dataset analysis](https://mediaandthemachine.substack.com/p/the-14-datasets-deepseek-likely-used) |
| xAI Grok | Closed | The contract list shows no contract for xAI. A review of May 2026 found no known publisher agreement. | [Contract list](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) · [Training data review](https://semiautonomous.systems/blog/training-data-ecosystem-2026/) · [Contract map](https://llmpulse.ai/blog/ai-content-licensing-deals/) |

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

## All sources

**Contracts and payments**

- [Press Gazette: news publisher AI deals and lawsuits](https://pressgazette.co.uk/platforms/news-publisher-ai-deals-lawsuits-openai-google/) (last update 2 November 2026)
- [LLM Pulse: map of AI content licensing deals](https://llmpulse.ai/blog/ai-content-licensing-deals/)
- [Digiday: Meta content agreements](https://digiday.com/media/meta-enters-ai-licensing-fray-striking-deals-with-people-inc-usa-today-co-and-more/)
- [TechCrunch: Meta data agreements with publishers](https://techcrunch.com/2025/12/05/meta-signs-commercial-ai-data-agreements-with-publishers-to-offer-real-time-news-on-meta-ai)
- [The Next Web: Mistral and AFP](https://thenextweb.com/news/genai-deals-with-news-giants-increase-as-mistral-partners-with-afp)
- [Authors Guild: final approval of the Anthropic settlement](https://authorsguild.org/news/court-grants-final-approval-anthropic-copyright-settlement/)
- [Writer Beware: Anthropic settlement update](https://writerbeware.blog/2026/07/23/anthropic-settlement-update-final-settlement-approved/)

**Model cards and licences**

- [Comma v0.1 model card](https://huggingface.co/common-pile/comma-v0.1-1t)
- [KL3M model card](https://huggingface.co/alea-institute/kl3m-003-1.7b)
- [Pleias 1.2b model card](https://huggingface.co/PleIAs/Pleias-1.2b-Preview)
- [OLMo 2 model card](https://huggingface.co/allenai/OLMo-2-1124-7B)
- [gpt-oss model card](https://huggingface.co/openai/gpt-oss-120b), [OpenAI model card](https://openai.com/index/gpt-oss-model-card/) and [repository](https://github.com/openai/gpt-oss)
- [Gemma 4 announcement](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)
- [Mistral Small 4 model card](https://huggingface.co/mistralai/Mistral-Small-4-119B-2603)
- [Nemotron 3 Ultra model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16) and [OpenMDW-1.1 licence text](https://raw.githubusercontent.com/OpenMDW/OpenMDW/refs/heads/main/1.1/LICENSE.OpenMDW-1.1)
- [Llama 4 licence text](https://www.llama.com/llama4/license/) and [European Open Source AI Index entry](https://osai-index.eu/model/llama-4/)
- [Muse Spark Open announcement](https://research.meta.ai/blog/muse-spark-open) and [licence text](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B/blob/main/LICENSE.md)
- [Qwen3 model card](https://huggingface.co/Qwen/Qwen3-235B-A22B)
- [DeepSeek-R1 model card](https://huggingface.co/deepseek-ai/DeepSeek-R1)
- [Open weight licence comparison](https://sysart.consulting/knowledge-hub/open-weight-model-licenses/)

**Training data**

- [The Common Pile v0.1 paper](https://arxiv.org/abs/2506.05209)
- [Common Corpus paper](https://arxiv.org/abs/2506.01732)
- [Fairly Trained: certified models](https://www.fairlytrained.org/blog/newly-certified-models-march-24)
- [OLMoTrace paper](https://arxiv.org/html/2504.07096v1) and [Ai2 article](https://allenai.org/blog/olmotrace)
- [IBM Granite trust page](https://www.ibm.com/granite/trust)
- [Red Hat: Granite training data](https://www.redhat.com/en/blog/ibms-granite-foundation-model-detailed-look-its-training-data)
- [Kili Technology: Granite 4.2 training data review](https://kili-technology.com/blog/data-story-ibm-granite-4-2)
- [Media and the Machine: DeepSeek datasets](https://mediaandthemachine.substack.com/p/the-14-datasets-deepseek-likely-used)
- [Semiautonomous Systems: training data in 2026](https://semiautonomous.systems/blog/training-data-ecosystem-2026/)

**Sovereign Source**

- [Content rewards source code](https://github.com/niccolox/sovsrc.si.core) and [demonstration](https://hello.sovsrc.si/ui)

*This is our assessment of public facts on 25 November 2026. It is not a legal finding and not a statement about the conduct of a company. Sovereign Source is not affiliated with a company in this matrix. Sovereign Source remains a research initiative.*

*Related reading: [Nemotron 3 Ultra, OpenWALDO, Sovereign Source SI and CommonLLM Side by Side](NEMOTRON_OPENWALDO_SOVEREIGN_SOURCE_COMMONLLM_COMPARISON_ARTICLE.md), [CommonLLM proposal](COMMONLLM_COMMON_CRAWL_OPEN_SOURCE_LLM_ARTICLE.md), and [Sovereign Source principles](PUBLIC_OVERVIEW.md).*
