---
title: Using Claude and OpenAI to Build AI Software
description: How ordinary platform engineering, competing model development and synthetic training data differ under OpenAI and Anthropic terms.
---
# Using Claude and OpenAI to Build AI Software

*Public analysis for Sovereign Source — 16 October 2026*

AI coding assistants can help developers build useful software. When the intended product includes a competing language model, however, the contract deserves attention alongside the code. **Using a service only to generate software does not automatically exempt the work from restrictions on developing competing models or products.**

The relevant distinction is between ordinary application engineering, software directly developing a competing model, and generated material used to train that model. A rights-and-rewards platform can include all three, but they raise different questions.

## How the activities compare

The assessments below interpret the published terms. They are not provider approvals for a particular project.

| Activity | OpenAI | Anthropic |
|---|---|---|
| Ordinary accounts, licensing administration, attribution records or payment interfaces | A stronger case for ordinary software use; assess its actual relationship to model development. | Potentially permitted for noncompeting applications; the overall product and use still matter. |
| Code specifically designing, training or improving a competing LLM | No express coding exception to the competing-model restriction identified. | The broader competing-product restriction creates a substantial concern even without training on Claude answers. |
| Outputs used as training examples for a competing general-purpose model | Restricted under standard terms. | Restricted under standard terms. |

OpenAI's restriction is framed around using outputs to develop competing models. Anthropic's commercial restriction addresses accessing the service to build a competing product or service. [OpenAI Services Agreement, section 3.3](https://openai.com/policies/services-agreement/) · [Anthropic Commercial Terms, section D.4](https://www.anthropic.com/legal/commercial-terms).

## What OpenAI permits and restricts

OpenAI's individual Terms of Use prohibit using output to develop models that compete with OpenAI. Its business agreement contains a similar restriction, with limited exceptions for qualifying internal classification or organization models and customization through OpenAI's own services. Those exceptions do not provide general permission to develop a commercial competing LLM. [Individual terms](https://openai.com/policies/terms-of-use/) · [Business agreement and Permitted Exception definition](https://openai.com/policies/services-agreement/).

The wording uses *develop*, rather than limiting the restriction to training datasets. Treating all generated training code as automatically exempt would therefore go beyond what the text establishes. Conversely, that uncertainty does not establish that every ordinary software contribution to an AI business is prohibited.

OpenAI's specific Codex and code-generation terms also note that generated code may carry third-party license obligations. They do not supply an express competing-model coding exemption. [Service Terms, section 4](https://openai.com/policies/service-terms/).

## Why the Claude restriction is broader

Anthropic's commercial terms restrict accessing its services to build a competing product or service, including competing-model training. Its consumer terms also prohibit developing competing products or services. This makes the purpose and scope of the work relevant beyond whether Claude responses enter a training dataset. [Commercial Terms, section D.4](https://www.anthropic.com/legal/commercial-terms) · [Consumer Terms, section 3](https://www.anthropic.com/legal/consumer-terms).

Anthropic's help guidance distinguishes noncompeting specialist uses, such as classification and information extraction, from training competing general-purpose models. Permission for a narrow tool should not be generalized into permission for a competing frontier-model program. [Anthropic guidance on training with outputs](https://support.claude.com/en/articles/12326764-can-i-use-my-outputs-to-train-an-ai-model).

The practical conclusion is conditional: a standalone licensing-administration application presents a different question from asking Claude to engineer a direct competitor. A label such as "infrastructure" does not resolve that difference if the actual work develops the competing product.

## Ownership and permission are separate

Both providers' commercial terms address customer ownership of outputs while also imposing use restrictions. Owning generated code therefore does not cancel the contractual conditions attached to using the service. [OpenAI, section 4.1](https://openai.com/policies/services-agreement/) · [Anthropic, section B](https://www.anthropic.com/legal/commercial-terms).

A permissive license for a foundation model is another separate permission. It does not override an agreement governing a coding assistant used alongside that model. The same project may involve model weights, generated code, third-party libraries, licensed documents and hosted services, each with its own relevant terms. Our [Nemotron article](NEMOTRON_COMPETING_MODEL_ARTICLE.md) examines the model-license side of that distinction.

## A practical basis for development

Developers should describe the intended work concretely when seeking clarification: an application interface, a contribution ledger, a training pipeline, model architecture work or a synthetic-data program. A precise scope gives the provider and legal advisers something meaningful to assess.

For competing-model development, the options include appropriately licensed tools and models whose terms permit the intended work, or a written agreement with the provider covering that activity. Keep records of which tools supplied code and which sources supplied training material. Those records support review; they do not create an exemption or retrospectively remove obligations.

Sovereign Source's public principles emphasize permission, attribution and agreed contributor rewards. Applying those principles to development tools means respecting both the permissions received and their limits. [Project principles](PUBLIC_OVERVIEW.md).

*This is general analysis of published terms checked on 16 October 2026, not a legal opinion or a determination of enforceability. The applicable account, regional, service-specific or negotiated agreement may differ. Before commercial reliance, obtain advice on the actual arrangement and written provider clarification where needed.*
