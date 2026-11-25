---
title: "Nemotron 3 Ultra, OpenWALDO, Sovereign Source SI and CommonLLM Side by Side"
description: A full comparison table of one released model, one tool set, one rewards service and one proposal, with costs, licences, lineage and business benefit.
---
# Nemotron 3 Ultra, OpenWALDO, Sovereign Source SI and CommonLLM Side by Side

*Public analysis for Sovereign Source — 25 November 2026*

**These four projects are not four competing models.** Nemotron 3 Ultra is a trained model. OpenWALDO is a tool set to build models with records. Sovereign Source SI is a rewards service. CommonLLM is a proposal for a model from Common Crawl.

Each project supplies a part that the other three do not have. This article compares them in one table and then shows how they fit together.

<figure class="article-figure" style="max-width: 32rem; margin: 2.5rem auto 3rem;">
  <img src="../assets/infographics/open-ai-projects-side-by-side.png" width="1122" height="1402" loading="lazy" decoding="async" alt="Comparison of four open AI projects. Nemotron 3 Ultra has a trained model and an open licence, source records in part, and no method to pay contributors. OpenWALDO has an open licence and source records, but no model and no payment method. Sovereign Source SI has source records and a payment calculation, but no model and no selected licence. Each item is planned for the CommonLLM proposal. Cost to start: 2.15 dollars for each million output tokens for Nemotron 3 Ultra at one host, no cost for the OpenWALDO tool, low for Sovereign Source SI, and an estimate of 0.2 to 0.4 million dollars of compute for one CommonLLM training run.">
  <figcaption>A summary of the table below. CommonLLM is a proposal, and its training cost is an estimate. <a href="../assets/infographics/open-ai-projects-side-by-side.png">View the full-size infographic</a>.</figcaption>
</figure>

## The four projects

