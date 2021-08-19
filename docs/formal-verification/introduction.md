---
id: introduction
title: Introduction
slug: /formal-verification
authors: Frank Hillard
---


The Tezos blockchain has several advantages over its concurrents. One of them is **formal verification of smart contract**. This module shows a brief overview of how Tezos smart contracts can be formally verified.

We will first define in the [Generalities](/formal-verification/general) section what formal verification of a Tezos smart contract is, and its benefits and how verification tools make this task possible.

Many verfication tools have been developed for Tezos smart contracts. In the second [section](michocoq), we will focus on one of them: the Mi-Cho-Coq framework.

An explained [example](/formal-verification/modeling-theorem) (_Vote_ smart contract) will finally be used to illustrate the formal specification of a Tezos smart contract, and its proof using Mi-Cho-Coq.

The schema below describes the process for performing formal verification on Tezos smart contract.

![](../../static/img/formal-verification/FormalVerification_overview_intro.svg)
<small className="figure">FIGURE 5: Overview of the formal verification process on smart contract.</small>


