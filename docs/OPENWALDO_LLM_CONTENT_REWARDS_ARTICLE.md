---
title: Building a Sovereign Source Model with OpenWALDO and LLM Content Rewards
description: Use LLM scores to select training examples, build a traceable model with OpenWALDO, and evaluate it for Sovereign Source.
reading_style: editorial
---
# Building a Sovereign Source Model with OpenWALDO and LLM Content Rewards

*Research · 24 October 2026*

A model that summarizes a purchase order or explains an inventory discrepancy needs a clear definition of useful work. It should preserve the facts, identify missing information, and produce an answer a person can check. Those qualities can become explicit training signals.

OpenWALDO offers a foundation for tracing the data and artifacts behind that model. An additional layer of LLM-generated content rewards could help choose which examples deserve to shape its behavior. For Sovereign Source, the practical starting point is a private experiment: score candidate responses, review the selections, train a compatible model, and test whether it performs better on unseen business tasks.

Here, a content reward is a score assigned by an LLM judge to a candidate response. These scores guide training by selecting examples for the training corpus or informing reviewed preference pairs for a later optimization step.

## What OpenWALDO contributes

WALDO connects corpus records, training runs, and model artifacts through verifiable bills of materials. Its tooling supports dataset inspection and export, training, and model packaging. The project is under active development, so an experiment should pin the tool version as well as its inputs. [WALDO project overview](https://github.com/openwaldo/waldo)

OpenWALDO currently provides the tools to build or extend supported models; it does not yet offer an official pretrained model. A team must select a compatible base or train an architecture itself. Private indexes and local storage allow internal material to remain outside the public corpus. [OpenWALDO FAQ](https://openwaldo.org/faq/)

The reward service described here would be an additional component. WALDO’s published compose contract defines training inputs and objectives; a stage labeled “alignment” does not itself enable a reinforcement-learning algorithm. Reward annotations and any external preference-training run need their own recorded interfaces. [Model compose guide](https://github.com/openwaldo/waldo/blob/main/docs/MODEL-COMPOSE.md)

## Define the behavior before scoring content

Start with one bounded task. A useful Sovereign Source pilot would summarize a supplied business record into a structured response containing the relevant facts, missing fields, and a suggested next step.

Suppose a synthetic purchase order states that 40 units were ordered, 32 received, and no revised delivery date supplied. A useful response identifies the eight-unit shortfall and asks for the missing date. A response that confidently invents a Friday delivery should fail, however polished its prose.

The task definition should specify the available evidence, required output fields, acceptable uncertainty, and actions outside the model’s authority. Recommendations remain proposals for a person to review; the model cannot approve a purchase or change stock records.

This creates a concrete scoring problem: whether an answer satisfies a known task using the evidence it was given.

## Build a reward rubric that reviewers can inspect

An LLM judge can compare candidate answers against a versioned rubric. Research on Constitutional AI demonstrates one approach to using AI-generated critiques and preferences in model training. That establishes a useful precedent, while performance on business records still requires a separate experiment. [Constitutional AI](https://arxiv.org/abs/2212.08073)

For an initial pilot, use hard rejection conditions before ranking eligible answers. Reject invented quantities or dates, disclosure of excluded information, invalid output structure, and claims that an unauthorized operation has been completed.

Then score the remaining answers. The following weights are an illustrative starting point to calibrate against human review.

| Dimension | Weight | Evidence the judge must consider |
| --- | --- | --- |
| Factual grounding | 45% | Claims match the supplied record |
| Completeness | 25% | Required facts and material gaps are covered |
| Practical usefulness | 20% | The suggested next step fits the task and authority |
| Clarity | 10% | The answer is understandable and appropriately concise |

Score each dimension from zero to four. For eligible answers, the weighted mean is a ranking aid. A rejection remains a rejection regardless of the total score.

Have the judge return brief evidence references and reason codes. Preserve the candidate hash, judge model revision, rubric and prompt versions, component scores, and reviewer decision. Keep these annotations in a separate versioned record linked to the source and candidate; they are proposed experiment metadata, not assumed native WALDO fields.

## Make rewards influence a reproducible training set

The first implementation can use rewards for data selection. Generate a small number of candidate responses for each approved prompt, run deterministic checks, obtain judge assessments, and review which responses enter the training corpus.

Keep some examples where the correct answer is “the record does not establish that.” A model trained only on complete, confident answers will have little opportunity to learn useful uncertainty.

Deduplicate related records and split by source before generating candidates. Keep the final evaluation set outside generation, rubric tuning, and training selection. Record the accepted corpus separately from rejected candidates so a later reviewer can reconstruct the selection.

WALDO can then manage the selected corpus and a compatible training run. The reward influences which examples the model sees; the training objective remains whichever objective the pinned release supports. This approach tests the value of the scoring process without first building an online reinforcement-learning system.

### Proposed training workflow

1. Approved source records.
2. Source based data split. Reserve a separate evaluation set here. Keep it outside generation, rubric tuning, and training selection.
3. Training prompts and candidate responses.
4. Checks and LLM reward assessment.
5. Human review and selected corpus.
6. WALDO training run.
7. Candidate model.
8. Independent evaluation. Evaluate the candidate model against the reserved evaluation set.
9. Release decision.

This is the proposed workflow. Source, selection, training, and evaluation records should remain linked across its steps.

## Add preference optimization only when the baseline warrants it

A later experiment could retain pairs of answers: the preferred response and the rejected response for the same prompt. Reviewers should be able to mark a tie, reject both, or flag insufficient evidence instead of forcing a preference.

Direct Preference Optimization, or DPO, trains a language model from preference pairs without a separately trained reward model and the conventional reinforcement-learning loop. It provides a possible next step once the preference labels are credible. [DPO paper](https://arxiv.org/abs/2305.18290)

For this design, DPO would run through an explicitly integrated external trainer, such as Hugging Face TRL, with compatible model and dataset formats. It should not be presented as a built-in WALDO compose option. Record the exported dataset hash, base revision, trainer version, settings, and resulting checkpoint, and link that external run to the experiment’s provenance. [TRL DPO documentation](https://huggingface.co/docs/trl/dpo_trainer)

Compare preference training against the simpler selected-example baseline. The additional machinery earns its place only if it improves the outcomes that matter.

## Test whether the judge rewards useful work

A higher judge score does not establish that a model has improved. LLM judges can favor particular answer positions, longer responses, or outputs resembling their own. Research on MT-Bench documents these limitations. [LLM judge evaluation](https://arxiv.org/abs/2306.05685)

The pilot should shuffle answer order, conceal the generating model’s identity, and include concise correct answers alongside fluent incorrect ones. Treat all candidate text as untrusted input to the judge. An instruction embedded in a candidate must not override the scoring rubric.

Calibrate the judge on a human-reviewed set that includes disagreement and abstention cases. Investigate systematic differences, then freeze the rubric before the final evaluation. A second judge can expose disagreements, but agreement between models is not a substitute for evidence.

Compare the original and trained models on the same reserved cases. Measure factual errors, valid structured outputs, coverage of required fields, human corrections, latency, and inference cost. Report the sample size and uncertainty alongside any claimed improvement. Preserve failures and regressions in the release decision.

## Bring a qualified model into Sovereign Source

For Sovereign Source, the first integration should stay narrow: one private model endpoint serving one advisory workflow. A compatible WALDO export can be served through Ollama and connected to the application’s Python model adapter. OpenWALDO documents Ollama and other export formats; the chosen architecture, prompt template, and structured-output behavior still need compatibility tests. [Training and export workflow](https://openwaldo.org/training/)

Run training separately from the application’s production services. Preserve the existing model as a baseline and rollback option, and qualify the candidate before routing operational requests to it. The application should continue to validate output and retain authority over business writes.

The pilot’s deliverable is a model accompanied by its evidence: permitted source material, reproducible selection decisions, a recorded training process, and independent evaluation. That gives the community a specific result to inspect, challenge, and improve—and gives Sovereign Source a defensible basis for deciding whether the model belongs in production.

*New to these ideas? Start with [Win-Win Super Intelligence: A Plain Guide](WIN_WIN_SUPER_INTELLIGENCE_PLAIN_GUIDE_ARTICLE.md). It explains the project in plain words and links to each article.*
