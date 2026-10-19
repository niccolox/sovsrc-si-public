---
title: Google Harness2 and Sovereign AI Development
description: What Google Research's Harness² offers for sovereign AI, including commercial licensing, Nemotron integration and the limits of its experimental release.
---
# Google Harness2 and Sovereign AI Development

*Public analysis for Sovereign Source — 17 October 2026*

Google Research's **Harness²** offers a way to improve how an AI agent works by changing the software around its model. For developers exploring sovereign AI, it raises a useful possibility: improve the use of an independently selected model without retraining its weights. The framework is open source, but a fully independent deployment still depends on the models, services and data connected to it. [Project overview](https://github.com/google-research/harness2).

## What Harness2 improves

A model needs instructions, tools, memory and coordination to act as an agent. Together, these surrounding components form its *harness*. Harness² experiments with changes to that harness while leaving model weights fixed.

Its process proposes changes, probes their effects on a task and composes a revised configuration from the resulting evidence. A second process carries useful lessons into later tasks. The researchers report improvements on professional-task benchmarks using GLM-5 and Gemini 3.5 Flash. Those findings concern the tested configurations; they do not establish equivalent gains with Nemotron or on another organization's tasks. [Research paper, submitted 9 October 2026](https://arxiv.org/abs/2610.14224).

This makes Harness² relevant to agent development and evaluation. It does not itself train a new foundation model or establish the provenance of that model's training data.

## Commercial use of the code

Harness² is released under **Apache 2.0**. The licence permits commercial use, modification and redistribution and contains no prohibition on developing a competing model. Redistribution carries conditions including supplying the licence, retaining applicable notices and identifying modified files. Any applicable NOTICE requirements also remain relevant. [Harness² licence](https://github.com/google-research/harness2/blob/main/LICENSE).

These permissions cover the licensed software. They do not replace the contracts governing hosted models or grant rights to external datasets. Using Google-authored open-source code and purchasing access to a Google model are separate arrangements.

The dependency notices illustrate that distinction. OpenCode is MIT-licensed, while the optional Tencent WorkBuddy benchmark has a custom licence with a territorial limitation concerning use within the European Union. Dataset licences are separate again. Developers should select components on their own terms rather than assume every dependency inherits Apache 2.0. [Third-party code and data notices](https://github.com/google-research/harness2/blob/main/dependencies/README.md).

## The possible route to Nemotron

The release supports OpenCode and Codex executors. NVIDIA separately documents using Nemotron 3 Ultra with OpenCode. Together, these provide a plausible integration path, but they are not evidence that a complete Harness² and Nemotron deployment has been validated. [Harness² overview](https://github.com/google-research/harness2), [NVIDIA OpenCode configuration](https://github.com/NVIDIA-NeMo/Nemotron/blob/main/usage-cookbook/Nemotron-3-Ultra/OpenScaffoldingResources/README.md).

Harness²'s supplied setup uses Vertex Gemini for execution and judging, with Vertex Claude or Gemini available for improvement. Model selection therefore involves more than replacing the model that answers the main task. [Setup guide](https://github.com/google-research/harness2/blob/main/docs/SETUP.md).

| Model role | Purpose | Question for an independent deployment |
| --- | --- | --- |
| Executor | Performs the task using the current harness | Can the selected model reliably use the required tools? |
| Improver | Proposes and composes changes to the harness | Can it improve the workflow without introducing unwanted dependencies or weakening controls? |
| Judge | Scores benchmark results | Can the evaluation use an appropriate independent model or other reliable assessment? |

A Nemotron-only deployment would need compatible routes for the relevant roles and any benchmark-specific integrations. The documentation does not establish that changing a single setting accomplishes this. The setup checks also do not test model availability; that is tested when a model is first called. [Configuration and installation checks](https://github.com/google-research/harness2/blob/main/docs/SETUP.md).

For researchers seeking U.S. models, the presence of GLM-5 in the published experiments does not require selecting it for a new deployment. The lineage and licence of the chosen model still need their own assessment. Open-source orchestration cannot establish that a model's training material meets a particular sourcing standard.

## Security and evaluation limits

The release leaves executor network access unrestricted, and its Codex mode runs with the sandbox disabled. The authors describe a validation run in which an executor retrieved a public benchmark's grading rubric. They recommend network restrictions to reduce access to benchmark answers and criteria. [Experiment guide](https://github.com/google-research/harness2/blob/main/docs/EXPERIMENTS.md#web-access).

These defaults make isolation and evaluation design consequential. A useful experiment should measure improved task performance rather than access to an answer key. Confidential documents also need protection from unintended network access and from model services that have not been approved to receive them.

The repository explicitly states that Harness² is **not an officially supported Google product**. Its research release should be assessed on the controls and behaviour actually demonstrated in the intended environment. [Project disclaimer](https://github.com/google-research/harness2#disclaimer).

## Relevance to attribution and contributor rewards

For a platform built around permission, attribution and agreed rewards, Harness² is a possible workflow-improvement component. It does not supply the contribution agreements, rights decisions or payment administration that such a platform requires.

One design principle follows: an agent's ability to improve its workflow should not include authority to rewrite the obligations governing that workflow. Permission checks and payment rules need accountable control outside the components being optimized. Improvements in task scores are useful only if the resulting system continues to respect those obligations.

A sensible evaluation would compare a fixed agent configuration with a refined one on authorized tasks, assessing quality, cost, reproducibility and adherence to permissions. Better performance would then support a specific claim about the tested system. It would not, by itself, demonstrate superintelligence, independence from all providers or a complete contributor-rewards platform.

*Related reading: [Sovereign Source principles](PUBLIC_OVERVIEW.md), [building with Nemotron 3 Ultra](NEMOTRON_COMPETING_MODEL_ARTICLE.md), and [development-tool terms](CLAUDE_OPENAI_SOFTWARE_DEVELOPMENT_TERMS_ARTICLE.md).*

*Licence discussion is general information; the applicable licences and service agreements govern actual use.*