- **Nemotron 3 Ultra** is an LLM from NVIDIA with public weights under the OpenMDW-1.1 licence. [Model card](https://huggingface.co/nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16).
- **OpenWALDO** is an open source project that makes WALDO, a command-line tool for auditable training data and models. [WALDO repository](https://github.com/openwaldo/waldo) · [OpenWALDO questions and answers](https://openwaldo.org/faq/).
- **Sovereign Source SI** is our research initiative. Its content rewards service is an early demonstration at [hello.sovsrc.si](https://hello.sovsrc.si/ui). [Service code](https://github.com/niccolox/sovsrc.si.core).
- **CommonLLM** is our proposal to make an open source model from Common Crawl. No model exists today. [CommonLLM proposal](COMMONLLM_COMMON_CRAWL_OPEN_SOURCE_LLM_ARTICLE.md) · [commonllm.org](https://commonllm.org).

## The full table

The CommonLLM column shows a plan, not a product.

| | Nemotron 3 Ultra | OpenWALDO | Sovereign Source SI | CommonLLM (proposed) |
| --- | --- | --- | --- | --- |
| **What it is** | A trained LLM with public weights | A tool set and a community data collection to build auditable models | A content rewards service and a small training demonstration | A model pre-trained on a filtered Common Crawl corpus |
| **Owner** | NVIDIA | Founded by Gregory M. Kurtzer, sponsored by CIQ | Sovereign Source | Sovereign Source |
| **Model today** | Yes. 550 billion parameters, 55 billion active | No. The project says "Not yet" | No | No |
| **Starts from** | NVIDIA's own training | A base that the user selects, or new weights | Not applicable | New weights |
| **Training data** | "Major portions" are public; some data is gated or private | A community index of data with recorded licence assertions | One sample file | Common Crawl, 2.20 billion pages in one crawl, then filtered |
| **Source records** | Dataset names in the model card | Bills of materials that link corpus, training run, model and release | One record for each content unit, with licence and contributor | A manifest with address, crawl, date and licence for each document |
| **Permission** | The user must clear the rights of other persons | Records licence assertions; does not prove that an assertion is legally correct | A licence factor for each content unit | Only public domain and open licences in the first model |
| **Lineage** | Includes synthetic data from Qwen and DeepSeek models | Depends on the base that the user selects | Not applicable | No teacher model in the first version |
| **Contributor rewards** | None | None. Contributors sign a certificate of origin | Yes, as a calculation: influence × licence factor × reward pool | By agreement, for owners who give permission |
| **Licence** | OpenMDW-1.1 | Apache-2.0 | Not selected. SS-SIP-0.1 is a draft | Not selected |
| **Commercial use** | Permitted | Depends on the selected data and the user's legal analysis | Not defined | Planned |
| **Hardware** | Eight B200 GPUs; four B200 or eight H100 for the quantized weights | Apple Silicon, or Linux with CPU, NVIDIA or AMD | One small container | One GPU to operate a model of 7 billion parameters |
| **Expected capability** | Frontier class for open weights | Depends on the model that the user builds | None. It is not a model | About the level of a model with 7 billion parameters |
| **State** | Released, with hosts and hosted training | Active development, no release | Early demonstration | One proposal |
| **Main gap** | No record for each source document | No model and no payment method | No stored ledger; the influence score is an input, not a measurement | No corpus and no model |
| **Cost to use** | $0.50 input and $2.15 output for each million tokens at one host. Self-hosted: about $23 to $35 each hour for eight H100 GPUs | The tool is free. The user pays for compute | Low. One small container | Free weights. One GPU |
| **Cost to invest** | None to start | Staff time and the training compute for the model | Development time and a legal examination of the draft licence | About $0.2 million to $0.4 million of compute for one training run, plus staff and legal work |
| **Business benefit** | High capability now, with permission for commercial use | Proof of what is in a model, for buyers who audit their suppliers | A reason for content owners to give permission | A base with clean lineage that all people can sell services on |

## How the four fit together

![Four parts of one open AI stack. CommonLLM, a proposal, supplies data. OpenWALDO supplies records and training. Sovereign Source SI supplies permission and rewards. Nemotron 3 Ultra supplies capability as an optional teacher model. A project can use one part or all parts.](../assets/diagrams/open-ai-stack-four-parts.svg)

*A possible combination, not an agreement between these projects. [Download PNG](../assets/diagrams/open-ai-stack-four-parts.png) · [View SVG](../assets/diagrams/open-ai-stack-four-parts.svg).*

- **Data.** CommonLLM would supply a corpus where each document has a public address and a licence record.
- **Records and training.** OpenWALDO links the corpus, the training run and the model file in bills of materials.
- **Permission and rewards.** Sovereign Source SI supplies rules for licences and contributor payments. No other project in this table has a payment method.
- **Capability.** Nemotron 3 Ultra can be a teacher model. This adds capability, and it also adds a dependency on the training data of the teacher.

We described a small experiment with OpenWALDO and content rewards in an earlier article. [Building a Sovereign Source Model with OpenWALDO and LLM Content Rewards](https://sovsrc.si/docs/OPENWALDO_LLM_CONTENT_REWARDS_ARTICLE.html).

## What the table shows

- **Lowest cost to start:** Nemotron 3 Ultra at a host. The user pays only for tokens.
- **Highest cost to start:** CommonLLM. It is the only project that needs a full training run before its first result.
- **Clean lineage:** CommonLLM is the only project that would have new weights, no teacher and a record for each source. It would be much less capable than Nemotron 3 Ultra.
- **Rewards:** Sovereign Source SI is the only project with a method to pay contributors. It is also the least complete.

## Basis for the figures

- **Nemotron 3 Ultra price:** the CoreWeave price page on 25 November 2026. Other hosts have different prices. [CoreWeave prices](https://coreweave.com/forge-pricing/inference-agents).
- **Self-hosted cost:** eight H100 GPUs at $2.89 to $4.39 each hour, from the Runpod price page on 25 November 2026. [Runpod prices](https://www.runpod.io/pricing).
- **CommonLLM compute:** our estimate. Meta reports 184,320 GPU-hours on A100 GPUs for Llama 2 7B with 2 trillion tokens. We applied $2.09 to $2.19 for each GPU-hour and a budget of 1 to 2 trillion tokens. [Llama 2 paper](https://arxiv.org/pdf/2307.09288).
- **CommonLLM capability:** our inference from the Common Pile project, not a measurement. Its models have 7 billion parameters and use only open text. [The Common Pile v0.1](https://arxiv.org/abs/2506.05209).
- **Licence and lineage of Nemotron 3 Ultra:** the model card and the licence text. [OpenMDW-1.1](https://raw.githubusercontent.com/OpenMDW/OpenMDW/refs/heads/main/1.1/LICENSE.OpenMDW-1.1).

Prices change. Check each source before a decision.

*This is general analysis of the cited releases and terms, not a legal opinion or a purchase recommendation. Sovereign Source is not affiliated with NVIDIA, OpenWALDO, CIQ or the Common Crawl Foundation. Sovereign Source remains a research initiative.*

*Related reading: [CommonLLM proposal](COMMONLLM_COMMON_CRAWL_OPEN_SOURCE_LLM_ARTICLE.md), [Building a Competing AI Model with Nemotron 3 Ultra](NEMOTRON_COMPETING_MODEL_ARTICLE.md), and [Sovereign Source principles](PUBLIC_OVERVIEW.md).*
